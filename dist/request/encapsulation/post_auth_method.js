"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = __importDefault(require("../build_uri"));
const post_auth_1 = __importDefault(require("../json/post_auth"));
const response_checker_1 = __importDefault(require("./response_checker"));
async function PostAuthMethod(method, data, auth, schema) {
    const res = await post_auth_1.default(build_uri_1.default(method), data, auth);
    return response_checker_1.default(res, schema);
}
exports.default = PostAuthMethod;
//# sourceMappingURL=post_auth_method.js.map