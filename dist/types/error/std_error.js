"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardErrorResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
exports.StandardErrorResponseSchema = myzod_1.default.object({
    /**
     * User Error
     */
    error: myzod_1.default.string().optional(),
    /**
     * Server Error
     */
    message: myzod_1.default.string().optional(),
});
//# sourceMappingURL=std_error.js.map