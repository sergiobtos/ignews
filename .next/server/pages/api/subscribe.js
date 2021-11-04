"use strict";
(() => {
var exports = {};
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ "./src/services/stripe.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ "./src/services/fauna.ts");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method === 'POST') {
    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
      req
    });
    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(session.user.email))));
    let customerId = user.data.stripe_customer_id;

    if (!customerId) {
      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.customers.create({
        email: session.user.email
      });
      await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Collection('users'), user.ref.id), {
        data: {
          stripe_customer_id: stripeCustomer.id
        }
      }));
      customerId = stripeCustomer.id;
    }

    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{
        price: 'price_1Jp15HHzSK3ucffjnOHMqb74',
        quantity: 1
      }],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    });
    return res.status(200).json({
      sessionId: stripeCheckoutSession.id
    });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
});

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

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVIsQ0FBWWdCLGNBRFMsRUFFckI7QUFDRUMsRUFBQUEsVUFBVSxFQUFFLFlBRGQ7QUFFRUMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLElBQUksRUFBRSxRQURDO0FBRVBDLElBQUFBLE9BQU8sRUFBRTtBQUZGO0FBRlgsQ0FGcUIsQ0FBaEI7Ozs7Ozs7Ozs7QUNGUDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHMiLCJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cyIsIndlYnBhY2s6Ly9pZ25ld3MvZXh0ZXJuYWwgXCJmYXVuYWRiXCIiLCJ3ZWJwYWNrOi8vaWduZXdzL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovL2lnbmV3cy9leHRlcm5hbCBcInN0cmlwZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHJpcGUnXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhdW5hJ1xyXG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYidcclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICByZWY6IHtcclxuICAgIGlkOiBzdHJpbmdcclxuICB9XHJcbiAgZGF0YToge1xyXG4gICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpbmdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxyXG4gICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSwgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpKSlcclxuICAgIClcclxuXHJcbiAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWRcclxuICAgIGlmICghY3VzdG9tZXJJZCkge1xyXG4gICAgICBjb25zdCBzdHJpcGVDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcclxuICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICBxLlVwZGF0ZShcclxuICAgICAgICAgIHEuUmVmKHEuQ29sbGVjdGlvbigndXNlcnMnKSwgdXNlci5yZWYuaWQpLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhOiB7IFxyXG4gICAgICAgICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaXBlQ3VzdG9tZXIuaWQsIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIGN1c3RvbWVySWQgPSBzdHJpcGVDdXN0b21lci5pZFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsXHJcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdyZXF1aXJlZCcsXHJcbiAgICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiAncHJpY2VfMUpwMTVISHpTSzN1Y2Zmam5PSE1xYjc0JywgcXVhbnRpdHk6IDEgfV0sXHJcbiAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxyXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfU1VDQ0VTU19VUkwsXHJcbiAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc3RyaXBlQ2hlY2tvdXRTZXNzaW9uLmlkIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKVxyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJylcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnZmF1bmFkYidcclxuXHJcbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVksXHJcbiAgZG9tYWluOiAnZGIudXMuZmF1bmEuY29tJyxcclxuICBwb3J0OiA0NDMsXHJcbiAgc2NoZW1lOiAnaHR0cHMnXHJcbn0pXHJcbiIsImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpcGUgID0gbmV3IFN0cmlwZShcclxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuICB7XHJcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICBhcHBJbmZvOiB7XHJcbiAgICAgIG5hbWU6ICdJZ25ld3MnLFxyXG4gICAgICB2ZXJzaW9uOiAnMC4xLjAnXHJcbiAgICB9LFxyXG4gIH1cclxuKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwibmFtZXMiOlsic3RyaXBlIiwiZ2V0U2Vzc2lvbiIsImZhdW5hIiwicXVlcnkiLCJxIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsInVzZXIiLCJHZXQiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJlbWFpbCIsImN1c3RvbWVySWQiLCJkYXRhIiwic3RyaXBlX2N1c3RvbWVyX2lkIiwic3RyaXBlQ3VzdG9tZXIiLCJjdXN0b21lcnMiLCJjcmVhdGUiLCJVcGRhdGUiLCJSZWYiLCJDb2xsZWN0aW9uIiwicmVmIiwiaWQiLCJzdHJpcGVDaGVja291dFNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCIsIkNsaWVudCIsInNlY3JldCIsIkZBVU5BREJfS0VZIiwiZG9tYWluIiwicG9ydCIsInNjaGVtZSIsIlN0cmlwZSIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=