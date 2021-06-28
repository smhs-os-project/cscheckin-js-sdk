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
exports.GetCourseByID = exports.GetCourseByUUID = void 0;
const types_1 = require("../../types");
const client_1 = __importStar(require("../../request/client"));
/**
 * Get the info of the specified UUID of course.
 */
async function GetCourseByUUID(courseUUID) {
    const { data } = await client_1.clientInstance.jsonFetcher(`/course/uuid/${courseUUID}`, {});
    return client_1.default.responseParser(data, types_1.CourseResponseSchema);
}
exports.GetCourseByUUID = GetCourseByUUID;
/**
 * Get the info of the specified ID of course.
 */
async function GetCourseByID(courseId, auth) {
    const response = await client_1.clientInstance.jsonFetcher(`/course/uuid/${courseId}`, await client_1.default.authRequest(auth));
    return client_1.default.responseParser(response, types_1.CourseResponseSchema);
}
exports.GetCourseByID = GetCourseByID;
//# sourceMappingURL=get_course.js.map