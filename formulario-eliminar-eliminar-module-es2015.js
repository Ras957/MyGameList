(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formulario-eliminar-eliminar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/eliminar/eliminar.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/eliminar/eliminar.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>eliminar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/formulario/eliminar/eliminar-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/formulario/eliminar/eliminar-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EliminarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarPageRoutingModule", function() { return EliminarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _eliminar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eliminar.page */ "./src/app/formulario/eliminar/eliminar.page.ts");




const routes = [
    {
        path: '',
        component: _eliminar_page__WEBPACK_IMPORTED_MODULE_3__["EliminarPage"]
    }
];
let EliminarPageRoutingModule = class EliminarPageRoutingModule {
};
EliminarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EliminarPageRoutingModule);



/***/ }),

/***/ "./src/app/formulario/eliminar/eliminar.module.ts":
/*!********************************************************!*\
  !*** ./src/app/formulario/eliminar/eliminar.module.ts ***!
  \********************************************************/
/*! exports provided: EliminarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarPageModule", function() { return EliminarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _eliminar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eliminar-routing.module */ "./src/app/formulario/eliminar/eliminar-routing.module.ts");
/* harmony import */ var _eliminar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eliminar.page */ "./src/app/formulario/eliminar/eliminar.page.ts");







let EliminarPageModule = class EliminarPageModule {
};
EliminarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eliminar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EliminarPageRoutingModule"]
        ],
        declarations: [_eliminar_page__WEBPACK_IMPORTED_MODULE_6__["EliminarPage"]]
    })
], EliminarPageModule);



/***/ }),

/***/ "./src/app/formulario/eliminar/eliminar.page.scss":
/*!********************************************************!*\
  !*** ./src/app/formulario/eliminar/eliminar.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vZWxpbWluYXIvZWxpbWluYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/formulario/eliminar/eliminar.page.ts":
/*!******************************************************!*\
  !*** ./src/app/formulario/eliminar/eliminar.page.ts ***!
  \******************************************************/
/*! exports provided: EliminarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarPage", function() { return EliminarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EliminarPage = class EliminarPage {
    constructor() { }
    ngOnInit() {
    }
};
EliminarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eliminar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/eliminar/eliminar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminar.page.scss */ "./src/app/formulario/eliminar/eliminar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EliminarPage);



/***/ })

}]);
//# sourceMappingURL=formulario-eliminar-eliminar-module-es2015.js.map