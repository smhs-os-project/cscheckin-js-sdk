"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = __importDefault(require("../build_uri"));
const response_checker_1 = __importDefault(require("./response_checker"));
const post_1 = __importDefault(require("../json/post"));
async function PostMethod(method, data, schema) {
    const res = await post_1.default(build_uri_1.default(method), data);
    return response_checker_1.default(res, schema);
}
exports.default = PostMethod;
//# sourceMappingURL=post_method.js.map