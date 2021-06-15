"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_base_1 = __importDefault(require("./post_base"));
function PostJson(url, data) {
    return post_base_1.default(url, data, {});
}
exports.default = PostJson;
//# sourceMappingURL=post.js.map