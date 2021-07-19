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
const myzod_1 = __importStar(require("myzod"));
const Sentry = __importStar(require("@sentry/browser"));
const get_access_token_1 = __importDefault(require("./logic/auth/get_access_token"));
const get_user_info_1 = __importDefault(require("./logic/auth/get_user_info"));
const revoke_access_token_1 = __importDefault(require("./logic/auth/revoke_access_token"));
const set_ident_1 = __importDefault(require("./logic/auth/set_ident"));
const types_1 = require("./types");
exports.CSCAuthExportStructure = myzod_1.default.object({
    gIdToken: myzod_1.default.string(),
    gAccessToken: myzod_1.default.string(),
    accessData: types_1.AuthTokenResponseSchema.optional(),
});
class CSCAuth {
    constructor(gIdToken, gAccessToken) {
        this.gIdToken = gIdToken;
        this.gAccessToken = gAccessToken;
        this.accessData = null;
    }
    getAccessData() {
        return __awaiter(this, void 0, void 0, function* () {
            // get lazily
            if (!this.accessData) {
                const accessData = yield get_access_token_1.default({
                    id_token: this.gIdToken,
                    access_token: this.gAccessToken,
                });
                const resp = types_1.AuthTokenResponseSchema.try(accessData);
                if (resp instanceof myzod_1.ValidationError) {
                    Sentry.captureMessage(`error: accessData is not a valid data: ${JSON.stringify(accessData)}`);
                    Sentry.captureException(resp);
                }
                else {
                    this.accessData = resp;
                }
            }
            return this.accessData;
        });
    }
    getAuthenticationHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            const accessData = yield this.getAccessData();
            if (accessData)
                return `Bearer ${accessData.access_token}`;
            return null;
        });
    }
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const accessData = yield this.getAccessData();
            if (accessData) {
                const rawInfo = yield get_user_info_1.default(this);
                const info = types_1.AuthUserResponseSchema.try(rawInfo);
                if (info instanceof myzod_1.ValidationError) {
                    Sentry.captureMessage(`failed to get the user info: ${rawInfo}`);
                    Sentry.captureException(info);
                    return null;
                }
                return info;
            }
            return null;
        });
    }
    setIdentity(userClass, userNo) {
        return __awaiter(this, void 0, void 0, function* () {
            return set_ident_1.default({ class: userClass, number: userNo }, this);
        });
    }
    revoke() {
        return __awaiter(this, void 0, void 0, function* () {
            return revoke_access_token_1.default(this);
        });
    }
    static import(data) {
        const deserialized = exports.CSCAuthExportStructure.try(JSON.parse(data));
        if (deserialized instanceof myzod_1.ValidationError)
            return null;
        const { gAccessToken, gIdToken, accessData } = deserialized;
        const auth = new CSCAuth(gAccessToken, gIdToken);
        auth.accessData = accessData || null;
        return auth;
    }
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