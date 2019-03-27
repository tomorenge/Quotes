(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-quote></app-quote>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.quotes = 'Quotes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quotes_form_quotes_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-form/quotes-form.component */ "./src/app/quotes-form/quotes-form.component.ts");
/* harmony import */ var _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-detail/quote-detail.component */ "./src/app/quote-detail/quote-detail.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _quotes_form_quotes_form_component__WEBPACK_IMPORTED_MODULE_5__["QuotesFormComponent"],
                _quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__["QuoteComponent"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__["DateCountPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    // transform(value: any): number {
    DateCountPipe.prototype.transform = function (value, args) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); // returns value in milliseconds
        var secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            // return dateCounter;
            return 0;
        }
        else {
            //return 0;
            return Math.round(dateCounter) + " days ago";
        }
    };
    DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/quote-detail/quote-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-thumbs-up{\n  margin-right:2px;\n}\n.fa-thumbs-down{\n  margin-left:3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlsL3F1b3RlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUtZGV0YWlsL3F1b3RlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXRodW1icy11cHtcbiAgbWFyZ2luLXJpZ2h0OjJweDtcbn1cbi5mYS10aHVtYnMtZG93bntcbiAgbWFyZ2luLWxlZnQ6M3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quote-detail/quote-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<p> Date:   {{ quote.date |dateCount }} </p>\n<p> Author:  {{ quote.author }} </p>\n<p> Submitted By: {{  quote.submittedBy}} </p>\n<i class=\"fas fa-thumbs-up\"(click)=\"upVote=upVote+1\"  ></i>\n  <p>{{upVote}}</p>\n\n<i class=\"fas fa-thumbs-down\" (click)=\"downVote=downVote+1\" ></i>\n<p>{{downVote}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/quote-detail/quote-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quote-detail/quote-detail.component.ts ***!
  \********************************************************/
/*! exports provided: QuoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailComponent", function() { return QuoteDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteDetailComponent = /** @class */ (function () {
    function QuoteDetailComponent() {
        this.upVote = 0;
        this.downVote = 0;
    }
    QuoteDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"])
    ], QuoteDetailComponent.prototype, "quote", void 0);
    QuoteDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-detail',
            template: __webpack_require__(/*! ./quote-detail.component.html */ "./src/app/quote-detail/quote-detail.component.html"),
            styles: [__webpack_require__(/*! ./quote-detail.component.css */ "./src/app/quote-detail/quote-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailComponent);
    return QuoteDetailComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, name, author, submittedBy, upVote, downVote, date) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.submittedBy = submittedBy;
        this.upVote = upVote;
        this.downVote = downVote;
        this.date = date;
        this.showDescription = false;
    }
    return Quote;
}());

// constructor(public id:number, public name:string, public author:string,
//   public submittedBy:string,public upVote:number, public downVote:number
//   ,public date:Date )


/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  font-family:sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h1> {{ title }} </h1>\n\n  <div class=\"display\" *ngFor=\"let quote of quotes ; let i =index\">\n    <p>{{quote.name}}</p>\n    <p>{{quote.date |date}}</p>\n\n\n    <button class=\"btn btn-danger\" (click)='toggleDetail(i)'> Show Details </button>\n    <div *ngIf=\"quote.showDescription\">\n\n    <app-quote-detail [quote]='quote'></app-quote-detail>\n\n\n    </div>\n\n\n</div>\n<app-quotes-form (addQuote)=\"addNewQuote($event)\"></app-quotes-form>\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.title = "Your daily dose of Quotes";
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, "Let the people mask you such that you become one with the crowd.", "Al muamin", "leo", 0, 0, new Date(2019, 2, 23)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, "Do we bend the rules in service to a greater good? And if we do, what does it say of us?", "Altaïr's Codex", "kevo", 0, 0, new Date()),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, "For if nothing is true, then why believe anything? And if everything is permitted... why not chase every desire?", "Edward Kenway to the Mentor Ah Tabai, 1722", "Tom", 0, 0, new Date())
        ];
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.toggleDetail = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.ngOnInit = function () { };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.formgroup{\n  font-size: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGVzLWZvcm0vcXVvdGVzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcXVvdGVzLWZvcm0vcXVvdGVzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm1ncm91cHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Post quote</h1>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <form (ngSubmit)='submitQuote()' #quoteForm='ngForm'>\n            <div class=\"form-group\">\n\n                <label for=\"name\">Quote</label>\n                <input type=\"text\" required class=\"form-control\" id=\"name\" [(ngModel)]=\"newQuote.name\" name=\"name\" #name =\"ngModel\">\n\n                <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                    <p> Name is Required</p>\n                </div>\n\n            </div>\n\n\n            <div class=\"form-group\">\n\n                <label for=\"description\">Author</label>\n                <textarea class=\"form-control\" id=\"description\" rows=\"4\" [(ngModel)]=\"newQuote.author\" name=\"author\"  #author =\"ngModel\" required>\n                </textarea>\n\n                <div [hidden]=\"author.valid || author.pristine\" class=\"alert alert-danger\">\n                  <p> Author is Required</p>\n                  </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label for=\"complete\">Name</label>\n                <input type='text' id=\"complete\" [(ngModel)]=\"newQuote.submittedBy\" name=\"submittedBy\"  #submittedBy =\"ngModel\" required>\n\n                <div [hidden]=\"submittedBy.valid || submittedBy.pristine\" class=\"alert alert-danger\">\n                  <p> Submitted By is Required</p>\n                  </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary \">Publish Quote</button>\n\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.ts ***!
  \******************************************************/
/*! exports provided: QuotesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesFormComponent", function() { return QuotesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuotesFormComponent = /** @class */ (function () {
    function QuotesFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "", 0, 0, new Date());
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuotesFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
        console.log(this.newQuote);
    };
    QuotesFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuotesFormComponent.prototype, "addQuote", void 0);
    QuotesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotes-form',
            template: __webpack_require__(/*! ./quotes-form.component.html */ "./src/app/quotes-form/quotes-form.component.html"),
            styles: [__webpack_require__(/*! ./quotes-form.component.css */ "./src/app/quotes-form/quotes-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuotesFormComponent);
    return QuotesFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tom/Documents/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map