webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_category_form_category_form_component__ = __webpack_require__("../../../../../src/app/admin/category/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_admin_guard__ = __webpack_require__("../../../../../src/app/core/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/admin/category/categories-list/categories-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var adminRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__core_admin_guard__["a" /* AdminGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__core_admin_guard__["a" /* AdminGuard */]],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_6__category_categories_list_categories_list_component__["a" /* CategoriesListComponent */] },
                    { path: 'category/create', component: __WEBPACK_IMPORTED_MODULE_0__category_category_form_category_form_component__["a" /* CategoryFormComponent */] },
                ]
            }
        ]
    },
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(adminRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\r\n    margin-bottom: 0.5rem;\r\n    font-family: inherit;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    color: inherit;\r\n}\r\n\r\nh2, .h2 {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.page {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    overflow-x: hidden;\r\n    background: #EEF5F9;\r\n}\r\n\r\nnav.navbar {\r\n    background: #2f333e;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    color: #fff;\r\n    position: relative;\r\n    border-radius: 0;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\r\n    z-index: 10;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n\r\nnav.navbar .container-fluid {\r\n    width: 100%;\r\n}\r\n\r\n.container-fluid {\r\n    padding: 0 30px;\r\n}\r\n\r\nnav.navbar .navbar-holder {\r\n    width: 100%;\r\n}\r\nnav.navbar a {\r\n    color: inherit;\r\n}\r\n\r\n.navbar-brand {\r\n    display: inline-block;\r\n    padding-top: 0.3125rem;\r\n    padding-bottom: 0.3125rem;\r\n    margin-right: 1rem;\r\n    font-size: 1.25rem;\r\n}\r\n\r\nnav.navbar .brand-big {\r\n    display: block;\r\n}\r\n\r\nnav.navbar .brand-small {\r\n    display: none;\r\n}\r\n\r\nnav.navbar .navbar-brand .brand-small {\r\n    display: none;\r\n}\r\n\r\nnav.navbar .menu-btn {\r\n    margin-right: 20px;\r\n    font-size: 1.2em;\r\n    transition: all 0.7s;\r\n}\r\n\r\nnav.navbar a {\r\n    color: inherit;\r\n}\r\n\r\na {\r\n    color: #796AEE;\r\n    text-decoration: none;\r\n}\r\n\r\na, i, span {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\nnav.navbar .menu-btn.active span:first-of-type {\r\n    -webkit-transform: translateY(12px);\r\n            transform: translateY(12px);\r\n}\r\n\r\nnav.navbar .menu-btn span {\r\n    width: 20px;\r\n    height: 2px;\r\n    background: #fff;\r\n    display: block;\r\n    margin: 4px auto 0;\r\n    transition: all 0.3s cubic-bezier(0.81, -0.33, 0.345, 1.375);\r\n}\r\n\r\nnav.navbar .menu-btn.active span:nth-of-type(2) {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n}\r\n\r\nnav.navbar .menu-btn span:nth-of-type(2) {\r\n    position: relative;\r\n    width: 35px;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\nnav.navbar .menu-btn span {\r\n    width: 20px;\r\n    height: 2px;\r\n    background: #fff;\r\n    display: block;\r\n    margin: 4px auto 0;\r\n    transition: all 0.3s cubic-bezier(0.81, -0.33, 0.345, 1.375);\r\n}\r\n\r\nnav.navbar .menu-btn span:nth-of-type(2)::before, nav.navbar .menu-btn span:nth-of-type(2)::after {\r\n    content: '';\r\n    width: 6px;\r\n    height: 2px;\r\n    display: block;\r\n    background: #fff;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    transition: all 0.7s;\r\n}\r\n\r\nnav.navbar .menu-btn span:nth-of-type(2)::after {\r\n    -webkit-transform: rotate(145deg);\r\n    transform: rotate(145deg);\r\n    position: absolute;\r\n    top: -2px;\r\n    left: 0;\r\n}\r\n\r\nnav.navbar .menu-btn span:nth-of-type(2)::before, nav.navbar .menu-btn span:nth-of-type(2)::after {\r\n    content: '';\r\n    width: 6px;\r\n    height: 2px;\r\n    display: block;\r\n    background: #fff;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    transition: all 0.7s;\r\n}\r\n\r\nnav.navbar .menu-btn.active span:last-of-type {\r\n    -webkit-transform: translateY(-12px);\r\n    transform: translateY(-12px);\r\n}\r\n\r\nnav.navbar a {\r\n    color: inherit;\r\n}\r\n\r\nnav.navbar .nav-item > a {\r\n    position: relative;\r\n}\r\n\r\nnav.navbar .nav-item > a.logout i {\r\n    margin-left: 10px;\r\n}\r\n\r\nnav.navbar .nav-menu{\r\n    margin: 0;\r\n}\r\n\r\nnav.side-navbar {\r\n    background: #fff;\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    color: #686a76;\r\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n    z-index: 9;\r\n}\r\n\r\nnav.side-navbar .sidebar-header {\r\n    padding: 30px 15px;\r\n}\r\n\r\nnav.side-navbar .avatar {\r\n    width: 55px;\r\n    height: 55px;\r\n}\r\n\r\nnav.side-navbar .title {\r\n    margin-left: 10px;\r\n}\r\n\r\nnav.side-navbar .title h1 {\r\n    color: #333;\r\n}\r\n\r\nnav.side-navbar .title p {\r\n    font-size: 0.9em;\r\n    font-weight: 200;\r\n    margin-bottom: 0;\r\n    color: #aaa;\r\n}\r\n\r\nnav.side-navbar span.heading {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    margin-left: 20px;\r\n    color: #ccc;\r\n    font-size: 0.8em;\r\n}\r\n\r\nnav.side-navbar ul {\r\n    padding: 15px 0;\r\n}\r\n\r\nnav.side-navbar ul li a {\r\n    padding: 10px 15px;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-weight: 300;\r\n    border-left: 4px solid transparent;\r\n}\r\n\r\nnav.side-navbar ul li.active > a {\r\n    background: #796AEE;\r\n    color: #fff;\r\n    border-left: 4px solid #3b25e6;\r\n}\r\n\r\nnav.side-navbar a {\r\n    color: inherit;\r\n    position: relative;\r\n    font-size: 0.9em;\r\n}\r\n\r\nnav.side-navbar a i {\r\n    font-size: 1.2em;\r\n    margin-right: 10px;\r\n    transition: none;\r\n}\r\n\r\n*[class*=\"icon-\"] {\r\n    -webkit-transform: translateY(3px);\r\n            transform: translateY(3px);\r\n}\r\n\r\nnav.side-navbar .title h1 {\r\n    color: #333;\r\n}\r\n\r\nnav.side-navbar .title p {\r\n    font-size: 0.9em;\r\n    font-weight: 200;\r\n    margin-bottom: 0;\r\n    color: #aaa;\r\n}\r\n\r\np{\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.content-inner {\r\n    position: relative;\r\n    width: calc(100% - 250px);\r\n    min-height: calc(100vh - 70px);\r\n    padding-bottom: 60px;\r\n}\r\n\r\nheader.page-header {\r\n    padding: 20px 0;\r\n}\r\n\r\n.page-header {\r\n    background: #fff;\r\n    padding: 20px;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\r\n    position: relative;\r\n    z-index: 8;\r\n}\r\n\r\n.container-fluid {\r\n    padding: 0 30px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <header class=\"header\">\r\n        <nav class=\"navbar\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"navbar-holder d-flex align-items-center justify-content-between\">\r\n              <div class=\"navbar-header\">\r\n                  <a routerLink=\"/admin\" class=\"navbar-brand\">\r\n                  <div class=\"brand-text brand-big\"><span>Bootstrap </span><strong>Dashboard</strong></div>\r\n                  <div class=\"brand-text brand-small\"><strong>BD</strong></div></a>\r\n                  <a id=\"toggle-btn\" href=\"#\" class=\"menu-btn active\"><span></span><span></span><span></span></a>\r\n              </div>\r\n              <ul class=\"nav-menu list-unstyled d-flex flex-md-row align-items-md-center\">\r\n                <li class=\"nav-item\"><a (click)=\"logout()\" class=\"nav-link logout\">Logout<i class=\"fa fa-sign-out\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </nav>\r\n      </header>\r\n      <div class=\"page-content d-flex align-items-stretch\">\r\n        <nav class=\"side-navbar\">\r\n            <div class=\"sidebar-header d-flex align-items-center\">\r\n                <div class=\"avatar\"><img src=\"../../assets/images/avarta.jpg\" alt=\"...\" class=\"img-fluid rounded-circle\"></div>\r\n                <div class=\"title\">\r\n                <h1 class=\"h4\">Mark Stephen</h1>\r\n                <p>Web Designer</p>\r\n                </div>\r\n            </div>\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"active\"><a routerLink=\"/admin\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Dashboard</a></li>\r\n                <li><a routerLink=\"/admin/categories\"> <i class=\"icon-grid\"></i>Categories</a></li>\r\n                <li><a href=\"charts.html\"> <i class=\"fa fa-bar-chart\"></i>Charts </a></li>\r\n                <li><a href=\"forms.html\"> <i class=\"icon-padnote\"></i>Forms </a></li>\r\n                <li><a href=\"#exampledropdownDropdown\" aria-expanded=\"false\" data-toggle=\"collapse\"> <i class=\"icon-interface-windows\"></i>Example dropdown </a>\r\n                <ul id=\"exampledropdownDropdown\" class=\"collapse list-unstyled \">\r\n                    <li><a href=\"#\">Page</a></li>\r\n                    <li><a href=\"#\">Page</a></li>\r\n                    <li><a href=\"#\">Page</a></li>\r\n                </ul>\r\n                </li>\r\n                <li><a href=\"login.html\"> <i class=\"icon-interface-windows\"></i>Login page </a></li>\r\n            </ul><span class=\"heading\">Extras</span>\r\n            <ul class=\"list-unstyled\">\r\n                <li> <a href=\"#\"> <i class=\"icon-flask\"></i>Demo </a></li>\r\n                <li> <a href=\"#\"> <i class=\"icon-screen\"></i>Demo </a></li>\r\n                <li> <a href=\"#\"> <i class=\"icon-mail\"></i>Demo </a></li>\r\n                <li> <a href=\"#\"> <i class=\"icon-picture\"></i>Demo </a></li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"content-inner\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(authService) {
        this.authService = authService;
    }
    AdminComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__core_auth_service__["a" /* AuthService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category_service__ = __webpack_require__("../../../../../src/app/admin/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/admin/category/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_category_form_category_form_component__ = __webpack_require__("../../../../../src/app/admin/category/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__category_categories_list_categories_list_component__["a" /* CategoriesListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__category_category_form_category_form_component__["a" /* CategoryFormComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__category_category_service__["a" /* CategoryService */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/category/categories-list/categories-list.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\">\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"no-margin-bottom\">Categories</h2>\r\n  </div>\r\n</header>\r\n<div class=\"breadcrumb-holder container-fluid\">\r\n  <ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/admin\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">Categories</li>\r\n  </ul>\r\n</div>\r\n<section class=\"tables\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header d-flex align-items-center\">\r\n            <h3 class=\"h4\">Categories</h3>\r\n            <a class=\"btn btn-primary\" routerLink=\"/admin/category/create\">Create</a>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-striped table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Name</th>\r\n                  <th>Index</th>\r\n                  <th>Active</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let category of categories | async; let i=index\">\r\n                  <th scope=\"row\">{{i + 1}}</th>\r\n                  <td>{{category.name}}</td>\r\n                  <td>{{category.index}}</td>\r\n                  <td>{{category.active}}</td>\r\n                  <td><button class=\"btn btn-danger\" (click)=\"deleteCategory(category.$key)\">Delete</button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/category/categories-list/categories-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/admin/category/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesListComponent = (function () {
    function CategoriesListComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        this.categories = this.categoryService.getAll();
    };
    CategoriesListComponent.prototype.updateActive = function ($key, isActive) {
        this.categoryService.update($key, { active: isActive });
    };
    CategoriesListComponent.prototype.deleteCategory = function ($key) {
        this.categoryService.delete($key);
    };
    CategoriesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories-list',
            template: __webpack_require__("../../../../../src/app/admin/category/categories-list/categories-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]])
    ], CategoriesListComponent);
    return CategoriesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/category/category-form/category-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/category/category-form/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\">\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"no-margin-bottom\">Categories</h2>\r\n  </div>\r\n</header>\r\n<div class=\"breadcrumb-holder container-fluid\">\r\n  <ul class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/admin\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n      <a routerLink=\"/admin/categories\">Categories</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">Create</li>\r\n  </ul>\r\n</div>\r\n<section class=\"forms\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header d-flex align-items-center\">\r\n            <h3 class=\"h4\">Create Category</h3>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #categoryForm=\"ngForm\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 form-control-label\">Name</label>\r\n                <div class=\"col-sm-4\">\r\n                  <input type=\"textbox\" class=\"form-control form-control-success\" required \r\n                    [(ngModel)]=\"category.name\" #name=\"ngModel\" name=\"name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 form-control-label\">Index</label>\r\n                <div class=\"col-sm-1\">\r\n                  <input type=\"textbox\" class=\"form-control form-control-warning\" id=\"index\" \r\n                    [(ngModel)]=\"category.index\" name=\"index\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 form-control-label\">Active</label>\r\n                <div class=\"col-sm-1\">\r\n                  <input type=\"checkbox\" class=\"form-control form-control-warning\" id=\"active\" \r\n                    [(ngModel)]=\"category.active\" name=\"active\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-9 offset-sm-3\">\r\n                  <input type=\"submit\" value=\"Create\" class=\"btn btn-primary\">\r\n                </div>\r\n              </div>\r\n              <div [froalaEditor]>Hello, Froala!</div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/category/category-form/category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/admin/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__("../../../../../src/app/admin/category/category.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryFormComponent = (function () {
    function CategoryFormComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.category = new __WEBPACK_IMPORTED_MODULE_3__category__["a" /* Category */];
    }
    CategoryFormComponent.prototype.createCategory = function () {
        this.categoryService.create(this.category);
        this.category = new __WEBPACK_IMPORTED_MODULE_3__category__["a" /* Category */]();
    };
    CategoryFormComponent.prototype.onSubmit = function () {
        this.createCategory();
        this.router.navigate(['/admin/categories']);
    };
    CategoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-category-form',
            template: __webpack_require__("../../../../../src/app/admin/category/category-form/category-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/category/category-form/category-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(db) {
        this.db = db;
        this.basePath = '/categories';
        this.categories = null; //  list of objects
        this.category = null; //   single object
    }
    CategoryService.prototype.getAll = function (query) {
        if (query === void 0) { query = {}; }
        this.categories = this.db.list(this.basePath, {
            query: query
        });
        return this.categories;
    };
    CategoryService.prototype.get = function (key) {
        var categoryPath = this.basePath + "/" + key;
        this.category = this.db.object(categoryPath);
        return this.category;
    };
    CategoryService.prototype.create = function (category) {
        this.categories.push(category);
    };
    CategoryService.prototype.update = function (key, value) {
        var _this = this;
        this.categories.update(key, value)
            .catch(function (error) { return _this.handleError(error); });
    };
    CategoryService.prototype.delete = function (key) {
        var _this = this;
        this.categories.remove(key)
            .catch(function (error) { return _this.handleError(error); });
    };
    CategoryService.prototype.deleteAll = function () {
        var _this = this;
        this.categories.remove()
            .catch(function (error) { return _this.handleError(error); });
    };
    CategoryService.prototype.handleError = function (error) {
        console.log(error);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/category/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category() {
        this.active = true;
    }
    return Category;
}());



/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../angular-froala-wysiwyg/editor/editor.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");


var FroalaEditorDirective = (function () {
    function FroalaEditorDirective(el, zone) {
        this.zone = zone;
        // editor options
        this._opts = {
            immediateAngularModelUpdate: false,
            angularIgnoreAttrs: null
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._hasSpecialTag = false;
        this._listeningEvents = [];
        this._editorInitialized = false;
        this._oldModel = null;
        // Begin ControlValueAccesor methods.
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // froalaModel directive as output: update model if editor contentChanged
        this.froalaModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // froalaInit directive as output: send manual editor initialization
        this.froalaInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        var element = el.nativeElement;
        // check if the element is a special tag
        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
            this._hasSpecialTag = true;
        }
        // jquery wrap and store element
        this._$element = $(element);
        this.zone = zone;
    }
    // Form model content changed.
    // Form model content changed.
    FroalaEditorDirective.prototype.writeValue = 
    // Form model content changed.
    function (content) {
        this.updateEditor(content);
    };
    FroalaEditorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FroalaEditorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaEditor", {
        set: 
        // End ControlValueAccesor methods.
        // froalaEditor directive as input: store the editor options
        function (opts) {
            this._opts = opts || this._opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaModel", {
        set: 
        // froalaModel directive as input: store initial editor content
        function (content) {
            this.updateEditor(content);
        },
        enumerable: true,
        configurable: true
    });
    // Update editor with model contents.
    // Update editor with model contents.
    FroalaEditorDirective.prototype.updateEditor = 
    // Update editor with model contents.
    function (content) {
        if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
            return;
        }
        this._model = content;
        if (this._editorInitialized) {
            this._$element.froalaEditor('html.set', content);
        }
        else {
            this._$element.html(content);
        }
    };
    // update model if editor contentChanged
    // update model if editor contentChanged
    FroalaEditorDirective.prototype.updateModel = 
    // update model if editor contentChanged
    function () {
        var _this = this;
        this.zone.run(function () {
            var modelContent = null;
            if (_this._hasSpecialTag) {
                var attributeNodes = _this._$element[0].attributes;
                var attrs = {};
                for (var i = 0; i < attributeNodes.length; i++) {
                    var attrName = attributeNodes[i].name;
                    if (_this._opts.angularIgnoreAttrs && _this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
                        continue;
                    }
                    attrs[attrName] = attributeNodes[i].value;
                }
                if (_this._$element[0].innerHTML) {
                    attrs[_this.INNER_HTML_ATTR] = _this._$element[0].innerHTML;
                }
                modelContent = attrs;
            }
            else {
                var returnedHtml = _this._$element.froalaEditor('html.get');
                if (typeof returnedHtml === 'string') {
                    modelContent = returnedHtml;
                }
            }
            _this._oldModel = modelContent;
            // Update froalaModel.
            // Update froalaModel.
            _this.froalaModelChange.emit(modelContent);
            // Update form model.
            // Update form model.
            _this.onChange(modelContent);
        });
    };
    // register event on jquery element
    // register event on jquery element
    FroalaEditorDirective.prototype.registerEvent = 
    // register event on jquery element
    function (element, eventName, callback) {
        if (!element || !eventName || !callback) {
            return;
        }
        this._listeningEvents.push(eventName);
        element.on(eventName, callback);
    };
    FroalaEditorDirective.prototype.initListeners = function () {
        var self = this;
        // bind contentChange and keyup event to froalaModel
        this.registerEvent(this._$element, 'froalaEditor.contentChanged', function () {
            setTimeout(function () {
                self.updateModel();
            }, 0);
        });
        if (this._opts.immediateAngularModelUpdate) {
            this.registerEvent(this._editor, 'keyup', function () {
                setTimeout(function () {
                    self.updateModel();
                }, 0);
            });
        }
    };
    // register events from editor options
    // register events from editor options
    FroalaEditorDirective.prototype.registerFroalaEvents = 
    // register events from editor options
    function () {
        if (!this._opts.events) {
            return;
        }
        for (var eventName in this._opts.events) {
            if (this._opts.events.hasOwnProperty(eventName)) {
                this.registerEvent(this._$element, eventName, this._opts.events[eventName]);
            }
        }
    };
    FroalaEditorDirective.prototype.createEditor = function () {
        var _this = this;
        if (this._editorInitialized) {
            return;
        }
        this.setContent(true);
        // Registering events before initializing the editor will bind the initialized event correctly.
        this.registerFroalaEvents();
        this.initListeners();
        // init editor
        this.zone.runOutsideAngular(function () {
            _this._editor = _this._$element.froalaEditor(_this._opts).data('froala.editor').$el;
        });
        this._editorInitialized = true;
    };
    FroalaEditorDirective.prototype.setHtml = function () {
        this._$element.froalaEditor('html.set', this._model || '', true);
        // This will reset the undo stack everytime the model changes externally. Can we fix this?
        this._$element.froalaEditor('undo.reset');
        this._$element.froalaEditor('undo.saveStep');
    };
    FroalaEditorDirective.prototype.setContent = function (firstTime) {
        if (firstTime === void 0) { firstTime = false; }
        var self = this;
        // Set initial content
        if (this._model || this._model == '') {
            this._oldModel = this._model;
            if (this._hasSpecialTag) {
                var tags = this._model;
                // add tags on element
                if (tags) {
                    for (var attr in tags) {
                        if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
                            this._$element.attr(attr, tags[attr]);
                        }
                    }
                    if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                        this._$element[0].innerHTML = tags[this.INNER_HTML_ATTR];
                    }
                }
            }
            else {
                if (firstTime) {
                    this.registerEvent(this._$element, 'froalaEditor.initialized', function () {
                        self.setHtml();
                    });
                }
                else {
                    self.setHtml();
                }
            }
        }
    };
    FroalaEditorDirective.prototype.destroyEditor = function () {
        if (this._editorInitialized) {
            this._$element.off(this._listeningEvents.join(" "));
            this._editor.off('keyup');
            this._$element.froalaEditor('destroy');
            this._listeningEvents.length = 0;
            this._editorInitialized = false;
        }
    };
    FroalaEditorDirective.prototype.getEditor = function () {
        if (this._$element) {
            return this._$element.froalaEditor.bind(this._$element);
        }
        return null;
    };
    // send manual editor initialization
    // send manual editor initialization
    FroalaEditorDirective.prototype.generateManualController = 
    // send manual editor initialization
    function () {
        var self = this;
        var controls = {
            initialize: this.createEditor.bind(this),
            destroy: this.destroyEditor.bind(this),
            getEditor: this.getEditor.bind(this),
        };
        this.froalaInit.emit(controls);
    };
    // TODO not sure if ngOnInit is executed after @inputs
    // TODO not sure if ngOnInit is executed after @inputs
    FroalaEditorDirective.prototype.ngOnInit = 
    // TODO not sure if ngOnInit is executed after @inputs
    function () {
        // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
        if (!this.froalaInit.observers.length) {
            this.createEditor();
        }
        else {
            this.generateManualController();
        }
    };
    FroalaEditorDirective.prototype.ngOnDestroy = function () {
        this.destroyEditor();
    };
    FroalaEditorDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[froalaEditor]',
                    providers: [{
                            provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return FroalaEditorDirective; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
    ]; };
    FroalaEditorDirective.propDecorators = {
        "froalaEditor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "froalaModel": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "froalaModelChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
        "froalaInit": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    };
    return FroalaEditorDirective;
}());

//# sourceMappingURL=editor.directive.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/editor/editor.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/editor.directive.js");


var FroalaEditorModule = (function () {
    function FroalaEditorModule() {
    }
    FroalaEditorModule.forRoot = function () {
        return { ngModule: FroalaEditorModule, providers: [] };
    };
    FroalaEditorModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorModule.ctorParameters = function () { return []; };
    return FroalaEditorModule;
}());

//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/editor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/editor.directive.js");
/* unused harmony reexport FroalaEditorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_module__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/editor.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FERootModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/index.js");
/* unused harmony reexport FroalaEditorDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor__["a"]; });
/* unused harmony reexport FroalaViewDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__view__["a"]; });





var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */],
    __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */]
];
var FERootModule = (function () {
    function FERootModule() {
    }
    FERootModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */].forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    FERootModule.ctorParameters = function () { return []; };
    return FERootModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/view/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/view.directive.js");
/* unused harmony reexport FroalaViewDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_module__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/view.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__view_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/view/view.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var FroalaViewDirective = (function () {
    function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        set: 
        // update content model as it comes
        function (content) {
            this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
    });
    FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setElementClass(this._element, "fr-view", true);
    };
    FroalaViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[froalaView]'
                },] },
    ];
    /** @nocollapse */
    FroalaViewDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    ]; };
    FroalaViewDirective.propDecorators = {
        "froalaView": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return FroalaViewDirective;
}());

//# sourceMappingURL=view.directive.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/view/view.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/view.directive.js");


var FroalaViewModule = (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule, providers: [] };
    };
    FroalaViewModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]]
                },] },
    ];
    /** @nocollapse */
    FroalaViewModule.ctorParameters = function () { return []; };
    return FroalaViewModule;
}());

//# sourceMappingURL=view.module.js.map

/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map