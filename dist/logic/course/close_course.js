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
const client_1 = __importStar(require("../../request/client"));
/**
 * Close a course.
 */
async function CloseCourse(courseId, auth) {
    var _a;
    const [, error, extra] = await client_1.clientInstance.textFetcher(`/course/${courseId}`, await client_1.default.authRequest(auth, {
        method: "DELETE",
    }));
    return client_1.default.isResponseOk((_a = extra === null || extra === void 0 ? void 0 : extra.statusCode) !== null && _a !== void 0 ? _a : -1, error);
}
exports.default = CloseCourse;
//# sourceMappingURL=close_course.js.map