package com.vw.fleetslpservice.service;

import java.io.*;
import java.io.File;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.PostConstruct;

import com.opencsv.CSVWriter;
import com.vw.fleetslpservice.util.excel.*;
import com.vw.fleetslpservice.util.json.ReadJsonConfigurationFile;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;

import org.apache.commons.io.ByteOrderMark;
import org.apache.commons.io.input.BOMInputStream;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.tika.detect.AutoDetectReader;
import org.apache.tika.exception.TikaException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jcraft.jsch.JSchException;
import com.vw.fleetslpservice.dto.FleetsLPResponseDto;
import com.vw.fleetslpservice.entity.ImportToken;
import com.vw.fleetslpservice.exception.FileValidationException;
import com.vw.fleetslpservice.scp.FleetsSCPClient;
import com.vw.fleetslpservice.util.FleetsLPConstants;



@Service
public class FileUploadService {

	private static final Logger LOG = LoggerFactory.getLogger(FileUploadService.class);

	@Autowired
	private FleetsSCPClient scpClient;

	@Value("${local.file.path}")
	private String localFilePath;

	@Value("${local.archive.file.path}")
	private String localArchivePath;

	@Value("${local.jsonIFUDefault.file.path}")
	private String defaultJsonIFUConfigurationFilePath;

	@Value("${local.jsonCsvIFUDefault.file.path}")
	private String defaultJsonCsvIFUConfigurationFilePath;

	@Value("${local.jsonCHLDefault.file.path}")
	private String defaultJsonCHLConfigurationFilePath;

	@Value("${local.jsonConfig.file.path}")
	private String jsonConfigsFolderPath;

	@PostConstruct
	public void init() {
		LOG.debug("localFilePath {}, localArchivePath {}", localFilePath, localArchivePath);
	}

	public FileUploadService() {

	}

	public FleetsLPResponseDto uploadFile(MultipartFile file, ImportToken tokenDetails, FleetsLPResponseDto response, String jsonConfigString) {

		boolean fileIsCsv = false;
		try {
			String origFileNameWithPath = file.getOriginalFilename();
			LOG.debug("origFileNameWithPath {}", origFileNameWithPath);


			if(origFileNameWithPath.toLowerCase().contains("csv")){
				fileIsCsv = true;
			}


			//comment// change .CSV to .csv for Siebel to gracefully accept file //comment//
			String origFileName = Paths.get(origFileNameWithPath).getFileName().toString().replace(".CSV",".csv");

			LOG.debug("origFileName {}", origFileName);

			String fileTimeStamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("uuuuMMddHHmmss.SSS"));

			String inboxFileName = tokenDetails.getImportType().concat(FleetsLPConstants.DOT).
									concat(fileTimeStamp).concat(FleetsLPConstants.DOT).
									concat(tokenDetails.getCompanyId()).concat(FleetsLPConstants.DOT).
									concat(tokenDetails.getProcEntityId()).concat(FleetsLPConstants.DOT).
									concat(origFileName);

			LOG.info("inboxFileName : {}", inboxFileName);

			// fileSize = Files.copy(file.getInputStream(), Paths.get("persistent/" +
			// file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);

			Path pathToLocalFile = Paths.get(localFilePath);
			Path pathToArchiveFile = Paths.get(localArchivePath);
			Path pathToJsonConfigFolder = Paths.get(jsonConfigsFolderPath);

			// Path dirPath = pathToFile.getParent();

			if (!Files.exists(pathToLocalFile)) {
				Files.createDirectories(pathToLocalFile);
				LOG.info(localFilePath + " folder created.");
			}

			if (!Files.exists(pathToArchiveFile)) {
				Files.createDirectories(pathToArchiveFile);
				LOG.info(localArchivePath + " folder created.");
			}

			if (!Files.exists(pathToJsonConfigFolder)) {
				Files.createDirectories(pathToJsonConfigFolder);
				LOG.info(jsonConfigsFolderPath + " folder created.");
			}

			String inboxFile = localFilePath + inboxFileName;
			String archiveFile = localArchivePath + inboxFileName;
			String jsonConfigFile = jsonConfigsFolderPath + inboxFileName.concat(".json");
			String originalFileDirectory = localFilePath + inboxFileName.replaceAll("(?i).xlsx",".csv") + ".att";
			String originalFile = originalFileDirectory + "/" + origFileName;

			//temp file name
			String originalFileWithoutPath = inboxFileName + ".att";
			if(originalFileWithoutPath.toLowerCase().contains(".xlsx")){
				originalFileWithoutPath= originalFileWithoutPath.replaceAll("(?i).xlsx",".csv");
			}else if (archiveFile.toLowerCase().contains(".xls")){
				originalFileWithoutPath= originalFileWithoutPath.replaceAll("(?i).xls",".csv");
			}

			/**** write original file ****/
			Files.createDirectories(Paths.get(originalFileDirectory));
			/**** new code: retain original file in a special directory instead of renaming them ****/
			Files.copy(file.getInputStream(), Paths.get(originalFile),StandardCopyOption.REPLACE_EXISTING);
			//scpClient.uploadOriginalFile(originalFileWithoutPath, originalFile);

			/**** write json config file ****/
			FileUtils.writeStringToFile(new File(String.valueOf(Paths.get(jsonConfigFile))), jsonConfigString,"UTF-8");

			/**** old code: retain original file in a special directory instead of renaming them ****/
			long fileSize = Files.copy(file.getInputStream(), Paths.get(inboxFile),StandardCopyOption.REPLACE_EXISTING);

			/**** delimiter check if file is csv, then convert the file to xlsx ****/
			if(inboxFile.contains(".csv")){

				changeEncoding(inboxFile);
				csvToExcel.convertCsvToXls(localFilePath,inboxFile,detectDelimiter(inboxFile));
				inboxFile = inboxFile.replace(".csv",".xlsx");
			}
			
			validateAndUploadCsvFile(originalFileWithoutPath, originalFile, inboxFile, archiveFile, fileIsCsv,jsonConfigFile,tokenDetails, response);

			
			//scpClient.uploadFile(inboxFile);
			LOG.info("{} successfully uploaded!!!  -  filesize {}", inboxFileName, fileSize);
		} catch (FileValidationException e) {
			LOG.error("ERROR occurred while uploading file :: ", e);
			response.setErrorCode("1");
			//response.addErrorMessage(e.getMessage());
			response.getErrorMessages().add(0, e.getMessage());
		}catch (Exception e) {
			LOG.error("ERROR occurred while uploading file :: ", e);
			response.setErrorCode("1");
			response.addErrorMessage("Error occurred while checking the selected file, no data will be imported. Please reupload the file after correcting the following errors:");
		}

		return response;
	}

	private void validateAndUploadCsvFile(String originalFileWithoutPath, String originalFile, String inboxFile, String archiveFile, Boolean fileIsCsv,String jsonConfigFile, ImportToken tokenDetails, FleetsLPResponseDto response) throws IOException, FileValidationException, JSchException {

		FleetsLPConstants.DOCTYPE doctype = FleetsLPConstants.DOCTYPE.valueOf(tokenDetails.getImportType());
		LOG.info("doctype : {}",doctype.name());
		switch (doctype) {
		case IFU:
			validateIFU(originalFileWithoutPath, originalFile, inboxFile, archiveFile,fileIsCsv, tokenDetails, response);
			break;
		case CHL:
			case CHB:
				validateCHLCHB(originalFileWithoutPath, originalFile, inboxFile, archiveFile, jsonConfigFile,doctype, tokenDetails, response);
			break;
		}
	}

	private Reader getBOMHandledStream(String file) throws IOException {

		InputStream inputStream = new FileInputStream(file);
		BOMInputStream bOMInputStream = new BOMInputStream(inputStream);
	    ByteOrderMark bom = bOMInputStream.getBOM();
	    String charsetName = bom == null ? StandardCharsets.UTF_8.toString() : bom.getCharsetName();
	    Reader in = new InputStreamReader(bOMInputStream, charsetName);
	    return in;
	}
	//*****// function added to remote standalone \r  //*****//
	private Reader processNewLine(String inboxFile) throws IOException {

		Pattern pat = Pattern.compile("(?s).*[\\n\\r].*");
		String line;
		String outputString = null;

		try (Scanner in = new Scanner(Paths.get(inboxFile))) {

			while ((line = in.findWithinHorizon(pat, 0)) != null) {
				outputString = line.replaceAll("(?<!\\r)\\n", "");
			}

			boolean endsWithNewLine = outputString.charAt(outputString.length() - 1) == '\n';
			if(!endsWithNewLine){
				outputString= outputString.concat("\r\n");
			}

			InputStream stream = new ByteArrayInputStream(outputString.getBytes());
			//*****// reuse getBOMHandledStream() logic //*****//
			BOMInputStream bOMInputStream = new BOMInputStream(stream);
			ByteOrderMark bom = bOMInputStream.getBOM();
			String charsetName = bom == null ? StandardCharsets.UTF_8.toString() : bom.getCharsetName();
			Reader  outPutReaderObject= new InputStreamReader(bOMInputStream, charsetName);

			in.close();
			//Pair<Reader, Character> pair = Pair.of(outPutReaderObject, ',');
			return outPutReaderObject;
		}
	}

	private char detectDelimiter(String inboxFile) throws IOException {

		Pattern pat = Pattern.compile("(?s).*[\\n\\r].*");
		String line;
		String outputString = null;
		char delimiter = 0;

		try (Scanner in = new Scanner(Paths.get(inboxFile))) {

			while ((line = in.findWithinHorizon(pat, 0)) != null) {
				outputString = line.replaceAll("(?<!\\r)\\n", "");
			}

			InputStream stream = new ByteArrayInputStream(outputString.getBytes());
			//comment// reuse getBOMHandledStream() logic //comment//
			BOMInputStream bOMInputStream = new BOMInputStream(stream);
			ByteOrderMark bom = bOMInputStream.getBOM();
			String charsetName = bom == null ? StandardCharsets.UTF_8.toString() : bom.getCharsetName();
			Reader  outPutReaderObject= new InputStreamReader(bOMInputStream, charsetName);

			String targetString = IOUtils.toString(outPutReaderObject);

			Pattern p = Pattern.compile("\\W");
			Matcher m = p.matcher(targetString.replace(" ", "").split("\\r")[0]);
			if (m.find())
			{

				String EncodedDelimiter =new String(m.group(0).getBytes(charsetName), StandardCharsets.UTF_8);
				delimiter = EncodedDelimiter.charAt(0);
			}
			in.close();

			return delimiter;
		}
	}



	//****// new code for CHL //****//

	private void validateIFU(String originalFileWithoutPath, String originalFile, String inboxFile, String archiveFile, boolean fileIsCsv, ImportToken tokenDetails, FleetsLPResponseDto response) throws IOException, FileValidationException, JSchException {
		//no validation for IFU for now
		excelExtractor excelExtractor= new excelExtractor();
		ReadJsonConfigurationFile JsonReader = new ReadJsonConfigurationFile();
		int dataLineStart;
		if(fileIsCsv){
			JsonReader.readJSON("IFU", defaultJsonCsvIFUConfigurationFilePath);
			dataLineStart = Integer.parseInt(JsonReader.getDataRow());
		}else {
			JsonReader.readJSON("IFU", defaultJsonIFUConfigurationFilePath);
			dataLineStart = Integer.parseInt(JsonReader.getDataRow());
		}

		//System.out.println("file is csv " + fileIsCsv + ",data line start " + dataLineStart);


		File myFile = new File(inboxFile);
		Workbook workbook = WorkbookFactory.create(myFile);

		//****// anchor size of Array is customer name, a mandatory field, below fields are optionals //****//
		ArrayList<Object> CustomerName = excelExtractor.extractDataToArray(workbook, JsonReader.getCustomerName(),0,dataLineStart,100,false,FleetsLPConstants.BLANK,response);

		int SizeOfCustomerName = CustomerName.size();

		//ArrayList<Object> RegionName = excelExtractor.extractDataToArray(workbook, JsonReader.getRegionName(),SizeOfCustomerName,dataLineStart,50,response);
		//ArrayList<Object> ParentRegionName= excelExtractor.extractDataToArray(workbook, JsonReader.getParentRegionName(),SizeOfCustomerName,dataLineStart,50,response);
		ArrayList<Object> FeedbackId = excelExtractor.extractDataToArray(workbook, JsonReader.getFeedbackId(),0,dataLineStart,15,false,FleetsLPConstants.BLANK,response);
		ArrayList<Object> RegionName = excelExtractor.extractDataToArray(workbook, JsonReader.getRegionName(),0,dataLineStart,50,false,FleetsLPConstants.BLANK,response);
		ArrayList<Object> ParentRegionName= excelExtractor.extractDataToArray(workbook, JsonReader.getParentRegionName(),0,dataLineStart,50,false,FleetsLPConstants.BLANK,response);
		ArrayList<Object> AFBrandVWPC = excelExtractor.extractDataToArray(workbook, JsonReader.getAfBrandVWPC(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> AFBrandAudi = excelExtractor.extractDataToArray(workbook, JsonReader.getAfBrandAudi(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> AFBrandSeat = excelExtractor.extractDataToArray(workbook, JsonReader.getAfBrandSeat(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> AFBrandSkoda = excelExtractor.extractDataToArray(workbook, JsonReader.getAfBrandSkoda(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> AFBrandLCV = excelExtractor.extractDataToArray(workbook, JsonReader.getAfBrandLCV(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> BrandVWPC = excelExtractor.extractDataToArray(workbook, JsonReader.getBrandVWPC(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> BrandAudi = excelExtractor.extractDataToArray(workbook, JsonReader.getBrandAudi(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> BrandSeat = excelExtractor.extractDataToArray(workbook, JsonReader.getBrandSeat(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> BrandSkoda = excelExtractor.extractDataToArray(workbook, JsonReader.getBrandSkoda(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> BrandLCV = excelExtractor.extractDataToArray(workbook, JsonReader.getBrandLcv(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> DlvrBrandVWPC = excelExtractor.extractDataToArray(workbook, JsonReader.getDlvrBrandVWPC(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> DlvrBrandAudi = excelExtractor.extractDataToArray(workbook, JsonReader.getDlvrBrandAudi(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> DlvrBrandSeat = excelExtractor.extractDataToArray(workbook, JsonReader.getDlvrBrandSeat(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> DlvrBrandSkoda = excelExtractor.extractDataToArray(workbook, JsonReader.getDlvrBrandSkoda(),SizeOfCustomerName,dataLineStart,0,false,"number",response);
		ArrayList<Object> DlvrBrandLCV = excelExtractor.extractDataToArray(workbook, JsonReader.getDlvrBrandLcv(),SizeOfCustomerName,dataLineStart,0,false,"number",response);

		workbook.close();

		ArrayList<String[]> data = new ArrayList<String[]>();

		String[] IFInitials = new String[]{FleetsLPConstants.IMPORTHEADERS.IFUINITIALS.getHeaderValue()};
		String[] IFUFields = new String[]{FleetsLPConstants.IMPORTHEADERS.IFUFIELDS.getHeaderValue()};
		data.add(IFInitials);
		data.add(IFUFields);

		for(int i = 0; i < CustomerName.size(); i++){

			data.add(new String[]
					{
							FleetsLPConstants.DOCTYPE.IFU.name(),
							tokenDetails.getCompanyId(),
							tokenDetails.getProcEntityId(),
							FeedbackId.get(i).toString(),
							CustomerName.get(i).toString(),
							RegionName.get(i).toString(),
							ParentRegionName. get(i).toString(),
							AFBrandVWPC.get(i).toString(),
							AFBrandAudi.get(i).toString(),
							AFBrandSeat.get(i).toString(),
							AFBrandSkoda.get(i).toString(),
							AFBrandLCV.get(i).toString(),
							BrandVWPC.get(i).toString(),
							BrandAudi.get(i).toString(),
							BrandSeat.get(i).toString(),
							BrandSkoda.get(i).toString(),
							BrandLCV.get(i).toString(),
							DlvrBrandVWPC.get(i).toString(),
							DlvrBrandAudi.get(i).toString(),
							DlvrBrandSeat.get(i).toString(),
							DlvrBrandSkoda.get(i).toString(),
							DlvrBrandLCV.get(i).toString()
					});
		}
		if("1".equals(response.getErrorCode())) {
			throw new FileValidationException("Error occurred while checking the selected file, no data will be imported. Please reupload the file after correcting the following errors:");
		}


		uploadIFUFileToSiebel(originalFileWithoutPath, originalFile, archiveFile,data);
	}

	private void uploadIFUFileToSiebel(String originalFileWithoutPath, String originalFile, String archiveFile,ArrayList<String[]> data) throws IOException, JSchException {

		String csvArchiveFile = archiveFile.replace(".xlsx",".csv");
		if(archiveFile.toLowerCase().contains(".xlsx")){
			csvArchiveFile= archiveFile.replaceAll("(?i).xlsx",".csv");
		}else if (archiveFile.toLowerCase().contains(".xls")){
			csvArchiveFile= archiveFile.replaceAll("(?i).xls",".csv");
		}
		writeDataToCSV(csvArchiveFile,data);
		scpClient.uploadFile(csvArchiveFile);
		scpClient.uploadOriginalFile(originalFileWithoutPath, originalFile);
	}

	//****// new code for CHL CHB //****//
	private void validateCHLCHB(String originalFileWithoutPath, String originalFile, String inboxFile, String archiveFile, String jsonConfigFile, FleetsLPConstants.DOCTYPE doctype, ImportToken tokenDetails, FleetsLPResponseDto response) throws IOException, FileValidationException, JSchException {

		excelExtractor excelExtractor = new excelExtractor();
		ReadJsonConfigurationFile JsonReader = new ReadJsonConfigurationFile();
		//int dataLineStart = 2

		JsonReader.readJSON("CHL", jsonConfigFile);
		int dataLineStart = Integer.parseInt(JsonReader.getDataRow());

		File myFile = new File(inboxFile);
		Workbook workbook = WorkbookFactory.create(myFile);

		ArrayList<Object> VinNr = excelExtractor.extractDataToArray(workbook, JsonReader.getVinNr(),0, dataLineStart,17,true,FleetsLPConstants.BLANK,response);

		int SizeOfVinNr = VinNr.size();
		//anchor size of Array is VinNr, a mandatory field, below fields are optionals

		ArrayList<Object> CustBrand = excelExtractor.extractDataToArray(workbook, JsonReader.getCustBrand(),SizeOfVinNr,dataLineStart,160,true,FleetsLPConstants.BLANK,response);
		ArrayList<Object> CustCustomer = excelExtractor.extractDataToArray(workbook, JsonReader.getCustCustomer(),SizeOfVinNr,dataLineStart,160,true,FleetsLPConstants.BLANK,response);
		ArrayList<Object> CustCountry = excelExtractor.extractDataToArray(workbook, JsonReader.getCustCountry(),SizeOfVinNr,dataLineStart,50,true,FleetsLPConstants.BLANK,response);
		ArrayList<Object> CustModel = excelExtractor.extractDataToArray(workbook, JsonReader.getCustModel(),SizeOfVinNr,dataLineStart,30,true,FleetsLPConstants.BLANK,response);
		ArrayList<Object> RegDt = excelExtractor.extractDataToArray(workbook, JsonReader.getRegDt(),SizeOfVinNr,dataLineStart,0,false,"date",response);

		workbook.close();

		ArrayList<String[]> data = new ArrayList<String[]>();

		String[] CHInitials = new String[]{FleetsLPConstants.IMPORTHEADERS.CHLINITIALS.getHeaderValue()};
		String[] CHFields = new String[]{FleetsLPConstants.IMPORTHEADERS.CHLFIELDS.getHeaderValue()};
		data.add(CHInitials);
		data.add(CHFields);

		for(int i = 0; i < VinNr.size(); i++){
			data.add(new String[]
					{
							doctype.name(),
							//FleetsLPConstants.DOCTYPE.CHL.name(),
							tokenDetails.getCompanyId(),
							tokenDetails.getProcEntityId(),
							VinNr.get(i).toString(),
							CustBrand.get(i).toString(),
							CustCustomer. get(i).toString(),
							CustCountry.get(i).toString(),
							CustModel.get(i).toString(),
							RegDt.get(i).toString(),
					});
		}
		if("1".equals(response.getErrorCode())) {
			throw new FileValidationException("Error occurred while checking the selected file, no data will be imported. Please reupload the file after correcting the following errors:");
		}

		uploadCHLFileToSiebel(originalFileWithoutPath, originalFile, archiveFile,data);
	}

	private void uploadCHLFileToSiebel(String originalFileWithoutPath, String originalFile, String archiveFile,ArrayList<String[]> data) throws IOException, JSchException {

		String csvArchiveFile = archiveFile.replace(".xlsx",".csv");
		if(archiveFile.toLowerCase().contains(".xlsx")){
			csvArchiveFile= archiveFile.replaceAll("(?i).xlsx",".csv");
		}else if (archiveFile.toLowerCase().contains(".xls")){
			csvArchiveFile= archiveFile.replaceAll("(?i).xlsx",".csv");
		}

		writeDataToCSV(csvArchiveFile,data);
		scpClient.uploadFile(csvArchiveFile);
		scpClient.uploadOriginalFile(originalFileWithoutPath, originalFile);

	}


	public void writeDataToCSV(String filePath,ArrayList<String[]> inputArrayList)
	{
		File file = new File(filePath);
		try {
			FileWriter outputFile = new FileWriter(file);
			CSVWriter writer = new CSVWriter(outputFile,',',
					CSVWriter.NO_QUOTE_CHARACTER,
					CSVWriter.NO_ESCAPE_CHARACTER,
					CSVWriter.RFC4180_LINE_END);

			writer.writeAll(inputArrayList);
			writer.close();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
	}

	private void changeEncoding(String sourcePath) throws IOException {
		String tempFile = sourcePath.concat("Temp.csv");
		try {
			FileInputStream fi = new FileInputStream(sourcePath);
			Charset charset = new AutoDetectReader(fi).getCharset();
			//System.out.println("charset is: "+ charset.toString());
			fi.close();

			if(!charset.toString().contains("8") && charset.toString().contains("16LE")){

				FileInputStream fis = new FileInputStream(sourcePath);
				InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.UTF_16LE);
				Reader in = new BufferedReader(isr);
				FileOutputStream fos = new FileOutputStream(tempFile);
				OutputStreamWriter osw = new OutputStreamWriter(fos, StandardCharsets.UTF_8);
				Writer out = new BufferedWriter(osw);
				int ch;
				while ((ch = in.read()) > -1) {
					out.write(ch);
				}
				out.close();
				in.close();
				Files.delete(Paths.get(sourcePath));
				Files.copy(Paths.get(tempFile), Paths.get(sourcePath),StandardCopyOption.REPLACE_EXISTING);
				Files.delete(Paths.get(tempFile));
			}
		} catch (IOException | TikaException e) {
			e.printStackTrace();
		}
		//Files.delete(Paths.get(sourcePath));
		//Files.copy(Paths.get(tempFile), Paths.get(sourcePath),StandardCopyOption.REPLACE_EXISTING);
		//Files.delete(Paths.get(tempFile));
	}
}
