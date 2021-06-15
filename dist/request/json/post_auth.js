"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_base_1 = __importDefault(require("./post_base"));
async function PostJsonAuth(url, data, auth) {
    const authentication = await auth.getAuthenticationHeader();
    if (authentication)
        return post_base_1.default(url, data, {
            headers: {
                "Authorization": authentication,
            },
        });
    return null;
}
exports.default = PostJsonAuth;
//# sourceMappingURL=post_auth.js.map