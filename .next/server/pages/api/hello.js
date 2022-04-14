"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "http-status-codes"
const external_http_status_codes_namespaceObject = require("http-status-codes");
;// CONCATENATED MODULE: ./pages/api/hello.ts

function handler(req, res) {
    const params = req.query;
    const body = req.body;
    const auth = req.headers.authorization;
    console.log("body", body);
    console.log("auth", auth);
    console.log("params", params);
    //403
    res.status(external_http_status_codes_namespaceObject.StatusCodes.UNAUTHORIZED).json({
        firstName: "a",
        lastName: "b"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(998));
module.exports = __webpack_exports__;

})();