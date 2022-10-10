"use strict";
(self["webpackChunkdemo4"] = self["webpackChunkdemo4"] || []).push([["src_app_lazy_lazy_module_ts"],{

/***/ 5566:
/*!*************************************************!*\
  !*** ./src/app/lazy/child1/child1.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Child1Component": () => (/* binding */ Child1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class Child1Component {
    constructor() { }
    ngOnInit() {
    }
}
Child1Component.ɵfac = function Child1Component_Factory(t) { return new (t || Child1Component)(); };
Child1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Child1Component, selectors: [["app-child1"]], decls: 4, vars: 0, consts: [["routerLink", "child2"]], template: function Child1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "child1 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "go to child2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlsZDEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6487:
/*!*************************************************!*\
  !*** ./src/app/lazy/child2/child2.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Child2Component": () => (/* binding */ Child2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class Child2Component {
    constructor() { }
    ngOnInit() {
    }
}
Child2Component.ɵfac = function Child2Component_Factory(t) { return new (t || Child2Component)(); };
Child2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Child2Component, selectors: [["app-child2"]], decls: 4, vars: 0, consts: [["routerLink", "child1"]], template: function Child2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "child2 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "go to child1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlsZDIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1439:
/*!*********************************************!*\
  !*** ./src/app/lazy/lazy-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyRoutingModule": () => (/* binding */ LazyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _child1_child1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child1/child1.component */ 5566);
/* harmony import */ var _child2_child2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child2/child2.component */ 6487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: "", component: _child1_child1_component__WEBPACK_IMPORTED_MODULE_0__.Child1Component },
    { path: "child1", component: _child1_child1_component__WEBPACK_IMPORTED_MODULE_0__.Child1Component },
    { path: "child2", component: _child2_child2_component__WEBPACK_IMPORTED_MODULE_1__.Child2Component },
];
class LazyRoutingModule {
}
LazyRoutingModule.ɵfac = function LazyRoutingModule_Factory(t) { return new (t || LazyRoutingModule)(); };
LazyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LazyRoutingModule });
LazyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LazyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5644:
/*!*************************************!*\
  !*** ./src/app/lazy/lazy.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyModule": () => (/* binding */ LazyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-routing.module */ 1439);
/* harmony import */ var _child1_child1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child1/child1.component */ 5566);
/* harmony import */ var _child2_child2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child2/child2.component */ 6487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class LazyModule {
}
LazyModule.ɵfac = function LazyModule_Factory(t) { return new (t || LazyModule)(); };
LazyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LazyModule });
LazyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyModule, { declarations: [_child1_child1_component__WEBPACK_IMPORTED_MODULE_1__.Child1Component,
        _child2_child2_component__WEBPACK_IMPORTED_MODULE_2__.Child2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.LazyRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_lazy_lazy_module_ts.js.map