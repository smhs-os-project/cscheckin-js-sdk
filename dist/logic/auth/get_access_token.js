"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const client_1 = __importStar(require("../../request/client"));
/**
 * Get the access token.
 *
 * @param request The Google token ID & access token
 */
async function GetAccessToken(request) {
    const organization = "common"; // TODO: should be fixed when the backend dropped the organization support.
    const [response] = await client_1.clientInstance.jsonFetcher(`/auth/token/${organization}`, client_1.default.postJsonRequest(request));
    return client_1.default.responseParser(response, types_1.AuthTokenResponseSchema);
}
exports.default = GetAccessToken;
//# sourceMappingURL=get_access_token.js.map