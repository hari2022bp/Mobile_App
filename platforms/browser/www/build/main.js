webpackJsonp([27],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aci/aci.module": [
		313,
		26
	],
	"../pages/adhoc-apron-checklist/adhoc-apron-checklist.module": [
		312,
		7
	],
	"../pages/adhoc-checklists/adhoc-checklists.module": [
		314,
		25
	],
	"../pages/adhoc-ramp-assessment-checklist/adhoc-ramp-assessment-checklist.module": [
		337,
		6
	],
	"../pages/adhoc-runway-checklist/adhoc-runway-checklist.module": [
		333,
		5
	],
	"../pages/adhoc-taxiway-checklist/adhoc-taxiway-checklist.module": [
		334,
		4
	],
	"../pages/adhoc-vehicle-assessment-checklist/adhoc-vehicle-assessment-checklist.module": [
		316,
		11
	],
	"../pages/adverseweather/adverseweather.module": [
		315,
		24
	],
	"../pages/aergm/aergm.module": [
		317,
		23
	],
	"../pages/aerodrome-data/aerodrome-data.module": [
		318,
		22
	],
	"../pages/aircraft-data/aircraft-data.module": [
		319,
		21
	],
	"../pages/apron-checklist/apron-checklist.module": [
		320,
		3
	],
	"../pages/breatheanalyser/breatheanalyser.module": [
		332,
		10
	],
	"../pages/dgca/dgca.module": [
		322,
		20
	],
	"../pages/eaip/eaip.module": [
		321,
		19
	],
	"../pages/email/email.module": [
		323,
		9
	],
	"../pages/flightradar/flightradar.module": [
		324,
		18
	],
	"../pages/home/home.module": [
		325,
		17
	],
	"../pages/iatacode/iatacode.module": [
		326,
		16
	],
	"../pages/icao/icao.module": [
		327,
		15
	],
	"../pages/login/login.module": [
		328,
		12
	],
	"../pages/metar/metar.module": [
		329,
		14
	],
	"../pages/notam/notam.module": [
		331,
		13
	],
	"../pages/ramp-handling-checklist/ramp-handling-checklist.module": [
		335,
		2
	],
	"../pages/runway-checklist/runway-checklist.module": [
		336,
		1
	],
	"../pages/taxiway-checklist/taxiway-checklist.module": [
		338,
		0
	],
	"../pages/vehicle-assessment-checklist/vehicle-assessment-checklist.module": [
		330,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_idle_keepalive__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adhoc-apron-checklist/adhoc-apron-checklist.module#AdhocApronChecklistPageModule', name: 'AdhocApronChecklistPage', segment: 'adhoc-apron-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aci/aci.module#AciPageModule', name: 'AciPage', segment: 'aci', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adhoc-checklists/adhoc-checklists.module#AdhocChecklistsPageModule', name: 'AdhocChecklistsPage', segment: 'adhoc-checklists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adverseweather/adverseweather.module#AdverseweatherPageModule', name: 'AdverseweatherPage', segment: 'adverseweather', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adhoc-vehicle-assessment-checklist/adhoc-vehicle-assessment-checklist.module#AdhocVehicleAssessmentChecklistPageModule', name: 'AdhocVehicleAssessmentChecklistPage', segment: 'adhoc-vehicle-assessment-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aergm/aergm.module#AergmPageModule', name: 'AergmPage', segment: 'aergm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aerodrome-data/aerodrome-data.module#AerodromeDataPageModule', name: 'AerodromeDataPage', segment: 'aerodrome-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aircraft-data/aircraft-data.module#AircraftDataPageModule', name: 'AircraftDataPage', segment: 'aircraft-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apron-checklist/apron-checklist.module#ApronChecklistPageModule', name: 'ApronChecklistPage', segment: 'apron-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eaip/eaip.module#EaipPageModule', name: 'EaipPage', segment: 'eaip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dgca/dgca.module#DgcaPageModule', name: 'DgcaPage', segment: 'dgca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flightradar/flightradar.module#FlightradarPageModule', name: 'FlightradarPage', segment: 'flightradar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/iatacode/iatacode.module#IatacodePageModule', name: 'IatacodePage', segment: 'iatacode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icao/icao.module#IcaoPageModule', name: 'IcaoPage', segment: 'icao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/metar/metar.module#MetarPageModule', name: 'MetarPage', segment: 'metar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-assessment-checklist/vehicle-assessment-checklist.module#VehicleAssessmentChecklistPageModule', name: 'VehicleAssessmentChecklistPage', segment: 'vehicle-assessment-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notam/notam.module#NotamPageModule', name: 'NotamPage', segment: 'notam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/breatheanalyser/breatheanalyser.module#BreatheanalyserPageModule', name: 'BreatheanalyserPage', segment: 'breatheanalyser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adhoc-runway-checklist/adhoc-runway-checklist.module#AdhocRunwayChecklistPageModule', name: 'AdhocRunwayChecklistPage', segment: 'adhoc-runway-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adhoc-taxiway-checklist/adhoc-taxiway-checklist.module#AdhocTaxiwayChecklistPageModule', name: 'AdhocTaxiwayChecklistPage', segment: 'adhoc-taxiway-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ramp-handling-checklist/ramp-handling-checklist.module#RampHandlingChecklistPageModule', name: 'RampHandlingChecklistPage', segment: 'ramp-handling-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/runway-checklist/runway-checklist.module#RunwayChecklistPageModule', name: 'RunwayChecklistPage', segment: 'runway-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adhoc-ramp-assessment-checklist/adhoc-ramp-assessment-checklist.module#AdhocRampAssessmentChecklistPageModule', name: 'AdhocRampAssessmentChecklistPage', segment: 'adhoc-ramp-assessment-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taxiway-checklist/taxiway-checklist.module#TaxiwayChecklistPageModule', name: 'TaxiwayChecklistPage', segment: 'taxiway-checklist', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_idle_keepalive__["b" /* NgIdleKeepaliveModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_idle_keepalive__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu, events, idle, keepalive) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.events = events;
        this.idle = idle;
        this.keepalive = keepalive;
        this.rootPage = 'LoginPage';
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(30);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(30);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["a" /* DEFAULT_INTERRUPTSOURCES */]);
        idle.onIdleEnd.subscribe(function () { return _this.idleState = 'No longer idle.'; });
        idle.onTimeout.subscribe(function () {
            _this.idleState = 'Timed out!';
            _this.timedOut = true;
            _this.nav.setRoot('LoginPage');
            _this.menu.close();
        });
        this.reset();
    }
    MyApp.prototype.reset = function () {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    };
    MyApp.prototype.initializeApp = function () {
    };
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menu.close();
    };
    MyApp.prototype.onIATA = function () {
        this.nav.push('IatacodePage');
    };
    MyApp.prototype.onFlightRadar = function () {
        this.nav.push('FlightradarPage');
    };
    MyApp.prototype.onICAODocs = function () {
        this.nav.push('IcaoPage');
    };
    MyApp.prototype.onNotam = function () {
        this.nav.push('NotamPage');
    };
    MyApp.prototype.onEAIP = function () {
        this.nav.push('EaipPage');
    };
    MyApp.prototype.onAERGM = function () {
        this.nav.push('AergmPage');
    };
    MyApp.prototype.onMETAR = function () {
        this.nav.push('MetarPage');
    };
    MyApp.prototype.onACI = function () {
        this.nav.push('AciPage');
    };
    MyApp.prototype.onDGCA = function () {
        this.nav.push('DgcaPage');
    };
    MyApp.prototype.onAdverseWeatherChecklist = function () {
        this.nav.push('AdverseweatherPage');
    };
    MyApp.prototype.onBreatheUndertaking = function () {
        this.nav.push('BreatheanalyserPage');
    };
    MyApp.prototype.onLogout = function () {
        this.nav.setRoot('LoginPage');
        this.menu.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\DevelopmentWorkloads\ASMA_Mobile_Application\src\app\app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar start>\n            <ion-title text-center> Menu </ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding>\n        <ion-item text-center>\n           \n                <!-- <ion-icon name="md-code" text-center> IATA-Code </ion-icon> -->\n                <img icon-left src="assets/images/IATA_New.png" (click)="onIATA()" style="width: 50%; height: 50%" />\n           \n        </ion-item>\n\n        <ion-item text-center>\n     \n                <!-- <ion-icon name="home" text-center> Notam </ion-icon> -->\n                <img icon-left src="assets/images/notam_New.png" (click)="onNotam()" style="width: 50%; height: 50%" />\n         \n        </ion-item>\n\n        <ion-item text-center>\n          \n                <img icon-left src="assets/images/FlightRadar_New.png" (click)="onFlightRadar()" style="width: 50%; height: 50%" />\n         \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/ICAO.png" (click)="onICAODocs()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/EAIP.png" (click)="onEAIP()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/AERGM.png" (click)="onAERGM()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/METAR.png" (click)="onMETAR()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/ACI.png" (click)="onACI()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/DGCA.jpg" (click)="onDGCA()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/AW.png" (click)="onAdverseWeatherChecklist()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n          \n            <img icon-left src="assets/images/BreatheUndertaking.png" (click)="onBreatheUndertaking()" style="width: 50%; height: 50%" />\n     \n        </ion-item>\n\n        <ion-item text-center>\n         \n                <img icon-left src="assets/images/logout_New.png"  (click)="onLogout()" style="width: 50%; height: 50%" />\n        </ion-item>\n\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n<ion-menu side [content]="nav" swipe-gesture>...</ion-menu>\n'/*ion-inline-end:"F:\DevelopmentWorkloads\ASMA_Mobile_Application\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_5__ng_idle_keepalive__["a" /* Keepalive */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map