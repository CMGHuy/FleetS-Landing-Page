import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from './backend.service';
import { HttpResponse } from "@angular/common/http";
import { MatDialog} from "@angular/material/dialog";
import { AlertDialogComponent } from "../alert-dialog/alert-dialog.component";
import { Router } from '@angular/router';

@Component({
  selector: 'chl-landing-page-root',
  templateUrl: './chl-landing-page.component.html',
  styleUrls: ['./chl-landing-page.component.css']
})
export class ChlLandingPageComponent implements OnInit {
  title = 'Fleets-Landing-Page';
  headers=['VIN', 'Brand', 'Customer_Name', 'Country', 'Model', 'Registration_Date'];
  keys = ['VW ChassiLoad VIN.Vin Nr','VW ChassiLoad VIN.Cust Brand', 'VW ChassiLoad VIN.Cust Customer', 'VW ChassiLoad VIN.Cust Country', 'VW ChassiLoad VIN.Cust Model', 'VW ChassiLoad VIN.Cust Reg Dt' ];
  defaultLabelText:string = "Choose a file";
  fileNameDisplay:string = null;
  fakeButtonOn:boolean = true;
  submitButtonOn:boolean = false;
  loaderOn:boolean = false;
  tableDisable:boolean = true;
  wrongFileText = ['Invalid input Format, only CSV, XLSX, XLS is allowed!'];
  successfulText = ['File uploaded successfully! You will receive a confirmation email upon successful import.'];
  highlightTD = "background-color:rgba(209, 242, 235 ,0.4);";
  boxShadowStyle: string = '0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ';
  fileUpload :any =null;
  checkoutForm: FormGroup;
  uploadMessage:any = null;
  errorCode:any =null;
  @Input() typeImport:string;
  @Input() companyTitel:string;
  @Input() token:string;
  @Input() component: string;
  @Output() componentChange = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder, private backendService: BackendService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group(
      {
      checkbox: false,
      datarow: '',
      VIN:['', Validators.required],
      Brand: '',
      Customer_Name: '',
      Country: '',
      Model: '',
      Registration_Date: ''
    });
    this.fileNameDisplay = this.defaultLabelText;
  }
  setComponentOff()
  {
    this.component = 'blockedPage';
    this.componentChange.emit(this.component);
    console.log(this.component);
  }
  setSuccessPageOn()
  {
    this.component = 'successPage';
    this.componentChange.emit(this.component);
    console.log(this.component);
  }
  onFocus(groupID:string,event:any) {
    document.getElementById(groupID).style.boxShadow = this.boxShadowStyle;
    if (groupID == 'ManualColumn')
    {
      document.getElementById('table').style.boxShadow = this.boxShadowStyle;
      let arr = this.getTdElement(event);
      for (let element of arr)
      {
        element.setAttribute('style',this.highlightTD);
      }
    }
  }
  removeHighlight(groupID:string,event:any)
  {
    document.getElementById(groupID).style.removeProperty('box-shadow');
    if (groupID == 'ManualColumn')
    {
      document.getElementById('table').style.removeProperty('box-shadow');
      let arr = this.getTdElement(event);
      for (let element of arr)
      {
        element.style.removeProperty('background-color');
      }
    }
  }
  getTdElement(event:any)
  {
    let td = event.target.parentElement;
    let tr = td.parentElement;
    let arr = Array.from(tr.children);
    let index = arr.indexOf(td);
    let nextTr = tr.nextElementSibling;
    let nextTd = nextTr.children[index];
    return [td,nextTd];
  }
  limitMaxValue(minValue:number,maxValue:number,event:any)
  {
    if (event.target.value > maxValue)
    {
      event.target.value = maxValue;
      this.checkoutForm.controls['datarow'].setValue(maxValue);
    }
    else if (event.target.value < minValue)
    {
      this.checkoutForm.controls['datarow'].setValue(minValue);
      event.target.value = null;
    }
    else
    {
      this.checkoutForm.controls['datarow'].setValue(event.target.value);
    }
  }
  alphaOnly(event:any)
  {
    return (event.charCode >= 65 && event.charCode<= 90 || (event.charCode >= 97 && event.charCode <= 122));
  }
  onKey(event: any) { // without type info
    if (event.key === "Enter") {
      event.preventDefault();
      let td = event.target.parentElement;
      let tr = td.parentElement;
      let arr = Array.from(tr.children);
      let index = arr.indexOf(td)
      if (index < tr.children.length - 1) {
        tr.children[index+1].children[0].select();
      }
      else {
        tr.children[0].children[0].select();
      }
    }
  }

  verifyColumn(event:any)
  {
    if (this.checkoutForm.get('VIN').value)
    {
      this.submitButtonOn = true;
      this.fakeButtonOn = false;
    }
    else
    {
      this.fakeButtonOn = true;
      this.submitButtonOn = false;
    }
  }
  verifyFile(event:any)
  {
    let fileName = event.target.files[0].name;
    let allowedExtensions = /(\.xlsx|\.xls|\.xlt|\.csv)$/i;
    if (!allowedExtensions.exec(fileName))
    {
      fileName = '';
      this.fileNameDisplay = this.defaultLabelText;
      this.openDialog(this.wrongFileText,1);
      this.tableDisable = true;
      this.fakeButtonOn = true;
      this.submitButtonOn = false;
      this.checkoutForm.reset();
    }
    else
    {
      this.fileNameDisplay = fileName;
      this.fileUpload = event.target.files.item(0);
      this.tableDisable = false;
      document.getElementById('ManualColumn').scrollIntoView();
      console.log(this.fileUpload);
    }
    event.target.value = null;
  }

  openDialog(inputData:any,inputErrorCode:any)
  {
    this.dialog.open(AlertDialogComponent,
      {

        data:
          {
            errorCode: inputErrorCode,
            dataKey: inputData,
          }
      });
  }

  onSubmit(data: any)
  {
    const formData = new FormData();
    let configuration = {configuration:{}};
    for (let i = 0; i < this.headers.length; i++)
    {
      configuration.configuration[this.keys[i]] = this.checkoutForm.get(this.headers[i]).value;
    }
    if(this.checkoutForm.get('datarow').value)
    {
      configuration.configuration['DataRow'] = this.checkoutForm.get('datarow').value.toString();
    }
    else
    {
      configuration.configuration['DataRow'] = "2";
    }
    formData.append('csvfile', this.fileUpload);
    formData.append('jsonFile', JSON.stringify(configuration));
    this.loaderOn = true;
    this.backendService.upload(formData,this.token).subscribe(
      (res) =>  {
        if (res instanceof  HttpResponse) {
          console.log(res);
          this.uploadMessage = res.body.errorMessages;
          this.errorCode = res.body.errorCode;
          if (this.uploadMessage && this.errorCode)
          {
            this.loaderOn = false;
            if ( res.body.errorMessages[0] == "BlockedByBo")
            {
              this.setComponentOff();
              // this.router.navigate(['./block-page'],{replaceUrl:true});
              console.log("navigate successful");
            }
            else{
              if (this.errorCode == "0"){
                this.uploadMessage = this.successfulText;
                this.submitButtonOn = false;
                this.fakeButtonOn = true;
                this.fileNameDisplay = this.defaultLabelText;
                this.setSuccessPageOn();
              }
              else{
                this.openDialog(this.uploadMessage,this.errorCode);
              }
            }
          }
        }
      },
      (err) => console.log(err)
    )
  }
}
