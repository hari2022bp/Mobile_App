webpackJsonp([24],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerodromeDataPageModule", function() { return AerodromeDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aerodrome_data__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AerodromeDataPageModule = /** @class */ (function () {
    function AerodromeDataPageModule() {
    }
    AerodromeDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aerodrome_data__["a" /* AerodromeDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aerodrome_data__["a" /* AerodromeDataPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aerodrome_data__["a" /* AerodromeDataPage */]
            ]
        })
    ], AerodromeDataPageModule);
    return AerodromeDataPageModule;
}());

//# sourceMappingURL=aerodrome-data.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AerodromeDataPage; });
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




var AerodromeDataPage = /** @class */ (function () {
    function AerodromeDataPage(navCtrl, navParams, iab, apiUrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.apiUrl = apiUrl;
        var browser = this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/Aerodrome Manual January 2021.pdf'), '_system');
        //  this.iab.create(encodeURI(this.apiUrl.apiUrl + '/docs/AIRCRAFT DATA.pdf'),'_system');
        browser.show();
        this.navCtrl.setRoot('HomePage');
    }
    AerodromeDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AerodromeDataPage');
    };
    AerodromeDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aerodrome-data',template:/*ion-inline-start:"D:\Mainbh\Project_2024_Live\Mobile Application -SO safety\src\pages\aerodrome-data\aerodrome-data.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-title text-center color="primary">\n          <p style="color:blue">Aerodrome Manual</p>\n      </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Mainbh\Project_2024_Live\Mobile Application -SO safety\src\pages\aerodrome-data\aerodrome-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__api_api_service__["a" /* ApiService */]])
    ], AerodromeDataPage);
    return AerodromeDataPage;
}());

//# sourceMappingURL=aerodrome-data.js.map

/***/ })

});
//# sourceMappingURL=24.js.map