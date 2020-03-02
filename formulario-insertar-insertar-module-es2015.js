(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formulario-insertar-insertar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/insertar/insertar.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/insertar/insertar.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title class=\"ion-text-center\">Insertar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-group>\n      <ion-text>\n        Para insertar un juego debe de rellenar los siguientes campos correctamente.\n      </ion-text>\n      <ion-item><img src=\"../../assets/images/inserter.png\"/></ion-item>\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/formulario/insertar/insertar-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/formulario/insertar/insertar-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InsertarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarPageRoutingModule", function() { return InsertarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _insertar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertar.page */ "./src/app/formulario/insertar/insertar.page.ts");




const routes = [
    {
        path: '',
        component: _insertar_page__WEBPACK_IMPORTED_MODULE_3__["InsertarPage"]
    }
];
let InsertarPageRoutingModule = class InsertarPageRoutingModule {
};
InsertarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InsertarPageRoutingModule);



/***/ }),

/***/ "./src/app/formulario/insertar/insertar.module.ts":
/*!********************************************************!*\
  !*** ./src/app/formulario/insertar/insertar.module.ts ***!
  \********************************************************/
/*! exports provided: InsertarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarPageModule", function() { return InsertarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _insertar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insertar-routing.module */ "./src/app/formulario/insertar/insertar-routing.module.ts");
/* harmony import */ var _insertar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insertar.page */ "./src/app/formulario/insertar/insertar.page.ts");







let InsertarPageModule = class InsertarPageModule {
};
InsertarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _insertar_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertarPageRoutingModule"]
        ],
        declarations: [_insertar_page__WEBPACK_IMPORTED_MODULE_6__["InsertarPage"]]
    })
], InsertarPageModule);



/***/ }),

/***/ "./src/app/formulario/insertar/insertar.page.scss":
/*!********************************************************!*\
  !*** ./src/app/formulario/insertar/insertar.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vaW5zZXJ0YXIvaW5zZXJ0YXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/formulario/insertar/insertar.page.ts":
/*!******************************************************!*\
  !*** ./src/app/formulario/insertar/insertar.page.ts ***!
  \******************************************************/
/*! exports provided: InsertarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarPage", function() { return InsertarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InsertarPage = class InsertarPage {
    constructor() { }
    ngOnInit() {
    }
};
InsertarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insertar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insertar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/insertar/insertar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insertar.page.scss */ "./src/app/formulario/insertar/insertar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InsertarPage);



/***/ })

}]);
//# sourceMappingURL=formulario-insertar-insertar-module-es2015.js.map