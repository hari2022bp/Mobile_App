webpackJsonp([15],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcaoPageModule", function() { return IcaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icao__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IcaoPageModule = /** @class */ (function () {
    function IcaoPageModule() {
    }
    IcaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__icao__["a" /* IcaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__icao__["a" /* IcaoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__icao__["a" /* IcaoPage */]
            ]
        })
    ], IcaoPageModule);
    return IcaoPageModule;
}());

//# sourceMappingURL=icao.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IcaoPage = /** @class */ (function () {
    function IcaoPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    IcaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IcaoPage');
    };
    IcaoPage.prototype.onICAODoc1 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/DOC 9157 part 4.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc2 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-9157ADM-PART3.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc3 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ADM PART 5.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc4 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ADM PART 6.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc5 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ADM(9157) PART 2.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc6 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ADM-PART 3.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc7 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ADM-Part-1 RWYS.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc8 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ASM-PART 1.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc9 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ASM-PART 2.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc10 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ASM-PART 5.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc11 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ASM-PART 6.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc12 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO-ASM-PART 7.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc13 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/ICAO_9981.pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage.prototype.onICAODoc14 = function () {
        var browser = this.iab.create('http://localhost:5155/docs/Doc 9432 - Manual Radiotelephony Ed 4 (En).pdf');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    };
    IcaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-icao',template:/*ion-inline-start:"C:\Users\ITO.Developer2\Desktop\desktop data3-11-2020\asma related\ASMA_Code_Handover\asma version1\Mobile Application -SO safety\src\pages\icao\icao.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center color="primary">\n      <p style="color:blue">ICAO Study Library</p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">DOC 9157 part 4</h3>\n      <button ion-button clear (click)="onICAODoc1()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-9157ADM-PART3</h3>\n      <button ion-button clear (click)="onICAODoc2()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ADM PART 5</h3>\n      <button ion-button clear (click)="onICAODoc3()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ADM PART 6</h3>\n      <button ion-button clear (click)="onICAODoc4()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ADM(9157) PART 2</h3>\n      <button ion-button clear (click)="onICAODoc5()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ADM-PART 3</h3>\n      <button ion-button clear (click)="onICAODoc6()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ADM-Part-1 RWYS</h3>\n      <button ion-button clear (click)="onICAODoc7()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ASM-PART 1</h3>\n      <button ion-button clear (click)="onICAODoc8()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ASM-PART 2</h3>\n      <button ion-button clear (click)="onICAODoc9()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ASM-PART 5</h3>\n      <button ion-button clear (click)="onICAODoc10()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ASM-PART 6</h3>\n      <button ion-button clear (click)="onICAODoc11()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-ASM-PART 7</h3>\n      <button ion-button clear (click)="onICAODoc12()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">ICAO-Doc.9981</h3>\n      <button ion-button clear (click)="onICAODoc13()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/Icao_Logo.PNG">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold;">Radio Telephony Manual - Doc No. 9432</h3>\n      <button ion-button clear (click)="onICAODoc14()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ITO.Developer2\Desktop\desktop data3-11-2020\asma related\ASMA_Code_Handover\asma version1\Mobile Application -SO safety\src\pages\icao\icao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], IcaoPage);
    return IcaoPage;
}());

//# sourceMappingURL=icao.js.map

/***/ })

});
//# sourceMappingURL=15.js.map