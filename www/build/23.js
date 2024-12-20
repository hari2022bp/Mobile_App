webpackJsonp([23],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AircraftDataPageModule", function() { return AircraftDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aircraft_data__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AircraftDataPageModule = /** @class */ (function () {
    function AircraftDataPageModule() {
    }
    AircraftDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aircraft_data__["a" /* AircraftDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aircraft_data__["a" /* AircraftDataPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aircraft_data__["a" /* AircraftDataPage */]
            ]
        })
    ], AircraftDataPageModule);
    return AircraftDataPageModule;
}());

//# sourceMappingURL=aircraft-data.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AircraftDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api_service__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AircraftDataPage = /** @class */ (function () {
    function AircraftDataPage(navCtrl, navParams, iab, apiUrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.apiUrl = apiUrl;
        var browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'), '_system');
        browser.show();
        // window.open(encodeURI('https://docs.google.com/gview?embedded=true&url=http://10.65.127.8:1337/docs/AIRCRAFT DATA.pdf'), '_blank', 'location=yes,EnableViewPortScale=yes');
        // window.open(encodeURI("http://10.65.127.8:1337/docs/AIRCRAFT DATA.pdf"),'_system', 'location=yes');
        this.navCtrl.setRoot('HomePage');
    }
    AircraftDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AircraftDataPage');
    };
    AircraftDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aircraft-data',template:/*ion-inline-start:"D:\Mainbh\Project_2024_Live\Mobile Application -SO safety\src\pages\aircraft-data\aircraft-data.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-title text-center color="primary">\n          <p style="color:blue">Aircraft Data</p>\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Mainbh\Project_2024_Live\Mobile Application -SO safety\src\pages\aircraft-data\aircraft-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__api_api_service__["a" /* ApiService */]])
    ], AircraftDataPage);
    return AircraftDataPage;
}());

//# sourceMappingURL=aircraft-data.js.map

/***/ })

});
//# sourceMappingURL=23.js.map