"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SyncCourseMembers,require("core-js/modules/es.array.concat"),require("core-js/modules/es.promise"),require("core-js/modules/es.object.to-string");var _client=_interopRequireWildcard(require("../../request/client"));function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}async function SyncCourseMembers(e,f){var g=(await _client.clientInstance.textFetcher("/course/sync/".concat(e),_client.default.postJsonRequest({},await _client.default.authRequest(f)))).statusCode;return _client.default.isResponseOk(null!=g?g:-1)}
//# sourceMappingURL=sync_course_members.js.map