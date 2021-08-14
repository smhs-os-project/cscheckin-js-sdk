"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSCAuthExportStructure = void 0;
/**
 * The authentication-related part of this SDK.
 *
 * The `default` class is `CSCAuth`.
 *
 * @module
 */
const myzod_1 = __importDefault(require("myzod"));
const get_access_token_1 = __importDefault(require("./logic/auth/get_access_token"));
const get_user_info_1 = __importDefault(require("./logic/auth/get_user_info"));
const revoke_access_token_1 = __importDefault(require("./logic/auth/revoke_access_token"));
const set_ident_1 = __importDefault(require("./logic/auth/set_ident"));
const types_1 = require("./types");
/**
 * The structure that `CSCAuth.export()` will return.
 */
exports.CSCAuthExportStructure = myzod_1.default.object({
    gIdToken: myzod_1.default.string(),
    gAccessToken: myzod_1.default.string(),
    accessData: types_1.AuthTokenResponseSchema.optional(),
});
/**
 * The CSCheckin authentication manager.
 */
class CSCAuth {
    /**
     * Construct this manager.
     *
     * @param gIdToken The ID token received from Google.
     * @param gAccessToken The access token received from Google.
     */
    constructor(gIdToken, gAccessToken) {
        this.gIdToken = gIdToken;
        this.gAccessToken = gAccessToken;
        this.accessData = null;
    }
    /**
     * Get the credential including token and user information.
     */
    getAccessData() {
        return __awaiter(this, void 0, void 0, function* () {
            // get lazily
            if (!this.accessData) {
                const accessData = yield get_access_token_1.default({
                    id_token: this.gIdToken,
                    access_token: this.gAccessToken,
                });
                this.accessData = types_1.AuthTokenResponseSchema.parse(accessData);
            }
            return this.accessData;
        });
    }
    /**
     * Get the authentication header that can use for directly requesting API.
     */
    getAuthenticationHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            const accessData = yield this.getAccessData();
            return `Bearer ${accessData.access_token}`;
        });
    }
    /**
     * Get the user information.
     *
     * The response of this API won't be cached!
     */
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawInfo = yield get_user_info_1.default(this);
            return types_1.AuthUserResponseSchema.parse(rawInfo);
        });
    }
    /**
     * Set the student class and no.
     *
     * @param userClass The student class.
     * @param userNo The student no.
     */
    setIdentity(userClass, userNo) {
        return __awaiter(this, void 0, void 0, function* () {
            return set_ident_1.default({ class: userClass, number: userNo }, this);
        });
    }
    /**
     * Revoke this access token.
     */
    revoke() {
        return __awaiter(this, void 0, void 0, function* () {
            return revoke_access_token_1.default(this);
        });
    }
    /**
     * Import the credential from JSON-serialized CSCAuthExportStructure.
     *
     * @param data the JSON-serialized data from `CSCAuth.export()`.
     */
    static import(data) {
        const deserialized = exports.CSCAuthExportStructure.parse(JSON.parse(data));
        const { gAccessToken, gIdToken, accessData } = deserialized;
        const auth = new CSCAuth(gAccessToken, gIdToken);
        auth.accessData = accessData || null;
        return auth;
    }
    /**
     * Export the credential to JSON-serialized CSCAuthExportStructure.
     *
     * @returns {string} JSON-serialized CSCAuthExportStructure
     */
    export() {
        return JSON.stringify({
            gAccessToken: this.gAccessToken,
            gIdToken: this.gIdToken,
            accessData: this.accessData,
        });
    }
}
exports.default = CSCAuth;
//# sourceMappingURL=auth.js.map