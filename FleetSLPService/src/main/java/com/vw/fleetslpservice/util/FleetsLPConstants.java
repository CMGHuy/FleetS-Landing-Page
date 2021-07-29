package com.vw.fleetslpservice.util;

import java.util.stream.Stream;

public class FleetsLPConstants {

	public static final String DOT = ".";
	public static final String BLANK = "";
	public static final String EXPORT_DATE_FORMAT = "yyyyMMdd"; //comment// revert back to old format //comment//
	public static final String IMPORT_DATE_FORMAT = "MM/dd/yyyy";
	public static final int MAX_VALID_YR  = 2030;
	public static final int MIN_VALID_YR  = 2000;
	
	public enum DOCTYPE {
		IFU,CHL,CHB
	}
	
	public enum IMPORTHEADERS {
		IFUINITIALS("# VWIFUImportCSVIO"),
		//IFUFIELDS("# VW Dealer Campaign Detail.Doctype,VW Dealer Campaign Detail.Importer Id,VW Dealer Campaign Detail.Campaign Id,VW Dealer Campaign Detail.IBA Id,VW Dealer Campaign Detail.IBA Number,VW Dealer Campaign Detail.Importer Name,VW Dealer Campaign Detail.Customer Name,VW Dealer Campaign Detail.Parent Region,VW Dealer Campaign Detail.Region,VW Dealer Campaign Detail.AF Brand Audi,VW Dealer Campaign Detail.AF Brand Seat,VW Dealer Campaign Detail.AF Brand Skoda,VW Dealer Campaign Detail.AF Brand LCW,VW Dealer Campaign Detail.AF Brand VW PC,VW Dealer Campaign Detail.Brand Audi,VW Dealer Campaign Detail.Brand Seat,VW Dealer Campaign Detail.Brand Skoda,VW Dealer Campaign Detail.Brand VW LCW,VW Dealer Campaign Detail.Brand VW PC,VW Dealer Campaign Detail.Dlvr Brand Audi,VW Dealer Campaign Detail.Dlvr Brand Seat,VW Dealer Campaign Detail.Dlvr Brand Skoda,VW Dealer Campaign Detail.Dlvr Brand LCW,VW Dealer Campaign Detail.Dlvr Brand VW PC"),
		//comment// changed 20/4/2020, removed IBA id, IBA number and Importer name; relocated "VW Dealer Campaign Detail.Dlvr Brand VW PC" to come before AUDI, "VW Dealer Campaign Detail.Brand VW PC" comes before AUDI //comment//
		IFUFIELDS("# VW Dealer Campaign Detail.Doctype,VW Dealer Campaign Detail.Importer Id,VW Dealer Campaign Detail.Campaign Id,VW Dealer Campaign Detail.Id,VW Dealer Campaign Detail.Customer Name,VW Dealer Campaign Detail.Region Name,VW Dealer Campaign Detail.Parent Region Name,VW Dealer Campaign Detail.AF Brand VW PC,VW Dealer Campaign Detail.AF Brand Audi,VW Dealer Campaign Detail.AF Brand Seat,VW Dealer Campaign Detail.AF Brand Skoda,VW Dealer Campaign Detail.AF Brand LCW,VW Dealer Campaign Detail.Brand VW PC,VW Dealer Campaign Detail.Brand Audi,VW Dealer Campaign Detail.Brand Seat,VW Dealer Campaign Detail.Brand Skoda,VW Dealer Campaign Detail.Brand VW LCW,VW Dealer Campaign Detail.Dlvr Brand VW PC ,VW Dealer Campaign Detail.Dlvr Brand Audi,VW Dealer Campaign Detail.Dlvr Brand Seat,VW Dealer Campaign Detail.Dlvr Brand Skoda,VW Dealer Campaign Detail.Dlvr Brand LCW"),
		CHLINITIALS("# VWCHLImportCSVIO"),
		CHLFIELDS("# VW ChassiLoad VIN.Doctype,VW ChassiLoad VIN.Company Id,VW ChassiLoad VIN.Reimbursement Id,VW ChassiLoad VIN.Vin Nr,VW ChassiLoad VIN.Cust Brand,VW ChassiLoad VIN.Cust Customer,VW ChassiLoad VIN.Cust Country,VW ChassiLoad VIN.Cust Model,VW ChassiLoad VIN.Cust Reg Dt");
		
		private final String headerValue;
		  
	    public String getHeaderValue() { 
	        return this.headerValue; 
	    } 
	  
	    IMPORTHEADERS(String headerValue) {
	        this.headerValue = headerValue; 
	    } 
		
	    public static String[] getHeaderValues() {
	        return Stream.of(IMPORTHEADERS.values()).map(IMPORTHEADERS::toString).toArray(String[]::new);
	    }
	    
	    @Override public String toString() { return headerValue; }
		
	}

	public enum DateFormat {
		dateFormat1("yyyy-MM-dd"),
		dateFormat2("yyyyMMdd"),
		dateFormat3("dd/MM/yy"),
		dateFormat4("dd/MM/yyyy"),
		dateFormat5("yyyy.MM.dd");

		private static final String[] dateFormatArray = new String[]{
				dateFormat1.dateFormat,
				dateFormat2.dateFormat,
				dateFormat3.dateFormat,
				dateFormat4.dateFormat,
				dateFormat5.dateFormat};

		private final String dateFormat;

		DateFormat(String headerValue) {
			this.dateFormat = headerValue;
		}

		public static String[] getHeaderValuesTrue() {
			return dateFormatArray;
		}
		@Override public String toString() { return dateFormat; }

	}
	
	public enum IFUHEADERS {
		DOCTYPE("Doctype"),
		COMPANY_ID("Company Id"),
		IMPORTER_CAMPAIGN_ID("Importer CampaignId"),
		//IBA_ID("IBA Id"),
		//IBA_NUMBER("IBA Number"),
		//IMPORTER_NAME("Importer Name"),
		CUSTOMER_NAME("Customer Name"),
		//REGION("Region"), // Parent Region
		//COUNTRY("Country"), // Region
		//comment// column changed 22/4/2020
		REGION("Parent Region"),
		COUNTRY("Region"),
		//comment// all Brand keyword is removed //comment//
		AF_BRAND_AUDI("AF Audi"),
		AF_BRAND_SEAT("AF Seat"),
		AF_BRAND_SKODA("AF Skoda"),
		AF_BRAND_VW_LCW("AF VW LCW"),
		AF_BRAND_VW_PC("AF VW PC"),
		TOTAL_BRAND_AUDI("Total Audi"),
		TOTAL_BRAND_SEAT("Total Seat"),
		TOTAL_BRAND_SKODA("Total Skoda"),
		TOTAL_BRAND_VW_LCW("Total VW LCW"),
		TOTAL_BRAND_VW_PC("Total VW PC"),
		CURRENT_BRAND_AUDI("Current Audi"),
		CURRENT_BRAND_SEAT("Current Seat"),
		CURRENT_BRAND_SKODA("Current Skoda"),
		CURRENT_BRAND_VW_LCW("Current VW LCW"),
		CURRENT_BRAND_VW_PC("Current VW PC");
		
		
		private final String headerValue;
		  
	    public String getHeaderValue() {
	        return this.headerValue;
	    } 
	  
	    IFUHEADERS(String headerValue) {
	        this.headerValue = headerValue; 
	    } 
		
	    public static String[] getHeaderValues() {
	        return Stream.of(IFUHEADERS.values()).map(IFUHEADERS::toString).toArray(String[]::new);
	    }
	    
	    @Override public String toString() { return headerValue; }
	}

	
	public enum CHLHEADERS {
		DOCTYPE("Doctype"),
		COMPANY_ID("Company Id"),
		REIMBURSEMENT("Reimbursement Id"),
		VIN_NUMBER("VIN Number"),
		CUSTOMER_BRAND("Customer Brand"),
		CUSTOMER_REGION("Customer Region"),
		CUSTOMER_COUNTRY("Customer Country"),
		CUSTOMER_MODEL("Customer Model"),
		CUSTOMER_REGISTRATION_DATE("Customer Registration Date");
		
		
		private final String headerValue;
		  
	    public String getHeaderValue() { 
	        return this.headerValue;
	    } 
	  
	    CHLHEADERS(String headerValue) {
	        this.headerValue = headerValue; 
	    } 
		
	    public static String[] getHeaderValues() {
	        return Stream.of(IFUHEADERS.values()).map(IFUHEADERS::toString).toArray(String[]::new);
	    }
	    
	    @Override public String toString() { return headerValue; }
	}
	
	public enum ERRORS {
		INVALID_FILE_FORMAT("ERROR: Invalid file format, must be csv."),
		UPLOAD_ERROR("ERROR: occurred while uploading file!!"),
		INVALID_COLUMN_HEADING("ERROR: Invalid column heading %s, please make sure to use correct column heading."),
		MISSING_COLUMN_HEADING("ERROR: Missing column heading %s, please make sure to use correct column heading."),
		DUPLICATE_COLUMN_HEADING("ERROR: Duplicate column heading %s, please make sure to use correct column heading."),
		MISSING_FIELD_VALUES("ERROR: Missing field values in line %s, please check for missing values / comma separators."),
		EXCESS_FIELD_VALUES("ERROR: Too many values in line %s, please check for excessive values / comma separators."),
		MISSING_MANDATORY_FIELD("ERROR: Missing value for mandatory field %s in line %s, please provide a value."),
		INVALID_DATA_TYPE("ERROR: Invalid data type for field %s in line %s, please correct."),
		INVALID_DATA_LENGTH("ERROR: Invalid data length for field %s in line %s, expected length %s."),
		INVALID_DATA("ERROR: Invalid value for field %s in line %s, expected value %s."),
		INVALID_DATE("ERROR::Invalid date for Cell "),
		INVALID_DATE_FORMAT("ERROR: Invalid date format for field %s in line %s, expected format %s"),
		INVALID_FILE_TEMPLATE("ERROR: Invalid Template of uploaded file."),
		VALUE_ALREADY_EXISTS("ERROR::Value found in Cell "),;
		
		
		
		private final String errorDesc;
		  
	    public String getErrorDesc() { 
	        return this.errorDesc; 
	    } 
	  
	    ERRORS(String errorDesc) {
	        this.errorDesc = errorDesc; 
	    } 
	    
	    //@Override public String toString() { return errorDesc; }
		
	}
	
	
}
