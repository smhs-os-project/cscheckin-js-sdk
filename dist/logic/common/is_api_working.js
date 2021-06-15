"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_method_1 = __importDefault(require("../../request/encapsulation/get_method"));
const resp_is_api_working_1 = require("../../types/common/resp_is_api_working");
/**
 * Is API working now?
 */
async function IsApiWorking() {
    var _a, _b;
    const res = await get_method_1.default("/", resp_is_api_working_1.IsApiWorkingResponseSchema);
    return (_b = (_a = res) === null || _a === void 0 ? void 0 : _a.success) !== null && _b !== void 0 ? _b : false;
}
exports.default = IsApiWorking;
//# sourceMappingURL=is_api_working.js.map