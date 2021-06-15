"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myzod_1 = require("myzod");
const get_access_token_1 = __importDefault(require("./logic/auth/get_access_token"));
const set_ident_1 = __importDefault(require("./logic/auth/set_ident"));
const resp_auth_token_1 = require("./types/auth/resp_auth_token");
class CSCAuth {
    constructor(organization, gIdToken, gAccessToken) {
        this.organization = organization;
        this.gIdToken = gIdToken;
        this.gAccessToken = gAccessToken;
        this.accessData = null;
    }
    async getAccessData() {
        // get lazily
        if (!this.accessData) {
            const accessData = await get_access_token_1.default(this.organization, {
                id_token: this.gIdToken,
                access_token: this.gAccessToken
            });
            const resp = resp_auth_token_1.AuthTokenResponseSchema.try(accessData);
            if (resp instanceof myzod_1.ValidationError) {
                console.error("error: accessData is not a valid data.");
                console.log(accessData);
            }
            else {
                this.accessData = resp;
            }
        }
        return null;
    }
    async getAuthenticationHeader() {
        const accessData = await this.getAccessData();
        if (accessData)
            return `Bearer ${accessData.access_token}`;
        return null;
    }
    async userInfo() {
        const accessData = await this.getAccessData();
        if (accessData)
            return accessData.user;
        return null;
    }
    async setIdentity(userClass, userNo) {
        return set_ident_1.default({ class: userClass, number: userNo }, this);
    }
}
exports.default = CSCAuth;
//# sourceMappingURL=auth.js.map