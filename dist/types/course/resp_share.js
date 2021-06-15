"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareResponseSchema = void 0;
const myzod_1 = __importDefault(require("myzod"));
exports.ShareResponseSchema = myzod_1.default.object({
    link: myzod_1.default.string(),
});
//# sourceMappingURL=resp_share.js.map