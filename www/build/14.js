webpackJsonp([14],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(493);
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

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var map_1 = __webpack_require__(108);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_api_service__ = __webpack_require__(219);
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
    function LoginPage(navCtrl, navParams, loading, alert, datePipe, http, storage, apiUrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.alert = alert;
        this.datePipe = datePipe;
        this.http = http;
        this.storage = storage;
        this.apiUrl = apiUrl;
        this.logoState = "in";
        this.cloudState = "in";
        this.loginState = "in";
        this.formState = "in";
        this.Captchacode = "";
        this.code = "";
        localStorage.clear();
        var date = new Date();
        this.setDob = datePipe.transform(date, 'dd-MM-yyyy');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    LoginPage.prototype.ngAfterViewInit = function () {
        this.context = this.myCanvas.nativeElement.getContext('2d');
        this.draw();
    };
    LoginPage.prototype.initializeForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'EMP_ID': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'uM_PASSWORD': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'code': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var IsLogged = false;
        var value = this.loginForm.value;
        this.code = value.code;
        console.log("Cc_" + this.Captchacode + "_cd");
        console.log("d_" + this.code + "_cd");
        if (this.Captchacode.toLowerCase() == this.code.toLowerCase()) {
            var loading_1 = this.loading.create({
                content: 'Logging In, Please Wait!'
            });
            loading_1.present();
            var headers_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers_1.append("Content-Type", "application/json");
            headers_1.append("Accept", "application/json");
            // const value = this.loginForm.value;
            var postParams = {
                EMP_ID: value.EMP_ID,
                uM_PASSWORD: value.uM_PASSWORD
            };
            this.http.post(this.apiUrl.apiUrl + '/api/Login', JSON.stringify(postParams), { headers: headers_1 })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("success");
                console.log(JSON.stringify(data));
                console.log(JSON.stringify(data.length));
                _this.LoginData = data.data;
                _this.saveLoginDataForOfflineUse();
                if (data.length != 0 && data.data.length != 0) {
                    console.log("With data");
                    console.log(JSON.stringify(data.data));
                    console.log("With data  1");
                    console.log(JSON.stringify(data.data[0]));
                    // localStorage.setItem("guestid", data.data[0].UM_I);
                    // localStorage.setItem("username", data.data[0].UM_FIRST_NAME + ' ' + data.data[0].UM_LAST_NAME);
                    // localStorage.setItem("email", data.data[0].EMAIL_ID);
                    // localStorage.setItem("empcode",data.data[0].EmployeeID);
                    var tokkenkey = data.Key;
                    //console.log("data key" + data.Key);
                    //console.log("key " +tokkenkey);
                    _this.apiUrl.tokken = tokkenkey + "";
                    //console.log("tokken" + this.apiUrl.tokken);
                    localStorage.setItem("tokken", data.Key);
                    _this.apiUrl.setAuthkeyHeader(data.Key);
                    console.log("headers");
                    // let headers = new HttpHeaders({"content-type":"application/json"})
                    // headers.set('content-type', 'application/json')
                    // headers.set('Access-Control-Allow-Origin', '*')
                    // console.log( JSON.stringify(this.apiUrl.headers) ); 
                    //this.apiUrl.Old_headers.append("Authorization","Basic "+tokkenkey);
                    //this.apiUrl.headers.set("Authorization","Basic "+tokkenkey);
                    console.log(JSON.stringify(_this.apiUrl.headers.get('Authorization')));
                    //console.log( JSON.stringify(this.apiUrl.headers.get('Content-Type')));
                    //console.log(JSON.stringify(this.apiUrl.Old_headers));
                    // this.navCtrl.setRoot('HomePage');
                    loading_1.dismiss();
                    _this.http
                        .post(_this.apiUrl.apiUrl + "/api/Login/GetUserMaster", JSON.stringify({
                        key: tokkenkey
                    }), {
                        headers: headers_1,
                    }).subscribe(function (data1) {
                        console.log(data1._body);
                        var myArray = data1._body.split(":");
                        console.log(myArray[0] + "   0");
                        console.log(myArray[1] + "   1");
                        var actauth = myArray[1];
                        actauth = actauth.replace("}", "");
                        console.log(actauth);
                        IsLogged = (actauth == "true") ? true : false;
                        if (IsLogged == true) {
                            console.log("IsLogged");
                            console.log(IsLogged);
                            localStorage.setItem("guestid", data.data[0].UM_I);
                            localStorage.setItem("username", data.data[0].UM_FIRST_NAME + ' ' + data.data[0].UM_LAST_NAME);
                            localStorage.setItem("email", data.data[0].EMAIL_ID);
                            localStorage.setItem("empcode", data.data[0].EmployeeID);
                            _this.navCtrl.setRoot('HomePage');
                            // loading.dismiss(); 
                        }
                        else {
                            console.log("Auth failed");
                            loading_1.dismiss();
                            var alert = _this.alert.create({
                                title: 'Login Failed, Checking Offline Connectivity.',
                                buttons: ['OK']
                            });
                            alert.present();
                            //this.getLoginForOfflineUse();
                        }
                    }, function (error) {
                        console.log("error");
                        console.log(JSON.stringify(error));
                        loading_1.dismiss();
                        var alert = _this.alert.create({
                            title: 'Login Failed, Checking Offline Connectivity.',
                            buttons: ['OK']
                        });
                        alert.present();
                        _this.getLoginForOfflineUse();
                    });
                }
                else {
                    console.log("Without data");
                    loading_1.dismiss();
                    var alert = _this.alert.create({
                        title: 'Login Failed, Checking Offline Connectivity.',
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.getLoginForOfflineUse();
                }
            }, function (error) {
                console.log("error");
                console.log(JSON.stringify(error));
                loading_1.dismiss();
                var alert = _this.alert.create({
                    title: 'Login Failed, Checking Offline Connectivity.',
                    buttons: ['OK']
                });
                alert.present();
                _this.getLoginForOfflineUse();
            });
            this.saveLoginDataForOfflineUse();
        }
        else {
            alert("Invalid Captcha");
            this.context.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
            this.draw();
            this.code = "";
        }
        // const loading = this.loading.create({
        //   content: 'Logging In, Please Wait!'
        // });
        // loading.present();
        // let headers = new Headers();
        // headers.append("Content-Type", "application/json");
        // headers.append("Accept", "application/json");
        // const value = this.loginForm.value;
        // let postParams = {
        //   EMP_ID: value.EMP_ID,
        //   uM_PASSWORD: value.uM_PASSWORD
        // }
        //  this.http.post(this.apiUrl.apiUrl + '/api/Login', JSON.stringify(postParams), {headers:headers})
        //   .map(res => res.json()).subscribe( data=> {
        //     console.log("success");
        //     console.log(JSON.stringify(data));
        //     this.LoginData = data;
        //     this.saveLoginDataForOfflineUse();
        //     if(data.length != 0)
        //     {
        //         localStorage.setItem("guestid", data[0].UM_I);
        //         localStorage.setItem("username", data[0].UM_FIRST_NAME + ' ' + data[0].UM_LAST_NAME);
        //         localStorage.setItem("email", data[0].EMAIL_ID);
        //         localStorage.setItem("empcode",data[0].EmployeeID);
        //         this.navCtrl.setRoot('HomePage');
        //         loading.dismiss();
        //     }
        //     else
        //     {
        //         loading.dismiss();
        //         const alert = this.alert.create({
        //         title: 'Login Failed, Checking Offline Connectivity.',
        //         buttons: ['OK']
        //         });
        //         alert.present();
        //         this.getLoginForOfflineUse();
        //     }
        //   },
        //   error => {
        //     console.log("error");
        //     console.log(JSON.stringify(error));
        //     loading.dismiss();
        //     const alert = this.alert.create({
        //       title: 'Login Failed, Checking Offline Connectivity.',
        //       buttons: ['OK']
        //     });
        //     alert.present();
        //     this.getLoginForOfflineUse();
        //   }
        //   );
        //   this.saveLoginDataForOfflineUse();
    };
    LoginPage.prototype.saveLoginDataForOfflineUse = function () {
        var value = this.LoginData;
        this.storage.set('LoginInformation', value);
    };
    LoginPage.prototype.getLoginForOfflineUse = function () {
        var _this = this;
        this.storage.get('LoginInformation').then(function (val) {
            console.log("inside str");
            if (val != null) {
                localStorage.setItem("guestid", val[0].UM_I);
                //localStorage.setItem("username", val[0].UM_FIRST_NAME);
                localStorage.setItem("username", val[0].UM_FIRST_NAME + ' ' + val[0].UM_LAST_NAME);
                localStorage.setItem("email", val[0].EMAIL_ID);
                _this.navCtrl.setRoot('HomePage');
            }
        });
    };
    LoginPage.prototype.draw = function () {
        // this.context.font = '30px Arial';
        // this.context.textBaseline = 'middle';
        // this.context.textAlign = 'center';
        // const x = (this.myCanvas.nativeElement as HTMLCanvasElement).width / 2;
        // const y = (this.myCanvas.nativeElement as HTMLCanvasElement).height / 2;
        // this.context.fillText('Angular Canvas', x, y);
        var left = 10;
        var CustomLength = 5;
        var resourceUpper = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
        var resourceLower = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z'];
        var resourceNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var resourceType = 'aA0';
        var resource = [];
        var resourceExtra = [];
        if (resourceType.length > 0) {
            if (resourceType.indexOf('A') !== -1) {
                resource = resource.concat(resourceUpper);
            }
            if (resourceType.indexOf('a') !== -1) {
                resource = resource.concat(resourceLower);
            }
            if (resourceType.indexOf('0') !== -1) {
                resource = resource.concat(resourceNumber);
            }
        }
        if (resourceExtra.length > 0) {
            resource = resource.concat(resourceExtra);
        }
        if (resource.length === 0) {
            resource = resourceUpper.concat(resourceLower).concat(resourceNumber);
        }
        var codes = [];
        var resourceLength = resource.length;
        for (var i = 0; i < CustomLength; i++) {
            var txt = resource[Math.floor(Math.random() * resourceLength)];
            codes.push(txt);
        }
        var spaceWidth = this.myCanvas.nativeElement.width - this.context.measureText(codes.join('')).width - 60;
        var wordSpace = Math.floor(spaceWidth / codes.length);
        for (var i = 0; i < codes.length; i++) {
            var deg = Math.random() * 30 * Math.PI / 180;
            var x = left;
            var y = this.myCanvas.nativeElement.height / 2 + Math.random() * 10;
            this.context.translate(x, y);
            this.context.rotate(deg);
            // const r = Math.round(Math.random() * 255);
            // const g = Math.round(Math.random() * 255);
            // const b = Math.round(Math.random() * 255);
            // const a = Math.random();
            //const Rancolor='rgb(' + r + ',' + g + ',' + b + ',' + a + ')';
            var Rancolor = this.randomColor(false); //'rgb(' + r + ',' + g + ',' + b + ')';
            //this.context.fillStyle = Rancolor;
            this.context.fillStyle = "white";
            this.context.font = '36px Arial';
            this.context.textAlign = 'center';
            this.context.fillText(codes[i], 0, 0);
            //this.Captchacode+=codes[i];
            this.context.rotate(-deg);
            this.context.translate(-x, -y);
            //left += this.context.measureText(codes[i]).width + wordSpace + Math.floor(Math.random()*5);
            left += this.context.measureText(codes[i]).width + 35 + Math.floor(Math.random() * 5);
        }
        this.Captchacode = codes.join('');
    };
    LoginPage.prototype.randomColor = function (alpha) {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        if (!alpha) {
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        var a = Math.random();
        return 'rgb(' + r + ',' + g + ',' + b + ',' + a + ')';
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], LoginPage.prototype, "myCanvas", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Mainbh\Project_2024_Live\Mobile Application -SO safety\src\pages\login\login.html"*/'<ion-header>\n    \n  <ion-navbar>\n      <ion-title text-center color="primary">\n          <p style="color:blue; font-size: 16px">Airside Safety Mobile Application</p>\n          <!-- <marquee style="color:red">***This is testing application.Data inserted here will not be replicated in live database.Please do not enter live data ***</marquee> -->\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding [@flyInBottomFast]="cloudState" id="cloud-layer">\n    <form [formGroup] = "loginForm" (ngSubmit)="login()">\n      <ion-list inset [@bounceInBottom]="formState">\n        <ion-item>\n          <ion-label floating color="danger">Enter Your Employee Id</ion-label>\n          <ion-input type="text" formControlName="EMP_ID" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating color="danger">Password</ion-label>\n          <ion-input type="password" formControlName="uM_PASSWORD" required></ion-input>\n        </ion-item>\n        <h5 style="color: white">Captcha</h5>\n        <canvas id="canvas" #myCanvas style="\n        width: 270px;\n        height: 80px;\n        border: solid 1px #c2c4c6;\n        font-size: 45px;\n        padding-left: 8px;margin: 0\n      "></canvas>\n        <ion-item>\n          \n          <ion-input  type="text" formControlName="code" required></ion-input>\n        </ion-item>\n\n\n      </ion-list>\n\n\n<!--       \n      <div class="sc-container h-15">\n      \n        <ion-input name="code" class="" type="text" formControlName="code" ></ion-input>\n      </div> -->\n\n\n      <button ion-button block type="submit" [@fadeIn] = "loginState" [disabled]="!loginForm.valid">Sign In</button>\n    </form>\n    <br />\n    \n    <ion-label floating style="color: white; font-size: 18px; text-align: center; float: right">Version: 12.0.0</ion-label>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Mainbh\Project_2024_Live\Mobile Application -SO safety\src\pages\login\login.html"*/,
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
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__api_api_service__["a" /* ApiService */]) === "function" && _j || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=14.js.map