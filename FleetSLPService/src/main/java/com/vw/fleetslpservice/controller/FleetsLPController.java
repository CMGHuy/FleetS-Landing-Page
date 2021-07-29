package com.vw.fleetslpservice.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletResponse;

import com.vw.fleetslpservice.exception.TokenBlockByBoException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;

import com.vw.fleetslpservice.dto.FleetsLPResponseDto;
import com.vw.fleetslpservice.entity.ImportToken;
import com.vw.fleetslpservice.exception.EntityNotFoundException;
import com.vw.fleetslpservice.exception.TokenUnauthorizeException;
import com.vw.fleetslpservice.exception.TokenValidationException;
import com.vw.fleetslpservice.service.FileUploadService;
import com.vw.fleetslpservice.service.TokenAuthorizeService;


@Controller
@CrossOrigin
@RequestMapping("v1/lp")
public class FleetsLPController {
	
	private static final Logger LOG = LoggerFactory.getLogger(FleetsLPController.class);
	
	@Autowired
	private TokenAuthorizeService tokenAuthorizeService;
	
	@Autowired
	private FileUploadService fileUploadService;
	
	@GetMapping("/ping")
	@ResponseBody
	public String ping() {
		return "Hello FleetS Landing Page Webservice!!!";
	}
	
	@RequestMapping("/auth")
	public String authorizeToken(@RequestParam(value="token") String token, Model model) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException, TokenBlockByBoException {
		LOG.trace("entry authorizeToken...");
		ImportToken tokenDetails = tokenAuthorizeService.authorizeToken(token);
		model.addAttribute("company", tokenDetails.getCompanyName());
		model.addAttribute("importType", tokenDetails.getImportType());
		model.addAttribute("token", tokenDetails.getToken());
		model.addAttribute("blockFlag", tokenDetails.getProcEntityId());
		return "landing-page";
	}
	
	@PostMapping("/upload")
	@ResponseBody
	public FleetsLPResponseDto handleFileUpload(@RequestParam("csvfile") MultipartFile file, @RequestParam("token") String token) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException {
		String message;
		Long fileSize = 0l;
		LOG.trace("entry handleFileUpload...");
		FleetsLPResponseDto response = new FleetsLPResponseDto();
		ImportToken tokenDetails = null;
		try {
			tokenDetails = tokenAuthorizeService.authorizeToken(token);
		} catch (TokenBlockByBoException e) {
			response.setErrorCode("1");
			response.addErrorMessage("BlockedByBo");
			return response;
		}
		try {
//			try {
//				fileSize = Files.copy(file.getInputStream(), Paths.get("persistent/" + file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
//				
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
			response = fileUploadService.uploadFile(file, tokenDetails, response, "");
			TimeUnit.MILLISECONDS.sleep(300);
			LOG.info("{} successfully uploaded.", file.getOriginalFilename());
			
		} catch (Exception e) {
			LOG.error("ERROR occurred while uploading file :: ",e);
			response.setErrorCode("1");
			response.addErrorMessage("ERROR occurred while uploading file!!");
		}
		System.out.println(response.getErrorMessages());
		return response;
	}

	@PostMapping("/uploadJsonTest")
	@ResponseBody
	public FleetsLPResponseDto testJsonUpload(@RequestParam("csvfile") MultipartFile file, @RequestParam("jsonFile") String jsonString,@RequestParam("token") String token) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException {
		String message;
		Long fileSize = 0l;
		LOG.trace("entry test Json upload...");
		FleetsLPResponseDto response = new FleetsLPResponseDto();
		ImportToken tokenDetails = null;
		try {
			tokenDetails = tokenAuthorizeService.authorizeToken(token);
		} catch (TokenBlockByBoException e) {
			response.setErrorCode("1");
			response.addErrorMessage("BlockedByBo");
			return response;
		}
		try {
			response = fileUploadService.uploadFile(file, tokenDetails, response,jsonString);
			TimeUnit.MILLISECONDS.sleep(300);
			LOG.info("{} successfully uploaded.", file.getOriginalFilename());

		} catch (Exception e) {
			LOG.error("ERROR occurred while uploading file :: ",e);
			response.setErrorCode("1");
			response.addErrorMessage("ERROR occurred while uploading file!!");
		}
		System.out.println(response.getErrorMessages());
		return response;
	}

}
