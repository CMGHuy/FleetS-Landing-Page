package com.vw.fleetslpservice.util.json;

import org.json.JSONException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ReadJsonConfigurationFile {

    // String for CHL/CHB
    private String vinNr = "";
    private String custBrand = "";
    private String custCustomer = "";
    private String custCountry = "";
    private String custModel = "";
    private String regDt = "";

    //String for IFU

    private String feedbackId = "";
    private String customerName = "";
    private String regionName = "";
    private String parentRegionName = "";
    private String afBrandVWPC = "";
    private String afBrandAudi = "";
    private String afBrandSeat = "";
    private String afBrandSkoda = "";
    private String afBrandLCV = "";
    private String brandVWPC = "";
    private String brandAudi = "";
    private String brandSeat = "";
    private String brandSkoda = "";
    private String brandLcv = "";
    private String dlvrBrandVWPC = "";
    private String dlvrBrandAudi = "";
    private String dlvrBrandSeat = "";
    private String dlvrBrandSkoda = "";
    private String dlvrBrandLcv = "";

    //shared
    private String dataRow = "";

    //set&get for CHL/CHB
    public String getVinNr() {
        return vinNr;
    }

    public void setVinNr(String vinNr) {
        this.vinNr = vinNr;
    }

    public String getCustBrand() {
        return custBrand;
    }

    public void setCustBrand(String custBrand) {
        this.custBrand = custBrand;
    }

    public String getCustCustomer() {
        return custCustomer;
    }

    public void setCustCustomer(String custCustomer) {
        this.custCustomer = custCustomer;
    }

    public String getCustCountry() {
        return custCountry;
    }

    public void setCustCountry(String custCountry) {
        this.custCountry = custCountry;
    }

    public String getCustModel() {
        return custModel;
    }

    public void setCustModel(String custModel) {
        this.custModel = custModel;
    }

    public String getRegDt() {
        return regDt;
    }

    public void setRegDt(String regDt) {
        this.regDt = regDt;
    }

    //set&get for IFU

    public String getFeedbackId() { return feedbackId; }

    public void setFeedbackId(String feedbackId) { this.feedbackId = feedbackId; }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    public String getParentRegionName() {
        return parentRegionName;
    }

    public void setParentRegionName(String parentRegionName) {
        this.parentRegionName = parentRegionName;
    }

    public String getAfBrandVWPC() {
        return afBrandVWPC;
    }

    public void setAfBrandVWPC(String afBrandVWPC) {
        this.afBrandVWPC = afBrandVWPC;
    }

    public String getAfBrandAudi() {
        return afBrandAudi;
    }

    public void setAfBrandAudi(String afBrandAudi) {
        this.afBrandAudi = afBrandAudi;
    }

    public String getAfBrandSeat() {
        return afBrandSeat;
    }

    public void setAfBrandSeat(String afBrandSeat) {
        this.afBrandSeat = afBrandSeat;
    }

    public String getAfBrandSkoda() {
        return afBrandSkoda;
    }

    public void setAfBrandSkoda(String afBrandSkoda) {
        this.afBrandSkoda = afBrandSkoda;
    }

    public String getAfBrandLCV() {
        return afBrandLCV;
    }

    public void setAfBrandLCV(String afBrandLCV) {
        this.afBrandLCV = afBrandLCV;
    }

    public String getBrandVWPC() {
        return brandVWPC;
    }

    public void setBrandVWPC(String brandVWPC) {
        this.brandVWPC = brandVWPC;
    }

    public String getBrandAudi() {
        return brandAudi;
    }

    public void setBrandAudi(String brandAudi) {
        this.brandAudi = brandAudi;
    }

    public String getBrandSeat() {
        return brandSeat;
    }

    public void setBrandSeat(String brandSeat) {
        this.brandSeat = brandSeat;
    }

    public String getBrandSkoda() {
        return brandSkoda;
    }

    public void setBrandSkoda(String brandSkoda) {
        this.brandSkoda = brandSkoda;
    }

    public String getBrandLcv() {
        return brandLcv;
    }

    public void setBrandLcv(String brandLcv) {
        this.brandLcv = brandLcv;
    }

    public String getDlvrBrandVWPC() {
        return dlvrBrandVWPC;
    }

    public void setDlvrBrandVWPC(String dlvrBrandVWPC) {
        this.dlvrBrandVWPC = dlvrBrandVWPC;
    }

    public String getDlvrBrandAudi() {
        return dlvrBrandAudi;
    }

    public void setDlvrBrandAudi(String dlvrBrandAudi) {
        this.dlvrBrandAudi = dlvrBrandAudi;
    }

    public String getDlvrBrandSeat() {
        return dlvrBrandSeat;
    }

    public void setDlvrBrandSeat(String dlvrBrandSeat) {
        this.dlvrBrandSeat = dlvrBrandSeat;
    }

    public String getDlvrBrandSkoda() {
        return dlvrBrandSkoda;
    }

    public void setDlvrBrandSkoda(String dlvrBrandSkoda) {
        this.dlvrBrandSkoda = dlvrBrandSkoda;
    }

    public String getDlvrBrandLcv() {
        return dlvrBrandLcv;
    }

    public void setDlvrBrandLcv(String dlvrBrandLcv) {
        this.dlvrBrandLcv = dlvrBrandLcv;
    }

    public String getDataRow() { return dataRow; }

    public void setDataRow(String dataRow) { this.dataRow = dataRow; }

    @SuppressWarnings("unchecked")
    public void readJSON(String argImportType, String configurationPath)
    {
        //JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();

        try (FileReader reader = new FileReader(configurationPath))
        {
            Object obj = jsonParser.parse(reader);
            JSONObject configuration = (JSONObject) obj;
            //System.out.println(configuration);

            try {
                if(argImportType.equals("CHL")) {
                    parseObjectCHL(configuration);
                }
                else if(argImportType.equals("IFU")) {
                    parseObjectIFU(configuration);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }

            /*
            //Iterate over configuration array
            configurationCHL.forEach( conf -> {
                try {
                    parseEmployeeObject( (JSONObject) conf );
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            });
            */

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }


    private void parseObjectCHL(JSONObject configurationJson) throws JSONException {

        JSONObject configuration = (JSONObject) configurationJson.get("configuration");

        //System.out.println(configuration.keySet());
        setVinNr(configuration.get("VW ChassiLoad VIN.Vin Nr").toString());
        setCustBrand(configuration.get("VW ChassiLoad VIN.Cust Brand").toString());
        setCustCustomer(configuration.get("VW ChassiLoad VIN.Cust Customer").toString());
        setCustCountry(configuration.get("VW ChassiLoad VIN.Cust Country").toString());
        setCustModel(configuration.get("VW ChassiLoad VIN.Cust Model").toString());
        setRegDt(configuration.get("VW ChassiLoad VIN.Cust Reg Dt").toString());

        //dataRow start value
        setDataRow(configuration.get("DataRow").toString());
    }

    private void parseObjectIFU(JSONObject configurationJSON) throws JSONException {

        JSONObject configuration = (JSONObject) configurationJSON.get("configuration");
        setFeedbackId(configuration.get("VW Dealer Campaign Detail.Id").toString());
        setCustomerName(configuration.get("VW Dealer Campaign Detail.Customer Name").toString());
        setRegionName(configuration.get("VW Dealer Campaign Detail.Region Name").toString());
        setParentRegionName(configuration.get("VW Dealer Campaign Detail.Parent Region Name").toString());
        setAfBrandVWPC(configuration.get("VW Dealer Campaign Detail.AF Brand VW PC").toString());
        setAfBrandAudi(configuration.get("VW Dealer Campaign Detail.AF Brand Audi").toString());
        setAfBrandSeat(configuration.get("VW Dealer Campaign Detail.AF Brand Seat").toString());
        setAfBrandSkoda(configuration.get("VW Dealer Campaign Detail.AF Brand Skoda").toString());
        setAfBrandLCV(configuration.get("VW Dealer Campaign Detail.AF Brand LCV").toString());
        setBrandVWPC(configuration.get("VW Dealer Campaign Detail.Brand VW PC").toString());
        setBrandAudi(configuration.get("VW Dealer Campaign Detail.Brand Audi").toString());
        setBrandSeat(configuration.get("VW Dealer Campaign Detail.Brand Seat").toString());
        setBrandSkoda(configuration.get("VW Dealer Campaign Detail.Brand Skoda").toString());
        setBrandLcv(configuration.get("VW Dealer Campaign Detail.Brand LCV").toString());
        setDlvrBrandVWPC(configuration.get("VW Dealer Campaign Detail.Dlvr Brand VW PC").toString());
        setDlvrBrandAudi(configuration.get("VW Dealer Campaign Detail.Dlvr Brand Audi").toString());
        setDlvrBrandSeat(configuration.get("VW Dealer Campaign Detail.Dlvr Brand Seat").toString());
        setDlvrBrandSkoda(configuration.get("VW Dealer Campaign Detail.Dlvr Brand Skoda").toString());
        setDlvrBrandLcv(configuration.get("VW Dealer Campaign Detail.Dlvr Brand LCV").toString());

        //dataRow start value
        setDataRow(configuration.get("DataRow").toString());
    }

}
