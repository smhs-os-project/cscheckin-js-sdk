"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iBuildUri = void 0;
const consts_1 = require("./consts");
function iBuildUri(base, method) {
    return `${base.replace(/\/$/g, "")}${method}`;
}
exports.iBuildUri = iBuildUri;
function BuildUri(method) {
    return iBuildUri(consts_1.endpoint, method);
}
exports.default = BuildUri;
//# sourceMappingURL=build_uri.js.map