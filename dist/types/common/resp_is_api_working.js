"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsApiWorkingResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
exports.IsApiWorkingResponseSchema = myzod_1.default.object({
    success: myzod_1.default.boolean(),
});
//# sourceMappingURL=resp_is_api_working.js.map