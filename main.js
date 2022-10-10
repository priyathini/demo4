(self["webpackChunkdemo4"] = self["webpackChunkdemo4"] || []).push([["main"],{

/***/ 6359:
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularComponent": () => (/* binding */ AngularComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ 5682);


class AngularComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularComponent.ɵfac = function AngularComponent_Factory(t) { return new (t || AngularComponent)(); };
AngularComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularComponent, selectors: [["app-angular"]], decls: 4, vars: 0, consts: [["min", "1", "max", "100", "step", "1", "value", "50"]], template: function AngularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-slider", 0)(3, "hr");
    } }, dependencies: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_1__.MatSlider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmd1bGFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular/angular.component */ 6359);
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department/department.component */ 9133);
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee/employee.component */ 6162);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification.component */ 6768);
/* harmony import */ var _slots_slots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slots/slots.component */ 6766);
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject/subject.component */ 2910);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ 9099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    { path: "employee", component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeComponent },
    { path: "department/:id", component: _department_department_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentComponent },
    { path: "lazy", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lazy_lazy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy/lazy.module */ 5644)).then(l => l.LazyModule) },
    { path: "subject", component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_5__.SubjectComponent },
    { path: "notification", component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__.NotificationComponent },
    { path: "department", component: _department_department_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentComponent },
    { path: "slots", component: _slots_slots_component__WEBPACK_IMPORTED_MODULE_4__.SlotsComponent },
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__.UserComponent },
    { path: "angular", component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_0__.AngularComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-header")(5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: [".form-control.ng-invalid.ng-touched[_ngcontent-%COMP%]{\n    border: 1px solid red;\n    \n}\nbutton[_ngcontent-%COMP%]{\n\n    margin: 10px;\n   \n    \n    \n}\ntd[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n\n   border: none;\n\n}\n.container-fluid[_ngcontent-%COMP%]{\nbackground-color: white;\n}\n.help-block[_ngcontent-%COMP%]{\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCOztBQUV6QjtBQUNBOztJQUVJLFlBQVk7Ozs7QUFJaEI7QUFDQTs7R0FFRyxZQUFZOztBQUVmO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBcbn1cbmJ1dHRvbntcblxuICAgIG1hcmdpbjogMTBweDtcbiAgIFxuICAgIFxuICAgIFxufVxudGQgLmJ0bntcblxuICAgYm9yZGVyOiBub25lO1xuXG59XG4uY29udGFpbmVyLWZsdWlke1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uaGVscC1ibG9ja3tcbiAgICBjb2xvcjogcmVkO1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee/employee.component */ 6162);
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department/department.component */ 9133);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject/subject.component */ 2910);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification/notification.component */ 6768);
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject/subject.service */ 6257);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _slots_slots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slots/slots.component */ 6766);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ 9099);
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular/angular.component */ 6359);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_subject_subject_service__WEBPACK_IMPORTED_MODULE_6__.SubjectService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__.MatSliderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeComponent,
        _department_department_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentComponent,
        _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__.SubjectComponent,
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__.NotificationComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent,
        _slots_slots_component__WEBPACK_IMPORTED_MODULE_9__.SlotsComponent,
        _user_user_component__WEBPACK_IMPORTED_MODULE_10__.UserComponent,
        _angular_angular_component__WEBPACK_IMPORTED_MODULE_11__.AngularComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__.MatSliderModule] }); })();


/***/ }),

/***/ 9133:
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentComponent": () => (/* binding */ DepartmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class DepartmentComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.Name = '';
        this.UserName = "";
        this.Id = 1;
        this.activatedRoute.queryParams.subscribe(data => {
            this.Id = data['id'];
        });
    }
    ngOnInit() {
    }
}
DepartmentComponent.ɵfac = function DepartmentComponent_Factory(t) { return new (t || DepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
DepartmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentComponent, selectors: [["app-department"]], decls: 2, vars: 0, template: function DepartmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6162:
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeComponent": () => (/* binding */ EmployeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function EmployeeComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a")(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const emp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](emp_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", emp_r1.Employee_Name, " ");
} }
class EmployeeComponent {
    constructor() {
        this.employee_detail = [{ id: 1, Employee_Name: 'Priyathini' },
            { id: 1, Employee_Name: 'mythili' },
            { id: 2, Employee_Name: 'Priya' },
            { id: 3, Employee_Name: 'mohana' },
            { id: 4, Employee_Name: 'monika' },
            { id: 5, Employee_Name: 'shobana' }];
    }
    ngOnInit() {
    }
}
EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(); };
EmployeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-xs-4"], [4, "ngFor", "ngForOf"], [1, "badge"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeComponent_li_4_Template, 5, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employee_detail);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service.service */ 9353);
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subject/subject.service */ 6257);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class HeaderComponent {
    constructor(serviceCount, bhsubject) {
        this.serviceCount = serviceCount;
        this.bhsubject = bhsubject;
        this.bhsubject.bhsub.subscribe(x => {
            console.log(x);
            this.bhsubCount = x;
        });
    }
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_subject_subject_service__WEBPACK_IMPORTED_MODULE_1__.SubjectService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 35, vars: 1, consts: [[1, "nav", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active"], ["routerLink", "department"], ["routerLink", "employee"], ["routerLink", "notification"], [1, "Notification"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bell"], ["d", "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"], [1, "badge"], ["routerLink", "lazy"], ["routerLink", "subject"], ["routerLink", "user"], ["routerLink", "slots"], ["routerLink", "angular"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 4)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 4)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 8)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 4)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "lazy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 4)(24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 4)(27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 4)(30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "slot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li", 4)(33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bhsubCount);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["a[_ngcontent-%COMP%]{\n\n    padding: 20px;  \n      \n  }\n  \n  \n  .btn[_ngcontent-%COMP%]{\n  \n    margin: 10px;\n    border: none;\n  }\n  \n  \n  .img[_ngcontent-%COMP%]{\n  \n    text-align: left;\n  }\n  \n  \n  .badge[_ngcontent-%COMP%]{\n  \n    font-size: 7px;\n    position: absolute;\n    background-color: rgb(150, 6, 6);\n    margin-left: -10px;\n    margin-top: -6px;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7O0VBRWY7OztFQUdBOztJQUVFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7OztFQUNBOztJQUVFLGdCQUFnQjtFQUNsQjs7O0VBQ0E7O0lBRUUsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7RUFFbEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuXG4gICAgcGFkZGluZzogMjBweDsgIFxuICAgICAgXG4gIH1cbiAgXG4gIFxuICAuYnRue1xuICBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5pbWd7XG4gIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmJhZGdle1xuICBcbiAgICBmb250LXNpemU6IDdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgNiwgNik7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIG1hcmdpbi10b3A6IC02cHg7XG4gIFxuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ 6768:
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service.service */ 9353);
/* harmony import */ var _shared_test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/test/test.component */ 8503);



class NotificationComponent {
    constructor(bhservice) {
        this.bhservice = bhservice;
    }
    ngOnInit() {
    }
    Addone() {
        this.bhservice.increase();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceService)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-xs-4"], [1, "btn", "btn-success", "ml-3", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_3_listener() { return ctx.Addone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_5_listener() { return ctx.Addone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Delete Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_shared_test_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9353:
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceService": () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ServiceService {
    constructor() {
        this.count = 0;
    }
    increase() {
        this.count++;
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(); };
ServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6259:
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ApiService {
    constructor(api) {
        this.api = api;
    }
    apicall() {
        return this.api.get("http://localhost:3000/users");
    }
    apipost(data) {
        return this.api.post("http://localhost:3000/users", data);
    }
    apiupdate(id, updatedBody) {
        return this.api.put("http://localhost:3000/users/" + id, updatedBody);
    }
    apiDelete(id) {
        return this.api.delete("http://localhost:3000/users/" + id);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/test.component */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_0__.TestComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_test_test_component__WEBPACK_IMPORTED_MODULE_0__.TestComponent] }); })();


/***/ }),

/***/ 8503:
/*!***********************************************!*\
  !*** ./src/app/shared/test/test.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6766:
/*!******************************************!*\
  !*** ./src/app/slots/slots.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotsComponent": () => (/* binding */ SlotsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function SlotsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SlotsComponent_div_7_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const date_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.getSlots(date_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const date_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](date_r2);
} }
function SlotsComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slot_r5);
} }
class SlotsComponent {
    constructor() {
        this.today = new Date();
        this.slots = [];
        this.dates = [];
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day');
        this.day1 = moment__WEBPACK_IMPORTED_MODULE_0__(this.today).format('MMM D');
        console.log(this.day1);
        this.day2 = moment__WEBPACK_IMPORTED_MODULE_0__(this.today).add(1, 'day').format('MMM D');
        console.log(this.day2);
        this.day3 = moment__WEBPACK_IMPORTED_MODULE_0__(this.today).add(2, 'days').format('MMM D');
        console.log(this.day3);
        this.day4 = moment__WEBPACK_IMPORTED_MODULE_0__(this.today).add(3, 'days').format('MMM D');
        console.log(this.day4);
        this.day5 = moment__WEBPACK_IMPORTED_MODULE_0__(this.today).add(4, 'days').format('MMM D');
        console.log(this.day5);
        this.dates.push(this.day1, this.day2, this.day3, this.day4, this.day5);
        this.getSlots(this.day1);
    }
    getSlots(date) {
        this.slots = [];
        this.curntTime = moment__WEBPACK_IMPORTED_MODULE_0__().format('hh:mm A');
        this.gap = moment__WEBPACK_IMPORTED_MODULE_0__(this.curntTime, "HH:mmA").add(4, 'hours').format('hh:mmA');
        console.log('curnt', this.gap);
        console.log(this.slot1);
        var time = "9:00:00";
        this.slot1 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").format('hh:mm A');
        console.log(this.slot1);
        this.slot2 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(1, 'hour').format('hh:mm A');
        this.slot3 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(2, 'hour').format('hh:mm A');
        this.slot4 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(3, 'hour').format('hh:mm A');
        this.slot5 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(4, 'hour').format('hh:mm A');
        this.slot6 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(5, 'hour').format('hh:mm A');
        this.slot7 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(6, 'hour').format('hh:mm A');
        this.slot8 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(7, 'hour').format('hh:mm A');
        this.slot9 = moment__WEBPACK_IMPORTED_MODULE_0__(time, "HH:mm").add(8, 'hour').format('hh:mm A');
        console.log((moment__WEBPACK_IMPORTED_MODULE_0__(this.slot2, 'h:mma').isBefore(moment__WEBPACK_IMPORTED_MODULE_0__(this.curntTime, 'h:mma'))));
        var timearr = [];
        timearr.push(this.slot1, this.slot2, this.slot3, this.slot4, this.slot5, this.slot6, this.slot7, this.slot8, this.slot9);
        for (var arr of timearr) {
            if (moment__WEBPACK_IMPORTED_MODULE_0__(date).isSame(this.day1)) {
                console.log('gap', this
                    .gap);
                if (moment__WEBPACK_IMPORTED_MODULE_0__(arr, 'h:mma').isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(this.gap, 'h:mma'))) {
                    this.slots.push(arr);
                    console.log(arr);
                }
            }
            else {
                this.slots.push(arr);
                console.log('els', this.slots);
            }
        }
    }
}
SlotsComponent.ɵfac = function SlotsComponent_Factory(t) { return new (t || SlotsComponent)(); };
SlotsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SlotsComponent, selectors: [["app-slots"]], decls: 12, vars: 2, consts: [[1, "container", "btn-toolbar"], [1, "row"], [1, "col-md-7"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], ["class", "slot", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "slot"]], template: function SlotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Booking The Slots.......");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "slot starts from 9 am to 9 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SlotsComponent_div_7_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SlotsComponent_p_11_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slots);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".btn-primary[_ngcontent-%COMP%]{\n    margin-top: 5px;\n    margin: 5px;\n   \n}\n.slot[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]{\n    border: solid 1px;;  \n    padding: 5px;\n    border-color:gray;\n    display: inline-block;\n    color:green;\n    margin-right: 10px;\n    border-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnl7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgXG59XG4uc2xvdCwgLnNob3d7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7OyAgXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1jb2xvcjpncmF5O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjpncmVlbjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2910:
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectComponent": () => (/* binding */ SubjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject.service */ 6257);


class SubjectComponent {
    constructor(bhsubject) {
        this.bhsubject = bhsubject;
        this.bhsubject.bhsub.subscribe(x => (x));
    }
    add() {
        this.bhsubject.notification(this['x']++);
    }
    ngOnInit() {
    }
}
SubjectComponent.ɵfac = function SubjectComponent_Factory(t) { return new (t || SubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_subject_service__WEBPACK_IMPORTED_MODULE_0__.SubjectService)); };
SubjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubjectComponent, selectors: [["app-subject"]], decls: 7, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-xs-4"], [1, "btn", "btn-success", "ml-3", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SubjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubjectComponent_Template_button_click_3_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubjectComponent_Template_button_click_5_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Delete Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6257:
/*!********************************************!*\
  !*** ./src/app/subject/subject.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectService": () => (/* binding */ SubjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SubjectService {
    constructor() {
        this.bhsub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
    notification(data) {
        this.bhsub.next(data);
    }
}
SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(); };
SubjectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9099:
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api.service */ 6259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




const _c0 = ["userForm"];
function UserComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Enter The Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Enter The Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Enter The UserName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Enter The Valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 25)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_tr_48_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const user_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.Delete(user_r10.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_tr_48_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const user_r10 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.edit(user_r10.id, user_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_tr_48_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const user_r10 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.Update(user_r10.id, user_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r10.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r10.email);
} }
class UserComponent {
    constructor(api) {
        this.api = api;
        this.isedit = false;
        this.users = [];
        this.api.apicall().subscribe((data) => {
            this.users = data;
        });
    }
    edit(id, edit) {
        this.editval.setValue(edit);
        console.log('editval', this.editval);
    }
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
    onSubmit(myform) {
        const newMyform = { 'id': myform.value.id, 'name': myform.value.name, 'username': myform.value.username, 'email': myform.value.email };
        this.api.apipost(newMyform).subscribe(data => {
        });
        this.refresh();
        alert('User Detailes Submitted Successfuly');
    }
    refresh() {
        this.api.apicall().subscribe((data) => {
            this.users = data;
        });
    }
    //   Update(id:any,editval:any){
    //     console.log('id update',id);
    //     console.log('Edited form value', editval)
    //     this.api.apiupdate(id, editval).subscribe(data=>{
    //        console.log('updated!', data);
    //     });
    // }
    Update(id, form) {
        // const newFormData = { 'id':'rt', 'name':'ghjk', 'username': 'periya','email':'periya@'}
        if (this.editval.value.id == id) {
            console.log(id);
            const newFormData = { 'id': this.editval.value.id, 'name': this.editval.value.name,
                'username': this.editval.value.username, 'email': this.editval.value.email };
            this.api.apiupdate(id, newFormData).subscribe(data => {
                console.log('updated!', data);
            });
            this.refresh();
        }
    }
    Delete(id) {
        this.api.apiDelete(id).subscribe(data => {
            console.log('delete!', data);
            this.refresh();
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], viewQuery: function UserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editval = _t.first);
    } }, decls: 49, vars: 5, consts: [[1, "container"], [1, "tittle", "stong"], [1, "row"], [1, "col-xs-4"], [3, "submit"], ["userForm", "ngForm"], ["for", "id"], ["type", "text", "name", "id", "ngModel", "", "required", "", 1, "form-control", "is-invalid"], ["id", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "name"], ["type", "text", "ngModel", "", "name", "name", "required", "", 1, "form-control"], ["name", "ngModel"], ["for", "username"], ["type", "text", "ngModel", "", "name", "username", "required", "", 1, "form-control"], ["username", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["type", "submit", 1, "btn", "btn-success", "btn-sm"], [1, "col-xs-8"], [1, "table", "table-bordered", "table-hover", "table-condensed"], [1, "danger"], ["class", "success", 4, "ngFor", "ngForOf"], [1, "help-block"], [1, "success"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "btn", "btn-warning", "btn-sm", 3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "USER DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function UserComponent_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserComponent_span_17_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserComponent_span_23_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UserComponent_span_29_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20)(34, "table", 21)(35, "thead")(36, "tr", 22)(37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, UserComponent_tr_48_Template, 16, 4, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r3.valid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 5773,
	"./ro.js": 5773,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map