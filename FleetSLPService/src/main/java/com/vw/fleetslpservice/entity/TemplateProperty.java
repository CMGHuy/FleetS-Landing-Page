package com.vw.fleetslpservice.entity;

public class TemplateProperty {
    String columnNumber;

    String columnName;

    String columnHeader;

    String typeOfColumn;

    String sizeOfColumn;

    Boolean mandatory;

    Boolean mandatoryForImportSide;

    Boolean unique;

    String uploadedFileColumnName;

    public String getColumnNumber() {
        return columnNumber;
    }

    public void setColumnNumber(String columnNumber) {
        this.columnNumber = columnNumber;
    }

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public String getColumnHeader() {
        return columnHeader;
    }

    public void setColumnHeader(String columnHeader) {
        this.columnHeader = columnHeader;
    }

    public String getTypeOfColumn() {
        return typeOfColumn;
    }

    public void setTypeOfColumn(String typeOfColumn) {
        this.typeOfColumn = typeOfColumn;
    }

    public String getSizeOfColumn() {
        return sizeOfColumn;
    }

    public void setSizeOfColumn(String sizeOfColumn) {
        this.sizeOfColumn = sizeOfColumn;
    }

    public Boolean getMandatory() {
        return mandatory;
    }

    public void setMandatory(Boolean mandatory) {
        this.mandatory = mandatory;
    }

    public Boolean getMandatoryForImportSide() {
        return mandatoryForImportSide;
    }

    public void setMandatoryForImportSide(Boolean mandatoryForImportSide) {
        this.mandatoryForImportSide = mandatoryForImportSide;
    }

    public Boolean getUnique() {
        return unique;
    }

    public void setUnique(Boolean unique) {
        this.unique = unique;
    }

    public String getUploadedFileColumnName() {
        return uploadedFileColumnName;
    }

    public void setUploadedFileColumnName(String uploadedFileColumnName) {
        this.uploadedFileColumnName = uploadedFileColumnName;
    }
}
