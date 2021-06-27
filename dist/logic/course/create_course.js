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
const types_1 = require("../../types");
/**
 * Create a course.
 *
 * @example
 * ```ts
 * CreateCourse("12345", {
 *   start_timestamp: new Date(),
 *   late_time: "00:10:00",
 *   expire_time: "00:50:00",
 * });
 * ```
 */
async function CreateCourse(classroomId, request, auth) {
    const response = await client_1.clientInstance.jsonFetcher(`/course/${classroomId}`, client_1.default.postJsonRequest(request, await client_1.default.authRequest(auth)));
    return client_1.default.responseParser(response, types_1.CourseResponseSchema);
}
exports.default = CreateCourse;
//# sourceMappingURL=create_course.js.map