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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'JS world';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_collaboration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/collaboration.service */ "./src/app/services/collaboration.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_5__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_10__["NewProblemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [{
                    provide: "data",
                    useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
                },
                {
                    provide: "auth",
                    useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
                }, {
                    provide: "authGuard",
                    useClass: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]
                }, {
                    provide: "collaboration",
                    useClass: _services_collaboration_service__WEBPACK_IMPORTED_MODULE_14__["CollaborationService"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");





var routes = [
    {
        path: "",
        redirectTo: "problems",
        pathMatch: "full"
    },
    {
        path: "problems",
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"]
    },
    {
        path: "problems/:id",
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"]
    },
    {
        path: "profile",
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: "**",
        redirectTo: "problems",
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n  #editor {\n    height:600px;\n  }\n  .lang-select{\n    width:100px;\n    margin-right:10px;\n  }\n  header .btn{\n    margin: 0 5px;\n  }\n\n  footer .btn{\n    margin: 0 5px;\n  }\n\n  .editor-footer{\n    margin: 10px 0;\n\n  }\n\n  .editor-header{\n    margin:10px 0;\n  }\n\n  .cursor{\n\n    background:rgba(0,250,0,0.5);\n    z-index:40;\n    width:2px!important\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"editor-header\">\n    <select class=\"form-control pull-left lang-select\" name=\"language\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n      <option *ngFor=\"let language of languages\" [value]=\"language\">\n        {{language}}\n      </option>\n    </select>\n\n\n    <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\">\n      </span>\n    </button>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\" id=\"myModalLabel\">Reset</h4>\n          </div>\n          <div class=\"modal-body\">\n            You will lose current code in the window, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n\n  <div class=\"row\">\n    <div id=\"editor\"></div>\n  </div>\n\n  <footer class=\"editor-footer\">\n    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit Solution</button>\n  </footer>\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.languages = ['Java', 'C++', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Example{\n      public static void main(String[] args){\n      //type your code here\n      }\n    }",
            'C++': "#include<iostream>\n            using namespace std;\n            int main(){\n        //Type your C++ code here\n        return 0;\n    }",
            'Python': "class Solution:\n    def example():\n        #write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        document.getElementsByTagName('textarea')[0].focus();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor changes:' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
    };
    EditorComponent.prototype.submit = function () {
        var userCode = this.editor.getValue();
        console.log(userCode);
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('collaboration')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <form class = \"navbar-form\">\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!auth.authenticated()\"(click)=\"login()\">Sign in</button>\n          </form>\n\n        </li>\n\n\n\n        <li class=\"nav-item dropdown\" *ngIf=\"auth.authenticated()\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{username}}\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/profile\">My Profile</a>\n            <a class=\"dropdown-item\" href=\"#\">My favorites</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">My Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">Log Out</a>\n          </div>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n\n\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Problem\" aria-label=\"Search\">\n      </form>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.title = "LY-code";
        this.username = "lyuan11";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.username = this.auth.getProfile().nickname;
        }
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.auth.login()
            .then(function (profile) { return _this.username = profile.nickname; });
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef=\"ngForm\">\n    <div class = \"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id = \"problemName\"\n      name=\"problemName\" required placeholder=\"Enter Problem Name\" [(ngModel)]=\"newProblem.name\">\n    </div>\n\n    <div class = \"form-group\">\n      <label for=\"problemName\">Problem Description</label>\n      <textarea type=\"text\" row=\"3\" class=\"form-control\" id = \"problemDesc\"\n      name=\"problemDesc\" required placeholder=\"Enter Problem Description\" [(ngModel)]=\"newProblem.desc\"></textarea>\n    </div>\n    <div class = \"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select  class=\"form-control\" id = \"difficulty\"\n      name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n        <option value=\"\" disabled selected>Select Difficulty</option>\n      <option *ngFor=\"let difficulty of difficulties\" [value] =\"difficulty\">\n        {{difficulty}}\n      </option>\n    </select>\n    </div>\n    <div class = \"row\">\n      <div class = \"col-md-12\">\n        <button type = \"submit\" class= \"btn btn-primary pull-right\" (click)=\"addProblem()\" > Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: "",
    desc: "",
    difficulty: ""
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.difficulties = ["Easy", "Medium", "Hard", "Super"];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error._body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("authGuard")),
        __metadata("design:paramtypes", [Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\" container\" *ngIf=\"problem\">\n  <div class = \"col-xs-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}.{{problem.name}}\n      </h2>\n      <p>\n        {{problem.desc}}\n      </p>\n      <br />\n    </div>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list-component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list-component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list-component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list-component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <app-new-problem></app-new-problem>\n        <div class = \"list-group\">\n          <a class = \"list-group-item\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems',problem.id]\">\n            <span class = \"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty }}</span>\n            <strong class = \"title\">{{problem.id }},{{problem.name }}</strong>\n          </a>\n        </div>\n   </div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(data) {
        this.data = data;
        this.problems = [];
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list-component.html */ "./src/app/components/problem-list/problem-list-component.html"),
            styles: [__webpack_require__(/*! ./problem-list-component.css */ "./src/app/components/problem-list/problem-list-component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("data")),
        __metadata("design:paramtypes", [Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#password\">Change Password</a></li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <div class = \"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id = \"email\"\n               name=\"email\" disabled value = \"{{email}}\" >\n      </div>\n      <div class = \"form-group\">\n        <label for=\"username\">User Name</label>\n        <input type=\"text\" class=\"form-control\" id = \"username\"\n               name=\"username\" disabled value = \"{{username}}\" >\n      </div>\n    </div>\n    <div id=\"password\" class=\"tab-pane fade\">\n      <form class = \"navbar-form\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"resetPassword()\">Reset Password via email</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.email = '';
        this.username = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var profile = this.auth.getProfile();
        this.email = profile.email;
        this.username = profile.nickname;
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.auth.resetPassword();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return true;
        }
        else {
            //redirect to home page if not logged in
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.authenticated() && this.auth.getProfile().roles.includes('Admin')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// app/auth.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // Configure Auth0
        // auth0 = new auth0.WebAuth({
        //     clientID: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
        //     domain: 'lyuan11.auth0.com',
        //     responseType: 'token id_token',
        //     redirectUri: 'http://localhost:3000/callback',
        //     scope: 'openid'
        //   });
        //
        //   constructor(public router: Router) {}
        //
        //   public login(): void {
        //     this.auth0.authorize();
        //   }
        // var webAuth = new auth0.WebAuth({
        //   domain: 'YOUR_AUTH0_DOMAIN',
        //   clientID: 'YOUR_CLIENT_ID'
        // });
        this.lock = new Auth0Lock('9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP', 'lyuan11.auth0.com');
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Call the show method to display the widget.
            _this.lock.show(function (error, profile, id_token) {
                if (error) {
                    reject(error);
                }
                else {
                    localStorage.setItem('profile', JSON.stringify(profile));
                    localStorage.setItem('id_token', id_token);
                    resolve(profile);
                }
            });
        });
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    AuthService.prototype.resetPassword = function () {
        var profile = this.getProfile();
        var url = "https://lyuan11.auth0.com/dbconnections/change_password";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'content-type': 'application/json' });
        var body = {
            client_id: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
            email: profile.email,
            connection: 'Username-Password-Authentication'
        };
        // @ts-ignore
        this.http.post(url, body, headers)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());

// // src/app/auth/auth.service.ts
//
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import {tokenNotExpired} from "angular2-jwt";
// import * as auth0 from 'auth0-js';
// import { Http, Response, Headers} from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
//
// declare var Auth0Lock: any;
//
// @Injectable()
// export class AuthService {
//   //Configure Auth0
//   // clientID = 'BKzRoPPzNpfVBmdgaCc2MOlhcSkV8kFX';
//   //domain = 'lyuan11.auth0.com';
//   private auth0: any;
//
//   lock = new auth0.WebAuth({
//     clientID: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
//     domain: 'lyuan11.auth0.com',
//     responseType: 'token id_token',
//     redirectUri: 'http://localhost:3000/callback',
//     scope: 'openid'
//   });
//
//
//   // lock = new Auth0Lock(this.clientID, this.domain, {});
//
//   constructor(private http: Http) {
//     //Add callback for lock 'authenticated' event
//   }
//
//   public login(): Promise<Object> {
//     return new Promise((resolve, reject) => {
//       this.lock.show((error: string, profile: Object, id_token: string) => {
//         if (error) {
//           reject(error);
//         } else {
//           localStorage.setItem('profile', JSON.stringify(profile));
//           localStorage.setItem('id_token', id_token);
//           resolve(profile);
//         }
//       });
//
//     });
//   }
//
//
//   public authenticated() {
//     return tokenNotExpired();
//   }
//
//   public logout() {
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('profile');
//   }
//
//   public getProfile() {
//     return JSON.parse(localStorage.getItem('profile'));
//   }
//
//   public resetPassword() :void{
//     let profile = this.getProfile();
//     let url: string = `https://lyuan11.auth0.com/dbconnections/change_password`;
//     const headers = new HttpHeaders({'content-type': 'application/json' });
//     let body = {
//       client_id: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
//       email: profile.email,
//       connection: 'Username-Password-Authentication'
//     }
//
//     this.http.post(url,body, headers)
//       .toPromise()
//       .then((res:Response) => {
//         console.log(res.json());
//       })
//       .catch(this.handleError);
//   }
//
//   private handleError(error:any): Promise<any>{
//     console.error('Error occurred', error);
//     return Promise.reject(error.message || error);
//   }
//
//   // var request = require("request");
//   //
//   // var options = { method: 'POST',
//   //   url: 'https://YOUR_AUTH0_DOMAIN/dbconnections/change_password',
//   //   headers: { 'content-type': 'application/json' },
//   //   body:
//   //     { client_id: 'YOUR_CLIENT_ID',
//   //       email: '',
//   //       connection: 'Username-Password-Authentication' },
//   //   json: true };
//   //
//   // request(options, function (error, response, body) {
//   //   if (error) throw new Error(error);
//   //
//   //   console.log(body);
//   // });
//
// }
//
// //
// // import { filter } from 'rxjs/operators';
// // import * as auth0 from 'auth0-js';
// //
// // (window as any).global = window;
// //
// // @Injectable()
// // export class AuthService {
// //
// //   auth0 = new auth0.WebAuth({
// //     clientID: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
// //     domain: 'lyuan11.auth0.com',
// //     responseType: 'token id_token',
// //     redirectUri: 'http://localhost:3000/callback',
// //     scope: 'openid'
// //   });
// //
// //   constructor(public router: Router) {}
// //
// //   public login(): void {
// //     this.auth0.authorize();
// //   }
// //
// //
// //
// // }


/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/collaboration.service.ts ***!
  \***************************************************/
/*! exports provided: CollaborationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationService", function() { return CollaborationService; });
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

var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        this.collaborationSocket.on("change", function (delta) {
            console.log('collaboration: editor changed by' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on("message", function (message) {
            console.log("received: " + message);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    CollaborationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.problemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this.problemsSource.next(res.json());
        })
            .catch(this.handleError);
        return this.problemsSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'content-type': 'application/json' });
        // @ts-ignore
        return this.http.post('/api/v1/problems', problem, headers)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lyuan11/Desktop/My_First_Project/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map