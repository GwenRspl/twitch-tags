(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Noto Sans', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight\">\n  <app-header></app-header>\n  <app-content></app-content>\n  <app-footer></app-footer>\n</section>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _submit_submit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submit/submit.module */ "./src/app/submit/submit.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _submit_submit_module__WEBPACK_IMPORTED_MODULE_7__["SubmitModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_8__["SearchModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/account/account.component.css":
/*!****************************************************!*\
  !*** ./src/app/auth/account/account.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-title {\n  margin-bottom: 20%;\n}\n.account-details {\n  margin-bottom: 15%;\n}\n.detail-item {\n  margin-bottom: 5%;\n}\n.subtitle {\n  margin-bottom: 3%;\n}\n.buttons {\n  margin-top: 10%;\n}\n.btn-width {\n  width: 9.7em;\n}\n.mybutton {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n.mybutton:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG4uYWNjb3VudC1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmRldGFpbC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmJ0bi13aWR0aCB7XG4gIHdpZHRoOiA5LjdlbTtcbn1cblxuLm15YnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NDFhNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5teWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDVlYzk7XG4gIGNvbG9yIDogI2Y4ZjhmODtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/account/account.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/account/account.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"columns\">\n\t\t<div class=\"column\"></div>\n\t\t<div class=\"column is-one-third\">\n      <section class=\" section has-text-centered\">\n        <h1 class=\"title\">My Account</h1>\n      </section>\n\n      <section class=\"section\">\n        <div class=\"detail-item\">\n          <h2 class=\"subtitle\">Username : </h2>\n          <input class=\"input\" value={{user.username}} disabled>\n        </div>\n        <div class=\"detail-item\">\n          <h2 class=\"subtitle\">Email :</h2>\n          <input class=\"input\" value={{user.email}} *ngIf=\"!editMode\" disabled>\n          <form [formGroup]=\"changeEmailForm\" class=\"field has-addons\" *ngIf=\"editMode\">\n            <div class=\"control\">\n              <input formControlName=\"email\" type=\"text\" class=\"input\" value={{user.email}} [ngClass]=\"{ 'is-danger': submitted && f.email.errors }\">\n            </div>\n            <div class=\"control\">\n              <a class=\"button is-success\" (click)=\"changeEmail()\">\n                SUBMIT\n              </a>\n            </div>\n          </form>\n        </div>\n        <div class=\"buttons is-centered\">\n          <a class=\"button btn-width is-danger\" (click)=\"switchToEditMode()\" *ngIf=\"editMode\">Cancel</a>\n          <a class=\"button mybutton btn-width\" (click)=\"switchToEditMode()\" *ngIf=\"!editMode\">Change email</a>\n          <a class=\"button mybutton btn-width\" (click)=\"changePassword()\">Change password</a>\n        </div>\n      </section>\n      <section class=\"section is-centered\">\n        <a class=\"button is-medium is-fullwidth is-danger\" (click)=\"toggleModal()\">Delete account</a>\n      </section>\n    </div>\n\t\t<div class=\"column\"></div>\n\t</div>\n</div>\n<div class=\"modal\" [ngClass]=\"{'is-active' : modalActive}\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Warning! Please confirm your action</p>\n    </header>\n    <section class=\"modal-card-body\">\n      <p>You are about to delete your account. This action is irreversible.</p>\n      <p>Are you sure you want to continue ?</p>\n    </section>\n    <footer class=\"modal-card-foot\">\n      <button class=\"button is-danger\" (click)=\"deleteAccount()\">YES! DELETE MY ACCOUNT!</button>\n      <button class=\"button\" (click)=\"toggleModal()\">NO! DON'T DELETE MY ACCOUNT!</button>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/account/account.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/account/account.component.ts ***!
  \***************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountComponent = /** @class */ (function () {
    function AccountComponent(usersService, formBuilder, router, tokenService, title) {
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.tokenService = tokenService;
        this.title = title;
        this.editMode = false;
        this.submitted = false;
        this.modalActive = false;
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](null, null, null);
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('TwitchTags - Account');
        var username = this.tokenService.getUsername();
        this.usersService.getUserByUsername(username).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(AccountComponent.prototype, "f", {
        get: function () {
            return this.changeEmailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AccountComponent.prototype.switchToEditMode = function () {
        if (this.editMode) {
            this.editMode = false;
        }
        else {
            this.editMode = true;
            this.changeEmailForm = this.formBuilder.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
            });
        }
    };
    AccountComponent.prototype.changeEmail = function () {
        this.submitted = true;
        if (this.changeEmailForm.invalid) {
            console.log('invalid email');
            return;
        }
        this.editMode = false;
        this.user.email = this.changeEmailForm.controls.email.value;
        this.usersService.updateUser(this.user).subscribe(function (data) {
            console.log(data);
        });
    };
    AccountComponent.prototype.changePassword = function () {
        this.router.navigate(['/app/chgpswrd']);
    };
    AccountComponent.prototype.toggleModal = function () {
        this.modalActive = !this.modalActive;
    };
    AccountComponent.prototype.deleteAccount = function () {
        this.usersService.deleteUser(this.user).subscribe(function (data) {
            console.log(data);
        });
        this.tokenService.signOut();
        this.router.navigate(['/app/index']);
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/auth/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/auth/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/auth/admin/admin.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/admin/admin.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs ul {\n  border-bottom: 1px solid #9f98a2 !important;\n}\n\n.tabs .is-active a {\n  background-color: #c5c5c5;\n  border-color: #9f98a2;\n  color: #6441a4;\n}\n\n.tabs a:hover {\n  background-color: #ababab;\n  border-bottom: #9f98a2;\n\n}\n\nh1 {\n  margin: 3%;\n}\n\n.hero .hero-body {\n  padding-top: 0;\n  padding-bottom: 5%;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHVsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Zjk4YTIgIWltcG9ydGFudDtcbn1cblxuLnRhYnMgLmlzLWFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcbiAgYm9yZGVyLWNvbG9yOiAjOWY5OGEyO1xuICBjb2xvcjogIzY0NDFhNDtcbn1cblxuLnRhYnMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XG4gIGJvcmRlci1ib3R0b206ICM5Zjk4YTI7XG5cbn1cblxuaDEge1xuICBtYXJnaW46IDMlO1xufVxuXG4uaGVybyAuaGVyby1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcblxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/admin/admin.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/admin/admin.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-large\">\n  <div class=\"hero-head\">\n    <h1 class=\"title has-text-centered\">Admin Dashboard</h1>\n    <div class=\"tabs is-left is-boxed\">\n      <ul>\n        <li [ngClass]=\"{'is-active': currentTab == 'channels'}\">\n          <a (click)=\"channelsTab()\">\n            <span class=\"icon is-small\"><i class=\"fas fa-tv\" aria-hidden=\"true\"></i></span>\n            <span>Channels</span>\n          </a>\n        </li>\n        <li [ngClass]=\"{'is-active': currentTab == 'tags'}\">\n          <a (click)=\"tagsTab()\">\n            <span class=\"icon is-small\"><i class=\"fas fa-tags\" aria-hidden=\"true\"></i></span>\n            <span>Tags</span>\n          </a>\n        </li>\n        <li [ngClass]=\"{'is-active': currentTab == 'users'}\">\n          <a (click)=\"usersTab()\">\n            <span class=\"icon is-small\"><i class=\"fas fa-users\" aria-hidden=\"true\"></i></span>\n            <span>Users</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"hero-body\">\n    <section class=\"container\" *ngIf=\"currentTab == 'users'\" >\n      <app-users-dashboard></app-users-dashboard>\n    </section>\n    <section class=\"container\" *ngIf=\"currentTab == 'tags'\" >\n      <app-tags-dashboard></app-tags-dashboard>\n    </section>\n    <section class=\"container has-text-centered\" *ngIf=\"currentTab == 'channels'\" >\n      <app-channels-dashboard></app-channels-dashboard>\n    </section>\n  </div>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/admin/admin.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/admin/admin.component.ts ***!
  \***********************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(tokenStorage, title) {
        this.tokenStorage = tokenStorage;
        this.title = title;
        this.currentTab = 'channels';
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.title.setTitle('TwitchTags - Admin');
        this.tokenStorage.isAdmin();
    };
    AdminComponent.prototype.channelsTab = function () {
        this.currentTab = 'channels';
    };
    AdminComponent.prototype.tagsTab = function () {
        this.currentTab = 'tags';
    };
    AdminComponent.prototype.usersTab = function () {
        this.currentTab = 'users';
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/auth/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/auth/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/auth/admin/auth-admin-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/admin/auth-admin-guard.service.ts ***!
  \********************************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthAdminGuard = /** @class */ (function () {
    function AuthAdminGuard(tokenService) {
        this.tokenService = tokenService;
    }
    AuthAdminGuard.prototype.canActivate = function (route, state) {
        return this.tokenService.isAdmin();
    };
    AuthAdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/admin/channels-dashboard/channels-dashboard.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/auth/admin/channels-dashboard/channels-dashboard.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  background-color: #f8f8f8;\n}\n\n.is-clickable {\n  cursor: pointer;\n}\n\n.fa-times {\n  color: red;\n}\n\n.fa-sync-alt {\n  color: green;\n}\n\n.sync-button {\n  margin: 2%;\n}\n\nthead {\n  background-color: #6441a4;\n}\n\nthead>th {\n  color: #f8f8f8;\n}\n\n.add-channel-button {\n  background-color: #6441a4;\n  color : #f8f8f8;\n}\n\n.add-channel-button:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi9jaGFubmVscy1kYXNoYm9hcmQvY2hhbm5lbHMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hZG1pbi9jaGFubmVscy1kYXNoYm9hcmQvY2hhbm5lbHMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cblxuLmlzLWNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXRpbWVzIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLXN5bmMtYWx0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc3luYy1idXR0b24ge1xuICBtYXJnaW46IDIlO1xufVxuXG50aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTQ7XG59XG5cbnRoZWFkPnRoIHtcbiAgY29sb3I6ICNmOGY4Zjg7XG59XG5cbi5hZGQtY2hhbm5lbC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xuICBjb2xvciA6ICNmOGY4Zjg7XG59XG5cblxuLmFkZC1jaGFubmVsLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDVlYzk7XG4gIGNvbG9yIDogI2Y4ZjhmODtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/admin/channels-dashboard/channels-dashboard.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/admin/channels-dashboard/channels-dashboard.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sync-button\">\n  <a class=\"button is-large is-warning\" (click)=\"syncAllChannels()\">Synchronize all from Twitch API</a>\n</div>\n<div class=\"field has-addons\">\n  <div class=\"control is-expanded\">\n    <input class=\"input\" id=\"input\" type=\"text\" placeholder=\"Type channel name here\" [(ngModel)]=\"submittedChannel\">\n  </div>\n  <div class=\"control\">\n    <a class=\"button is-info add-channel-button\" (click)=\"addNewChannel()\">\n      Add new channel to database\n    </a>\n  </div>\n</div>\n<table class=\"table is-fullwidth is-bordered\">\n  <thead>\n  <th class=\"has-text-centered\">Id</th>\n  <th class=\"has-text-centered\">Name</th>\n  <th class=\"has-text-centered\">Followers</th>\n  <th class=\"has-text-centered\">Url</th>\n  <th class=\"has-text-centered\">Update</th>\n  <th class=\"has-text-centered\">Delete</th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let channel of channels\">\n    <th class=\"has-text-centered\">{{channel.id}}</th>\n    <td>{{channel.name}}</td>\n    <td>{{channel.followers}}</td>\n    <td><a>{{channel.url}}</a></td>\n    <td class=\"has-text-centered is-clickable\" (click)=\"syncOneChannel(channel)\"><span class=\"icon is-small\"><i class=\"fas fa-sync-alt\" aria-hidden=\"true\"></i></span></td>\n    <td class=\"has-text-centered is-clickable\" (click)=\"deleteOneChannel(channel)\"><span class=\"icon is-small\"><i class=\"fas fa-times\" aria-hidden=\"true\"></i></span></td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/auth/admin/channels-dashboard/channels-dashboard.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/admin/channels-dashboard/channels-dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChannelsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsDashboardComponent", function() { return ChannelsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/channel.model */ "./src/app/shared/models/channel.model.ts");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/channels.service */ "./src/app/services/channels.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChannelsDashboardComponent = /** @class */ (function () {
    function ChannelsDashboardComponent(channelService) {
        this.channelService = channelService;
    }
    ChannelsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channelService.getChannels().subscribe(function (channels) {
            _this.channels = channels;
            _this.channels.sort(function (n1, n2) {
                if (n1.id > n2.id) {
                    return 1;
                }
                if (n1.id < n2.id) {
                    return -1;
                }
                return 0;
            });
        }, function (error) { return console.error(error); });
    };
    ChannelsDashboardComponent.prototype.syncAllChannels = function () {
        var _this = this;
        var channelProcessed = 0;
        this.channels.forEach(function (channel) {
            _this.channelService.getDataFromTwitchApi(channel.name).subscribe(function (data) {
                if (data.status == '404') {
                    console.log('channel does not exist');
                }
                else {
                    var status_1 = 'NONE';
                    if (data.partner)
                        status_1 = 'PARTNER';
                    var updatedChannel = new _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_1__["Channel"](data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status_1);
                    updatedChannel.id = channel.id;
                    _this.channelService.updateChannel(updatedChannel).subscribe(function (data) {
                        channelProcessed++;
                        if (channelProcessed === _this.channels.length) {
                            _this.ngOnInit();
                        }
                    });
                }
            }, function (error1) { return console.log('An error occured: ' + error1.toString()); });
        });
    };
    ChannelsDashboardComponent.prototype.syncOneChannel = function (channel) {
        var _this = this;
        this.channelService.getDataFromTwitchApi(channel.name).subscribe(function (data) {
            if (data.status == '404') {
                console.log('channel does not exist');
            }
            else {
                var status_2 = 'NONE';
                if (data.partner)
                    status_2 = 'PARTNER';
                var updatedChannel = new _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_1__["Channel"](data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status_2);
                updatedChannel.id = channel.id;
                _this.channelService.updateChannel(updatedChannel).subscribe(function () {
                    _this.ngOnInit();
                });
            }
        }, function (error1) { return console.log('An error occured: ' + error1.toString()); });
    };
    ChannelsDashboardComponent.prototype.deleteOneChannel = function (channel) {
        var _this = this;
        this.channelService.deleteChannel(channel).subscribe(function () {
            _this.ngOnInit();
        }, function (error) {
            console.log(error);
        });
    };
    ChannelsDashboardComponent.prototype.addNewChannel = function () {
        var _this = this;
        this.channelService.alreadyExist(this.submittedChannel).subscribe(function (data) {
            if (data) {
                console.log('this channel already exist in database');
            }
            else {
                _this.channelService.getDataFromTwitchApi(_this.submittedChannel).subscribe(function (data) {
                    if (data.status == '404') {
                        console.log('channel does not exist');
                    }
                    else {
                        var status_3 = 'NONE';
                        if (data.partner)
                            status_3 = 'PARTNER';
                        var channel = new _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_1__["Channel"](data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status_3);
                        _this.channelService.saveChannel(channel).subscribe(function (data) {
                            _this.ngOnInit();
                        });
                    }
                }, function (error1) { return console.log('Channel not found ' + error1.toString()); });
            }
        });
    };
    ChannelsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channels-dashboard',
            template: __webpack_require__(/*! ./channels-dashboard.component.html */ "./src/app/auth/admin/channels-dashboard/channels-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./channels-dashboard.component.css */ "./src/app/auth/admin/channels-dashboard/channels-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_channels_service__WEBPACK_IMPORTED_MODULE_2__["ChannelsService"]])
    ], ChannelsDashboardComponent);
    return ChannelsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/auth/admin/tags-dashboard/tags-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/auth/admin/tags-dashboard/tags-dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  background-color: #f8f8f8;\n}\n\n.is-clickable {\n  cursor: pointer;\n}\n\n.fa-times {\n  color: red;\n}\n\n.fa-pencil-alt {\n  color: green;\n}\n\n.fa-check {\n  color: green;\n}\n\nthead {\n  background-color: #6441a4;\n}\n\nthead>th {\n  color: #f8f8f8;\n}\n\n.add-tag-button {\n  background-color: #6441a4;\n  color : #f8f8f8;\n}\n\n.add-tag-button:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n.field.has-addons {\n  margin-top: 2%;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi90YWdzLWRhc2hib2FyZC90YWdzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2FkbWluL3RhZ3MtZGFzaGJvYXJkL3RhZ3MtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cblxuLmlzLWNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXRpbWVzIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLXBlbmNpbC1hbHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mYS1jaGVjayB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xufVxuXG50aGVhZD50aCB7XG4gIGNvbG9yOiAjZjhmOGY4O1xufVxuXG4uYWRkLXRhZy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xuICBjb2xvciA6ICNmOGY4Zjg7XG59XG5cblxuLmFkZC10YWctYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0NWVjOTtcbiAgY29sb3IgOiAjZjhmOGY4O1xufVxuXG4uZmllbGQuaGFzLWFkZG9ucyB7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/admin/tags-dashboard/tags-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/auth/admin/tags-dashboard/tags-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field has-addons\">\n  <div class=\"control is-expanded\">\n    <input class=\"input\" id=\"input\" type=\"text\" placeholder=\"Type channel name here\" [(ngModel)]=\"submittedTag\">\n  </div>\n  <div class=\"control\">\n    <a class=\"button is-info add-tag-button\" (click)=\"addNewTag()\">\n      Add new tag to database\n    </a>\n  </div>\n</div>\n<table class=\"table is-fullwidth is-bordered\">\n  <thead>\n  <th class=\"has-text-centered\">Id</th>\n  <th class=\"has-text-centered\">Name</th>\n  <th class=\"has-text-centered\">Delete</th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let tag of tags\">\n    <th class=\"has-text-centered\">{{tag.id}}</th>\n    <td>{{tag.name}}</td>\n    <td class=\"has-text-centered is-clickable\" (click)=\"deleteTag(tag)\"><span class=\"icon is-small\"><i class=\"fas fa-times\" aria-hidden=\"true\"></i></span></td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/auth/admin/tags-dashboard/tags-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/admin/tags-dashboard/tags-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: TagsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsDashboardComponent", function() { return TagsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tags.service */ "./src/app/services/tags.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagsDashboardComponent = /** @class */ (function () {
    function TagsDashboardComponent(router, tagService) {
        this.router = router;
        this.tagService = tagService;
        this.tagAlreadyExist = false;
    }
    TagsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagService.getTags().subscribe(function (data) {
            _this._tags = data;
            _this._tags.sort(function (n1, n2) {
                if (n1.id > n2.id) {
                    return 1;
                }
                if (n1.id < n2.id) {
                    return -1;
                }
                return 0;
            });
        }, function (error) {
            console.log(error);
        });
    };
    TagsDashboardComponent.prototype.deleteTag = function (tag) {
        var _this = this;
        this.tagService.deleteTag(tag).subscribe(function () {
            _this.ngOnInit();
        }, function (error) {
            console.log(error);
        });
    };
    TagsDashboardComponent.prototype.addNewTag = function () {
        var _this = this;
        this.tagService.tagExists(this.submittedTag).subscribe(function (data) {
            if (data) {
                _this.tagAlreadyExist = true;
            }
            else {
                var newTag = new _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_1__["Tag"](_this.submittedTag);
                _this.tagService.createTag(newTag).subscribe(function () {
                    _this.ngOnInit();
                });
            }
        });
    };
    Object.defineProperty(TagsDashboardComponent.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        enumerable: true,
        configurable: true
    });
    TagsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags-dashboard',
            template: __webpack_require__(/*! ./tags-dashboard.component.html */ "./src/app/auth/admin/tags-dashboard/tags-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./tags-dashboard.component.css */ "./src/app/auth/admin/tags-dashboard/tags-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]])
    ], TagsDashboardComponent);
    return TagsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/auth/admin/users-dashboard/users-dashboard.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/auth/admin/users-dashboard/users-dashboard.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  background-color: #f8f8f8;\n  margin-top: 2%;\n}\n\n.is-clickable {\n  cursor: pointer;\n}\n\n.fa-times {\n  color: red;\n}\n\nthead {\n  background-color: #6441a4;\n}\n\nthead>th {\n  color: #f8f8f8;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi91c2Vycy1kYXNoYm9hcmQvdXNlcnMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRtaW4vdXNlcnMtZGFzaGJvYXJkL3VzZXJzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uaXMtY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtdGltZXMge1xuICBjb2xvcjogcmVkO1xufVxuXG5cbnRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NDFhNDtcbn1cblxudGhlYWQ+dGgge1xuICBjb2xvcjogI2Y4ZjhmODtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/admin/users-dashboard/users-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/auth/admin/users-dashboard/users-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-fullwidth is-bordered\">\n  <thead>\n  <th class=\"has-text-centered\">Id</th>\n  <th class=\"has-text-centered\">Username</th>\n  <th class=\"has-text-centered\">Email</th>\n  <th class=\"has-text-centered\">Delete</th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let user of users\">\n    <th class=\"has-text-centered\">{{user.id}}</th>\n    <td>{{user.username}}</td>\n    <td>{{user.email}}</td>\n    <td class=\"has-text-centered is-clickable\" (click)=\"deleteUser(user)\" *ngIf=\"username != user.username\"><span class=\"icon is-small\"><i class=\"fas fa-times\" aria-hidden=\"true\"></i></span></td>\n    <td class=\"has-text-centered\" *ngIf=\"username == user.username\" title=\"You cannot delete your own account here\">-</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/auth/admin/users-dashboard/users-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/auth/admin/users-dashboard/users-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDashboardComponent", function() { return UsersDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersDashboardComponent = /** @class */ (function () {
    function UsersDashboardComponent(userService, tokenStorage) {
        this.userService = userService;
        this.tokenStorage = tokenStorage;
    }
    UsersDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._username = this.tokenStorage.getUsername();
        this.userService.getUsers().subscribe(function (data) {
            _this._users = data;
        }, function (error) {
            console.log(error);
        });
    };
    UsersDashboardComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function () {
            _this.ngOnInit();
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(UsersDashboardComponent.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersDashboardComponent.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    UsersDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-dashboard',
            template: __webpack_require__(/*! ./users-dashboard.component.html */ "./src/app/auth/admin/users-dashboard/users-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./users-dashboard.component.css */ "./src/app/auth/admin/users-dashboard/users-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], UsersDashboardComponent);
    return UsersDashboardComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(tokenService) {
        this.tokenService = tokenService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.tokenService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, HttpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorProviders", function() { return HttpInterceptorProviders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authRequest = req;
        var token = this.tokenService.getToken();
        if (token != null) {
            authRequest = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var HttpInterceptorProviders = [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }];


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "./src/app/auth/account/account.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/auth/admin/admin.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/auth/change-password/change-password.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _admin_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/auth-admin-guard.service */ "./src/app/auth/admin/auth-admin-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var authRoutes = [
    { path: 'app/signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'app/signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'app/account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'app/admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_admin_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]] },
    { path: 'app/fpswrd', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
    { path: 'app/chgpswrd', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _admin_auth_admin_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "./src/app/auth/account/account.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/auth/change-password/change-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/auth/admin/admin.component.ts");
/* harmony import */ var _admin_channels_dashboard_channels_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/channels-dashboard/channels-dashboard.component */ "./src/app/auth/admin/channels-dashboard/channels-dashboard.component.ts");
/* harmony import */ var _admin_tags_dashboard_tags_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/tags-dashboard/tags-dashboard.component */ "./src/app/auth/admin/tags-dashboard/tags-dashboard.component.ts");
/* harmony import */ var _admin_users_dashboard_users_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/users-dashboard/users-dashboard.component */ "./src/app/auth/admin/users-dashboard/users-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _admin_channels_dashboard_channels_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsDashboardComponent"],
                _admin_tags_dashboard_tags_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["TagsDashboardComponent"],
                _admin_users_dashboard_users_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["UsersDashboardComponent"]
            ],
            imports: [
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'https://twitch-tags.herokuapp.com/api/auth/signin';
        this.signupUrl = 'https://twitch-tags.herokuapp.com/api/auth/signup';
    }
    AuthService.prototype.attemptAuthentication = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signup = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.card {\n  background-color: #f8f8f8;\n}\n\nbutton {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/change-password/change-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\" >\n  <div class=\"columns\">\n    <div class=\"column\"></div>\n    <div class=\"column is-one-third\">\n      <div class=\"card has-text-centered\">\n        <div class=\"card-content\">\n          <h1 class=\"title\">Change Password</h1>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"oldPassword\" class=\"input\" type=\"password\" placeholder=\"Actual password\" name=\"password\" [ngClass]=\"{ 'is-danger': submitted && f.oldPassword.errors }\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.oldPassword.errors\">\n              <p *ngIf=\"f.oldPassword.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"newPassword\" class=\"input\" type=\"password\" placeholder=\"New password\" name=\"password\" [ngClass]=\"{ 'is-danger': submitted && f.newPassword.errors }\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.newPassword.errors\">\n              <p *ngIf=\"f.newPassword.errors.minlength\" class=\"help is-danger has-text-left\">The password should be at least 6 characters long</p>\n              <p *ngIf=\"f.newPassword.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"confirmPassword\" class=\"input\" type=\"password\" placeholder=\"Confirm password\" name=\"cpassword\" [ngClass]=\"{ 'is-danger': submitted && (f.confirmPassword.errors || passwordsNotMatching) }\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.confirmPassword.errors\">\n              <p *ngIf=\"f.confirmPassword.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n              <p *ngIf=\"f.confirmPassword.errors.passwordsNotMatching\" class=\"help is-danger has-text-left\">Passwords don't match</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-text-centered\">\n              <button class=\"button\">\n                Change password\n              </button>\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"column\"></div>\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/auth/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: this.passwordsNotMatching
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () {
            return this.changePasswordForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.passwordsNotMatching = function (abstractControl) {
        var password = abstractControl.get('newPassword').value;
        var cpassword = abstractControl.get('confirmPassword').value;
        if (password != cpassword) {
            abstractControl.get('confirmPassword').setErrors({ 'passwordsNotMatching': true });
        }
        else {
            return null;
        }
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            console.log('invalid form');
            return;
        }
        console.log(this.changePasswordForm);
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/auth/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/auth/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reset-password {\n  margin-top: 5%;\n}\n\n.title {\n  margin-bottom: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtcGFzc3dvcmQge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column\"></div>\n    <div class=\"column is-half\">\n\n\n          <h1 class=\"title\">You can't remember your password ?</h1>\n\n          <p>We will send you an email with a temporary password to log you in. Don't forget to change it once you are connected.</p>\n\n          <div class=\"field has-addons reset-password\">\n            <p class=\"control has-icons-left is-expanded\">\n              <input class=\"input\" type=\"email\" placeholder=\"Email\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n            </p>\n            <p class=\"control\">\n              <button class=\"button is-info\">\n                Submit\n              </button>\n            </p>\n          </div>\n\n\n\n    </div>\n    <div class=\"column\"></div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/auth/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: LoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfo", function() { return LoginInfo; });
var LoginInfo = /** @class */ (function () {
    function LoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline;\n}\n\n.card {\n  background-color: #f8f8f8;\n}\n\nbutton {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn\">\n<form class=\"container\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" >\n  <div class=\"columns\">\n    <div class=\"column\"></div>\n    <div class=\"column is-one-third\">\n\n      <div class=\"card has-text-centered\">\n        <div class=\"card-content\">\n          <h1 class=\"title\">Sign In</h1>\n          <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n              <input formControlName=\"username\" name=\"username\" class=\"input\" type=\"text\" placeholder=\"Username\" [ngClass]=\"{ 'is-danger': submitted && f.username.errors}\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.username.errors\">\n              <p *ngIf=\"f.username.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"password\" name=\"password\" class=\"input\" type=\"password\" placeholder=\"Password\" [ngClass]=\"{ 'is-danger': submitted && f.username.errors}\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.password.errors\">\n              <p *ngIf=\"f.password.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-text-centered\">\n              <button class=\"button\">\n                Login\n              </button>\n            </p>\n          </div>\n          <div *ngIf=\"submitted && isLoginFailed\" class=\"alert alert-danger\">\n            Login failed: username and/or password incorrect\n          </div>\n\n        </div>\n        <footer class=\"card-footer\">\n            <a class=\"card-footer-item\" (click)=\"goToSignup()\" >No account ? Sign up!</a>\n            <a class=\"card-footer-item\" (click)=\"goToForgottenPassword()\">Forgot your password ? </a>\n        </footer>\n      </div>\n\n    </div>\n    <div class=\"column\"></div>\n  </div>\n\n</form>\n</div>\n<div class=\"modal\" [ngClass]=\"{'is-active' : isLoggedIn}\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Success !</p>\n    </header>\n    <section class=\"modal-card-body\">\n      <p>You successfully logged in.</p>\n    </section>\n    <footer class=\"modal-card-foot\">\n      <button class=\"button\" (click)=\"goToAccount()\">Go to my account</button>\n      <button class=\"button\" (click)=\"goToHomepage()\">Go to homepage</button>\n      <button class=\"button\" (click)=\"goToAdmin()\" *ngIf=\"isAdmin\">Go to admin dashboard</button>\n    </footer>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _login_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-info */ "./src/app/auth/login-info.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/header.service */ "./src/app/services/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SigninComponent = /** @class */ (function () {
    function SigninComponent(route, formBuilder, authService, tokenStorage, title, headerService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.title = title;
        this.headerService = headerService;
        this.submitted = false;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.isAdmin = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.title.setTitle('TwitchTags - Log in');
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
            this.isAdmin = this.tokenStorage.isAdmin();
        }
    };
    Object.defineProperty(SigninComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.goToSignup = function () {
        this.route.navigate(['/app/signup']);
    };
    SigninComponent.prototype.goToForgottenPassword = function () {
        this.route.navigate(['/app/fpswrd']);
    };
    SigninComponent.prototype.goToAccount = function () {
        this.route.navigate(['/app/account']);
    };
    SigninComponent.prototype.goToHomepage = function () {
        this.route.navigate(['/app']);
    };
    SigninComponent.prototype.goToAdmin = function () {
        this.route.navigate(['/app/admin']);
    };
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            console.log('invalid form');
            return;
        }
        this.loginInfo = new _login_info__WEBPACK_IMPORTED_MODULE_4__["LoginInfo"](this.loginForm.value.username, this.loginForm.value.password);
        this.authService.attemptAuthentication(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.token);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.isAdmin = _this.tokenStorage.isAdmin();
            var authority = null;
            data.authorities.every(function (role) {
                if (role === 'ROLE_ADMIN') {
                    authority = 'admin';
                    return false;
                }
                authority = 'user';
                return true;
            });
            _this.headerService.toggleNavBar(authority);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _services_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup-info.ts":
/*!*************************************!*\
  !*** ./src/app/auth/signup-info.ts ***!
  \*************************************/
/*! exports provided: SignupInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupInfo", function() { return SignupInfo; });
var SignupInfo = /** @class */ (function () {
    function SignupInfo(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = 'user';
    }
    return SignupInfo;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline;\n}\n\n.card {\n  background-color: #f8f8f8;\n}\n\nbutton {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\" >\n  <div class=\"columns\">\n    <div class=\"column\"></div>\n    <div class=\"column is-one-third\">\n      <div class=\"card has-text-centered\">\n        <div class=\"card-content\">\n          <h1 class=\"title\">Sign Up</h1>\n          <div class=\"field\">\n            <div class=\"control has-icons-left has-icons-right\">\n              <input formControlName=\"username\" class=\"input\" type=\"text\" placeholder=\"Username\" name=\"username\" [ngClass]=\"{ 'is-danger': submitted && f.username.errors }\">\n              <span class=\"icon is-small is-left\">\n              <i class=\"fas fa-user\"></i>\n            </span>\n            </div>\n            <div *ngIf=\"submitted && f.username.errors\">\n              <p *ngIf=\"f.username.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n              <p *ngIf=\"f.username.errors.forbiddenUsername\" class=\"help is-danger has-text-left\">Username already used</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n              <input formControlName=\"email\" class=\"input\" type=\"email\" placeholder=\"Email\" name=\"email\" [ngClass]=\"{ 'is-danger': submitted && f.email.errors }\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.email.errors\">\n              <p *ngIf=\"f.email.errors.email\" class=\"help is-danger has-text-left\">This email is invalid</p>\n              <p *ngIf=\"f.email.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"password\" class=\"input\" type=\"password\" placeholder=\"Password\" name=\"password\" [ngClass]=\"{ 'is-danger': submitted && f.password.errors }\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.password.errors\">\n              <p *ngIf=\"f.password.errors.minlength\" class=\"help is-danger has-text-left\">The password should be at least 6 characters long</p>\n              <p *ngIf=\"f.password.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"confirmPassword\" class=\"input\" type=\"password\" placeholder=\"Confirm password\" name=\"cpassword\" [ngClass]=\"{ 'is-danger': submitted && f.confirmPassword.errors }\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <div *ngIf=\"submitted && f.confirmPassword.errors\">\n              <p *ngIf=\"f.confirmPassword.errors.required\" class=\"help is-danger has-text-left\">This field is required</p>\n              <p *ngIf=\"f.confirmPassword.errors.passwordsNotMatching\" class=\"help is-danger has-text-left\">Passwords don't match</p>\n            </div>\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-text-centered\">\n              <button class=\"button\">\n                Sign up!\n              </button>\n            </p>\n          </div>\n\n        </div>\n        <footer class=\"card-footer\">\n          <a class=\"card-footer-item\" (click)=\"goToLogin()\">Already have an account ? Sign in!</a>\n        </footer>\n      </div>\n\n    </div>\n    <div class=\"column\"></div>\n  </div>\n\n</form>\n<div class=\"modal\" [ngClass]=\"{'is-active' : isSignedUp}\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Success !</p>\n    </header>\n    <section class=\"modal-card-body\">\n      <p>Your new account is ready. You can now log yourself.</p>\n    </section>\n    <footer class=\"modal-card-foot\">\n      <button class=\"button\" (click)=\"goToLogin()\">Go to login page</button>\n    </footer>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _signup_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup-info */ "./src/app/auth/signup-info.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(route, formBuilder, usersService, authService, title) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.authService = authService;
        this.title = title;
        this.submitted = false;
        this.usedUsernames = ['user', 'user1'];
        this.isSignedUp = false;
        this.isSignupFailed = false;
        this.errorMessage = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('TwitchTags - Register');
        this.usersService.getUsernameList().subscribe(function (data) {
            _this.usedUsernames = data;
        });
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.forbiddenUsernames.bind(this)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: this.passwordsNotMatching
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.goToLogin = function () {
        this.route.navigate(['/app/signin']);
    };
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            console.log('invalid form');
            return;
        }
        this.signupInfo = new _signup_info__WEBPACK_IMPORTED_MODULE_5__["SignupInfo"](this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
        this.authService.signup(this.signupInfo).subscribe(function () {
            _this.isSignedUp = true;
            _this.isSignupFailed = false;
            _this.submitted = false;
        }, function (error) {
            _this.errorMessage = error.error.message;
            _this.isSignupFailed = true;
        });
    };
    SignupComponent.prototype.forbiddenUsernames = function (control) {
        if (this.usedUsernames.indexOf(control.value) !== -1) {
            return { 'forbiddenUsername': true };
        }
        return null;
    };
    SignupComponent.prototype.passwordsNotMatching = function (abstractControl) {
        var password = abstractControl.get('password').value;
        var cpassword = abstractControl.get('confirmPassword').value;
        if (password != cpassword) {
            abstractControl.get('confirmPassword').setErrors({ 'passwordsNotMatching': true });
        }
        else {
            return null;
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService.prototype.isAuthenticated = function () {
        return !!this.getToken();
    };
    TokenStorageService.prototype.isAdmin = function () {
        var authorities = this.getAuthorities();
        return authorities.includes('ROLE_ADMIN');
    };
    TokenStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/core/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-profile/channel-profile.component */ "./src/app/core/channel-profile/channel-profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'app/profile/:id', component: _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_2__["ChannelProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/channel-profile/channel-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/channel-profile/channel-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".channel-name {\n    font-size: 2em;\n    margin-top: 5%;\n    margin-bottom: 10%;\n}\n\n.tags-title {\n    font-size: 1.25em;\n    margin-bottom: 2%;\n}\n\n.tags-subtitle {\n    font-style: italic;\n    font-size: 0.60em;\n}\n\n.see-more {\n    float: right;\n    font-size: 0.80em;\n    margin-right: 10%;\n    margin-top: 2%;\n}\n\n.profile {\n    width: 40%;\n}\n\n.add-tag-title {\n    margin-top: 5%;\n    margin-bottom: 2%;\n}\n\n.add-tag-subtitle {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    font-size: 0.80em;\n}\n\n.button {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n.button:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n.channel-details {\n  margin-top: 5%;\n}\n\n.channel-language {\n  font-size: 0.5em;\n  vertical-align: text-top;\n}\n\n@media (max-width: 768px) {\n  .profile {\n    width: 95%;\n  }\n}\n\n@media (max-width: 1215px) {\n  .profile {\n    width: 60%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jaGFubmVsLXByb2ZpbGUvY2hhbm5lbC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jaGFubmVsLXByb2ZpbGUvY2hhbm5lbC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbm5lbC1uYW1lIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi50YWdzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuLnRhZ3Mtc3VidGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDAuNjBlbTtcbn1cblxuLnNlZS1tb3JlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAwLjgwZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5wcm9maWxlIHtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4uYWRkLXRhZy10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5hZGQtdGFnLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBmb250LXNpemU6IDAuODBlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0NWVjOTtcbiAgY29sb3IgOiAjZjhmOGY4O1xufVxuXG4uY2hhbm5lbC1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jaGFubmVsLWxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjE1cHgpIHtcbiAgLnByb2ZpbGUge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/channel-profile/channel-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/channel-profile/channel-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container profile\">\n  <div class=\"columns\">\n    <div class=\"column is-half\">\n      <img [src]=\"channel.avatar\" alt=\"{{ channel.name }}'s avatar\">\n    </div>\n    <div class=\"column is-half channel-details\">\n      <div class=\"is-vcentered\">\n        <div class=\"channel-name\">{{ channel.name }}\n        <span class=\"channel-language\">{{ channel.language | uppercase }}</span>\n        </div>\n        <div>Followers : {{ channel.followers | currency:' ':'symbol':'1.0-0'}}</div>\n        <div *ngIf=\"channel.status === 'PARTNER'; else notPartner\">\n          Status: Partner\n        </div>\n        <ng-template #notPartner>\n          <ng-container *ngIf=\"channel.status === 'AFFILIATE'; else notAffiliate\">\n            Status: Affiliate\n          </ng-container>\n        </ng-template>\n        <ng-template #notAffiliate>\n          Status: ni Partner, ni affiliate\n        </ng-template>\n        <div>\n          <a href=\"{{ channel.url }}\" target=\"_blank\">Go to Twitch channel </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"columns\">\n    <div class=\"column is-12\">\n      <div class=\"tags-title\">TAGS\n        <span class=\"tags-subtitle\">Click on a tag to endorse it</span>\n      </div>\n\n      <div *ngIf=\"seeMoreTags === false; else seeMore\">\n        <app-tag [arr]=\"tagItems\" [channel]=\"channel\" [limit]=\"5\" (updateNeeded)=\"updateChannelAndTags($event)\"></app-tag>\n\n      </div>\n      <ng-template #seeMore>\n        <div class=\"field is-grouped is-grouped-multiline\">\n          <app-tag [arr]=\"tagItems\" [channel]=\"channel\" [limit]=\"0\" (updateNeeded)=\"updateChannelAndTags($event)\"></app-tag>\n        </div>\n      </ng-template>\n      <a *ngIf=\"tagItems.length > 5\" (click)=\"toggleTags()\" class=\"see-more\">{{ seeMoreTagsString }}</a>\n    </div>\n  </div>\n  <div class=\"columns\">\n    <div class=\"column is-12\">\n      <div class=\"add-tag-title\">\n        Want to add a tag to this channel ?\n      </div>\n      <div class=\"field has-addons\">\n        <div class=\"dropdown is-active is-grouped-centered\">\n          <p class=\"control\">\n            <input type=\"text\" class=\"input\" [(ngModel)]=\"userInput\" (keyup)=\"filter()\" [attr.disabled]=\"!authenticated == true ? true : null\" >\n          </p>\n          <p class=\"control\">\n            <button class=\"button is-link\" (click)=\"addTag()\" [attr.disabled]=\"!authenticated == true ? true : null\">Add to channel</button>\n          </p>\n          <div class=\"dropdown-menu\"  *ngIf=\"filteredList.length > 0\">\n            <div class=\"dropdown-content\">\n              <div *ngFor=\"let tag of filteredList\" >\n                <a class=\"dropdown-item\" (click)=\"select(tag)\" >{{tag.name}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"notLogged\" *ngIf=\"!authenticated\">\n        You must be a member to add tags to channels. Please login or signup !\n      </div>\n      <a *ngIf=\"authenticated\" (click)=\"goToSubmitTag()\" class=\"add-tag-subtitle\">Don't find the tag you are looking for ? Submit a new one\n        here!</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/channel-profile/channel-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/channel-profile/channel-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChannelProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelProfileComponent", function() { return ChannelProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_link_tag_channel_user_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/link-tag-channel-user-info */ "./src/app/services/link-tag-channel-user-info.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_tag_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tag-item.service */ "./src/app/services/tag-item.service.ts");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/channels.service */ "./src/app/services/channels.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChannelProfileComponent = /** @class */ (function () {
    function ChannelProfileComponent(router, route, channelService, tagService, elementRef, tokenStorage, userService, title, tagItemService) {
        this.router = router;
        this.route = route;
        this.channelService = channelService;
        this.tagService = tagService;
        this.elementRef = elementRef;
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.title = title;
        this.tagItemService = tagItemService;
        this._authenticated = false;
        this._seeMoreTags = false;
        this._seeMoreTagsString = 'See more';
        this.userInput = '';
        this._tags = [];
        this._filteredList = [];
    }
    ChannelProfileComponent.prototype.onClick = function (target) {
        this.handleClick(target);
    };
    ChannelProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authenticated = this.tokenStorage.isAuthenticated();
        this.getChannelAndTags();
        this.tagService.getTags().subscribe(function (data) {
            _this._tags = data;
        });
    };
    ChannelProfileComponent.prototype.getChannelAndTags = function () {
        var _this = this;
        this.channelService.getChannel(this.route.snapshot.params['id']).subscribe(function (data) {
            _this._channel = data;
            _this.title.setTitle('TwitchTags - ' + _this._channel.name);
            _this.tagItems = _this.tagItemService.prepArrayTag(_this._channel.channelTagUserLinks);
        });
    };
    ;
    ChannelProfileComponent.prototype.updateChannelAndTags = function (event) {
        this.getChannelAndTags();
    };
    ChannelProfileComponent.prototype.toggleTags = function () {
        if (this._seeMoreTags == true) {
            this._seeMoreTags = false;
            this._seeMoreTagsString = 'See more';
        }
        else {
            this._seeMoreTags = true;
            this._seeMoreTagsString = 'See less';
        }
    };
    ChannelProfileComponent.prototype.goToSubmitTag = function () {
        this.router.navigate(['/app/submittag']);
    };
    ChannelProfileComponent.prototype.filter = function () {
        var _this = this;
        this._filteredList = this._tags.filter(function (tag) {
            return tag.name.toLowerCase().indexOf(_this.userInput.toLowerCase()) > -1;
        });
    };
    ChannelProfileComponent.prototype.select = function (item) {
        this.userInput = item.name;
        this._tagToAdd = item;
        this._filteredList = [];
    };
    ChannelProfileComponent.prototype.handleClick = function (eventTarget) {
        var inside = false;
        do {
            if (eventTarget === this.elementRef.nativeElement) {
                inside = true;
            }
            eventTarget = eventTarget.parentNode;
        } while (eventTarget);
        if (!inside)
            this._filteredList = [];
    };
    ChannelProfileComponent.prototype.addTag = function () {
        var _this = this;
        var username = this.tokenStorage.getUsername();
        var user;
        this.userService.getUserByUsername(username).subscribe(function (data) {
            user = data;
            var link = new _services_link_tag_channel_user_info__WEBPACK_IMPORTED_MODULE_4__["LinkTagChannelUserInfo"](_this._channel.id, _this.tagToAdd.id, user.id);
            _this.tagService.addTagToChannel(link).subscribe(function () {
                var str = _this.route.snapshot['_routerState'].url;
                _this.router.navigate(['/app/']).then(function () { return _this.router.navigate([str]); });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(ChannelProfileComponent.prototype, "filteredList", {
        get: function () {
            return this._filteredList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelProfileComponent.prototype, "tagToAdd", {
        get: function () {
            return this._tagToAdd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelProfileComponent.prototype, "authenticated", {
        get: function () {
            return this._authenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelProfileComponent.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelProfileComponent.prototype, "seeMoreTags", {
        get: function () {
            return this._seeMoreTags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelProfileComponent.prototype, "seeMoreTagsString", {
        get: function () {
            return this._seeMoreTagsString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelProfileComponent.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProfileComponent.prototype, "onClick", null);
    ChannelProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-profile',
            template: __webpack_require__(/*! ./channel-profile.component.html */ "./src/app/core/channel-profile/channel-profile.component.html"),
            styles: [__webpack_require__(/*! ./channel-profile.component.css */ "./src/app/core/channel-profile/channel-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_channels_service__WEBPACK_IMPORTED_MODULE_8__["ChannelsService"],
            _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_tag_item_service__WEBPACK_IMPORTED_MODULE_7__["TagItemService"]])
    ], ChannelProfileComponent);
    return ChannelProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/content/content.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/content/content.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/content/content.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/content/content.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/core/content/content.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/content/content.component.ts ***!
  \***************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/core/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/core/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/core/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/core/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/core/error/error.component.ts");
/* harmony import */ var _home_popular_popular_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/popular/popular.component */ "./src/app/core/home/popular/popular.component.ts");
/* harmony import */ var _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./channel-profile/channel-profile.component */ "./src/app/core/channel-profile/channel-profile.component.ts");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/channels.service */ "./src/app/services/channels.service.ts");
/* harmony import */ var _services_tag_item_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/tag-item.service */ "./src/app/services/tag-item.service.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _home_popular_popular_component__WEBPACK_IMPORTED_MODULE_10__["PopularComponent"],
                _channel_profile_channel_profile_component__WEBPACK_IMPORTED_MODULE_11__["ChannelProfileComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            exports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            providers: [
                _services_channels_service__WEBPACK_IMPORTED_MODULE_12__["ChannelsService"],
                _services_tag_item_service__WEBPACK_IMPORTED_MODULE_13__["TagItemService"],
                _services_tags_service__WEBPACK_IMPORTED_MODULE_14__["TagsService"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"],
                _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpInterceptorProviders"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/error/error.component.css":
/*!************************************************!*\
  !*** ./src/app/core/error/error.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 3em;\n}\n\n.button {\n  background-color: #6441a4;\n  margin: 5%;\n}\n\n.button:hover {\n  background-color: #4a3a7a;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTQ7XG4gIG1hcmdpbjogNSU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGEzYTdhO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/error/error.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/error/error.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container has-text-centered\">\n  <div class=\"columns\">\n\t<div class=\"column\"></div>\n\t<div class=\"column is-half\">\n    <h1 class=\"title\">\n      <span class=\"icon is-large\"><i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i></span>\n    </h1>\n    <h1 class=\"title\">\n      Page not found\n    </h1>\n    <button class=\"button is-large is-danger\" (click)=\"goToHomepage()\">Go back to homepage</button>\n  </div>\n\n\t<div class=\"column\"></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/core/error/error.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/error/error.component.ts ***!
  \***********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.goToHomepage = function () {
        this.router.navigate(['/app/']);
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/core/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/core/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n\tbackground-color: #2c2541;\n\tcolor: white;  \n\tpadding-left: 8%;\n}\n\nh3 {\n\tmargin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzJjMjU0MTtcblx0Y29sb3I6IHdoaXRlOyAgXG5cdHBhZGRpbmctbGVmdDogOCU7XG59XG5cbmgzIHtcblx0bWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"columns\">\n    <div class=\"column\">\n        <h3>FEEDBACK</h3>\n        Contact us\n        <br>\n        Donate\n    </div>\n    <div class=\"column\">\n        <h3>SOCIAL</h3>\n        Facebook\n        <br>\n        Twitter\n    </div>\n    <div class=\"column\"></div>\n    <div class=\"column\">\n        <h3>ABOUT</h3>\n        ©2018 TwitchTag\n        <br>\n        Powered by Angular & Bulma\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, #navbarLinksMobile {\n\tbackground-color: #6441a4;\n}\n\n.navbar-item {\n    color: white;\n}\n\n.navbar-item:hover {\n    background-color: #4a3a7a;\n    color: white;\n}\n\n.active-link {\n    background-color: #4a3a7a;\n}\n\n.navbar-brand {\n    color:white;\n    font-size: 1.25em;\n}\n\n.navbar-brand:hover {\n    color:white;\n}\n\n.navbar-start {\n    margin-left: 30%;\n}\n\n.navbar-brand {\n    margin-left: 5%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciwgI25hdmJhckxpbmtzTW9iaWxlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY0NDFhNDtcbn1cblxuLm5hdmJhci1pdGVtIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhM2E3YTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhM2E3YTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ubmF2YmFyLXN0YXJ0IHtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar header\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/app\">TwitchTags</a>\n    <div aria-label=\"menu\" aria-expanded=\"false\" class=\"navbar-burger burger\" data-target=\"navbarLinks\" (click)=\"toggleMenuBurger()\" [ngClass]=\"{'is-active': toggled}\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n\n  <div id=\"navbarLinks\" class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/submitchannel\">Submit a new channel</a>\n      <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/submittag\">Submit a new tag</a>\n    </div>\n\n    <div class=\"navbar-end\" *ngIf=\"!authority; else LoggedIn\">\n        <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/signin\">Sign in</a>\n        <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/signup\">Sign up</a>\n    </div>\n    <ng-template #LoggedIn>\n      <div class=\"navbar-end\">\n        <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/admin\" *ngIf=\"authority === 'admin'\">Admin Dashboard</a>\n        <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/account\">My Account</a>\n        <a class=\"navbar-item\" style=\"cursor: pointer\" (click)=\"logout()\">Logout</a>\n      </div>\n    </ng-template>\n\n  </div>\n\n  <div id=\"navbarLinksMobile\" class=\"navbar-menu\" [ngClass]=\"{'is-active': toggled}\" *ngIf=\"toggled\" (click)=\"toggleMenuBurger()\">\n    <div class=\"navbar-end\">\n      <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/submitchannel\" >Submit a new channel</a>\n      <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/submittag\">Submit a new tag</a>\n    </div>\n\n    <div class=\"navbar-end\" *ngIf=\"!authority; else LoggedIn\">\n      <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/signin\">Sign in</a>\n      <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/signup\">Sign up</a>\n    </div>\n    <ng-template #LoggedIn>\n      <div class=\"navbar-end\">\n        <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/admin\" *ngIf=\"authority === 'admin'\">Admin Dashboard</a>\n        <a class=\"navbar-item\" routerLinkActive=\"active-link\" routerLink=\"/app/account\">My Account</a>\n        <a class=\"navbar-item\" style=\"cursor: pointer\" (click)=\"logout()\">Logout</a>\n      </div>\n    </ng-template>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/header.service */ "./src/app/services/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(tokenStorage, router, headerService) {
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.headerService = headerService;
        this.toggled = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === 'ROLE_ADMIN') {
                    _this._authority = 'admin';
                    return false;
                }
                _this._authority = 'user';
                return true;
            });
        }
        this.headerService.updateNavBar.subscribe(function (data) { return _this._authority = data; });
    };
    HeaderComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
        this._authority = null;
        //this.headerService.toggleNavBar(null);
        this.router.navigate(['/app/']);
    };
    HeaderComponent.prototype.toggleMenuBurger = function () {
        this.toggled = this.toggled != true;
    };
    Object.defineProperty(HeaderComponent.prototype, "authority", {
        get: function () {
            return this._authority;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-banner {\n  background-image: url('banner.jpg');\n}\n.tint {\n  position: relative;\n  float: left;\n}\n.title, .subtitle {\n  color: #ffffff;\n}\n.tint:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(44,37,65,0.80);\n}\n.buttons {\n  display: block;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUF1RDtBQUN6RDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIuanBnXCIpO1xufVxuLnRpbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGl0bGUsIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGludDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsMzcsNjUsMC44MCk7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-large\">\n  <figure class=\"tint\">\n    <div class=\"hero-body home-banner\">\n      <div class=\"container has-text-centered\">\n        <h1 class=\"title\">Searching for new twitch channels ?</h1>\n        <h2 class=\"subtitle\">Do you want to search by tag or by name ?</h2>\n        <div class=\"buttons has-addons\">\n          <span class=\"button\" (click)=\"goToSearchByTags()\">BY TAG</span>\n          <span class=\"button\" (click)=\"goToSearchByName()\">BY NAME</span>\n        </div>\n      </div>\n\n    </div>\n  </figure>\n\n\n</section>\n<section class=\"section\">\n  <app-popular></app-popular>\n</section>\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle('TwitchTags - Home');
    };
    HomeComponent.prototype.goToSearchByTags = function () {
        this.router.navigate(['/app/search']);
    };
    HomeComponent.prototype.goToSearchByName = function () {
        this.router.navigate(['/app/searchName']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/home/popular/popular.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/home/popular/popular.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  margin: auto;\n  display: block;\n}\n\n.channel-name {\n  text-align: center;\n  font-size: 1.5em;\n  margin: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL3BvcHVsYXIvcG9wdWxhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9wb3B1bGFyL3BvcHVsYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGFubmVsLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/home/popular/popular.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/home/popular/popular.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns is-multiline\">\n    <div class=\"column is-one-quarter\" *ngFor=\"let channel of array\">\n      <img routerLink=\"/app/profile/{{channel[0].id}}\" src=\"{{channel[0].avatar}}\">\n      <div class=\"channel-name\">{{channel[0].name}}</div>\n      <app-tag [arr]=\"channel[1]\" [channel]=\"channel[0]\" [limit]=\"2\" (updateNeeded)=\"updateChannelAndTags($event)\"></app-tag>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/home/popular/popular.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/home/popular/popular.component.ts ***!
  \********************************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/channels.service */ "./src/app/services/channels.service.ts");
/* harmony import */ var _services_tag_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tag-item.service */ "./src/app/services/tag-item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopularComponent = /** @class */ (function () {
    function PopularComponent(channelService, tagItemService) {
        this.channelService = channelService;
        this.tagItemService = tagItemService;
        this.channels = [];
    }
    PopularComponent.prototype.ngOnInit = function () {
        this.getChannels();
    };
    PopularComponent.prototype.updateChannelAndTags = function (event) {
        this.getChannels();
    };
    PopularComponent.prototype.getChannels = function () {
        var _this = this;
        this.channelService.getChannels().subscribe(function (channels) {
            _this.channels = channels;
            _this.array = [];
            for (var _i = 0, channels_1 = channels; _i < channels_1.length; _i++) {
                var channel = channels_1[_i];
                var tagItems = _this.tagItemService.prepArrayTag(channel.channelTagUserLinks);
                var objectArray = [];
                objectArray.push(channel, tagItems);
                _this.array.push(objectArray);
            }
        }, function (error) { return console.error(error); });
    };
    PopularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular',
            template: __webpack_require__(/*! ./popular.component.html */ "./src/app/core/home/popular/popular.component.html"),
            styles: [__webpack_require__(/*! ./popular.component.css */ "./src/app/core/home/popular/popular.component.css")]
        }),
        __metadata("design:paramtypes", [_services_channels_service__WEBPACK_IMPORTED_MODULE_1__["ChannelsService"], _services_tag_item_service__WEBPACK_IMPORTED_MODULE_2__["TagItemService"]])
    ], PopularComponent);
    return PopularComponent;
}());



/***/ }),

/***/ "./src/app/search/result/result.component.css":
/*!****************************************************!*\
  !*** ./src/app/search/result/result.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n  margin: auto;\n  display: block;\n}\n\n.channel-name {\n  text-align: center;\n  font-size: 1.5em;\n  margin: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYW5uZWwtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAxJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/result/result.component.html":
/*!*****************************************************!*\
  !*** ./src/app/search/result/result.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns is-multiline\">\n    <div class=\"column is-one-quarter\" *ngFor=\"let channel of array\">\n      <img routerLink=\"/app/profile/{{channel[0].id}}\" src=\"{{channel[0].avatar}}\">\n      <div class=\"channel-name\">{{channel[0].name}}</div>\n      <app-tag [arr]=\"channel[1]\" [channel]=\"channel[0]\" [limit]=\"2\" (updateNeeded)=\"updateChannelAndTags($event)\"></app-tag>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/search/result/result.component.ts":
/*!***************************************************!*\
  !*** ./src/app/search/result/result.component.ts ***!
  \***************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _services_tag_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag-item.service */ "./src/app/services/tag-item.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(service, tagItemService) {
        this.service = service;
        this.tagItemService = tagItemService;
        this.channels = [];
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channels = this.service.searchResult;
        this.putChannelsInArray();
        this.service.resultChanged.subscribe(function (channels) {
            _this.channels = channels;
            _this.putChannelsInArray();
        });
    };
    ResultComponent.prototype.updateChannelAndTags = function (event) {
        this.channels = this.service.searchResult;
        this.putChannelsInArray();
    };
    ResultComponent.prototype.putChannelsInArray = function () {
        this.array = [];
        for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
            var channel = _a[_i];
            var tagItems = this.tagItemService.prepArrayTag(channel.channelTagUserLinks);
            var objectArray = [];
            objectArray.push(channel, tagItems);
            this.array.push(objectArray);
        }
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/search/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/search/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], _services_tag_item_service__WEBPACK_IMPORTED_MODULE_2__["TagItemService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/search/search-bar-name/search-bar-name.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/search/search-bar-name/search-bar-name.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field {\n  margin:3%;\n}\n\n.mybutton {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n.mybutton:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1iYXItbmFtZS9zZWFyY2gtYmFyLW5hbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLWJhci1uYW1lL3NlYXJjaC1iYXItbmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkIHtcbiAgbWFyZ2luOjMlO1xufVxuXG4ubXlidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm15YnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0NWVjOTtcbiAgY29sb3IgOiAjZjhmOGY4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/search/search-bar-name/search-bar-name.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/search/search-bar-name/search-bar-name.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n\t<div class=\"column\"></div>\n\t<div class=\"column is-two-thirds\">\n    <div class=\"field has-addons\">\n      <div class=\"control is-expanded\">\n        <input class=\"input\" type=\"text\" placeholder=\"Type channel name here\" [(ngModel)]=\"submittedName\">\n      </div>\n      <div class=\"control\">\n        <a class=\"button mybutton is-info add-tag-button\" (click)=\"search()\">\n          Search\n        </a>\n      </div>\n    </div>\n    <article class=\"message is-danger\" *ngIf=\"error\">\n      <div class=\"message-body\">{{message}}</div>\n    </article>\n  </div>\n\t<div class=\"column\"></div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/search/search-bar-name/search-bar-name.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/search/search-bar-name/search-bar-name.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchBarNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarNameComponent", function() { return SearchBarNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/channels.service */ "./src/app/services/channels.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search.service */ "./src/app/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarNameComponent = /** @class */ (function () {
    function SearchBarNameComponent(channelService, searchService) {
        this.channelService = channelService;
        this.searchService = searchService;
        this.submittedName = '';
        this.error = false;
        this.message = '';
    }
    SearchBarNameComponent.prototype.ngOnInit = function () {
    };
    SearchBarNameComponent.prototype.search = function () {
        var _this = this;
        this.error = false;
        this.channelService.searchName(this.submittedName).subscribe(function (data) {
            if (data.length == 0) {
                _this.error = true;
                _this.message = 'No channels found !';
            }
            else {
                _this.searchService.searchResult = data;
            }
        });
    };
    SearchBarNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar-name',
            template: __webpack_require__(/*! ./search-bar-name.component.html */ "./src/app/search/search-bar-name/search-bar-name.component.html"),
            styles: [__webpack_require__(/*! ./search-bar-name.component.css */ "./src/app/search/search-bar-name/search-bar-name.component.css")]
        }),
        __metadata("design:paramtypes", [_services_channels_service__WEBPACK_IMPORTED_MODULE_1__["ChannelsService"], _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], SearchBarNameComponent);
    return SearchBarNameComponent;
}());



/***/ }),

/***/ "./src/app/search/search-bar/search-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/search/search-bar/search-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mybutton {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n.mybutton:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubXlidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ1ZWM5O1xuICBjb2xvciA6ICNmOGY4Zjg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search/search-bar/search-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/search/search-bar/search-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"level\">\n  <div class=\"level-item has-text-centered\">\n    <div class=\"dropdown is-active is-grouped-centered\">\n\n      <input type=\"text\" class=\"input\" [(ngModel)]=\"userInput\" (keyup)=\"filter()\" >\n      <a class=\"button is-link mybutton\" (click)=\"search()\" >Search</a>\n\n      <div class=\"dropdown-menu\"  *ngIf=\"filteredList.length > 0\">\n        <div class=\"dropdown-content\">\n          <div *ngFor=\"let tag of filteredList\" >\n            <a class=\"dropdown-item\" (click)=\"select(tag)\" >{{tag.name}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"columns\">\n  <div class=\"column\"></div>\n  <div class=\"column is-half\">\n    <div class=\"field is-grouped is-grouped-multiline\">\n      <div class=\"control\" *ngFor=\"let tag of selected\" >\n        <div class=\"tags\">\n      <span class=\"tag is-rounded\" >{{tag.name}}\n      <button class=\"delete is-small\" (click)=\"remove(tag)\"></button>\n    </span>\n        </div>\n      </div>\n    </div>\n    <article class=\"message is-danger\" *ngIf=\"error\">\n      <div class=\"message-body\">{{message}}</div>\n    </article>\n\n  </div>\n  <div class=\"column\"></div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/search/search-bar/search-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/search/search-bar/search-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/channels.service */ "./src/app/services/channels.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "./src/app/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(elementRef, tagservice, channelsService, searchService) {
        this.elementRef = elementRef;
        this.tagservice = tagservice;
        this.channelsService = channelsService;
        this.searchService = searchService;
        this.userInput = '';
        this.tags = [];
        this._filteredList = [];
        this._selected = [];
        this.error = false;
    }
    SearchBarComponent.prototype.onClick = function (target) {
        this.handleClick(target);
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagservice.getTags().subscribe(function (data) {
            _this.tags = data;
        });
    };
    SearchBarComponent.prototype.filter = function () {
        var _this = this;
        this._filteredList = this.tags.filter(function (tag) {
            return tag.name.toLowerCase().indexOf(_this.userInput.toLowerCase()) > -1;
        });
    };
    SearchBarComponent.prototype.select = function (item) {
        this.error = false;
        this._selected.push(item);
        this.userInput = '';
        this._filteredList = [];
        this.tags.splice(this.tags.indexOf(item), 1);
    };
    SearchBarComponent.prototype.remove = function (item) {
        this._selected.splice(this._selected.indexOf(item), 1);
        this.tags.push(item);
    };
    SearchBarComponent.prototype.handleClick = function (eventTarget) {
        var inside = false;
        do {
            if (eventTarget === this.elementRef.nativeElement) {
                inside = true;
            }
            eventTarget = eventTarget.parentNode;
        } while (eventTarget);
        if (!inside)
            this._filteredList = [];
    };
    SearchBarComponent.prototype.search = function () {
        var _this = this;
        if (this._selected.length == 0) {
            this.message = 'Please select a tag. Cannot search for empty selection.';
            this.error = true;
            return;
        }
        this.error = false;
        var tagNames = '';
        for (var _i = 0, _a = this._selected; _i < _a.length; _i++) {
            var tag = _a[_i];
            tagNames = tagNames + tag.name + ',';
        }
        tagNames = tagNames.slice(0, -1);
        this.channelsService.search(tagNames).subscribe(function (data) {
            if (data.length == 0) {
                _this.error = true;
                _this.message = 'No channels found !';
                _this.searchService.searchResult = null;
            }
            else {
                _this.searchService.searchResult = data;
            }
        });
    };
    Object.defineProperty(SearchBarComponent.prototype, "filteredList", {
        get: function () {
            return this._filteredList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBarComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SearchBarComponent.prototype, "onClick", null);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"], _services_channels_service__WEBPACK_IMPORTED_MODULE_2__["ChannelsService"], _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'app/search', component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: 'app/searchName', component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.hero {*/\n  /*background-color: #4a3a7a;*/\n  /*}*/\n  .home-banner {\n  background-image: url('banner.jpg');\n}\n  .tint {\n  position: relative;\n  float: left;\n}\n  .tint:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(44,37,65,0.80);\n}\n  h1 {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7RUFDUiw2QkFBNkI7RUFDL0IsSUFBSTtFQUVKO0VBQ0UsbUNBQW9EO0FBQ3REO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0VBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IscUNBQXFDO0FBQ3ZDO0VBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5oZXJvIHsqL1xuICAvKmJhY2tncm91bmQtY29sb3I6ICM0YTNhN2E7Ki9cbi8qfSovXG5cbi5ob21lLWJhbm5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyLmpwZ1wiKTtcbn1cbi50aW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LDM3LDY1LDAuODApO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\" [ngClass]=\"{'is-large': !searching, 'is-medium': searching}\">\n  <figure class=\"tint\">\n    <div class=\"hero-body home-banner\">\n      <div class=\"container has-text-centered\" *ngIf=\"!searchName\">\n        <h1 class=\"title\">Find channels by tag</h1>\n        <app-search-bar></app-search-bar>\n      </div>\n      <div class=\"container has-text-centered\" *ngIf=\"searchName\">\n        <h1 class=\"title\">Find channels by name</h1>\n        <app-search-bar-name></app-search-bar-name>\n      </div>\n    </div>\n  </figure>\n</section>\n\n<section class=\"section\" *ngIf=\"searching\">\n  <app-result></app-result>\n</section>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(service, route, title) {
        this.service = service;
        this.route = route;
        this.title = title;
        this._searching = false;
        this._searchName = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('TwitchTags - Search');
        var path = this.route.snapshot['_routerState'].url;
        console.log(path);
        if (path == '/app/searchName') {
            this._searchName = true;
        }
        this.service.resultChanged.subscribe(function (data) {
            _this._searching = data != null;
        });
    };
    Object.defineProperty(SearchComponent.prototype, "searching", {
        get: function () {
            return this._searching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "searchName", {
        get: function () {
            return this._searchName;
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/app/search/result/result.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search/search-bar/search-bar.component.ts");
/* harmony import */ var _search_bar_name_search_bar_name_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-bar-name/search-bar-name.component */ "./src/app/search/search-bar-name/search-bar-name.component.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"],
                _search_bar_name_search_bar_name_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarNameComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchRoutingModule"]
            ],
            providers: [_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService() {
        this._resultChanged = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._searchResult = [];
    }
    Object.defineProperty(SearchService.prototype, "searchResult", {
        get: function () {
            return this._searchResult;
        },
        set: function (value) {
            this._searchResult = value;
            this._resultChanged.next(this.searchResult);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "resultChanged", {
        get: function () {
            return this._resultChanged;
        },
        enumerable: true,
        configurable: true
    });
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/channels.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/channels.service.ts ***!
  \**********************************************/
/*! exports provided: ChannelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsService", function() { return ChannelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelsService = /** @class */ (function () {
    function ChannelsService(http) {
        this.http = http;
        this.defaultPath = 'https://twitch-tags.herokuapp.com/api/channels/';
        this.createPath = this.defaultPath + 'create';
        this.existencePath = this.defaultPath + 'is-present/';
        this.searchPath = this.defaultPath + 'search';
        this.searchNamePath = this.defaultPath + 'search/name';
        this.twitchApiPath = 'https://api.twitch.tv/kraken/channels/';
        this.twitchApiHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Client-ID', 'wbgsc1jmwkz93veikuxudvjwh18d39');
    }
    ChannelsService.prototype.getChannels = function () {
        return this.http.get(this.defaultPath);
    };
    ChannelsService.prototype.getChannel = function (id) {
        var idPath = this.defaultPath + id;
        return this.http.get(idPath);
    };
    ChannelsService.prototype.updateChannel = function (channel) {
        var idPath = this.defaultPath + channel.id;
        return this.http.put(idPath, channel);
    };
    ChannelsService.prototype.saveChannel = function (channel) {
        return this.http.post(this.createPath, channel);
    };
    ChannelsService.prototype.deleteChannel = function (channel) {
        var idPath = this.defaultPath + channel.id;
        return this.http.delete(idPath);
    };
    ChannelsService.prototype.getDataFromTwitchApi = function (channel) {
        var path = this.twitchApiPath + channel;
        return this.http.get(path, {
            headers: this.twitchApiHeaders
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    ChannelsService.prototype.alreadyExist = function (channelName) {
        var path = this.existencePath + channelName;
        return this.http.get(path);
    };
    ChannelsService.prototype.search = function (tags) {
        return this.http.get(this.searchPath + '?tag=' + tags);
    };
    ChannelsService.prototype.searchName = function (name) {
        return this.http.get(this.searchNamePath + '?channel=' + name);
    };
    ChannelsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChannelsService);
    return ChannelsService;
}());



/***/ }),

/***/ "./src/app/services/header.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/header.service.ts ***!
  \********************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this._updateNavBar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    HeaderService.prototype.toggleNavBar = function (value) {
        this.updateNavBar.next(value);
    };
    Object.defineProperty(HeaderService.prototype, "updateNavBar", {
        get: function () {
            return this._updateNavBar;
        },
        enumerable: true,
        configurable: true
    });
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/services/link-tag-channel-user-info.ts":
/*!********************************************************!*\
  !*** ./src/app/services/link-tag-channel-user-info.ts ***!
  \********************************************************/
/*! exports provided: LinkTagChannelUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTagChannelUserInfo", function() { return LinkTagChannelUserInfo; });
var LinkTagChannelUserInfo = /** @class */ (function () {
    function LinkTagChannelUserInfo(channelId, tagId, userId) {
        this.channelId = channelId;
        this.tagId = tagId;
        this.userId = userId;
    }
    return LinkTagChannelUserInfo;
}());



/***/ }),

/***/ "./src/app/services/tag-item.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/tag-item.service.ts ***!
  \**********************************************/
/*! exports provided: TagItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItemService", function() { return TagItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_tag_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/tag-item.model */ "./src/app/shared/models/tag-item.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagItemService = /** @class */ (function () {
    function TagItemService() {
    }
    TagItemService.prototype.prepArrayTag = function (links) {
        if (links == null)
            console.log('null');
        var arr = [];
        var tagNames = [];
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            if (!tagNames.includes(link.tagName)) {
                tagNames.push(link.tagName);
            }
        }
        for (var _a = 0, tagNames_1 = tagNames; _a < tagNames_1.length; _a++) {
            var name_1 = tagNames_1[_a];
            var count = 0;
            for (var _b = 0, links_2 = links; _b < links_2.length; _b++) {
                var link = links_2[_b];
                if (name_1 == link.tagName) {
                    count++;
                }
            }
            var item = new _shared_models_tag_item_model__WEBPACK_IMPORTED_MODULE_1__["TagItem"]();
            item.name = name_1;
            item.count = count;
            arr.push(item);
        }
        return arr;
    };
    TagItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TagItemService);
    return TagItemService;
}());



/***/ }),

/***/ "./src/app/services/tags.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsService = /** @class */ (function () {
    function TagsService(http) {
        this.http = http;
        this.defaultPath = 'https://twitch-tags.herokuapp.com/api/tags/';
        this.getByNamePath = 'https://twitch-tags.herokuapp.com/api/tags/search-by-name/';
        this.existencePath = this.defaultPath + 'is-present/';
        this.createPath = this.defaultPath + 'create/';
        this.linkTagChannelPath = 'https://twitch-tags.herokuapp.com/api/channel-tag-user-link/create';
    }
    TagsService.prototype.getTags = function () {
        return this.http.get(this.defaultPath);
    };
    TagsService.prototype.createTag = function (tag) {
        return this.http.post(this.createPath, tag);
    };
    TagsService.prototype.tagExists = function (tagName) {
        var path = this.existencePath + tagName;
        return this.http.get(path);
    };
    TagsService.prototype.addTagToChannel = function (link) {
        return this.http.post(this.linkTagChannelPath, link);
    };
    TagsService.prototype.updateTag = function (tag) {
        var updatePath = this.defaultPath + tag.id;
        return this.http.put(updatePath, tag);
    };
    TagsService.prototype.deleteTag = function (tag) {
        var deletePath = this.defaultPath + tag.id;
        return this.http.delete(deletePath);
    };
    TagsService.prototype.getTag = function (name) {
        var path = this.getByNamePath + name;
        return this.http.get(path);
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.defaultPath = 'https://twitch-tags.herokuapp.com/api/users/';
        this.usernamesPath = this.defaultPath + 'usernames';
        this.createPath = this.defaultPath + 'create';
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.defaultPath);
    };
    UsersService.prototype.getUsernameList = function () {
        return this.http.get(this.usernamesPath);
    };
    UsersService.prototype.getUser = function (id) {
        var idPath = this.defaultPath + id;
        return this.http.get(idPath);
    };
    UsersService.prototype.getUserByUsername = function (username) {
        var usernamePath = this.defaultPath + 'username/' + username;
        return this.http.get(usernamePath);
    };
    UsersService.prototype.saveUser = function (user) {
        return this.http.post(this.createPath, user);
    };
    UsersService.prototype.updateUser = function (user) {
        var idPath = this.defaultPath + user.id;
        return this.http.put(idPath, user);
    };
    UsersService.prototype.deleteUser = function (user) {
        var idPath = this.defaultPath + user.id;
        return this.http.delete(idPath);
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/models/channel.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/channel.model.ts ***!
  \************************************************/
/*! exports provided: Channel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function() { return Channel; });
var Channel = /** @class */ (function () {
    function Channel(name, url, language, avatar, followers, partner, status, channelTagUserLinks) {
        this.name = name;
        this.url = url;
        this.language = language;
        this.avatar = avatar;
        this.followers = followers;
        this.partner = partner;
        this.status = status;
        this.affiliate = false;
        if (channelTagUserLinks) {
            this.channelTagUserLinks = channelTagUserLinks;
        }
        this.channelTagUserLinks = [];
    }
    return Channel;
}());



/***/ }),

/***/ "./src/app/shared/models/tag-item.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/tag-item.model.ts ***!
  \*************************************************/
/*! exports provided: TagItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagItem", function() { return TagItem; });
var TagItem = /** @class */ (function () {
    function TagItem() {
    }
    return TagItem;
}());



/***/ }),

/***/ "./src/app/shared/models/tag.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/tag.model.ts ***!
  \********************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
var Tag = /** @class */ (function () {
    function Tag(name) {
        this.name = name;
    }
    return Tag;
}());



/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(pseudo, email, password) {
        this.username = pseudo;
        this.email = email;
        this.password = password;
        this.role = "STANDARD_USER";
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/pipes/limit.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/limit.pipe.ts ***!
  \********************************************/
/*! exports provided: LimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitPipe", function() { return LimitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitPipe = /** @class */ (function () {
    function LimitPipe() {
    }
    LimitPipe.prototype.transform = function (items, limit) {
        if (limit == 0)
            return items;
        return items.slice(0, limit);
    };
    LimitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'limitPipe'
        })
    ], LimitPipe);
    return LimitPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/shared/tag/tag.component.ts");
/* harmony import */ var _pipes_limit_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/limit.pipe */ "./src/app/shared/pipes/limit.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tag_tag_component__WEBPACK_IMPORTED_MODULE_2__["TagComponent"],
                _pipes_limit_pipe__WEBPACK_IMPORTED_MODULE_3__["LimitPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _tag_tag_component__WEBPACK_IMPORTED_MODULE_2__["TagComponent"],
                _pipes_limit_pipe__WEBPACK_IMPORTED_MODULE_3__["LimitPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/tag/tag.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/tag/tag.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".purple {\n    background-color: #4a3a7a;\n    color: white;\n}\n\n.light-purple {\n    background-color: #6441a4;\n    color: white;\n}\n\n.tag {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhZy90YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhZy90YWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTNhN2E7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGlnaHQtcHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0MWE0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/tag/tag.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/tag/tag.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field is-grouped is-grouped-multiline\">\n  <div class=\"control\" *ngFor=\"let link of (arr | limitPipe:limit)\">\n    <div class=\"tags has-addons\" (click)=\"onTagClicked(link.name)\">\n      <span class=\"tag purple\">{{link.name}}</span>\n      <span class=\"tag light-purple\">+{{link.count}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/tag/tag.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/tag/tag.component.ts ***!
  \*********************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_link_tag_channel_user_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/link-tag-channel-user-info */ "./src/app/services/link-tag-channel-user-info.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _models_channel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/channel.model */ "./src/app/shared/models/channel.model.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tags.service */ "./src/app/services/tags.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagComponent = /** @class */ (function () {
    function TagComponent(tokenStorage, userService, tagService) {
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.tagService = tagService;
        this.updateNeeded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TagComponent.prototype.ngOnInit = function () {
    };
    TagComponent.prototype.onTagClicked = function (linkName) {
        var _this = this;
        var username = this.tokenStorage.getUsername();
        var user;
        this.userService.getUserByUsername(username).subscribe(function (data) {
            user = data;
            var tagToAdd;
            _this.tagService.getTag(linkName).subscribe(function (data) {
                tagToAdd = data;
                var link = new _services_link_tag_channel_user_info__WEBPACK_IMPORTED_MODULE_1__["LinkTagChannelUserInfo"](_this.channel.id, tagToAdd.id, user.id);
                _this.tagService.addTagToChannel(link).subscribe(function () {
                    _this.updateNeeded.emit(true);
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TagComponent.prototype, "arr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TagComponent.prototype, "limit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_channel_model__WEBPACK_IMPORTED_MODULE_4__["Channel"])
    ], TagComponent.prototype, "channel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "updateNeeded", void 0);
    TagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__(/*! ./tag.component.html */ "./src/app/shared/tag/tag.component.html"),
            styles: [__webpack_require__(/*! ./tag.component.css */ "./src/app/shared/tag/tag.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _services_tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/submit/submit-channel/submit-channel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/submit/submit-channel/submit-channel.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n\ttext-align: center;\n\tmargin-bottom: 100px;\n}\n\n.submitChannelDetails {\n\tmargin-top: 50px;\n\tfont-size: 0.75em;\n}\n\n.button {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n.button:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0L3N1Ym1pdC1jaGFubmVsL3N1Ym1pdC1jaGFubmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdWJtaXQvc3VibWl0LWNoYW5uZWwvc3VibWl0LWNoYW5uZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5zdWJtaXRDaGFubmVsRGV0YWlscyB7XG5cdG1hcmdpbi10b3A6IDUwcHg7XG5cdGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NDFhNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ1ZWM5O1xuICBjb2xvciA6ICNmOGY4Zjg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/submit/submit-channel/submit-channel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/submit/submit-channel/submit-channel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n\t<div class=\"column\"></div>\n\t<div class=\"column is-half\">\n\n    <h2 class=\"title\">Submit a new channel</h2>\n\n    <div class=\"field has-addons\">\n      <div class=\"control is-expanded\">\n        <input class=\"input\" id=\"input\" type=\"text\" placeholder=\"Type channel name here\" [(ngModel)]=\"submittedChannel\">\n      </div>\n      <div class=\"control\">\n        <a class=\"button is-info\" (click)=\"submitChannel()\">\n          Submit\n        </a>\n      </div>\n    </div>\n    <article class=\"message is-danger\" *ngIf=\"error\">\n      <div class=\"message-body\">{{message}}</div>\n    </article>\n    <div class=\"submitChannelDetails has-text-justified\">\n      <p>Here you can add a channel if you did not find the one you were looking for. On submitting, we will check that the channel does really exist and add it to our database.</p>\n    </div>\n  </div>\n\t<div class=\"column\"></div>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/submit/submit-channel/submit-channel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/submit/submit-channel/submit-channel.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubmitChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitChannelComponent", function() { return SubmitChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_channels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/channels.service */ "./src/app/services/channels.service.ts");
/* harmony import */ var _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/channel.model */ "./src/app/shared/models/channel.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmitChannelComponent = /** @class */ (function () {
    function SubmitChannelComponent(service, router, title) {
        this.service = service;
        this.router = router;
        this.title = title;
        this._error = false;
        this._message = '';
    }
    SubmitChannelComponent.prototype.ngOnInit = function () {
        this.title.setTitle('TwitchTags - Submit channel');
    };
    SubmitChannelComponent.prototype.submitChannel = function () {
        var _this = this;
        this.service.alreadyExist(this.submittedChannel).subscribe(function (data) {
            if (data) {
                _this._error = true;
                _this._message = 'This channel already exist in database.';
            }
            else {
                _this.service.getDataFromTwitchApi(_this.submittedChannel).subscribe(function (data) {
                    if (data.status == '404') {
                        _this._error = true;
                        _this._message = 'This channel does not exist.';
                    }
                    else {
                        var status_1 = 'NONE';
                        if (data.partner)
                            status_1 = 'PARTNER';
                        var channel = new _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_4__["Channel"](data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status_1);
                        _this.service.saveChannel(channel).subscribe(function (data) {
                            _this.router.navigate(['/app/profile/' + data.id]);
                        });
                    }
                }, function (error1) {
                    console.log('Channel not found ' + error1);
                    _this._error = true;
                    _this._message = 'This channel does not exist.';
                });
            }
        });
    };
    Object.defineProperty(SubmitChannelComponent.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubmitChannelComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    SubmitChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-channel',
            template: __webpack_require__(/*! ./submit-channel.component.html */ "./src/app/submit/submit-channel/submit-channel.component.html"),
            styles: [__webpack_require__(/*! ./submit-channel.component.css */ "./src/app/submit/submit-channel/submit-channel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_channels_service__WEBPACK_IMPORTED_MODULE_3__["ChannelsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SubmitChannelComponent);
    return SubmitChannelComponent;
}());



/***/ }),

/***/ "./src/app/submit/submit-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/submit/submit-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SubmitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitRoutingModule", function() { return SubmitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _submit_tag_submit_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit-tag/submit-tag.component */ "./src/app/submit/submit-tag/submit-tag.component.ts");
/* harmony import */ var _submit_channel_submit_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit-channel/submit-channel.component */ "./src/app/submit/submit-channel/submit-channel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'app/submitchannel', component: _submit_channel_submit_channel_component__WEBPACK_IMPORTED_MODULE_3__["SubmitChannelComponent"] },
    { path: 'app/submittag', component: _submit_tag_submit_tag_component__WEBPACK_IMPORTED_MODULE_2__["SubmitTagComponent"] },
];
var SubmitRoutingModule = /** @class */ (function () {
    function SubmitRoutingModule() {
    }
    SubmitRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], SubmitRoutingModule);
    return SubmitRoutingModule;
}());



/***/ }),

/***/ "./src/app/submit/submit-tag/submit-tag.component.css":
/*!************************************************************!*\
  !*** ./src/app/submit/submit-tag/submit-tag.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n\ttext-align: center;\n\tmargin-bottom: 100px;\n}\n\n.submitTagDetails {\n\tmargin-top: 50px;\n\tfont-size: 0.75em;\n}\n\n.button {\n  background-color: #6441a4;\n  color: #ffffff;\n}\n\n.button:hover {\n  background-color: #845ec9;\n  color : #f8f8f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0L3N1Ym1pdC10YWcvc3VibWl0LXRhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc3VibWl0L3N1Ym1pdC10YWcvc3VibWl0LXRhZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLnN1Ym1pdFRhZ0RldGFpbHMge1xuXHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRmb250LXNpemU6IDAuNzVlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0NWVjOTtcbiAgY29sb3IgOiAjZjhmOGY4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/submit/submit-tag/submit-tag.component.html":
/*!*************************************************************!*\
  !*** ./src/app/submit/submit-tag/submit-tag.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column\"></div>\n    <div class=\"column is-half\">\n\n      <h2 class=\"title\">Submit a new tag</h2>\n\n      <div class=\"field has-addons\">\n        <div class=\"control is-expanded\">\n          <input class=\"input\" id=\"input\" type=\"text\" placeholder=\"Type tag name here\" [(ngModel)]=\"submittedTag\" [ngClass]=\"{'is-danger': tagAlreadyExist}\">\n        </div>\n        <div class=\"control\">\n          <a class=\"button is-info\" (click)=\"submitTag()\">\n            Submit\n          </a>\n        </div>\n      </div>\n      <article class=\"message is-danger\" *ngIf=\"tagAlreadyExist\">\n        <div class=\"message-body\">This tag already exists.</div>\n      </article>\n      <div class=\"submitTagDetails has-text-justified\">\n        <p>Here you can submit a tag if you did not find the one you were looking for.\n          Please don't submit hateful, racist, homophobic, or otherwise socially derogatory words.</p>\n        <p>After submitting a tag, you will be able to find it in the list of tags under the channel profile. All newly submitted tags will be reviewed to make sure that it follows the rules.</p>\n      </div>\n    </div>\n    <div class=\"column\"></div>\n  </div>\n</div>\n\n<div class=\"modal\" [ngClass]=\"{'is-active' : modalActive}\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-card\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Success!</p>\n    </header>\n    <section class=\"modal-card-body\">\n      <p>The tag {{submittedTag}} was successfully added to our database.</p>\n    </section>\n    <footer class=\"modal-card-foot\">\n      <button class=\"button is-danger\" (click)=\"addAnother()\">Submit another tag</button>\n      <button class=\"button is-danger\" (click)=\"goToHomepage()\">Go back to homepage</button>\n    </footer>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/submit/submit-tag/submit-tag.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/submit/submit-tag/submit-tag.component.ts ***!
  \***********************************************************/
/*! exports provided: SubmitTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitTagComponent", function() { return SubmitTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmitTagComponent = /** @class */ (function () {
    function SubmitTagComponent(tagsService, router, title) {
        this.tagsService = tagsService;
        this.router = router;
        this.title = title;
        this.tagAlreadyExist = false;
        this.modalActive = false;
    }
    SubmitTagComponent.prototype.ngOnInit = function () {
        this.title.setTitle('TwitchTags - Submit new tag');
    };
    SubmitTagComponent.prototype.submitTag = function () {
        var _this = this;
        this.tagsService.tagExists(this.submittedTag).subscribe(function (data) {
            if (data) {
                _this.tagAlreadyExist = true;
            }
            else {
                _this.tagAlreadyExist = false;
                var newTag = new _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_4__["Tag"](_this.submittedTag);
                _this.tagsService.createTag(newTag).subscribe(function () {
                    _this.modalActive = true;
                });
            }
        });
    };
    SubmitTagComponent.prototype.addAnother = function () {
        this.submittedTag = '';
        this.modalActive = !this.modalActive;
    };
    SubmitTagComponent.prototype.goToHomepage = function () {
        this.router.navigate(['/app']);
    };
    SubmitTagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-tag',
            template: __webpack_require__(/*! ./submit-tag.component.html */ "./src/app/submit/submit-tag/submit-tag.component.html"),
            styles: [__webpack_require__(/*! ./submit-tag.component.css */ "./src/app/submit/submit-tag/submit-tag.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SubmitTagComponent);
    return SubmitTagComponent;
}());



/***/ }),

/***/ "./src/app/submit/submit.module.ts":
/*!*****************************************!*\
  !*** ./src/app/submit/submit.module.ts ***!
  \*****************************************/
/*! exports provided: SubmitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitModule", function() { return SubmitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _submit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submit-routing.module */ "./src/app/submit/submit-routing.module.ts");
/* harmony import */ var _submit_channel_submit_channel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit-channel/submit-channel.component */ "./src/app/submit/submit-channel/submit-channel.component.ts");
/* harmony import */ var _submit_tag_submit_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit-tag/submit-tag.component */ "./src/app/submit/submit-tag/submit-tag.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SubmitModule = /** @class */ (function () {
    function SubmitModule() {
    }
    SubmitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _submit_channel_submit_channel_component__WEBPACK_IMPORTED_MODULE_4__["SubmitChannelComponent"],
                _submit_tag_submit_tag_component__WEBPACK_IMPORTED_MODULE_5__["SubmitTagComponent"]
            ],
            imports: [
                _submit_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubmitRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], SubmitModule);
    return SubmitModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The listAll of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gwen/Documents/dev/twitch-tags/src/main/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map