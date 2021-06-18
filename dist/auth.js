"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSCAuthExportStructure = void 0;
const myzod_1 = __importDefault(require("myzod"));
const myzod_2 = require("myzod");
const get_access_token_1 = __importDefault(require("./logic/auth/get_access_token"));
const get_user_info_1 = __importDefault(require("./logic/auth/get_user_info"));
const revoke_access_token_1 = __importDefault(require("./logic/auth/revoke_access_token"));
const set_ident_1 = __importDefault(require("./logic/auth/set_ident"));
const req_auth_token_1 = require("./types/auth/req_auth_token");
const resp_auth_token_1 = require("./types/auth/resp_auth_token");
const resp_auth_user_1 = require("./types/auth/resp_auth_user");
exports.CSCAuthExportStructure = myzod_1.default.object({
    organization: myzod_1.default.enum(req_auth_token_1.Organization),
    gIdToken: myzod_1.default.string(),
    gAccessToken: myzod_1.default.string(),
    accessData: resp_auth_token_1.AuthTokenResponseSchema.optional(),
});
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
            if (resp instanceof myzod_2.ValidationError) {
                console.error("error: accessData is not a valid data.");
                console.log(accessData);
            }
            else {
                this.accessData = resp;
            }
        }
        return this.accessData;
    }
    async getAuthenticationHeader() {
        const accessData = await this.getAccessData();
        if (accessData)
            return `Bearer ${accessData.access_token}`;
        return null;
    }
    async userInfo() {
        const accessData = await this.getAccessData();
        if (accessData) {
            const rawInfo = await get_user_info_1.default(this);
            const info = resp_auth_user_1.AuthUserResponseSchema.try(rawInfo);
            if (info instanceof myzod_2.ValidationError) {
                console.error("failed to get the user info");
                console.error(rawInfo);
                return null;
            }
            return info;
        }
        return null;
    }
    async setIdentity(userClass, userNo) {
        return set_ident_1.default({ class: userClass, number: userNo }, this);
    }
    async revoke() {
        return revoke_access_token_1.default(this);
    }
    static import(data) {
        const deserialized = exports.CSCAuthExportStructure.try(JSON.parse(data));
        if (deserialized instanceof myzod_2.ValidationError)
            return null;
        const { organization, gAccessToken, gIdToken, accessData } = deserialized;
        const auth = new CSCAuth(organization, gAccessToken, gIdToken);
        auth.accessData = accessData || null;
        return auth;
    }
    export() {
        return JSON.stringify({
            organization: this.organization,
            gAccessToken: this.gAccessToken,
            gIdToken: this.gIdToken,
            accessData: this.accessData,
        });
    }
}
exports.default = CSCAuth;
//# sourceMappingURL=auth.js.map