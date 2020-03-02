(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listado-listado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listado/listado.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listado/listado.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Regresar\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Listado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n\n    <ion-item-group class=\"group\">\n      <ion-item>\n        <ion-text> En la actividad listado se muestra información breve de \n              los juegos añadidos a MyGameList.\n        </ion-text>\n      </ion-item>\n      <ion-item>\n        <img src=\"../../assets/images/listado.png\"/>\n      </ion-item>\n    </ion-item-group>\n\n\n  <ion-item-group class=\"group\">\n    <ion-text> Con el botón flotante podrás añadir nuevos juegos a la lista.</ion-text>\n    <ion-item><img src=\"../../assets/images/boton_flotante.png\"/></ion-item> \n  </ion-item-group>\n\n  <ion-item-group class=\"group\">\n    <ion-text> Con el botón buscar podrás usar el filtro para buscar el juego deseado.</ion-text>\n    <ion-item><img src=\"../../assets/images/boton_buscar.png\"/></ion-item> \n    <ion-label><i>Para más información ir al manual de \n      <span class=\"link\" routerLink=\"/buscar\">buscar</span></i></ion-label>\n  </ion-item-group>\n\n  <ion-item-group class=\"group\">\n    <ion-text> En el submenú podrás encontrar otras funciones como ordenar \n      o ir a otras páginas como la ayuda o \"sobre la app\".</ion-text>\n    <ion-item><img src=\"../../assets/images/submenu1.png\"/>\n    <img src=\"../../assets/images/submenu2.png\"/></ion-item> \n    <ion-text>\n      1.- Ordenar: ordena la lista de juegos según el parámetro indicado (todavía no implementado)<br>\n      2.- Sobre MyGameList: ir a sobreActivity<br>\n      3.- Ayuda: ir a la ayuda según la actividad en la que está.<br>\n      4.- Opciones: opciones sobre la App (todavía no implementado)<br>\n    </ion-text>\n  </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/listado/listado-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/listado/listado-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPageRoutingModule", function() { return ListadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado.page */ "./src/app/listado/listado.page.ts");




const routes = [
    {
        path: '',
        component: _listado_page__WEBPACK_IMPORTED_MODULE_3__["ListadoPage"]
    }
];
let ListadoPageRoutingModule = class ListadoPageRoutingModule {
};
ListadoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListadoPageRoutingModule);



/***/ }),

/***/ "./src/app/listado/listado.module.ts":
/*!*******************************************!*\
  !*** ./src/app/listado/listado.module.ts ***!
  \*******************************************/
/*! exports provided: ListadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPageModule", function() { return ListadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _listado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listado-routing.module */ "./src/app/listado/listado-routing.module.ts");
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listado.page */ "./src/app/listado/listado.page.ts");







let ListadoPageModule = class ListadoPageModule {
};
ListadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoPageRoutingModule"]
        ],
        declarations: [_listado_page__WEBPACK_IMPORTED_MODULE_6__["ListadoPage"]]
    })
], ListadoPageModule);



/***/ }),

/***/ "./src/app/listado/listado.page.scss":
/*!*******************************************!*\
  !*** ./src/app/listado/listado.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link {\n  color: deepskyblue;\n  font-weight: bold;\n}\n\n.group {\n  padding: 5px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkby9DOlxcVXNlcnNcXFVzdWFyaW9cXEdvb2dsZSBEcml2ZVxcRlBDUzJcXERFSU5cXERFSU4tbWFzdGVyXFxNeUdhbWVMaXN0MlxcZG9jcy9zcmNcXGFwcFxcbGlzdGFkb1xcbGlzdGFkby5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3RhZG8vbGlzdGFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGFkby9saXN0YWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5re1xyXG4gICAgY29sb3I6IGRlZXBza3libHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ncm91cHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSIsIi5saW5rIHtcbiAgY29sb3I6IGRlZXBza3libHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyb3VwIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/listado/listado.page.ts":
/*!*****************************************!*\
  !*** ./src/app/listado/listado.page.ts ***!
  \*****************************************/
/*! exports provided: ListadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPage", function() { return ListadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadoPage = class ListadoPage {
    constructor() { }
    ngOnInit() {
    }
};
ListadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listado/listado.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado.page.scss */ "./src/app/listado/listado.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListadoPage);



/***/ })

}]);
//# sourceMappingURL=listado-listado-module-es2015.js.map