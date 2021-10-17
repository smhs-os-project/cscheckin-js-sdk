"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=GetAccessToken,require("core-js/modules/es.array.concat"),require("core-js/modules/es.promise"),require("core-js/modules/es.object.to-string");var _types=require("../../types"),_client=_interopRequireWildcard(require("../../request/client"));function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}async function GetAccessToken(e){var f=(await _client.clientInstance.jsonFetcher("/auth/token/".concat("common"),_client.default.postJsonRequest(e))).data;return _client.default.responseParser(f,_types.AuthTokenResponseSchema)}
//# sourceMappingURL=get_access_token.js.map