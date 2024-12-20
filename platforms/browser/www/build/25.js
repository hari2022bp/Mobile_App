webpackJsonp([25],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdhocChecklistsPageModule", function() { return AdhocChecklistsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adhoc_checklists__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdhocChecklistsPageModule = /** @class */ (function () {
    function AdhocChecklistsPageModule() {
    }
    AdhocChecklistsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adhoc_checklists__["a" /* AdhocChecklistsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adhoc_checklists__["a" /* AdhocChecklistsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__adhoc_checklists__["a" /* AdhocChecklistsPage */]
            ]
        })
    ], AdhocChecklistsPageModule);
    return AdhocChecklistsPageModule;
}());

//# sourceMappingURL=adhoc-checklists.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdhocChecklistsPage; });
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


var AdhocChecklistsPage = /** @class */ (function () {
    function AdhocChecklistsPage(navCtrl, navParams, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
    }
    AdhocChecklistsPage.prototype.onAdhocRunwayChecklist = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AdhocRunwayChecklistPage');
        loader.dismiss();
    };
    AdhocChecklistsPage.prototype.onAdhocTaxiwayChecklist = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AdhocTaxiwayChecklistPage');
        loader.dismiss();
    };
    AdhocChecklistsPage.prototype.onAdhocApronChecklist = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AdhocApronChecklistPage');
        loader.dismiss();
    };
    AdhocChecklistsPage.prototype.onAdhocRampChecklist = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AdhocRampAssessmentChecklistPage');
        loader.dismiss();
    };
    AdhocChecklistsPage.prototype.onAdhocVehicleChecklist = function () {
        var loader = this.loading.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push('AdhocVehicleAssessmentChecklistPage');
        loader.dismiss();
    };
    AdhocChecklistsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdhocChecklistsPage');
    };
    AdhocChecklistsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adhoc-checklists',template:/*ion-inline-start:"F:\DevelopmentWorkloads\ASMA_Mobile_Application\src\pages\adhoc-checklists\adhoc-checklists.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center color="primary">\n      <p style="color:blue">Adhoc Checklists</p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/adhoc_runway.jpg">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold; text-align: left;">Adhoc Runway Checklist</h3>\n      <button ion-button clear (click)="onAdhocRunwayChecklist()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/taxiway.jpg">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold; text-align: left;">Adhoc Taxiway Checklist</h3>\n      <button ion-button clear (click)="onAdhocTaxiwayChecklist()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/apron_aerial.jpg">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold; text-align: left;">Adhoc Apron Checklist</h3>\n      <button ion-button clear (click)="onAdhocApronChecklist()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/ramp_assessment.jpeg">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold; text-align: left;">Adhoc Ramp Audit</h3>\n      <button ion-button clear (click)="onAdhocRampChecklist()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/images/vehicle.jpg">\n      </ion-avatar>\n      <h3 style="color:black; font-weight:bold; text-align: left;">Adhoc Vehicle Assessment</h3>\n      <button ion-button clear (click)="onAdhocVehicleChecklist()" item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\DevelopmentWorkloads\ASMA_Mobile_Application\src\pages\adhoc-checklists\adhoc-checklists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AdhocChecklistsPage);
    return AdhocChecklistsPage;
}());

//# sourceMappingURL=adhoc-checklists.js.map

/***/ })

});
//# sourceMappingURL=25.js.map