"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ "./src/services/fauna.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: 'read:user'
  })],
  callbacks: {
    async signIn(user, account, profile) {
      const {
        email
      } = user;

      try {
        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {
          data: {
            email
          }
        }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

  }
}));

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fauna": () => (/* binding */ fauna)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);

const fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({
  secret: process.env.FAUNADB_KEY,
  domain: 'db.us.fauna.com',
  port: 443,
  scheme: 'https'
});

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLGlFQUFlRSxnREFBUSxDQUFDO0FBQ3RCRyxFQUFBQSxTQUFTLEVBQUUsQ0FDVEYsaUVBQUEsQ0FBaUI7QUFDZkksSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsb0JBRlg7QUFHZkMsSUFBQUEsS0FBSyxFQUFFO0FBSFEsR0FBakIsQ0FEUyxDQURXO0FBUXRCQyxFQUFBQSxTQUFTLEVBQUU7QUFDVCxVQUFNQyxNQUFOLENBQWFDLElBQWIsRUFBbUJDLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxZQUFNO0FBQUVDLFFBQUFBO0FBQUYsVUFBWUgsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLGNBQU1aLHdEQUFBLENBQ0pILDZDQUFBLENBQ0VBLDhDQUFBLENBQ0VBLGlEQUFBLENBQ0VBLGdEQUFBLENBQVFBLGdEQUFBLENBQVEsZUFBUixDQUFSLEVBQWtDQSxtREFBQSxDQUFXZSxJQUFJLENBQUNHLEtBQWhCLENBQWxDLENBREYsQ0FERixDQURGLEVBTUVsQixpREFBQSxDQUFTQSxxREFBQSxDQUFhLE9BQWIsQ0FBVCxFQUFnQztBQUFFMkIsVUFBQUEsSUFBSSxFQUFFO0FBQUVULFlBQUFBO0FBQUY7QUFBUixTQUFoQyxDQU5GLEVBT0VsQiw4Q0FBQSxDQUFNQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLGVBQVIsQ0FBUixFQUFrQ0EsbURBQUEsQ0FBV2UsSUFBSSxDQUFDRyxLQUFoQixDQUFsQyxDQUFOLENBUEYsQ0FESSxDQUFOO0FBV0EsZUFBTyxJQUFQO0FBQ0QsT0FiRCxDQWFFLE9BQU9XLEtBQVAsRUFBYztBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBckJRO0FBUlcsQ0FBRCxDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRU8sTUFBTTFCLEtBQUssR0FBRyxJQUFJNkIsMkNBQUosQ0FBVztBQUM5QkMsRUFBQUEsTUFBTSxFQUFFMUIsT0FBTyxDQUFDQyxHQUFSLENBQVkwQixXQURVO0FBRTlCQyxFQUFBQSxNQUFNLEVBQUUsaUJBRnNCO0FBRzlCQyxFQUFBQSxJQUFJLEVBQUUsR0FId0I7QUFJOUJDLEVBQUFBLE1BQU0sRUFBRTtBQUpzQixDQUFYLENBQWQ7Ozs7Ozs7Ozs7QUNGUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHMiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwiZmF1bmFkYlwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYidcclxuXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcclxuXHJcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmF1bmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xyXG4gICAgfSlcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcclxuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlclxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHEuSWYoXHJcbiAgICAgICAgICAgIHEuTm90KFxyXG4gICAgICAgICAgICAgIHEuRXhpc3RzKFxyXG4gICAgICAgICAgICAgICAgcS5NYXRjaChxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksIHEuQ2FzZWZvbGQodXNlci5lbWFpbCkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBxLkNyZWF0ZShxLkNvbGxlY3Rpb24oJ3VzZXJzJyksIHsgZGF0YTogeyBlbWFpbCB9IH0pLFxyXG4gICAgICAgICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSwgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXHJcblxyXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxyXG4gIGRvbWFpbjogJ2RiLnVzLmZhdW5hLmNvbScsXHJcbiAgcG9ydDogNDQzLFxyXG4gIHNjaGVtZTogJ2h0dHBzJ1xyXG59KVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXVuYWRiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImZhdW5hIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsIklmIiwiTm90IiwiRXhpc3RzIiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiLCJHZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDbGllbnQiLCJzZWNyZXQiLCJGQVVOQURCX0tFWSIsImRvbWFpbiIsInBvcnQiLCJzY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9