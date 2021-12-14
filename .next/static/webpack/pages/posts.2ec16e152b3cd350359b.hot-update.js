"use strict";
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Posts; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/posts/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\NLW\\React\\ignews\\src\\pages\\posts\\index.tsx";





var __N_SSG = true;
function Posts(_ref) {
  var _this = this;

  var posts = _ref.posts;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Posts | Ignews"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().posts),
        children: posts.map(function (post) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/posts/".concat(post.slug),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("time", {
                children: post.updatedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
                children: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: post.excerpt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this)]
            }, post.slug, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Posts;

var _c;

$RefreshReg$(_c, "Posts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuMmVjMTZlMTUyYjNjZDM1MDM1OWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBS0E7Ozs7QUFjZSxTQUFTRyxLQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUNuRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFNLGVBQVMsRUFBRUYsc0VBQWpCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxrRUFBaEI7QUFBQSxrQkFDR0UsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDhCQUNiLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksbUJBQVlBLElBQUksQ0FBQ0MsSUFBakIsQ0FBVjtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBQSwwQkFBT0QsSUFBSSxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLDBCQUFTRixJQUFJLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUEsMEJBQUlILElBQUksQ0FBQ0k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUEsZUFBUUosSUFBSSxDQUFDQyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQXFCRDtLQXRCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnXHJcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1kb20nXHJcblxyXG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJpc21pYydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgcXVlcnkgfSBmcm9tICdmYXVuYWRiJ1xyXG5cclxudHlwZSBQb3N0ID0ge1xyXG4gIHNsdWc6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBleGNlcnB0OiBzdHJpbmdcclxuICB1cGRhdGVkQXQ6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XHJcbiAgcG9zdHM6IFBvc3RbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyh7IHBvc3RzIH06IFBvc3RzUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBvc3RzIHwgSWduZXdzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cclxuICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPGEga2V5PXtwb3N0LnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMucXVlcnkoXHJcbiAgICBbUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3Bvc3QnKV0sXHJcbiAgICB7XHJcbiAgICAgIGZldGNoOiBbJ3Bvc3QudGl0bGUnLCAncG9zdC5jb250ZW50J10sXHJcbiAgICAgIHBhZ2VTaXplOiAxMDBcclxuICAgIH1cclxuICApXHJcblxyXG4gIGNvbnN0IHBvc3RzID0gcmVzcG9uc2UucmVzdWx0cy5tYXAocG9zdCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzbHVnOiBwb3N0LnVpZCxcclxuICAgICAgdGl0bGU6IFJpY2hUZXh0LmFzVGV4dChwb3N0LmRhdGEudGl0bGUpLFxyXG4gICAgICBleGNlcnB0OlxyXG4gICAgICAgIHBvc3QuZGF0YS5jb250ZW50LmZpbmQoY29udGVudCA9PiBjb250ZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKT8udGV4dCA/P1xyXG4gICAgICAgICcnLFxyXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKHBvc3QubGFzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgICAgJ3B0LUJSJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHNcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwic3R5bGVzIiwiUG9zdHMiLCJwb3N0cyIsImNvbnRhaW5lciIsIm1hcCIsInBvc3QiLCJzbHVnIiwidXBkYXRlZEF0IiwidGl0bGUiLCJleGNlcnB0Il0sInNvdXJjZVJvb3QiOiIifQ==