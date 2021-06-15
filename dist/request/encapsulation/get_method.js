"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = __importDefault(require("../build_uri"));
const response_checker_1 = __importDefault(require("./response_checker"));
const get_1 = __importDefault(require("../json/get"));
async function GetMethod(method, schema) {
    const res = await get_1.default(build_uri_1.default(method));
    return response_checker_1.default(res, schema);
}
exports.default = GetMethod;
//# sourceMappingURL=get_method.js.map