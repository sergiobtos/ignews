"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInButton": function() { return /* binding */ SignInButton; }
/* harmony export */ });
/* harmony import */ var C_NLW_React_ignews_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SignInButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\NLW\\React\\ignews\\src\\components\\SignInButton\\index.tsx",
    _s = $RefreshSig$();






function SignInButton() {
  _s();

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(),
      _useSession2 = (0,C_NLW_React_ignews_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),
      session = _useSession2[0];

  console.log(session);
  return session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {
      color: "#04d361"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), Sergio, " Silva", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiX, {
      color: "#737380",
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),
    onClick: function onClick() {
      return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {
      color: "#eba417"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), "Sign in with Github"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(SignInButton, "Vxy5gMemEU/s8dbgarDyE2/t+kg=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession];
});

_c = SignInButton;

var _c;

$RefreshReg$(_c, "SignInButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MzUyOGMzZjU1MGY5OTdmMzU1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVPLFNBQVNLLFlBQVQsR0FBd0I7QUFBQTs7QUFDN0Isb0JBQWtCRiw0REFBVSxFQUE1QjtBQUFBO0FBQUEsTUFBT0csT0FBUDs7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFFQSxTQUFPQSxPQUFPLGdCQUNaO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFRix5RUFBakM7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFVLFdBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR00sTUFGSCx5QkFHRSw4REFBQywrQ0FBRDtBQUFLLFdBQUssRUFBQyxTQUFYO0FBQXFCLGVBQVMsRUFBRU4sc0VBQWdCTztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFksZ0JBT1o7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRVAseUVBRmI7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNRix3REFBTSxDQUFDLFFBQUQsQ0FBWjtBQUFBLEtBSFg7QUFBQSw0QkFLRSw4REFBQyxvREFBRDtBQUFVLFdBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUEY7QUFnQkQ7O0dBckJlRztVQUNJRjs7O0tBREpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZ25JbkJ1dHRvbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgRmlYIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXHJcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbigpIHtcclxuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKClcclxuXHJcbiAgY29uc29sZS5sb2coc2Vzc2lvbilcclxuXHJcbiAgcmV0dXJuIHNlc3Npb24gPyAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259PlxyXG4gICAgICA8RmFHaXRodWIgY29sb3I9XCIjMDRkMzYxXCIgLz5cclxuICAgICAge1Nlcmdpb30gU2lsdmFcclxuICAgICAgPEZpWCBjb2xvcj1cIiM3MzczODBcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUljb259IC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICApIDogKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dpdGh1YicpfVxyXG4gICAgPlxyXG4gICAgICA8RmFHaXRodWIgY29sb3I9XCIjZWJhNDE3XCIgLz5cclxuICAgICAgU2lnbiBpbiB3aXRoIEdpdGh1YlxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGYUdpdGh1YiIsIkZpWCIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJzdHlsZXMiLCJTaWduSW5CdXR0b24iLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInNpZ25JbkJ1dHRvbiIsIlNlcmdpbyIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=