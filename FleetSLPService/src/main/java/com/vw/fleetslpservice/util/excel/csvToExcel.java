package com.vw.fleetslpservice.util.excel;

import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.tika.detect.AutoDetectReader;
import org.apache.tika.exception.TikaException;


import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;


public class csvToExcel {

    //public static final char FILE_DELIMITER = ',';
    public static final String FILE_EXTN = ".xlsx";
    //public static final String FILE_NAME = "EXCEL_DATA";

    public static String convertCsvToXls(String xlsFileLocation, String csvFilePath, char FILE_DELIMITER) {
        SXSSFSheet sheet = null;
        CSVReader reader = null;
        Workbook workBook = null;
        String generatedXlsFilePath = "";
        FileOutputStream fileOutputStream = null;

        try {

            /**** Get the CSVReader Instance & Specify The Delimiter To Be Used ****/
            String[] nextLine;

            //begin old deprecated code
            //reader = new CSVReader(new FileReader(csvFilePath), FILE_DELIMITER);
            //end old deprecated code
            CSVParser csvParser = new CSVParserBuilder().withSeparator(FILE_DELIMITER).build();
            reader = new CSVReaderBuilder(new FileReader(csvFilePath)).withCSVParser(csvParser).build();


            workBook = new SXSSFWorkbook();
            sheet = (SXSSFSheet) workBook.createSheet("Sheet");

            int rowNum = 0;
            while((nextLine = reader.readNext()) != null) {
                Row currentRow = sheet.createRow(rowNum++);
                for(int i=0; i < nextLine.length; i++) {
                    if(NumberUtils.isDigits(nextLine[i])) {
                        currentRow.createCell(i).setCellValue(Integer.parseInt(nextLine[i]));
                        //System.out.println(currentRow.getCell(i).getNumericCellValue());
                    } else if(nextLine[i].isEmpty()){
                        currentRow.createCell(i).setBlank();
                        //System.out.println(currentRow.getCell(i).getNumericCellValue());
                    } else if (NumberUtils.isNumber(nextLine[i])) {
                        currentRow.createCell(i).setCellValue(Double.parseDouble(nextLine[i]));
                        //System.out.println(currentRow.getCell(i).getNumericCellValue());
                    } else if(nextLine[i].isEmpty()){
                        currentRow.createCell(i).setBlank();

                    }
                    else {
                        currentRow.createCell(i).setCellValue(nextLine[i]);
                        //System.out.println(currentRow.getCell(i).getRichStringCellValue());
                    }
                }
            }

            generatedXlsFilePath = xlsFileLocation + csvFilePath.replace("persistent/inbox/","").replace(".csv","") + FILE_EXTN;
            //System.out.println(generatedXlsFilePath);

            fileOutputStream = new FileOutputStream(generatedXlsFilePath.trim());
            workBook.write(fileOutputStream);

        } catch(Exception exObj) {
            exObj.printStackTrace();
        } finally {
            try {

                /**** Closing The Excel Workbook Object ****/
                if (workBook != null) {
                    workBook.close();
                }

                /**** Closing The File-Writer Object ****/
                if (fileOutputStream != null) {
                    fileOutputStream.close();
                }

                /**** Closing The CSV File-ReaderObject ****/
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException ioExObj) {
                ioExObj.printStackTrace();
            }
        }

        return generatedXlsFilePath;
    }
}