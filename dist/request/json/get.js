"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_base_1 = __importDefault(require("./get_base"));
function GetJson(url) {
    return get_base_1.default(url, {});
}
exports.default = GetJson;
//# sourceMappingURL=get.js.map