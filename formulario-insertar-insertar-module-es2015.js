(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formulario-insertar-insertar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/insertar/insertar.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/insertar/insertar.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Regresar\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Insertar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n\n    <ion-item-group class=\"group\">\n      <ion-text>\n        Para insertar un juego debe de rellenar los siguientes campos correctamente.\n      </ion-text>\n      <ion-item><img src=\"../../assets/images/insertar.png\"/></ion-item>\n      <ion-text>\n        1.- Imagen: campo no obligatorio.<br>\n        2.- Nombre: campo obligatorio entre 3 y 100 caráteres.<br>\n        3.- Desarrolladora: campo obligatorio entre 1 y 9999.<br>\n        3.- Horas de juego: ir a la ayuda según la actividad en la que está.<br>\n        4.- Fecha de salida: campo obligatorio con formato DD/MM/AAAA<br>\n        5.- Plataforma: campo obligatorio, puede elegir entre las opciones o añadir una<br>\n        6.- Propiedad: campo no obligatorio<br>\n      </ion-text>\n    </ion-item-group>\n\n    <ion-item-group class=\"group\">\n      <ion-text>\n        Al rellenar los campos correctamente pulse el botón GUARDAR.\n      </ion-text>\n      <ion-item><img src=\"../../assets/images/guardar.png\"/></ion-item>\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".group {\n  padding: 5px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9pbnNlcnRhci9DOlxcVXNlcnNcXFVzdWFyaW9cXEdvb2dsZSBEcml2ZVxcRlBDUzJcXERFSU5cXERFSU4tbWFzdGVyXFxNeUdhbWVMaXN0MlxcZG9jcy9zcmNcXGFwcFxcZm9ybXVsYXJpb1xcaW5zZXJ0YXJcXGluc2VydGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9ybXVsYXJpby9pbnNlcnRhci9pbnNlcnRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9ybXVsYXJpby9pbnNlcnRhci9pbnNlcnRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn0iLCIuZ3JvdXAge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */");

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