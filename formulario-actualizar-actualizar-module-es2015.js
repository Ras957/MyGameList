(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formulario-actualizar-actualizar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/actualizar/actualizar.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/actualizar/actualizar.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>actualizar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/formulario/actualizar/actualizar-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/formulario/actualizar/actualizar-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ActualizarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarPageRoutingModule", function() { return ActualizarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _actualizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actualizar.page */ "./src/app/formulario/actualizar/actualizar.page.ts");




const routes = [
    {
        path: '',
        component: _actualizar_page__WEBPACK_IMPORTED_MODULE_3__["ActualizarPage"]
    }
];
let ActualizarPageRoutingModule = class ActualizarPageRoutingModule {
};
ActualizarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActualizarPageRoutingModule);



/***/ }),

/***/ "./src/app/formulario/actualizar/actualizar.module.ts":
/*!************************************************************!*\
  !*** ./src/app/formulario/actualizar/actualizar.module.ts ***!
  \************************************************************/
/*! exports provided: ActualizarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarPageModule", function() { return ActualizarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _actualizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actualizar-routing.module */ "./src/app/formulario/actualizar/actualizar-routing.module.ts");
/* harmony import */ var _actualizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actualizar.page */ "./src/app/formulario/actualizar/actualizar.page.ts");







let ActualizarPageModule = class ActualizarPageModule {
};
ActualizarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actualizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActualizarPageRoutingModule"]
        ],
        declarations: [_actualizar_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarPage"]]
    })
], ActualizarPageModule);



/***/ }),

/***/ "./src/app/formulario/actualizar/actualizar.page.scss":
/*!************************************************************!*\
  !*** ./src/app/formulario/actualizar/actualizar.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vYWN0dWFsaXphci9hY3R1YWxpemFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/formulario/actualizar/actualizar.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/formulario/actualizar/actualizar.page.ts ***!
  \**********************************************************/
/*! exports provided: ActualizarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarPage", function() { return ActualizarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActualizarPage = class ActualizarPage {
    constructor() { }
    ngOnInit() {
    }
};
ActualizarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actualizar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actualizar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/actualizar/actualizar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actualizar.page.scss */ "./src/app/formulario/actualizar/actualizar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActualizarPage);



/***/ })

}]);
//# sourceMappingURL=formulario-actualizar-actualizar-module-es2015.js.map