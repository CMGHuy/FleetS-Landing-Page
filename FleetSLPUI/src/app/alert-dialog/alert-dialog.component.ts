import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<AlertDialogComponent>) { }
  contentToClipboard:string = '';
  successImageSource:string = '../../assets/images/successfulUpload.png';
  failImageSource:string = '../../assets/images/failedUpload.png';
  dataKey: any;
  browser: any;
  ngOnInit() {
    const {detect} = require('detect-browser');
    const browserDetected = detect();
    this.browser = browserDetected.name;
    this.dataKey = this.data.dataKey;

      for (let line of this.dataKey)
      {
        this.contentToClipboard += line;
        this.contentToClipboard += "\n";
      }

  }

  checkCopied()
  {
    if (this.browser == 'ie')
    {
      let data = (<any>window).clipboardData.getData("text");
      console.log(data);
      if (data == "")
      {
        alert("Copy Failed:\n" +
          "This functionality is blocked by the current browser you are using.\n" +
          "Please use a different browser, or copy the error log manually.");
      }
      else
      {
        alert("Copy Successful");
      }
    }
    else
    {
      alert("Copy Successful");
    }
    /*else
    {
      navigator.clipboard.readText()
        .then(text => {
          console.log('Pasted content: ', text);
          alert("Copy Successfully");
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
          alert("Copy Not Successfully: Please use other browsers.");
        });
    }*/
  }
}
