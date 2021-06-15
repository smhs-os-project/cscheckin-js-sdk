"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenRequestSchema = exports.Organization = void 0;
const myzod_1 = __importDefault(require("myzod"));
var Organization;
(function (Organization) {
    Organization["SMHS"] = "smhs";
    Organization["FSSH"] = "fssh";
})(Organization = exports.Organization || (exports.Organization = {}));
exports.AuthTokenRequestSchema = myzod_1.default.object({
    id_token: myzod_1.default.string(),
    access_token: myzod_1.default.string(),
});
//# sourceMappingURL=req_auth_token.js.map