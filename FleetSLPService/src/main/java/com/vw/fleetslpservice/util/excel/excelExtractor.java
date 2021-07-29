package com.vw.fleetslpservice.util.excel;

import com.vw.fleetslpservice.dto.FleetsLPResponseDto;
import com.vw.fleetslpservice.exception.FileValidationException;
import com.vw.fleetslpservice.util.FleetsLPConstants;
import org.apache.commons.text.StringEscapeUtils;
import org.apache.poi.hssf.usermodel.HSSFDataFormatter;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellReference;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class excelExtractor {

    HSSFDataFormatter hdf = new HSSFDataFormatter();
    SimpleDateFormat format = new SimpleDateFormat(FleetsLPConstants.IMPORT_DATE_FORMAT);
    SimpleDateFormat csvExportformat = new SimpleDateFormat(FleetsLPConstants.EXPORT_DATE_FORMAT);
    Date date = null;

    public ArrayList<Object> extractDataToArray(Workbook workbook, String cellReference, int sizeOfAnchorArray, int dataLineStart, int maxCellLength, Boolean cutOff,  String expectedType, FleetsLPResponseDto response) throws FileValidationException {
        int dataLineEnd = 0;

        ArrayList<Object> outputList = new ArrayList<Object>();

        //empty mandatory field
        if (sizeOfAnchorArray == 0 && cellReference.equals("")) {
            response.removeErrorMessage();
            response.setErrorCode("1");
            response.addErrorMessage(String.format("A mandatory column is not mapped. Please map all mandatory columns!"));
        }

        // case of empty cellReference
        if (cellReference.equals("")) {
            for (int i = 0; i < sizeOfAnchorArray; i++) {
                outputList.add("");
            }
            return outputList;
        }

        Sheet sheet = workbook.getSheetAt(0);
        workbook.setMissingCellPolicy(Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
        workbook.setForceFormulaRecalculation(true);

        CellReference ref = new CellReference(cellReference);

        dataLineEnd = getNumberOfNonEmptyCells(sheet, ref.getCol());
        //System.out.println(dataLineEnd);

        String[] dateFormat = FleetsLPConstants.DateFormat.getHeaderValuesTrue();
        //System.out.println(Arrays.toString(dateFormat));
        dateFormat.toString();
        //System.out.println("data line start " +dataLineStart);

        for (Row row : sheet) {

            if(row.getRowNum() >= dataLineStart - 1) {

                Cell cell = row.getCell(ref.getCol());

                switch (cell.getCellType()) {
                    case ERROR:
                        if(checkCell(cell, maxCellLength, cutOff,"error",expectedType,response)) {
                            outputList.add("ERROR");
                        }
                        break;
                    case STRING:
                        checkCell(cell, maxCellLength, cutOff,"String",expectedType,response);
                        //outputList.add(StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue())));
                        outputList.add(stringSizeCorrector(cutOff,maxCellLength, StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue()))));
                        break;
                    case NUMERIC:
                        if (expectedType.equalsIgnoreCase("date") && DateUtil.isValidExcelDate(cell.getNumericCellValue())) {

                            String outputDateFormatted;
                            checkCell(cell, maxCellLength, cutOff, "date",expectedType, response);
                            if (isValidateCsvExportDate(hdf.formatCellValue(cell))){
                                outputDateFormatted = format.format(date);
                            }else {
                                outputDateFormatted = format.format(cell.getDateCellValue());
                            }
                            //outputList.add(outputDateFormatted);
                            outputList.add(stringSizeCorrector(cutOff,maxCellLength,outputDateFormatted));

                        } else {
                            checkCell(cell, maxCellLength, cutOff, "number",expectedType,response);
                            //outputList.add((int)cell.getNumericCellValue());
                            outputList.add(stringSizeCorrector(cutOff,maxCellLength,String.valueOf((int)cell.getNumericCellValue())));

                        }
                        break;
                    case BOOLEAN:
                        outputList.add(cell.getBooleanCellValue());
                        break;
                    case FORMULA:
                        switch (cell.getCachedFormulaResultType()) {
                            case NUMERIC:
                                if (expectedType.equalsIgnoreCase("date") && DateUtil.isValidExcelDate(cell.getNumericCellValue())) {

                                    String outputDateFormatted;
                                    checkCell(cell, maxCellLength, cutOff, "date",expectedType, response);
                                    if (isValidateCsvExportDate(hdf.formatCellValue(cell))){
                                        outputDateFormatted = format.format(date);
                                    }else {
                                        outputDateFormatted = format.format(cell.getDateCellValue());
                                    }
                                    outputList.add(stringSizeCorrector(cutOff,maxCellLength,outputDateFormatted));

                                } else {
                                    checkCell(cell, maxCellLength, cutOff, "number",expectedType,response);
                                    outputList.add(stringSizeCorrector(cutOff,maxCellLength,String.valueOf((int)cell.getNumericCellValue())));

                                }
                                break;
                            case STRING:
                                checkCell(cell, maxCellLength, cutOff, "String",expectedType,response);
                                //outputList.add(StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue())));
                                outputList.add(stringSizeCorrector(cutOff,maxCellLength, StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue()))));
                                break;
                            case ERROR:
                                checkCell(cell, maxCellLength, cutOff, "error",expectedType,response);
                                outputList.add("ERROR FORMULA");
                                break;
                        }
                        break;
                    case BLANK:
                        //if(cell.getRowIndex() >= dataLineEnd)break;
                        if(sizeOfAnchorArray == 0){
                            //System.out.println(cell.getAddress());
                            //if(cell.getRowIndex() >= dataLineEnd)break;
                            checkCell(cell, maxCellLength, cutOff,"mandatoryEmpty",expectedType,response);
                        }
                        outputList.add("");
                        break;
                    default:
                        System.out.println("default");
                }

            }

        }
        return outputList;
    }


    public boolean checkCell(Cell cell, int maxCellLength, boolean cutOff,String type, String expectedType,FleetsLPResponseDto response) throws FileValidationException {


        if(!expectedType.equalsIgnoreCase("") && !expectedType.equalsIgnoreCase(type)){
            response.setErrorCode("1");
            response.addErrorMessage(String.format("Invalid type for cell %s, expected data is %s, but is detected to be %s.",cell.getAddress(),expectedType,type));
            return true;
        }

        switch (type) {
            case "number":

                //****// integer only //****//
                double numericCellValue = cell.getNumericCellValue();
                if (Math.floor(numericCellValue) != numericCellValue){
                    response.setErrorCode("1");
                    response.addErrorMessage(String.format("Invalid type for cell %s, data is expected to be an Integer.",cell.getAddress()));
                    break;
                }
                else if(maxCellLength!=0 && Double.toString(numericCellValue).length() > maxCellLength && !cutOff){
                    response.setErrorCode("1");
                    response.addErrorMessage(String.format("Invalid length for cell %s: current length %s, more than the expected length %s.",cell.getAddress(),Double.toString(numericCellValue).length(),maxCellLength));
                    break;
                }
                else break;

            case "String":

                String cellString = StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue()));
                if (maxCellLength!=0 && cellString.length() > maxCellLength && !cutOff) {
                    response.setErrorCode("1");
                    response.addErrorMessage(String.format("Invalid length for cell %s: current length %s, more than the expected length %s.",cell.getAddress(),cellString.length(),maxCellLength));
                    break;
                }
                else break;

            case "error":
                response.setErrorCode("1");
                response.addErrorMessage(String.format("An error is found in cell %s , please check the data again.",cell.getAddress()));
                break;

            case "mandatoryEmpty":
                response.setErrorCode("1");
                response.addErrorMessage(String.format("An error is found in cell %s: this mandatory cell is empty.",cell.getAddress()));
                return true;

            case "date":
                if(isValidateCsvExportDate(hdf.formatCellValue(cell))) {return true;}

                else if(isValidDate(cell.getLocalDateTimeCellValue().getDayOfMonth(),
                        cell.getLocalDateTimeCellValue().getMonthValue(),
                        cell.getLocalDateTimeCellValue().getYear())){
                    return true;
                } else{
                    response.setErrorCode("1");
                    response.addErrorMessage(String.format("Invalid date for cell %s", cell.getAddress()));
                    return false;
                }


            default:
                //broke
        }
        //if("1".equals(response.getErrorCode())) {
		//		throw new FileValidationException("ERROR occurred while uploading file!!");
		//	}

        return true;
    }

    public boolean isValidateCsvExportDate(String strDate)
    {
        csvExportformat.setLenient(false);
        try
        { date = csvExportformat.parse(strDate); }
        catch (ParseException e)
        {
            return false;
        }
        return true;
    }

    public boolean isLeap(int year)
    {
        return (((year % 4 == 0) &&
                (year % 100 != 0)) ||
                (year % 400 == 0));
    }

    public boolean isValidDate(int d, int m, int y)
    {
        if (y > FleetsLPConstants.MAX_VALID_YR || y < FleetsLPConstants.MIN_VALID_YR)
            return false;
        if (m < 1 || m > 12)
            return false;
        if (d < 1 || d > 31)
            return false;

        // Handle February month
        // with leap year

        if (m == 2)
        {
            if (isLeap(y)) return (d <= 29);
            else return (d <= 28);
        }
        if (m == 4 || m == 6 || m == 9 || m == 11) return (d <= 30);

        return true;
    }

    public int getNumberOfNonEmptyCells(Sheet sheet ,int columnIndex) {
        int numberOfNonEmptyCells = 0;
        for (int i = 0; i <= sheet.getLastRowNum();i++) {
            Row row = sheet.getRow(i);
            if (row != null) {
                Cell cell = row.getCell(columnIndex);
                if (cell != null && cell.getCellType() != CellType.BLANK) {
                    numberOfNonEmptyCells++;
                }
            }
        }
        return numberOfNonEmptyCells;
    }

    private String stringSizeCorrector (Boolean cutoff, int cutOffSize ,String inputString){
                if (cutoff && (inputString.length()>cutOffSize) )
                { return  inputString.substring(0,cutOffSize); }
                else return inputString;
    }

}
