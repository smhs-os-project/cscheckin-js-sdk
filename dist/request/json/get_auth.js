"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_base_1 = __importDefault(require("./get_base"));
async function GetJsonAuth(url, auth) {
    const authentication = await auth.getAuthenticationHeader();
    if (authentication)
        return get_base_1.default(url, {
            headers: {
                "Authorization": authentication,
            },
        });
    return null;
}
exports.default = GetJsonAuth;
//# sourceMappingURL=get_auth.js.map