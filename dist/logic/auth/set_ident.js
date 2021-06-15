"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = __importDefault(require("../../request/build_uri"));
const post_auth_1 = __importDefault(require("../../request/json/post_auth"));
/**
 * Set the identity of @param auth.
 *
 * @returns Is it success?
 */
async function SetIdentity(request, auth) {
    var _a;
    const response = await post_auth_1.default(build_uri_1.default("/auth/user"), request, auth);
    return (_a = response === null || response === void 0 ? void 0 : response.ok) !== null && _a !== void 0 ? _a : false;
}
exports.default = SetIdentity;
//# sourceMappingURL=set_ident.js.map