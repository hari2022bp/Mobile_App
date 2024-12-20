webpackJsonp([17],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loading) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.username = localStorage.getItem("username");
    }
    HomePage.prototype.onRunwayChecklistPage = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('RunwayChecklistPage');
        loader.dismiss();
    };
    HomePage.prototype.onTaxiwayChecklistPage = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('TaxiwayChecklistPage');
        loader.dismiss();
    };
    HomePage.prototype.onApronChecklistPage = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('ApronChecklistPage');
        loader.dismiss();
    };
    HomePage.prototype.onAdhocHomeModule = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AdhocChecklistsPage');
        loader.dismiss();
    };
    HomePage.prototype.onRampHandlingChecklistPage = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('RampHandlingChecklistPage');
        loader.dismiss();
    };
    HomePage.prototype.onVehicleComplianceChecklist = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('VehicleAssessmentChecklistPage');
        loader.dismiss();
    };
    HomePage.prototype.onAerodromeData = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AerodromeDataPage');
        loader.dismiss();
    };
    HomePage.prototype.onEmailPage = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('EmailPage');
        loader.dismiss();
    };
    HomePage.prototype.onAircraftData = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AircraftDataPage');
        loader.dismiss();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ITO.Developer2\Desktop\desktop data3-11-2020\asma related\ASMA_Code_Handover\asma version1\Mobile Application -SO safety\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>\n      <p style="color:blue; font-size: 22px">Welcome To ASMA, {{ username }}! </p>\n    </ion-title>\n  </ion-navbar>\n  <link rel="stylesheet" href="../../assets/css/bootstrap.min.css">\n</ion-header>\n\n<ion-content padding id="layered-image">\n  <div class="container-fluid">\n  \n    <div class="row">\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n       \n          <img src="assets/images/Runway_New.png" (click) ="onRunwayChecklistPage()" />\n          <!-- <div class="card-title">Runway Inspection Checklist</div> -->\n      \n      </div>\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n       \n          <img src="assets/images/Taxiway_New.png" (click) ="onTaxiwayChecklistPage()" />\n          <!-- <div class="card-title">Taxiway Inspection Checklist</div> -->\n       \n      </div>\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n     \n          <img src="assets/images/Apron_New.png" (click) ="onApronChecklistPage()" />\n          <!-- <div class="card-title">Apron Inspection Checklist</div> -->\n      \n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n     \n          <img src="assets/images/Adhoc_Crop.png" (click) = "onAdhocHomeModule()" />\n          <!-- <div class="card-title">Adhoc Runway Inspection Checklist</div> -->\n      \n      </div>\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n        \n          <img src="assets/images/RampAssessment_New.png" (click) = "onRampHandlingChecklistPage()" />\n          <!-- <div class="card-title">Ramp Handling Assessment Checklist</div> -->\n     \n      </div>\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n       \n          <img src="assets/images/Vehicle_New.png" (click) = "onVehicleComplianceChecklist()" />\n          <!-- <div class="card-title">Vehicle Compliance Checklist</div> -->\n       \n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n \n          <img src="assets/images/Email_New.png" (click) = "onEmailPage()" />\n          <!-- <div class="card-title">Adhoc Runway Inspection Checklist</div> -->\n     \n      </div>\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n\n          <img src="assets/images/Aircraft_New.png" (click) ="onAircraftData()" />\n          <!-- <div class="card-title">Ramp Handling Assessment Checklist</div> -->\n      \n      </div>\n      <div class="col-xs-4 col-sm-4 col-md-4" style="padding: 2%">\n       \n          <img src="assets/images/Aerodrome_New.png" (click) ="onAerodromeData()" />\n          <!-- <div class="card-title">Vehicle Compliance Checklist</div> -->\n      \n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ITO.Developer2\Desktop\desktop data3-11-2020\asma related\ASMA_Code_Handover\asma version1\Mobile Application -SO safety\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map