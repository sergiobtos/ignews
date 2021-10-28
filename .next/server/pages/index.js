(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeButton": () => (/* binding */ SubscribeButton)
/* harmony export */ });
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SubscribeButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\NLW\\React\\ignews\\src\\components\\SubscribeButton\\index.tsx";


function SubscribeButton({
  priceId
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subscribeButton),
    children: "Subscribe now"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SubscribeButton */ "./src/components/SubscribeButton/index.tsx");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service */ "./src/services/service.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\NLW\\React\\ignews\\src\\pages\\index.tsx";






function Home({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Home | ig.news"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\uD83D\uDC4F Hey, welcome "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          children: ["News about the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: "React"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 28
          }, this), " world."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: ["Get access to all the publications ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 48
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: ["for ", product.amount, " month"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_1__.SubscribeButton, {
          priceId: product.priceId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        src: "/images/avatar.svg",
        alt: "Girl Coding"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  const price = await _services_service__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve('price_1Jp15HHzSK3ucffjnOHMqb74', {
    expand: ['product']
  });
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 horas

  };
};

/***/ }),

/***/ "./src/services/service.ts":
/*!*********************************!*\
  !*** ./src/services/service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripe": () => (/* binding */ stripe)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version: '0.1.0'
  }
});

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__1uQAs"
};


/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__21EWl",
	"hero": "home_hero__3Za5I"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLnRzIiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwic3RyaXBlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHN7XHJcbiAgcHJpY2VJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHtwcmljZUlkfTpTdWJzY3JpYmVCdXR0b25Qcm9wcyl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufT5cclxuICAgICAgU3Vic2NyaWJlIG5vd1xyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbidcclxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vc2VydmljZXMvc2VydmljZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XHJcbiAgcHJvZHVjdDoge1xyXG4gICAgcHJpY2VJZDogc3RyaW5nXHJcbiAgICBhbW91bnQ6IG51bWJlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3QgfTogSG9tZVByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxyXG4gICAgICAgICAgPHNwYW4+8J+RjyBIZXksIHdlbGNvbWUgPC9zcGFuPlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBOZXdzIGFib3V0IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gd29ybGQuXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgQ29kaW5nXCIgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUpwMTVISHpTSzN1Y2Zmam5PSE1xYjc0Jywge1xyXG4gICAgZXhwYW5kOiBbJ3Byb2R1Y3QnXVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcclxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgIGN1cnJlbmN5OiAnVVNEJ1xyXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2R1Y3QgfSxcclxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCAvLzI0IGhvcmFzXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpcGUgID0gbmV3IFN0cmlwZShcclxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuICB7XHJcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICBhcHBJbmZvOiB7XHJcbiAgICAgIG5hbWU6ICdJZ25ld3MnLFxyXG4gICAgICB2ZXJzaW9uOiAnMC4xLjAnXHJcbiAgICB9LFxyXG4gIH1cclxuKTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJwcmljZUlkIiwic3Vic2NyaWJlQnV0dG9uIiwiSGVhZCIsInN0cmlwZSIsIkhvbWUiLCJwcm9kdWN0IiwiY29udGVudENvbnRhaW5lciIsImhlcm8iLCJhbW91bnQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwicHJpY2VzIiwicmV0cmlldmUiLCJleHBhbmQiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==