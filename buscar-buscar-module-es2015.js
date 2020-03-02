(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscar-buscar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buscar/buscar.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buscar/buscar.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Regresar\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Buscar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item-group class=\"group\">\n    <ion-text>\n      Pulse el icono de la lupa y una vez dentro de la actividad rellene los campos por los \n      que desea buscar (puede buscar por un solo campo o por más de uno) y pulse el botón \n      BUSCAR.\n    </ion-text>\n    <ion-item><img src=\"../../assets/images/buscar.png\"/></ion-item>\n  </ion-item-group>\n\n  <ion-label> A continuación les mostramos algunos ejemplos de busqueda: </ion-label>\n\n  <ion-grid class=\"group\">\n    <ion-row>\n      <ion-col>\n        <div>\n          <strong>Búsquedas</strong>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <strong>Resultados</strong>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/busqueda1.png\"/></ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/resultado1.png\"/></ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/busqueda2.png\"/></ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/resultado2.png\"/></ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/busqueda3.png\"/></ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/resultado3.png\"/></ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/busqueda4.png\"/></ion-item>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item><img src=\"../../assets/images/resultado4.png\"/></ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/buscar/buscar-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/buscar/buscar-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BuscarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageRoutingModule", function() { return BuscarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buscar.page */ "./src/app/buscar/buscar.page.ts");




const routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_3__["BuscarPage"]
    }
];
let BuscarPageRoutingModule = class BuscarPageRoutingModule {
};
BuscarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuscarPageRoutingModule);



/***/ }),

/***/ "./src/app/buscar/buscar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/buscar/buscar.module.ts ***!
  \*****************************************/
/*! exports provided: BuscarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageModule", function() { return BuscarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscar-routing.module */ "./src/app/buscar/buscar-routing.module.ts");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar.page */ "./src/app/buscar/buscar.page.ts");







let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buscar_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuscarPageRoutingModule"]
        ],
        declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_6__["BuscarPage"]]
    })
], BuscarPageModule);



/***/ }),

/***/ "./src/app/buscar/buscar.page.scss":
/*!*****************************************!*\
  !*** ./src/app/buscar/buscar.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  border: 2px solid #aeb7ca;\n}\n\n.group {\n  padding: 5px;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzY2FyL0M6XFxVc2Vyc1xcVXN1YXJpb1xcR29vZ2xlIERyaXZlXFxGUENTMlxcREVJTlxcREVJTi1tYXN0ZXJcXE15R2FtZUxpc3QyXFxkb2NzL3NyY1xcYXBwXFxidXNjYXJcXGJ1c2Nhci5wYWdlLnNjc3MiLCJzcmMvYXBwL2J1c2Nhci9idXNjYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9idXNjYXIvYnVzY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2FlYjdjYTtcclxuICB9XHJcblxyXG4gIC5ncm91cHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSIsImlvbi1jb2wge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWViN2NhO1xufVxuXG4uZ3JvdXAge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/buscar/buscar.page.ts":
/*!***************************************!*\
  !*** ./src/app/buscar/buscar.page.ts ***!
  \***************************************/
/*! exports provided: BuscarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPage", function() { return BuscarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BuscarPage = class BuscarPage {
    constructor() { }
    ngOnInit() {
    }
};
BuscarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buscar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buscar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buscar/buscar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buscar.page.scss */ "./src/app/buscar/buscar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BuscarPage);



/***/ })

}]);
//# sourceMappingURL=buscar-buscar-module-es2015.js.map