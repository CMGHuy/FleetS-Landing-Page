package com.vw.fleetslpservice.dto;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.*;

public class FleetsLPResponseDto {

	private String errorCode = "0";
	private List<String> errorMessages = new ArrayList<String>();
	private Map<Integer, List<Integer>> rowColumnErrorMap = new TreeMap<>();
	private Map<Integer, List<String >> columnErrorMessageMap = new TreeMap<>();
	
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public List<String> getErrorMessages() {
		return errorMessages;
	}
	public void setErrorMessages(List<String> errorMessages) {
		this.errorMessages = errorMessages;
	}
	public void addErrorMessage(String errorMessage) {
		this.errorMessages.add(errorMessage);
	}

	public void addRowColumnErrorMapping(Integer rowNumber, Integer columnNumber){
		List<Integer> errorColumnList = new ArrayList<>();
		if(null ==  rowColumnErrorMap.get(rowNumber)){
			errorColumnList.add(columnNumber);
			rowColumnErrorMap.put(rowNumber, errorColumnList);
		} else {
			rowColumnErrorMap.get(rowNumber).add(columnNumber);
		}
	}

	public void addColumnErrorMapping(Integer columnNumber, String errorMessage){
		List<String> errorMessageListForColumn = new ArrayList<>();
		if(null == columnErrorMessageMap.get(columnNumber)){
			errorMessageListForColumn.add(errorMessage);
			columnErrorMessageMap.put(columnNumber, errorMessageListForColumn);
		} else {
			columnErrorMessageMap.get(columnNumber).add(errorMessage);
		}
	}

	public void addErrorMessagesToList(){
		for (Integer rowNumber : rowColumnErrorMap.keySet()){
			List<Integer> listOfColumns = rowColumnErrorMap.get(rowNumber);
			Collections.sort(listOfColumns);
			for (Integer columnNumber : listOfColumns){
				List<String> errorMessagesFromMap = columnErrorMessageMap.get(columnNumber);
				for (String message : errorMessagesFromMap){
					if(!errorMessages.contains(message)){
						errorMessages.add(message);
						break;
					}
				}
			}
		}
	}

	public void removeErrorMessage() {
		this.errorMessages.clear();
	}


}
