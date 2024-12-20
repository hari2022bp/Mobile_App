webpackJsonp([12],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var map_1 = __webpack_require__(106);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loading, alert, datePipe, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.alert = alert;
        this.datePipe = datePipe;
        this.http = http;
        this.storage = storage;
        this.logoState = "in";
        this.cloudState = "in";
        this.loginState = "in";
        this.formState = "in";
        var date = new Date();
        this.setDob = datePipe.transform(date, 'dd-MM-yyyy');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    LoginPage.prototype.initializeForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'EMP_ID': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'uM_PASSWORD': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loading.create({
            content: 'Logging In, Please Wait!'
        });
        loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        var value = this.loginForm.value;
        var postParams = {
            EMP_ID: value.EMP_ID,
            uM_PASSWORD: value.uM_PASSWORD
        };
        this.http.post('http://localhost:5155/api/Login', JSON.stringify(postParams), { headers: headers })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.LoginData = data;
            _this.saveLoginDataForOfflineUse();
            if (data.length != 0) {
                localStorage.setItem("guestid", data[0].UM_I);
                localStorage.setItem("username", data[0].UM_FIRST_NAME + ' ' + data[0].UM_LAST_NAME);
                localStorage.setItem("email", data[0].EMAIL_ID);
                localStorage.setItem("empcode", data[0].EmployeeID);
                _this.navCtrl.setRoot('HomePage');
                loading.dismiss();
            }
            else {
                loading.dismiss();
                var alert_1 = _this.alert.create({
                    title: 'Login Failed, Checking Offline Connectivity.',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.getLoginForOfflineUse();
            }
        }, function (error) {
            loading.dismiss();
            var alert = _this.alert.create({
                title: 'Login Failed, Checking Offline Connectivity.',
                buttons: ['OK']
            });
            alert.present();
            _this.getLoginForOfflineUse();
        });
        this.saveLoginDataForOfflineUse();
    };
    LoginPage.prototype.saveLoginDataForOfflineUse = function () {
        var value = this.LoginData;
        this.storage.set('LoginInformation', value);
    };
    LoginPage.prototype.getLoginForOfflineUse = function () {
        var _this = this;
        this.storage.get('LoginInformation').then(function (val) {
            localStorage.setItem("guestid", val[0].UM_I);
            //localStorage.setItem("username", val[0].UM_FIRST_NAME);
            localStorage.setItem("username", val[0].UM_FIRST_NAME + ' ' + val[0].UM_LAST_NAME);
            localStorage.setItem("email", val[0].EMAIL_ID);
            _this.navCtrl.setRoot('HomePage');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ITO.Developer2\Desktop\desktop data3-11-2020\asma related\ASMA_Code_Handover\asma version1\Mobile Application -SO safety\src\pages\login\login.html"*/'<ion-header>\n    \n  <ion-navbar>\n      <ion-title text-center color="primary">\n          <p style="color:blue; font-size: 16px">Airside Safety Mobile Application</p>\n          <!-- <marquee style="color:red">***This is testing application.Data inserted here will not be replicated in live database.Please do not enter live data ***</marquee> -->\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding [@flyInBottomFast]="cloudState" id="cloud-layer">\n    <form [formGroup] = "loginForm" (ngSubmit)="login()">\n      <ion-list inset [@bounceInBottom]="formState">\n        <ion-item>\n          <ion-label floating color="danger">Enter Your Employee Id</ion-label>\n          <ion-input type="text" formControlName="EMP_ID" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating color="danger">Password</ion-label>\n          <ion-input type="password" formControlName="uM_PASSWORD" required></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block type="submit" [@fadeIn] = "loginState" [disabled]="!loginForm.valid">Sign In</button>\n    </form>\n    <br />\n    \n    <ion-label floating style="color: white; font-size: 18px; text-align: center; float: right">Version: 11.0.0</ion-label>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\ITO.Developer2\Desktop\desktop data3-11-2020\asma related\ASMA_Code_Handover\asma version1\Mobile Application -SO safety\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]],
            animations: [
                //For the logo
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('flyInBottomSlow', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translate3d(0,2000px,0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('2000ms ease-in-out')
                    ])
                ]),
                //For the background detail
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('flyInBottomFast', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translate3d(0,2000px,0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('1000ms ease-in-out')
                    ])
                ]),
                //For the login form
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('bounceInBottom', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('2000ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                        ]))
                    ])
                ]),
                //For login button
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('1000ms 2000ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.js.map