(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert-dialog/alert-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/alert-dialog/alert-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");







function AlertDialogComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AlertDialogComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.successImageSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AlertDialogComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", ".", ctx_r4.failImageSource, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AlertDialogComponent_mat_dialog_content_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r8);
} }
function AlertDialogComponent_mat_dialog_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertDialogComponent_mat_dialog_content_9_div_1_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.dataKey);
} }
function AlertDialogComponent_mat_dialog_content_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r10);
} }
function AlertDialogComponent_mat_dialog_content_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertDialogComponent_mat_dialog_content_10_div_1_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dataKey);
} }
class AlertDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.contentToClipboard = '';
        this.successImageSource = '../../assets/images/successfulUpload.png';
        this.failImageSource = '../../assets/images/failedUpload.png';
    }
    ngOnInit() {
        const { detect } = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");
        const browserDetected = detect();
        this.browser = browserDetected.name;
        this.dataKey = this.data.dataKey;
        for (let line of this.dataKey) {
            this.contentToClipboard += line;
            this.contentToClipboard += "\n";
        }
    }
    checkCopied() {
        if (this.browser == 'ie') {
            let data = window.clipboardData.getData("text");
            console.log(data);
            if (data == "") {
                alert("Copy Failed:\n" +
                    "This functionality is blocked by the current browser you are using.\n" +
                    "Please use a different browser, or copy the error log manually.");
            }
            else {
                alert("Copy Successful");
            }
        }
        else {
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
AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AlertDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 14, vars: 6, consts: [["align", "end"], ["mat-dialog-close", "", 1, "closeDialogButton"], ["align", "center"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["align", "center", "class", "dialogContentBelow3", 4, "ngIf"], ["align", "center", "tabindex", "0", "class", "mat-typography dialogContentOver3", 4, "ngIf"], ["align", "center", 2, "margin-top", "30px"], ["mat-button", "", 1, "copyButton", 3, "cdkCopyToClipboard", "click"], ["align", "center", "alt", "successful Upload", 3, "src"], ["align", "center", "alt", "failed Upload", 3, "src"], ["align", "center", 1, "dialogContentBelow3"], [4, "ngFor", "ngForOf"], [2, "font-size", "25px"], ["align", "center", "tabindex", "0", 1, "mat-typography", "dialogContentOver3"], [2, "font-size", "20px"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlertDialogComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlertDialogComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlertDialogComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AlertDialogComponent_mat_dialog_content_9_Template, 2, 1, "mat-dialog-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlertDialogComponent_mat_dialog_content_10_Template, 2, 1, "mat-dialog-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_Template_button_click_12_listener() { return ctx.checkCopied(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Copy to clipboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.errorCode == "0")("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataKey.length <= 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataKey.length > 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.contentToClipboard);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["CdkCopyToClipboard"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".mat-dialog-container\r\n{\r\n  background-color: #006384!important;\r\n  border: 1px solid #006384 !important;\r\n  border-radius: 5px!important;\r\n  width: 80vw!important;\r\n}\r\n.closeDialogButton[_ngcontent-%COMP%]\r\n{\r\n  font-size: 25px;\r\n  background-color:#006384;\r\n  color: white;\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.closeDialogButton[_ngcontent-%COMP%]:focus, .closeDialogButton[_ngcontent-%COMP%]:hover\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n.copyButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: #D6EAF8;\r\n}\r\n.copyButton[_ngcontent-%COMP%]:focus, .copyButton[_ngcontent-%COMP%]:hover\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n  background-color: white;\r\n}\r\n.dialogContentBelow3[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 50px;\r\n  font-size: 22px;\r\n}\r\n.dialogContentOver3[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  max-height: 50vh!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7OztFQUdFLDBEQUEwRDtBQUM1RDtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBOzs7RUFHRSwwREFBMEQ7RUFDMUQsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYzODQhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDYzODQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4MHZ3IWltcG9ydGFudDtcclxufVxyXG4uY2xvc2VEaWFsb2dCdXR0b25cclxue1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDYzODQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uY2xvc2VEaWFsb2dCdXR0b246Zm9jdXMsXHJcbi5jbG9zZURpYWxvZ0J1dHRvbjpob3ZlclxyXG57XHJcbiAgYm94LXNoYWRvdzogMCAtNnB4IDEwcHggMCAjQUVENkYxICAsIDAgNnB4IDEwcHggMCAjQUVENkYxIDtcclxufVxyXG4uY29weUJ1dHRvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RUFGODtcclxufVxyXG4uY29weUJ1dHRvbjpmb2N1cyxcclxuLmNvcHlCdXR0b246aG92ZXJcclxue1xyXG4gIGJveC1zaGFkb3c6IDAgLTZweCAxMHB4IDAgI0FFRDZGMSAgLCAwIDZweCAxMHB4IDAgI0FFRDZGMSA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmRpYWxvZ0NvbnRlbnRCZWxvdzNcclxue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmRpYWxvZ0NvbnRlbnRPdmVyM1xyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwdmghaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert-dialog',
                templateUrl: './alert-dialog.component.html',
                styleUrls: ['./alert-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ifu-landing-page/ifu-landing-page.component */ "./src/app/ifu-landing-page/ifu-landing-page.component.ts");
/* harmony import */ var _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chl-landing-page/chl-landing-page.component */ "./src/app/chl-landing-page/chl-landing-page.component.ts");
/* harmony import */ var _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-page/block-page.component */ "./src/app/block-page/block-page.component.ts");







const routes = [
    { path: 'ifu-landing-page', component: _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["IfuLandingPageComponent"] },
    { path: 'chl-landing-page', component: _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["ChlLandingPageComponent"] },
    { path: 'block-page', component: _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_4__["BlockPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ifu-landing-page/ifu-landing-page.component */ "./src/app/ifu-landing-page/ifu-landing-page.component.ts");
/* harmony import */ var _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chl-landing-page/chl-landing-page.component */ "./src/app/chl-landing-page/chl-landing-page.component.ts");
/* harmony import */ var _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-page/block-page.component */ "./src/app/block-page/block-page.component.ts");
/* harmony import */ var _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-page/success-page.component */ "./src/app/success-page/success-page.component.ts");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ifu-landing-page-root", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentChange", function AppComponent_div_0_Template_ifu_landing_page_root_componentChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectedPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r0.selectedPage)("typeImport", ctx_r0.typeImport)("token", ctx_r0.token)("companyTitel", ctx_r0.companyTitel);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "chl-landing-page-root", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentChange", function AppComponent_div_1_Template_chl_landing_page_root_componentChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectedPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx_r1.selectedPage)("typeImport", ctx_r1.typeImport)("token", ctx_r1.token)("companyTitel", ctx_r1.companyTitel);
} }
function AppComponent_app_block_page_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-page");
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-success-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    //@Input() tokenValue: any;
    constructor() {
        this.title = 'FleetSLPUI';
        this.companyTitel = document.getElementById("companyVariable").textContent;
        this.typeImport = document.getElementById("importTypeVariable").textContent;
        this.token = document.getElementById("token").textContent;
    }
    ngOnInit() {
        this.selectedPage = this.typeImport;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "component", "typeImport", "token", "companyTitel", "componentChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_block_page_2_Template, 1, 0, "app-block-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPage == "IFU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPage == "CHL" || ctx.selectedPage == "CHB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPage == "blockedPage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPage == "successPage");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["IfuLandingPageComponent"], _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["ChlLandingPageComponent"], _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_4__["BlockPageComponent"], _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_5__["SuccessPageComponent"]], styles: ["div[_ngcontent-%COMP%]\r\n{\r\n  background-color:#006384;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwNjM4NDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chl-landing-page/chl-landing-page.component */ "./src/app/chl-landing-page/chl-landing-page.component.ts");
/* harmony import */ var _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ifu-landing-page/ifu-landing-page.component */ "./src/app/ifu-landing-page/ifu-landing-page.component.ts");
/* harmony import */ var _chl_landing_page_replace_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chl-landing-page/replace.pipe */ "./src/app/chl-landing-page/replace.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loader-upload-file/loader-upload-file.component */ "./src/app/loader-upload-file/loader-upload-file.component.ts");
/* harmony import */ var _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./block-page/block-page.component */ "./src/app/block-page/block-page.component.ts");
/* harmony import */ var _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./success-page/success-page.component */ "./src/app/success-page/success-page.component.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["ChlLandingPageComponent"],
        _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["IfuLandingPageComponent"],
        _chl_landing_page_replace_pipe__WEBPACK_IMPORTED_MODULE_14__["ReplacePipe"],
        _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_16__["ExpansionPanelComponent"],
        _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AlertDialogComponent"],
        _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_20__["LoaderUploadFileComponent"],
        _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_21__["BlockPageComponent"],
        _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_22__["SuccessPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                    _chl_landing_page_chl_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["ChlLandingPageComponent"],
                    _ifu_landing_page_ifu_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["IfuLandingPageComponent"],
                    _chl_landing_page_replace_pipe__WEBPACK_IMPORTED_MODULE_14__["ReplacePipe"],
                    _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_16__["ExpansionPanelComponent"],
                    _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AlertDialogComponent"],
                    _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_20__["LoaderUploadFileComponent"],
                    _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_21__["BlockPageComponent"],
                    _success_page_success_page_component__WEBPACK_IMPORTED_MODULE_22__["SuccessPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
                entryComponents: [_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AlertDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/block-page/block-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-page/block-page.component.ts ***!
  \****************************************************/
/*! exports provided: BlockPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPageComponent", function() { return BlockPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BlockPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlockPageComponent.ɵfac = function BlockPageComponent_Factory(t) { return new (t || BlockPageComponent)(); };
BlockPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockPageComponent, selectors: [["app-block-page"]], decls: 10, vars: 0, consts: [["charset", "ISO-8859-1"]], template: function BlockPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "VW backoffice has started reimbursement processing, it is no longer possible to upload data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please contact your key account manager if necessary.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLXBhZ2UvYmxvY2stcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-page',
                templateUrl: './block-page.component.html',
                styleUrls: ['./block-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/chl-landing-page/backend.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/chl-landing-page/backend.service.ts ***!
  \*****************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BackendService {
    constructor(http) {
        this.http = http;
        this.backendUrl = '/v1/lp/uploadJsonTest';
        this.httpOptions = {
            //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
            responseType: 'json',
            observe: 'events',
            params: {}
        };
    }
    upload(data, token) {
        this.httpOptions.params = { token: token };
        return this.http.post(this.backendUrl, data, this.httpOptions);
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chl-landing-page/chl-landing-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chl-landing-page/chl-landing-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ChlLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChlLandingPageComponent", function() { return ChlLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend.service */ "./src/app/chl-landing-page/backend.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../expansion-panel/expansion-panel.component */ "./src/app/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loader-upload-file/loader-upload-file.component */ "./src/app/loader-upload-file/loader-upload-file.component.ts");
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./replace.pipe */ "./src/app/chl-landing-page/replace.pipe.ts");
















function ChlLandingPageComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2");
} }
function ChlLandingPageComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CHASSIS LOAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChlLandingPageComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CHASSIS LOAD - BACK OFFICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChlLandingPageComponent_ng_container_25_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function ChlLandingPageComponent_ng_container_25_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChlLandingPageComponent_ng_container_25_ng_template_2_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.alphaOnly($event); })("focusout", function ChlLandingPageComponent_ng_container_25_ng_template_2_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.removeHighlight("ManualColumn", $event); })("focusin", function ChlLandingPageComponent_ng_container_25_ng_template_2_Template_input_focusin_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.onFocus("ManualColumn", $event); })("keydown", function ChlLandingPageComponent_ng_container_25_ng_template_2_Template_input_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onKey($event); })("change", function ChlLandingPageComponent_ng_container_25_ng_template_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.verifyColumn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r9);
} }
function ChlLandingPageComponent_ng_container_25_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChlLandingPageComponent_ng_container_25_ng_template_4_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.alphaOnly($event); })("focusout", function ChlLandingPageComponent_ng_container_25_ng_template_4_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.removeHighlight("ManualColumn", $event); })("focusin", function ChlLandingPageComponent_ng_container_25_ng_template_4_Template_input_focusin_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onFocus("ManualColumn", $event); })("keydown", function ChlLandingPageComponent_ng_container_25_ng_template_4_Template_input_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onKey($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r9);
} }
function ChlLandingPageComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChlLandingPageComponent_ng_container_25_td_1_Template, 1, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChlLandingPageComponent_ng_container_25_ng_template_2_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChlLandingPageComponent_ng_container_25_ng_template_4_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r9 === "VIN")("ngIfThen", _r11)("ngIfElse", _r13);
} }
function ChlLandingPageComponent_ng_container_27_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function ChlLandingPageComponent_ng_container_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " VIN (*) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChlLandingPageComponent_ng_container_27_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", h_r28, " ");
} }
function ChlLandingPageComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChlLandingPageComponent_ng_container_27_td_1_Template, 1, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChlLandingPageComponent_ng_container_27_ng_template_2_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChlLandingPageComponent_ng_container_27_ng_template_4_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const h_r28 = ctx.$implicit;
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", h_r28 === "VIN")("ngIfThen", _r30)("ngIfElse", _r32);
} }
function ChlLandingPageComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChlLandingPageComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChlLandingPageComponent {
    constructor(formBuilder, backendService, dialog, router) {
        this.formBuilder = formBuilder;
        this.backendService = backendService;
        this.dialog = dialog;
        this.router = router;
        this.title = 'Fleets-Landing-Page';
        this.headers = ['VIN', 'Brand', 'Customer_Name', 'Country', 'Model', 'Registration_Date'];
        this.keys = ['VW ChassiLoad VIN.Vin Nr', 'VW ChassiLoad VIN.Cust Brand', 'VW ChassiLoad VIN.Cust Customer', 'VW ChassiLoad VIN.Cust Country', 'VW ChassiLoad VIN.Cust Model', 'VW ChassiLoad VIN.Cust Reg Dt'];
        this.defaultLabelText = "Choose a file";
        this.fileNameDisplay = null;
        this.fakeButtonOn = true;
        this.submitButtonOn = false;
        this.loaderOn = false;
        this.tableDisable = true;
        this.wrongFileText = ['Invalid input Format, only CSV, XLSX, XLS is allowed!'];
        this.successfulText = ['File uploaded successfully! You will receive a confirmation email upon successful import.'];
        this.highlightTD = "background-color:rgba(209, 242, 235 ,0.4);";
        this.boxShadowStyle = '0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ';
        this.fileUpload = null;
        this.uploadMessage = null;
        this.errorCode = null;
        this.componentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.checkoutForm = this.formBuilder.group({
            checkbox: false,
            datarow: '',
            VIN: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Brand: '',
            Customer_Name: '',
            Country: '',
            Model: '',
            Registration_Date: ''
        });
        this.fileNameDisplay = this.defaultLabelText;
    }
    setComponentOff() {
        this.component = 'blockedPage';
        this.componentChange.emit(this.component);
        console.log(this.component);
    }
    setSuccessPageOn() {
        this.component = 'successPage';
        this.componentChange.emit(this.component);
        console.log(this.component);
    }
    onFocus(groupID, event) {
        document.getElementById(groupID).style.boxShadow = this.boxShadowStyle;
        if (groupID == 'ManualColumn') {
            document.getElementById('table').style.boxShadow = this.boxShadowStyle;
            let arr = this.getTdElement(event);
            for (let element of arr) {
                element.setAttribute('style', this.highlightTD);
            }
        }
    }
    removeHighlight(groupID, event) {
        document.getElementById(groupID).style.removeProperty('box-shadow');
        if (groupID == 'ManualColumn') {
            document.getElementById('table').style.removeProperty('box-shadow');
            let arr = this.getTdElement(event);
            for (let element of arr) {
                element.style.removeProperty('background-color');
            }
        }
    }
    getTdElement(event) {
        let td = event.target.parentElement;
        let tr = td.parentElement;
        let arr = Array.from(tr.children);
        let index = arr.indexOf(td);
        let nextTr = tr.nextElementSibling;
        let nextTd = nextTr.children[index];
        return [td, nextTd];
    }
    limitMaxValue(minValue, maxValue, event) {
        if (event.target.value > maxValue) {
            event.target.value = maxValue;
            this.checkoutForm.controls['datarow'].setValue(maxValue);
        }
        else if (event.target.value < minValue) {
            this.checkoutForm.controls['datarow'].setValue(minValue);
            event.target.value = null;
        }
        else {
            this.checkoutForm.controls['datarow'].setValue(event.target.value);
        }
    }
    alphaOnly(event) {
        return (event.charCode >= 65 && event.charCode <= 90 || (event.charCode >= 97 && event.charCode <= 122));
    }
    onKey(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let td = event.target.parentElement;
            let tr = td.parentElement;
            let arr = Array.from(tr.children);
            let index = arr.indexOf(td);
            if (index < tr.children.length - 1) {
                tr.children[index + 1].children[0].select();
            }
            else {
                tr.children[0].children[0].select();
            }
        }
    }
    verifyColumn(event) {
        if (this.checkoutForm.get('VIN').value) {
            this.submitButtonOn = true;
            this.fakeButtonOn = false;
        }
        else {
            this.fakeButtonOn = true;
            this.submitButtonOn = false;
        }
    }
    verifyFile(event) {
        let fileName = event.target.files[0].name;
        let allowedExtensions = /(\.xlsx|\.xls|\.xlt|\.csv)$/i;
        if (!allowedExtensions.exec(fileName)) {
            fileName = '';
            this.fileNameDisplay = this.defaultLabelText;
            this.openDialog(this.wrongFileText, 1);
            this.tableDisable = true;
            this.fakeButtonOn = true;
            this.submitButtonOn = false;
            this.checkoutForm.reset();
        }
        else {
            this.fileNameDisplay = fileName;
            this.fileUpload = event.target.files.item(0);
            this.tableDisable = false;
            document.getElementById('ManualColumn').scrollIntoView();
            console.log(this.fileUpload);
        }
        event.target.value = null;
    }
    openDialog(inputData, inputErrorCode) {
        this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"], {
            data: {
                errorCode: inputErrorCode,
                dataKey: inputData,
            }
        });
    }
    onSubmit(data) {
        const formData = new FormData();
        let configuration = { configuration: {} };
        for (let i = 0; i < this.headers.length; i++) {
            configuration.configuration[this.keys[i]] = this.checkoutForm.get(this.headers[i]).value;
        }
        if (this.checkoutForm.get('datarow').value) {
            configuration.configuration['DataRow'] = this.checkoutForm.get('datarow').value.toString();
        }
        else {
            configuration.configuration['DataRow'] = "2";
        }
        formData.append('csvfile', this.fileUpload);
        formData.append('jsonFile', JSON.stringify(configuration));
        this.loaderOn = true;
        this.backendService.upload(formData, this.token).subscribe((res) => {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log(res);
                this.uploadMessage = res.body.errorMessages;
                this.errorCode = res.body.errorCode;
                if (this.uploadMessage && this.errorCode) {
                    this.loaderOn = false;
                    if (res.body.errorMessages[0] == "BlockedByBo") {
                        this.setComponentOff();
                        // this.router.navigate(['./block-page'],{replaceUrl:true});
                        console.log("navigate successful");
                    }
                    else {
                        if (this.errorCode == "0") {
                            this.uploadMessage = this.successfulText;
                            this.submitButtonOn = false;
                            this.fakeButtonOn = true;
                            this.fileNameDisplay = this.defaultLabelText;
                            this.setSuccessPageOn();
                        }
                        else {
                            this.openDialog(this.uploadMessage, this.errorCode);
                        }
                    }
                }
            }
        }, (err) => console.log(err));
    }
}
ChlLandingPageComponent.ɵfac = function ChlLandingPageComponent_Factory(t) { return new (t || ChlLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ChlLandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChlLandingPageComponent, selectors: [["chl-landing-page-root"]], inputs: { typeImport: "typeImport", companyTitel: "companyTitel", token: "token", component: "component" }, outputs: { componentChange: "componentChange" }, decls: 37, vars: 27, consts: [["role", "banner", 1, "toolbar"], ["id", "VWLogo", "alt", "VW Logo", "src", "../../assets/images/VW_Fleet_Logo.png"], ["role", "main", 1, "content"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "container"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], ["multi", ""], [3, "idName", "groupName", "groupDescription", "disable"], ["align", "center"], ["type", "file", "id", "customFile", "name", "filename", "required", "", 1, "custom-file-input", "custom-file-input-1", 2, "display", "none", 3, "focusin", "focusout", "change"], ["for", "customFile"], ["width", "20", "height", "17", "viewBox", "0 0 20 17"], [3, "idName", "groupName", "groupDescription", "disable", "keydown.enter"], ["id", "table"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["type", "number", "min", "2", "max", "200", "placeholder", "2", "step", "1", "matInput", "", "formControlName", "datarow", 1, "spinner", 3, "keyup", "focusin", "focusout"], ["type", "submit", "id", "submitButton", "class", "submit-button", 4, "ngIf"], ["type", "button", "id", "fakeSubmitButton", "class", "submit-button", "disabled", "disabled", 4, "ngIf"], [3, "loaderEnable"], ["type", "text", "required", "", 3, "formControlName", "keypress", "focusout", "focusin", "keydown", "change"], ["type", "text", 3, "formControlName", "keypress", "focusout", "focusin", "keydown"], ["type", "submit", "id", "submitButton", 1, "submit-button"], ["type", "button", "id", "fakeSubmitButton", "disabled", "disabled", 1, "submit-button"], [1, "fa", "fa-minus-circle"]], template: function ChlLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChlLandingPageComponent_h2_5_Template, 1, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChlLandingPageComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChlLandingPageComponent_ng_template_8_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChlLandingPageComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(ctx.checkoutForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-accordion", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-expansion-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function ChlLandingPageComponent_Template_input_focusin_15_listener($event) { return ctx.onFocus("ChooseFile", $event); })("focusout", function ChlLandingPageComponent_Template_input_focusout_15_listener($event) { return ctx.removeHighlight("ChooseFile", $event); })("change", function ChlLandingPageComponent_Template_input_change_15_listener($event) { return ctx.verifyFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-expansion-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChlLandingPageComponent_Template_app_expansion_panel_keydown_enter_22_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ChlLandingPageComponent_ng_container_25_Template, 6, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChlLandingPageComponent_ng_container_27_Template, 6, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "replace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-expansion-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChlLandingPageComponent_Template_app_expansion_panel_keydown_enter_29_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Data starts from row ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChlLandingPageComponent_Template_input_keyup_33_listener($event) { return ctx.limitMaxValue(2, 200, $event); })("focusin", function ChlLandingPageComponent_Template_input_focusin_33_listener($event) { return ctx.onFocus("DataRow", $event); })("focusout", function ChlLandingPageComponent_Template_input_focusout_33_listener($event) { return ctx.removeHighlight("DataRow", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChlLandingPageComponent_button_34_Template, 3, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChlLandingPageComponent_button_35_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-loader-upload-file", 21);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyTitel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeImport === "CHL")("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idName", "ChooseFile")("groupName", "Choose File")("groupDescription", "Only CSV, XLSX, XLS allowed")("disable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileNameDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idName", "ManualColumn")("groupName", "Manual Column Setting")("groupDescription", "(*): Mandatory column")("disable", ctx.tableDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](28, 23, ctx.headers, "_", " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idName", "DataRow")("groupName", "Data Setting")("groupDescription", "")("disable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitButtonOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fakeButtonOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loaderEnable", ctx.loaderOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_9__["ExpansionPanelComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_12__["LoaderUploadFileComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], pipes: [_replace_pipe__WEBPACK_IMPORTED_MODULE_13__["ReplacePipe"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap');\r\n\r\n[_ngcontent-%COMP%]:root\r\n{\r\n  --color-darkblue-alpha: rgba(27, 27, 50, 0.8);\r\n  --color-green: #37af65;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after\r\n{\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  background-color:white;\r\n  height: 120px;\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#VWLogo[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n  margin-left: 30px;\r\n  padding-top: 15px;\r\n  width: 300px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 3.125rem auto 0 auto;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  color: rgba(27, 27, 50, 0.8) !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n  background: #F2F3F4;\r\n  padding: 2.5rem 0.625rem;\r\n  border-color: rgba(27, 27, 50, 0.8);\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  border-radius: 0.375rem;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 2.5rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.custom-file-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]\r\n{\r\n  max-width: 80%;\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  padding: 0.625rem 1.25rem;\r\n  margin: 20px;\r\n}\r\n\r\n.custom-file-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 1em;\r\n  height: 1em;\r\n  vertical-align: middle;\r\n  fill: currentColor;\r\n  margin-top: -0.25em;\r\n  \r\n  margin-right: 0.25em;\r\n  \r\n}\r\n\r\n.custom-file-input-1[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: #f1e5e6;\r\n  background-color: #006384;\r\n  border: solid white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.custom-file-input-1[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .custom-file-input-1.has-focus[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], .custom-file-input-1[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  color: #006384;\r\n  border: solid #006384;\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%]\r\n{\r\n  width:100%;\r\n  border:solid 2px rgba(27, 27, 50, 0.8);\r\n  table-layout: fixed;\r\n  overflow: hidden;\r\n}\r\n\r\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]\r\n{\r\n\r\n  width: 17%;\r\n  height: 80px;\r\n  border:solid 2px rgba(27, 27, 50, 0.8);\r\n  font-weight: 400;\r\n  position: relative;\r\n\r\n}\r\n\r\ntd[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]\r\n{\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 2px;\r\n  margin: 0px;\r\n  text-transform: uppercase;\r\n  \r\n}\r\n\r\ntd[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus\r\n{\r\n  background-color: rgba(209, 242, 235 ,0.4);\r\n}\r\n\r\n@media (min-width: 600px)\r\n{\r\n  tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]\r\n  {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media (min-width: 450px)\r\n{\r\n  tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]\r\n  {\r\n    font-size: 6px;\r\n  }\r\n}\r\n\r\n@media (min-width: 868px)\r\n{\r\n  tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]\r\n  {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1120px)\r\n{\r\n  tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]\r\n  {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.spinner[_ngcontent-%COMP%]\r\n{\r\n  margin-left: 20px; border-radius: 0.25rem; text-align: center; cursor: pointer;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]:hover::-webkit-inner-spin-button, .spinner[_ngcontent-%COMP%]:hover::-webkit-outer-spin-button {\r\n  opacity: 1;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]:focus\r\n{\r\n  background-color: rgba(209, 242, 235 ,0.4);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#fakeSubmitButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: darkgray;\r\n  cursor: not-allowed;\r\n}\r\n\r\n#submitButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: #37af65;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]\r\n{\r\n  width: 100%;\r\n  font-size: 22px;\r\n  padding: 0.75rem;\r\n  color: inherit;\r\n  border-radius: 0.125rem;\r\n  margin-top: 30px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n{\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after\r\n{\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]\r\n{\r\n  padding-right: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after\r\n{\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]\r\n{\r\n  padding-right: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]:after\r\n{\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\ni[_ngcontent-%COMP%]\r\n{\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hsLWxhbmRpbmctcGFnZS9jaGwtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOztBQUVwRjs7RUFFRSw2Q0FBNkM7RUFDN0Msc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0VBSUUsc0JBQXNCO0FBQ3hCOztBQUNBLHVIQUF1SDs7QUFDdkgsVUFBVTs7QUFDVjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0EsdUhBQXVIOztBQUN2SCxnQ0FBZ0M7O0FBQ2hDOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSx1SEFBdUg7O0FBQ3ZILFlBQVk7O0FBQ1o7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFDQSx1SEFBdUg7O0FBQ3ZILFNBQVM7O0FBRVQ7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQSx1SEFBdUg7O0FBQ3ZILGNBQWM7O0FBQ2Q7O0VBRUUsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0VBR0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMERBQTBEO0FBQzVEOztBQUNBLHVIQUF1SDs7QUFDdkgsd0JBQXdCOztBQUN4Qjs7RUFFRSxVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0FBRXBCOztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCOztrQ0FFZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsMENBQTBDO0FBQzVDOztBQUNBOztFQUVFOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFDQTs7RUFFRTs7SUFFRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUU7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztBQUNBOztFQUVFOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFDQSx1SEFBdUg7O0FBQ3ZILFdBQVc7O0FBQ1g7O0VBRUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZTtBQUNoRjs7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsMENBQTBDO0FBQzVDOztBQUNBLHVIQUF1SDs7QUFDdkgsZ0JBQWdCOztBQUNoQjs7RUFFRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUNBOztFQUVFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBQ0E7O0VBRUUsMERBQTBEO0FBQzVEOztBQUNBOztFQUVFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hsLWxhbmRpbmctcGFnZS9jaGwtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwaSw0MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdFxyXG57XHJcbiAgLS1jb2xvci1kYXJrYmx1ZS1hbHBoYTogcmdiYSgyNywgMjcsIDUwLCAwLjgpO1xyXG4gIC0tY29sb3ItZ3JlZW46ICMzN2FmNjU7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXJcclxue1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qVG9vbGJhciovXHJcbi50b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiNWV0xvZ29cclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypDb21wYW55IHRpdGVsIGFuZCBpbXBvcnQgdHlwZSovXHJcbmg0LGgyXHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypDb250YWluZXIqL1xyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDMuMTI1cmVtIGF1dG8gMCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBjb2xvcjogcmdiYSgyNywgMjcsIDUwLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIH1cclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogRm9ybSAqL1xyXG5cclxuZm9ybSB7XHJcbiAgYmFja2dyb3VuZDogI0YyRjNGNDtcclxuICBwYWRkaW5nOiAyLjVyZW0gMC42MjVyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAyNywgNTAsIDAuOCk7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgfVxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKkNob29zZSBGaWxlKi9cclxuLmN1c3RvbS1maWxlLWlucHV0ICsgbGFiZWxcclxue1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMjVyZW07XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dCArIGxhYmVsIHNwYW4ge1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcclxuICAvKiA0cHggKi9cclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcclxuICAvKiA0cHggKi9cclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQtMSArIGxhYmVsIHtcclxuICBjb2xvcjogI2YxZTVlNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2Mzg0O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQtMTpmb2N1cyArIGxhYmVsLFxyXG4uY3VzdG9tLWZpbGUtaW5wdXQtMS5oYXMtZm9jdXMgKyBsYWJlbCxcclxuLmN1c3RvbS1maWxlLWlucHV0LTEgKyBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwMDYzODQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMDA2Mzg0O1xyXG4gIGJveC1zaGFkb3c6IDAgLTZweCAxMHB4IDAgI0FFRDZGMSAgLCAwIDZweCAxMHB4IDAgI0FFRDZGMSA7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qTWFudWFsIGNvbHVtbiBzZXR0aW5nKi9cclxudGFibGVcclxue1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOnNvbGlkIDJweCByZ2JhKDI3LCAyNywgNTAsIDAuOCk7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG50ciwgdGRcclxue1xyXG5cclxuICB3aWR0aDogMTclO1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXI6c29saWQgMnB4IHJnYmEoMjcsIDI3LCA1MCwgMC44KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxudGQgPiBpbnB1dFxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAvKmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xyXG59XHJcbnRkID4gaW5wdXQ6Zm9jdXNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyNDIsIDIzNSAsMC40KTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXHJcbntcclxuICB0cix0ZFxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KVxyXG57XHJcbiAgdHIsdGRcclxuICB7XHJcbiAgICBmb250LXNpemU6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4NjhweClcclxue1xyXG4gIHRyLHRkXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyMHB4KVxyXG57XHJcbiAgdHIsdGRcclxuICB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKkRhdGEgcm93Ki9cclxuLnNwaW5uZXJcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3Bpbm5lcjpob3Zlcjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLnNwaW5uZXI6aG92ZXI6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnNwaW5uZXI6Zm9jdXNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyNDIsIDIzNSAsMC40KTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypTdWJtaXQgYnV0dG9uKi9cclxuI2Zha2VTdWJtaXRCdXR0b25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuI3N1Ym1pdEJ1dHRvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3YWY2NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN1Ym1pdC1idXR0b25cclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnN1Ym1pdC1idXR0b24gc3BhblxyXG57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc3VibWl0LWJ1dHRvbiBzcGFuOmFmdGVyXHJcbntcclxuICBjb250ZW50OiAnXFwwMGJiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnN1Ym1pdC1idXR0b246aG92ZXIgc3BhblxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246aG92ZXIgc3BhbjphZnRlclxyXG57XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG4uc3VibWl0LWJ1dHRvbjpmb2N1cyBzcGFuXHJcbntcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzXHJcbntcclxuICBib3gtc2hhZG93OiAwIC02cHggMTBweCAwICNBRUQ2RjEgICwgMCA2cHggMTBweCAwICNBRUQ2RjEgO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzIHNwYW46YWZ0ZXJcclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuaVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChlLandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chl-landing-page-root',
                templateUrl: './chl-landing-page.component.html',
                styleUrls: ['./chl-landing-page.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { typeImport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], companyTitel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], component: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], componentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/chl-landing-page/replace.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/chl-landing-page/replace.pipe.ts ***!
  \**************************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReplacePipe {
    transform(value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        let result = [];
        for (let str of value) {
            result.push(str.replace(new RegExp(strToReplace, 'g'), replacementStr));
        }
        return result;
        //return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
}
ReplacePipe.ɵfac = function ReplacePipe_Factory(t) { return new (t || ReplacePipe)(); };
ReplacePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replace", type: ReplacePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplacePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'replace'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/expansion-panel/expansion-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/expansion-panel/expansion-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");



const _c0 = ["*"];
class ExpansionPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExpansionPanelComponent.ɵfac = function ExpansionPanelComponent_Factory(t) { return new (t || ExpansionPanelComponent)(); };
ExpansionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpansionPanelComponent, selectors: [["app-expansion-panel"]], inputs: { groupName: "groupName", groupDescription: "groupDescription", disable: "disable", idName: "idName" }, ngContentSelectors: _c0, decls: 7, vars: 5, consts: [[3, "id", "expanded", "disabled"]], template: function ExpansionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.idName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", !ctx.disable)("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.groupName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.groupDescription, " ");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"]], styles: [".mat-expansion-panel[_ngcontent-%COMP%]\r\n{\r\n  border: solid black;\r\n  border-width: 1px;\r\n  border-radius: 5px;\r\n  margin-bottom: 30px;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%]:hover\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%]\r\n{\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  color: #006384;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLDBEQUEwRDtBQUM1RDtBQUNBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsXHJcbntcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsOmhvdmVyXHJcbntcclxuICBib3gtc2hhZG93OiAwIC02cHggMTBweCAwICNBRUQ2RjEgICwgMCA2cHggMTBweCAwICNBRUQ2RjEgO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZVxyXG57XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMDYzODQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpansionPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expansion-panel',
                templateUrl: './expansion-panel.component.html',
                styleUrls: ['./expansion-panel.component.css']
            }]
    }], function () { return []; }, { groupName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], idName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ifu-landing-page/backend.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/ifu-landing-page/backend.service.ts ***!
  \*****************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class BackendService {
    constructor(http) {
        this.http = http;
        this.backendUrl = '/v1/lp/upload';
        this.httpOptions = {
            //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
            observe: 'events',
            params: {}
        };
    }
    upload(data, token) {
        this.httpOptions.params = { token: token };
        return this.http.post(this.backendUrl, data, this.httpOptions);
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ifu-landing-page/ifu-landing-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ifu-landing-page/ifu-landing-page.component.ts ***!
  \****************************************************************/
/*! exports provided: IfuLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfuLandingPageComponent", function() { return IfuLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend.service */ "./src/app/ifu-landing-page/backend.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader-upload-file/loader-upload-file.component */ "./src/app/loader-upload-file/loader-upload-file.component.ts");










function IfuLandingPageComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Importer Feedback Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IfuLandingPageComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IfuLandingPageComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IfuLandingPageComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IfuLandingPageComponent {
    constructor(backendService, dialog, router) {
        this.backendService = backendService;
        this.dialog = dialog;
        this.router = router;
        this.title = 'Fleets-Landing-Page';
        this.defaultLabelText = "Choose a file";
        this.fileNameDisplay = null;
        this.submitButtonOn = false;
        this.loaderOn = false;
        this.wrongFileText = ['Invalid input Format, only CSV, XLSX, XLS is allowed!'];
        this.successfulText = ['File uploaded successfully! You will receive a confirmation email upon successful import.'];
        this.boxShadowStyle = '0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ';
        this.fileUpload = null;
        this.uploadMessage = null;
        this.errorCode = null;
        this.fakeButtonOn = true;
        this.componentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.fileNameDisplay = this.defaultLabelText;
    }
    setComponentOff() {
        this.component = 'blockedPage';
        this.componentChange.emit(this.component);
        console.log(this.component);
    }
    setSuccessPageOn() {
        this.component = 'successPage';
        this.componentChange.emit(this.component);
        console.log(this.component);
    }
    verifyFile(event) {
        let fileName = event.target.files[0].name;
        let allowedExtensions = /(\.xlsx|\.xls|\.xlt|\.csv)$/i;
        if (!allowedExtensions.exec(fileName)) {
            fileName = '';
            this.fileNameDisplay = this.defaultLabelText;
            this.openDialog(this.wrongFileText, 1);
            this.fakeButtonOn = true;
            this.submitButtonOn = false;
        }
        else {
            this.fileNameDisplay = fileName;
            this.fileUpload = event.target.files.item(0);
            console.log(this.fileUpload);
            this.fakeButtonOn = false;
            this.submitButtonOn = true;
        }
        event.target.value = null;
    }
    openDialog(inputData, inputErrorCode) {
        this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AlertDialogComponent"], {
            data: {
                errorCode: inputErrorCode,
                dataKey: inputData,
            }
        });
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('csvfile', this.fileUpload);
        this.loaderOn = true;
        this.backendService.upload(formData, this.token).subscribe((res) => {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log(res);
                this.uploadMessage = res.body.errorMessages;
                this.errorCode = res.body.errorCode;
                if (this.uploadMessage && this.errorCode) {
                    this.loaderOn = false;
                    if (res.body.errorMessages[0] == "BlockedByBo") {
                        this.setComponentOff();
                        // this.router.navigate(['./block-page'],{replaceUrl:true})
                        //this.zone.run(() => { this.router.navigate(['./block-page'], { replaceUrl: true }); });
                        console.log("navigate successful");
                    }
                    else {
                        if (this.errorCode == "0") {
                            this.uploadMessage = this.successfulText;
                            this.submitButtonOn = false;
                            this.fakeButtonOn = true;
                            this.fileNameDisplay = this.defaultLabelText;
                            this.setSuccessPageOn();
                        }
                        else {
                            this.openDialog(this.uploadMessage, this.errorCode);
                        }
                    }
                }
            }
        }, (err) => console.log(err));
    }
}
IfuLandingPageComponent.ɵfac = function IfuLandingPageComponent_Factory(t) { return new (t || IfuLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
IfuLandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IfuLandingPageComponent, selectors: [["ifu-landing-page-root"]], inputs: { typeImport: "typeImport", companyTitel: "companyTitel", token: "token", routerOn: "routerOn", component: "component" }, outputs: { componentChange: "componentChange" }, decls: 18, vars: 6, consts: [["role", "banner", 1, "toolbar"], ["id", "VWLogo", "alt", "VW Logo", "src", "../../assets/images/VW_Fleet_Logo.png"], ["role", "main", 1, "content"], [4, "ngIf"], ["align", "center", 1, "container"], ["type", "file", "id", "customFile", "name", "filename", "required", "", 1, "custom-file-input", "custom-file-input-1", 2, "display", "none", 3, "change"], ["for", "customFile"], ["width", "20", "height", "17", "viewBox", "0 0 20 17"], ["type", "submit", "id", "submitButton", "class", "submit-button", 3, "click", 4, "ngIf"], ["type", "button", "id", "fakeSubmitButton", "class", "submit-button", "disabled", "disabled", 4, "ngIf"], [3, "loaderEnable"], ["type", "submit", "id", "submitButton", 1, "submit-button", 3, "click"], ["type", "button", "id", "fakeSubmitButton", "disabled", "disabled", 1, "submit-button"], [1, "fa", "fa-minus-circle"]], template: function IfuLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IfuLandingPageComponent_h2_5_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IfuLandingPageComponent_Template_input_change_8_listener($event) { return ctx.verifyFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IfuLandingPageComponent_button_15_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IfuLandingPageComponent_button_16_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-loader-upload-file", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyTitel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeImport === "IFU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileNameDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitButtonOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fakeButtonOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loaderEnable", ctx.loaderOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["LoaderUploadFileComponent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap');\r\n\r\n[_ngcontent-%COMP%]:root\r\n{\r\n  --color-darkblue-alpha: rgba(27, 27, 50, 0.8);\r\n  --color-green: #37af65;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after\r\n{\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  background-color:white;\r\n  height: 120px;\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#VWLogo[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n  margin-left: 30px;\r\n  padding-top: 15px;\r\n  width: 300px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 70px;\r\n  text-align: center;\r\n  font-size: 60px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 3.125rem auto 0 auto;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  color: rgba(27, 27, 50, 0.8) !important;\r\n  height: 60%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.custom-file-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]\r\n{\r\n  max-width: 80%;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  padding: 0.625rem 1.25rem;\r\n  margin: 20px;\r\n}\r\n\r\n.custom-file-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 1em;\r\n  height: 1em;\r\n  vertical-align: middle;\r\n  fill: currentColor;\r\n  margin-top: -0.25em;\r\n  \r\n  margin-right: 0.25em;\r\n  \r\n}\r\n\r\n.custom-file-input-1[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: #f1e5e6;\r\n  background-color: #006384;\r\n  border: solid white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.custom-file-input-1[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .custom-file-input-1.has-focus[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], .custom-file-input-1[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  color: #006384;\r\n  border: solid #006384;\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#fakeSubmitButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: darkgray;\r\n  cursor: not-allowed;\r\n}\r\n\r\n#submitButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: #37af65;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]\r\n{\r\n  width: 27%;\r\n  font-size: 22px;\r\n  padding: 0.75rem;\r\n  color: inherit;\r\n  border-radius: 10px;\r\n  margin-top: 150px;\r\n  height: 70px;\r\n  font-size: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n{\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after\r\n{\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]\r\n{\r\n  padding-right: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after\r\n{\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]\r\n{\r\n  padding-right: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n#submitButton[_ngcontent-%COMP%]:hover\r\n{\r\n box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]:after\r\n{\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\ni[_ngcontent-%COMP%]\r\n{\r\n  margin-left: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]{\r\n  font-size: 35px!important;\r\n  margin-right:10px;\r\n  margin-top:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWZ1LWxhbmRpbmctcGFnZS9pZnUtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GOztBQUVwRjs7RUFFRSw2Q0FBNkM7RUFDN0Msc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0VBSUUsc0JBQXNCO0FBQ3hCOztBQUNBLHVIQUF1SDs7QUFDdkgsVUFBVTs7QUFDVjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0EsdUhBQXVIOztBQUN2SCxnQ0FBZ0M7O0FBQ2hDOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSx1SEFBdUg7O0FBQ3ZILFlBQVk7O0FBQ1o7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBQ0EsdUhBQXVIOztBQUN2SCxjQUFjOztBQUNkOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLG9CQUFvQjtFQUNwQixRQUFRO0FBQ1Y7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7OztFQUdFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDBEQUEwRDtBQUM1RDs7QUFDQSx1SEFBdUg7O0FBQ3ZILGdCQUFnQjs7QUFDaEI7O0VBRUUsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLDBEQUEwRDtBQUM1RDs7QUFDQTs7Q0FFQywwREFBMEQ7QUFDM0Q7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9pZnUtbGFuZGluZy1wYWdlL2lmdS1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDBpLDQwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290XHJcbntcclxuICAtLWNvbG9yLWRhcmtibHVlLWFscGhhOiByZ2JhKDI3LCAyNywgNTAsIDAuOCk7XHJcbiAgLS1jb2xvci1ncmVlbjogIzM3YWY2NTtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlclxyXG57XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypUb29sYmFyKi9cclxuLnRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuI1ZXTG9nb1xyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKkNvbXBhbnkgdGl0ZWwgYW5kIGltcG9ydCB0eXBlKi9cclxuaDQsaDJcclxue1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKkNvbnRhaW5lciovXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMy4xMjVyZW0gYXV0byAwIGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGNvbG9yOiByZ2JhKDI3LCAyNywgNTAsIDAuOCkgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgfVxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKkNob29zZSBGaWxlKi9cclxuLmN1c3RvbS1maWxlLWlucHV0ICsgbGFiZWxcclxue1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMjVyZW07XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5jdXN0b20tZmlsZS1pbnB1dCArIGxhYmVsIHNwYW4ge1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcclxuICAvKiA0cHggKi9cclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcclxuICAvKiA0cHggKi9cclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQtMSArIGxhYmVsIHtcclxuICBjb2xvcjogI2YxZTVlNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2Mzg0O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQtMTpmb2N1cyArIGxhYmVsLFxyXG4uY3VzdG9tLWZpbGUtaW5wdXQtMS5oYXMtZm9jdXMgKyBsYWJlbCxcclxuLmN1c3RvbS1maWxlLWlucHV0LTEgKyBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwMDYzODQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMDA2Mzg0O1xyXG4gIGJveC1zaGFkb3c6IDAgLTZweCAxMHB4IDAgI0FFRDZGMSAgLCAwIDZweCAxMHB4IDAgI0FFRDZGMSA7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qU3VibWl0IGJ1dHRvbiovXHJcbiNmYWtlU3VibWl0QnV0dG9uXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbiNzdWJtaXRCdXR0b25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzN2FmNjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uXHJcbntcclxuICB3aWR0aDogMjclO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uc3VibWl0LWJ1dHRvbiBzcGFuXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uIHNwYW46YWZ0ZXJcclxue1xyXG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc3VibWl0LWJ1dHRvbjpob3ZlciBzcGFuXHJcbntcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyXHJcbntcclxuICBvcGFjaXR5OiAxO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzIHNwYW5cclxue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuLnN1Ym1pdC1idXR0b246Zm9jdXNcclxue1xyXG4gIGJveC1zaGFkb3c6IDAgLTZweCAxMHB4IDAgI0FFRDZGMSAgLCAwIDZweCAxMHB4IDAgI0FFRDZGMSA7XHJcbn1cclxuI3N1Ym1pdEJ1dHRvbjpob3ZlclxyXG57XHJcbiBib3gtc2hhZG93OiAwIC02cHggMTBweCAwICNBRUQ2RjEgICwgMCA2cHggMTBweCAwICNBRUQ2RjEgO1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzIHNwYW46YWZ0ZXJcclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuaVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbntcclxuICBmb250LXNpemU6IDM1cHghaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IfuLandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ifu-landing-page-root',
                templateUrl: './ifu-landing-page.component.html',
                styleUrls: ['./ifu-landing-page.component.css']
            }]
    }], function () { return [{ type: _backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { typeImport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], companyTitel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], routerOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], component: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], componentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/loader-upload-file/loader-upload-file.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/loader-upload-file/loader-upload-file.component.ts ***!
  \********************************************************************/
/*! exports provided: LoaderUploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderUploadFileComponent", function() { return LoaderUploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




function LoaderUploadFileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoaderUploadFileComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderUploadFileComponent.ɵfac = function LoaderUploadFileComponent_Factory(t) { return new (t || LoaderUploadFileComponent)(); };
LoaderUploadFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderUploadFileComponent, selectors: [["app-loader-upload-file"]], inputs: { loaderEnable: "loaderEnable" }, decls: 1, vars: 1, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "center-spinner"], ["diameter", "200", "mode", "indeterminate"]], template: function LoaderUploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderUploadFileComponent_div_0_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaderEnable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"]], styles: ["#uploadingText[_ngcontent-%COMP%]\r\n{\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  font-size: 35px;\r\n  color: white;\r\n}\r\n.center-spinner[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n.overlay[_ngcontent-%COMP%]\r\n{\r\n  height:100vh;\r\n  width:100%;\r\n  background-color:rgba(0, 0, 0, 0.286);\r\n  z-index:    10;\r\n  top:        0;\r\n  left:       0;\r\n  position:   fixed;\r\n}\r\n[_nghost-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]\r\n{\r\n  stroke: #0CC20C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyLXVwbG9hZC1maWxlL2xvYWRlci11cGxvYWQtZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUdULDRDQUE0QztBQUM5QztBQUNBOztFQUVFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXItdXBsb2FkLWZpbGUvbG9hZGVyLXVwbG9hZC1maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXBsb2FkaW5nVGV4dFxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2VudGVyLXNwaW5uZXJcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5vdmVybGF5XHJcbntcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yODYpO1xyXG4gIHotaW5kZXg6ICAgIDEwO1xyXG4gIHRvcDogICAgICAgIDA7XHJcbiAgbGVmdDogICAgICAgMDtcclxuICBwb3NpdGlvbjogICBmaXhlZDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZVxyXG57XHJcbiAgc3Ryb2tlOiAjMENDMjBDO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderUploadFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader-upload-file',
                templateUrl: './loader-upload-file.component.html',
                styleUrls: ['./loader-upload-file.component.css']
            }]
    }], function () { return []; }, { loaderEnable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/success-page/success-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/success-page/success-page.component.ts ***!
  \********************************************************/
/*! exports provided: SuccessPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageComponent", function() { return SuccessPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SuccessPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessPageComponent.ɵfac = function SuccessPageComponent_Factory(t) { return new (t || SuccessPageComponent)(); };
SuccessPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessPageComponent, selectors: [["app-success-page"]], decls: 8, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["id", "VWLogo", "alt", "VW Logo", "src", "../../assets/images/VW_Fleet_Logo.png"], ["align", "center", 1, "container"], ["src", "../../assets/images/successfulUpload.png", "alt", "successful Upload"]], template: function SuccessPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "File uploaded successfully!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You will receive a confirmation email upon successful import.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: white;\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 15rem auto 0 auto;\r\n  height: 60%;\r\n}\r\n\r\n\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  background-color:white;\r\n  height: 120px;\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#VWLogo[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n  margin-left: 30px;\r\n  padding-top: 15px;\r\n  width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy1wYWdlL3N1Y2Nlc3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQSxVQUFVOztBQUNWO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUNBOztFQUVFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3MtcGFnZS9zdWNjZXNzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi8qQ29udGFpbmVyKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxNXJlbSBhdXRvIDAgYXV0bztcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLypUb29sYmFyKi9cclxuLnRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuI1ZXTG9nb1xyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-page',
                templateUrl: './success-page.component.html',
                styleUrls: ['./success-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\h.cao\Desktop\Intellij\fleets-landing-page\FleetSLPUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map