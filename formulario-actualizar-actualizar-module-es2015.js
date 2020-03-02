(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formulario-actualizar-actualizar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/actualizar/actualizar.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/actualizar/actualizar.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Regresar\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Actualizar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n\n  <ion-item-group class=\"group\">\n    <ion-text>\n      Eliga el juego que quiere editar en el listado y cambie los campos que quiera, \n      siempre que los datos sigan en los estándares correctos.\n    </ion-text>\n    <ion-item><img src=\"../../assets/images/editar.png\"/></ion-item>\n  </ion-item-group>\n\n  <ion-item-group class=\"group\">\n    <ion-text>\n      Al cambiar los campos correctamente pulse el botón MODIFICAR.\n    </ion-text>\n    <ion-item><img src=\"../../assets/images/modificar.png\"/></ion-item>\n  </ion-item-group>\n\n</ion-list>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".group {\n  padding: 5px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9hY3R1YWxpemFyL0M6XFxVc2Vyc1xcVXN1YXJpb1xcR29vZ2xlIERyaXZlXFxGUENTMlxcREVJTlxcREVJTi1tYXN0ZXJcXE15R2FtZUxpc3QyXFxkb2NzL3NyY1xcYXBwXFxmb3JtdWxhcmlvXFxhY3R1YWxpemFyXFxhY3R1YWxpemFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9ybXVsYXJpby9hY3R1YWxpemFyL2FjdHVhbGl6YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vYWN0dWFsaXphci9hY3R1YWxpemFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSIsIi5ncm91cCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdfQ== */");

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