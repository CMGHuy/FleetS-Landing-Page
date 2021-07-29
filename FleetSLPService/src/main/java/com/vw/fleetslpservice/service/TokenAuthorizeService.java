package com.vw.fleetslpservice.service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;

import com.vw.fleetslpservice.exception.TokenBlockByBoException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.thymeleaf.util.StringUtils;

import com.vw.fleetslpservice.dao.TokenAuthorizeDao;
import com.vw.fleetslpservice.entity.ImportToken;
import com.vw.fleetslpservice.exception.EntityNotFoundException;
import com.vw.fleetslpservice.exception.TokenUnauthorizeException;
import com.vw.fleetslpservice.exception.TokenValidationException;
import com.vw.fleetslpservice.util.FleetsLPConstants;

@Service
public class TokenAuthorizeService {

	private static final Logger LOG = LoggerFactory.getLogger(TokenAuthorizeService.class);
	
	@Autowired
	private TokenAuthorizeDao tokenAuthorizeDao;
	
	public ImportToken authorizeToken(String token) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException, TokenBlockByBoException {
		
		ImportToken tokenDetails;
		try {
			tokenDetails = tokenAuthorizeDao.getTokenDetails(token);
			authorizeTokenDetails(tokenDetails);
			validateTokenDetails(tokenDetails);
		}catch (EntityNotFoundException e) {
			LOG.error(e.toString());
			throw new EntityNotFoundException(e.toString());
		}catch (TokenValidationException e) {
			LOG.error(e.toString());
			throw new TokenValidationException(e.toString());
		} catch (TokenBlockByBoException e) {
			LOG.error(e.toString());
			throw new TokenBlockByBoException(e.toString());
		}

		return tokenDetails;
	}
	
	private void authorizeTokenDetails(ImportToken tokenDetails) throws TokenUnauthorizeException {
		try {
			LocalDate current = LocalDate.now();
			//LocalDate validUntil = LocalDate.from(Instant.ofEpochMilli(tokenDetails.getValidUntil().getTime()));
			LocalDate validUntil = tokenDetails.getValidUntil().toLocalDate();
			LOG.info("authorizeTokenDetails :: validUntil :: {}, token :: {}",validUntil, tokenDetails.getToken());
			if(current.isAfter(validUntil) ) {
				throw new TokenUnauthorizeException("Token Expired!!!");
			}
		} catch (Exception e) {
			LOG.error("Exception authorizeTokenDetails for token :: {}", tokenDetails.getToken(), e );
			throw new TokenUnauthorizeException(e.toString());
		}
		
	}
	
	private void validateTokenDetails(ImportToken tokenDetails) throws TokenValidationException, TokenBlockByBoException {
		
		if(!ObjectUtils.containsConstant(FleetsLPConstants.DOCTYPE.values(), tokenDetails.getImportType(), true)){
			LOG.error("Invalid Doctype!!!, Doctype {}", tokenDetails.getImportType());
			throw new TokenValidationException("Invalid Doctype for token " + tokenDetails.getToken());
		}
		
		if(StringUtils.isEmptyOrWhitespace(tokenDetails.getCompanyName())){
			LOG.error("Company Name is empty!!!");
			throw new TokenValidationException("Company Name is empty for token " + tokenDetails.getToken());
		}
		
		if(StringUtils.isEmptyOrWhitespace(tokenDetails.getCompanyId())){
			LOG.error("Company Id is empty!!!");
			throw new TokenValidationException("Company Id is empty for token " + tokenDetails.getToken());
		}

		if(StringUtils.isEmptyOrWhitespace(tokenDetails.getProcEntityId())){
			LOG.error("Process Entity Id is empty!!!");
			throw new TokenValidationException("Process Entity Id is empty for token " + tokenDetails.getToken());
		}
		else if(tokenDetails.getProcEntityId().equalsIgnoreCase("BLOCKED_BY_BO")){
			LOG.error("BLOCKED_BY_BO!!!");
			throw new TokenBlockByBoException("Token" + tokenDetails.getToken()+ " is blocked by back office. Reimbursement has started, no further upload is allowed!");
		}


	}
	
}
