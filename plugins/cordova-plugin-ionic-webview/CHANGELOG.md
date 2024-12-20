# [4.1.0](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v4.0.1...v4.1.0) (2019-06-10)


### Features

* **ios:** Add WKSuspendInBackground preference ([#356](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/356)) ([3613602](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/3613602))

## [4.0.1](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v4.0.0...v4.0.1) (2019-03-26)


### Bug Fixes

* **ios:** Fix autofocus on iOS 12.2 ([#334](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/334)) ([cb4c491](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/cb4c491)), closes [#330](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/330)
* account port on resolving uri path ([#321](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/321)) ([fdfe8aa](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/fdfe8aa))

# [4.0.0](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v3.1.2...v4.0.0) (2019-02-18)


### Features

* **ios:** Make iOS app Scheme configurable with a preference ([#307](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/307)) ([d52d37e](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/d52d37e)), closes [#282](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/282)
* **ios:** Remove WKSuspendInBackground preference ([#309](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/309)) ([73b6659](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/73b6659)), closes [#286](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/286)


### BREAKING CHANGES

* **ios:** Remove the WKSuspendInBackground preference, so app relying on that prefere will
not behave as expected

## [3.1.2](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v3.1.1...v3.1.2) (2019-02-04)


### Bug Fixes

* **Android:** Handle Range Requests for proper media file handling ([#298](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/298)) ([6f18248](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/6f18248)), closes [#248](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/248) [#205](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/205) [#141](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/141)

## [3.1.1](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v3.1.0...v3.1.1) (2019-01-18)


### Bug Fixes

* **ios:** Remove unused code ([#281](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/281)) ([fc7ea27](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/fc7ea27))

# [3.1.0](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v3.0.0...v3.1.0) (2019-01-17)


### Bug Fixes

* **ios:** Fix video playback of files with uppercase extension ([#264](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/264)) ([2c4b225](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/2c4b225)), closes [#260](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/260)
* Set engines to require Cordova CLI 7.1.0 or newer ([#276](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/276)) ([40f42e1](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/40f42e1)), closes [#263](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/263)
* Use a single scheme for all files ([#270](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/270)) ([3d1bcdd](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/3d1bcdd)), closes [#258](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/258)


### Features

* **Android:** Make app Scheme configurable with a preference ([#274](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/274)) ([18d9f2c](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/18d9f2c)), closes [#269](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/269) [#255](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/255)

# [3.0.0](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.3.1...v3.0.0) (2019-01-03)


### Bug Fixes

* **iOS:** Remove unused code ([#247](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/247)) ([bceb17a](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/bceb17a))


### Features

* Allows configuration of Mixed Content Mode ([#240](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/240)) ([486d412](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/486d412)), closes [#231](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/231)
* **Android:** Implement ionic-file and ionic-content urls ([#242](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/242)) ([8ef0c30](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/8ef0c30)), closes [#204](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/204) [#183](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/183)
* **iOS:** Remove GCDWebServer ([#244](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/244)) ([0dee0cf](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/0dee0cf))
* **WebViewLocalServer.java:** return 404 error code when a local file is not found ([#217](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/217)) ([f7a551e](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/f7a551e)), closes [#216](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/216)


### BREAKING CHANGES

* **iOS:** Sets deployment-target to 11, so will only work on iOS 11+

* Address changes
* changes the default from 1 (never) to 0 (always)
* **WebViewLocalServer.java:** Until now, the Android part of the plugin was returning a 200 http code even though
the requested file didn't exist. This behavior was inconsistent with the historical behavior of the
iOS webView. This change makes them both work in the same manner but introduces a breaking change
for the current Android users that are expecting a 200 http code no matter what and are testing the
not found error just by checking if the body is null.

## [2.3.1](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.3.0...v2.3.1) (2018-12-06)


### Bug Fixes

* Handle convertFileSrc when using ionic:// scheme ([#236](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/236)) ([89ce899](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/89ce899))

# [2.3.0](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.2.5...v2.3.0) (2018-12-05)


### Features

* **ios:** Add URLSchemeHandler for iOS 11+ ([#221](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/221)) ([4a973f4](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/4a973f4))

## [2.2.5](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.2.4...v2.2.5) (2018-11-20)


### Bug Fixes

* Add option for Dark keyboard appearance ([#44](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/44)) ([6c0fe56](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/6c0fe56))

## [2.2.4](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.2.3...v2.2.4) (2018-11-20)


### Bug Fixes

* fix keyboard displacement bug in iOS 12 WKWebView ([#201](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/201)) ([a670568](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/a670568))

## [2.2.3](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.2.2...v2.2.3) (2018-11-09)


### Bug Fixes

* Remove main and fix description ([d52db66](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/d52db66))

## [2.2.2](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.2.1...v2.2.2) (2018-11-09)

### Bug Fixes

* Add more server checks before loading urls or reloading ([#211](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/211)) ([60eff2f](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/60eff2f))

## [2.2.1](http://github.com/ionic-team/cordova-plugin-ionic-webview/compare/v2.2.0...v2.2.1) (2018-11-07)


### Bug Fixes

* Show error page if server is not running ([#207](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/207)) ([6a2e07e](http://github.com/ionic-team/cordova-plugin-ionic-webview/commit/6a2e07e))

<a name="2.2.0"></a>
### 2.2.0 (2018-10-04)

* Fix issue where two apps running on the same port could conflict with each other ([#169](http://github.com/ionic-team/cordova-plugin-ionic-webview/issues/165) & [#186](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/186))
* Add kitkat support (API 19) ([#144](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/144)) [@leo6104](http://github.com/leo6104)
* Fix issue where local server was being used if launch URL is external ([#169](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/169))

<a name="2.1.4"></a>
### 2.1.4 (2018-09-13)

* Allow Ionic Deploy `DisableDeploy` preference to disable loading of deploy updates ([#172](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/172))

<a name="2.1.3"></a>
### 2.1.3 (2018-09-06)

* Make server path relative ([#164](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/164))

<a name="2.1.2"></a>
### 2.1.2 (2018-09-05)

* Return 404 response when file doesn't exist ([#162](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/162))
* Load local assets if the app is a freshly installed binary ([#155](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/155))
* Reset stored server path on new binary ([#161](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/161))

<a name="2.1.1"></a>
### 2.1.1 (2018-09-04)

* Allow range requests for local files ([#154](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/154))

<a name="2.1.0"></a>
### 2.1.0 (2018-08-23)

* Add support for `cordova-android` 6 ([#150](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/150))

<a name="2.0.3"></a>
### 2.0.3 (2018-08-14)

* Fix nil reference by setting up the server URL before routes are set up. ([#135](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/135)) [@matejkramny](http://github.com/matejkramny)
* Resolve issue when app is launched in background. ([#124](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/124)) [@ghenry22](http://github.com/ghenry22)

<a name="2.0.2"></a>
### 2.0.2 (2018-07-30)

* Immediately load new server base path upon setting it. ([#132](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/132))

<a name="2.0.1"></a>
### 2.0.1 (2018-07-25)

* Avoid "not modified" response on iOS by always overriding last modified date. ([#127](http://github.com/ionic-team/cordova-plugin-ionic-webview/pull/127))

<a name="2.0.0"></a>
### 2.0.0 (2018-07-23)

* **BREAKING**: HTTP server now runs for iOS **and** Android, instead of just iOS. The server is configured the same for both platforms.
* **BREAKING**: HTTP server now loads the app from a base href of `/`. The app URL behaves like `http://localhost:8080/index.html` instead of `http://localhost:8080/Users/.../index.html`.
* **BREAKING**: HTTP server is configured to run in HTML5 routing mode (push state) by default.
* **BREAKING**: File access through the Web View must be served by the HTTP server to avoid security errors in the Web View. Loading files via `file://` is not allowed by the Web View. The HTTP server will serve files via the `_file_` prefix, e.g. `http://localhost:8080/_file_/Users/.../file.png`.
* `window.Ionic.normalizeURL()` has been deprecated. Use `window.Ionic.WebView.convertFileSrc()`.
* iOS update HTTP server to latest upstream version (GCDwebserve 3.4.2)
* iOS update HTTP server to restart sockets with error state when resuming from background
* iOS enable HTTP server to continue running in background if the webview is running.
* iOS enable Webview to continue running in background. Requires background mode capability enabled in xcode + valid use case as per app store requirements. If your app is not performing valid background tasks it will still be suspended by the OS as usual. As long as valid background tasks are running the webview will continue to function as expected.
* iOS add config.xml options:
    * WKSuspendInBackground - defaults to true, if set to false then the webview and HTTP server will continue to run when the app is in the background or screen is locked
    * WKPort - defaults to 8080, define the port that the HTTP server will listen on
    * WKBind - defaults to localhost, if set to 127.0.0.1 then this IP will be used instead of the localhost hostname for the HTTP server

See [Github releases](http://github.com/ionic-team/cordova-plugin-ionic-webview/releases) for earlier changes.
