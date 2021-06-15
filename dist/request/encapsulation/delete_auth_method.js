"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = __importDefault(require("../build_uri"));
const response_checker_1 = __importDefault(require("./response_checker"));
const delete_auth_1 = __importDefault(require("../json/delete_auth"));
async function DeleteAuthMethod(method, auth, schema) {
    const res = await delete_auth_1.default(build_uri_1.default(method), auth);
    return response_checker_1.default(res, schema);
}
exports.default = DeleteAuthMethod;
//# sourceMappingURL=delete_auth_method.js.map