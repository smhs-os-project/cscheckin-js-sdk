"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthTokenResponseSchema=void 0;var _myzod=_interopRequireDefault(require("myzod")),_respAuthUser=require("./resp_auth_user");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var AuthTokenResponseSchema=_myzod.default.object({access_token:_myzod.default.string(),token_type:_myzod.default.string(),exp:_myzod.default.number(),user:_respAuthUser.AuthUserResponseSchema});exports.AuthTokenResponseSchema=AuthTokenResponseSchema
//# sourceMappingURL=resp_auth_token.js.map