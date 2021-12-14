"use strict";
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/prismic */ "./src/services/prismic.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\NLW\\React\\ignews\\src\\pages\\posts\\[slug].tsx";



function Post() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
    children: "test"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
const getServerSideProps = async ({
  req,
  params
}) => {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });
  const {
    slug
  } = params;

  if (!session) {}

  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_1__.getPrismicClient)(req);
  const response = await prismic.getByID('posts', String(slug), {});
  const post = {};
};

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrismicClient": () => (/* binding */ getPrismicClient)
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ "@prismicio/client");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);

function getPrismicClient(req) {
  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });
  return prismic;
}

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@prismicio/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcG9zdHMvW3NsdWddLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBR2UsU0FBU0UsSUFBVCxHQUFnQjtBQUM3QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7QUFFTSxNQUFNQyxrQkFBc0MsR0FBRyxPQUFNO0FBQUNDLEVBQUFBLEdBQUQ7QUFBTUMsRUFBQUE7QUFBTixDQUFOLEtBQXVCO0FBQzdFLFFBQU1DLE9BQU8sR0FBRyxNQUFNTiw0REFBVSxDQUFDO0FBQUNJLElBQUFBO0FBQUQsR0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQ0csSUFBQUE7QUFBRCxNQUFTRixNQUFmOztBQUVBLE1BQUcsQ0FBQ0MsT0FBSixFQUFZLENBRVg7O0FBQ0QsUUFBTUUsT0FBTyxHQUFHUCxtRUFBZ0IsQ0FBQ0csR0FBRCxDQUFoQztBQUVBLFFBQU1LLFFBQVEsR0FBRyxNQUFNRCxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUJDLE1BQU0sQ0FBQ0osSUFBRCxDQUEvQixFQUF1QyxFQUF2QyxDQUF2QjtBQUVBLFFBQU1LLElBQUksR0FBRyxFQUFiO0FBS0MsQ0FoQk07Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUDtBQUVPLFNBQVNYLGdCQUFULENBQTBCRyxHQUExQixFQUF5QztBQUM5QyxRQUFNSSxPQUFPLEdBQUdLLCtEQUFBLENBQWVFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBM0IsRUFBNkM7QUFDM0RiLElBQUFBLEdBRDJEO0FBRTNEYyxJQUFBQSxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZrQyxHQUE3QyxDQUFoQjtBQUtBLFNBQU9YLE9BQVA7QUFDRDs7Ozs7Ozs7OztBQ1REOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9wb3N0cy9bc2x1Z10udHN4Iiwid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9wcmlzbWljLnRzIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIkBwcmlzbWljaW8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcclxuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcmlzbWljXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xyXG4gIHJldHVybiA8aDE+dGVzdDwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKHtyZXEsIHBhcmFtc30pID0+e1xyXG5jb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcclxuY29uc3Qge3NsdWd9ID0gcGFyYW1zO1xyXG5cclxuaWYoIXNlc3Npb24pe1xyXG5cclxufVxyXG5jb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudChyZXEpXHJcblxyXG5jb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlJRCgncG9zdHMnLCBTdHJpbmcoc2x1ZyksIHt9KVxyXG5cclxuY29uc3QgcG9zdCA9IHtcclxuICBcclxufVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKSB7XHJcbiAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsIHtcclxuICAgIHJlcSxcclxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTlxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBwcmlzbWljXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtaWNpby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJnZXRQcmlzbWljQ2xpZW50IiwiUG9zdCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInBhcmFtcyIsInNlc3Npb24iLCJzbHVnIiwicHJpc21pYyIsInJlc3BvbnNlIiwiZ2V0QnlJRCIsIlN0cmluZyIsInBvc3QiLCJQcmlzbWljIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfRU5EUE9JTlQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==