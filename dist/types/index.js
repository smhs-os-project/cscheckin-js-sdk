"use strict";
/**
 * The types as well as schemas of this SDK.
 *
 * TypeDoc can't handle the JSDoc in the object well. We recommended you
 * read the documentation of fields in the source code.
 *
 * We use `myzod` for validation and type generation.
 *
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgInfoResponseSchema = exports.CheckinResponseSchema = exports.TeacherCheckinListResponseSchema = exports.StudentCheckinInfoResponseSchema = exports.StandardErrorResponseSchema = exports.ShareResponseSchema = exports.GClassroomListResponseSchema = exports.GClassroomResponseSchema = exports.CourseListResponseSchema = exports.CourseResponseSchema = exports.CreateCourseRequestSchema = exports.CheckinState = exports.AuthUserResponseSchema = exports.AuthTokenResponseSchema = exports.AuthTokenRequestSchema = exports.AuthIdentRequestSchema = void 0;
const req_auth_ident_1 = require("./auth/req_auth_ident");
Object.defineProperty(exports, "AuthIdentRequestSchema", { enumerable: true, get: function () { return req_auth_ident_1.AuthIdentRequestSchema; } });
const req_auth_token_1 = require("./auth/req_auth_token");
Object.defineProperty(exports, "AuthTokenRequestSchema", { enumerable: true, get: function () { return req_auth_token_1.AuthTokenRequestSchema; } });
const resp_auth_token_1 = require("./auth/resp_auth_token");
Object.defineProperty(exports, "AuthTokenResponseSchema", { enumerable: true, get: function () { return resp_auth_token_1.AuthTokenResponseSchema; } });
const resp_auth_user_1 = require("./auth/resp_auth_user");
Object.defineProperty(exports, "AuthUserResponseSchema", { enumerable: true, get: function () { return resp_auth_user_1.AuthUserResponseSchema; } });
const resp_client_id_1 = require("./auth/resp_client_id");
Object.defineProperty(exports, "OrgInfoResponseSchema", { enumerable: true, get: function () { return resp_client_id_1.OrgInfoResponseSchema; } });
const checkin_state_1 = require("./common/checkin_state");
Object.defineProperty(exports, "CheckinState", { enumerable: true, get: function () { return checkin_state_1.CheckinState; } });
const req_course_1 = require("./course/req_course");
Object.defineProperty(exports, "CreateCourseRequestSchema", { enumerable: true, get: function () { return req_course_1.CreateCourseRequestSchema; } });
const resp_course_1 = require("./course/resp_course");
Object.defineProperty(exports, "CourseResponseSchema", { enumerable: true, get: function () { return resp_course_1.CourseResponseSchema; } });
Object.defineProperty(exports, "CourseListResponseSchema", { enumerable: true, get: function () { return resp_course_1.CourseListResponseSchema; } });
const resp_gclassroom_1 = require("./course/resp_gclassroom");
Object.defineProperty(exports, "GClassroomResponseSchema", { enumerable: true, get: function () { return resp_gclassroom_1.GClassroomResponseSchema; } });
Object.defineProperty(exports, "GClassroomListResponseSchema", { enumerable: true, get: function () { return resp_gclassroom_1.GClassroomListResponseSchema; } });
const resp_share_1 = require("./course/resp_share");
Object.defineProperty(exports, "ShareResponseSchema", { enumerable: true, get: function () { return resp_share_1.ShareResponseSchema; } });
const std_error_1 = require("./error/std_error");
Object.defineProperty(exports, "StandardErrorResponseSchema", { enumerable: true, get: function () { return std_error_1.StandardErrorResponseSchema; } });
const resp_checkin_1 = require("./student/resp_checkin");
Object.defineProperty(exports, "CheckinResponseSchema", { enumerable: true, get: function () { return resp_checkin_1.CheckinResponseSchema; } });
const resp_checkin_list_1 = require("./teacher/resp_checkin_list");
Object.defineProperty(exports, "StudentCheckinInfoResponseSchema", { enumerable: true, get: function () { return resp_checkin_list_1.StudentCheckinInfoResponseSchema; } });
Object.defineProperty(exports, "TeacherCheckinListResponseSchema", { enumerable: true, get: function () { return resp_checkin_list_1.TeacherCheckinListResponseSchema; } });
//# sourceMappingURL=index.js.map