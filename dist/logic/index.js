"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinList = exports.Checkin = exports.SyncCourseMembers = exports.ShareToClassroom = exports.GetShareLink = exports.GetCoursesList = exports.GetCourseByID = exports.GetCourseByUUID = exports.GetClassroomsList = exports.CreateCourse = exports.CloseCourse = exports.GetClientId = void 0;
/**
 * The operation methods (logic) of this SDK.
 *
 * You can operate the Backend API with the methods below this category.
 * You would need to obtain a CSCAuth object for the authenticated request.
 *
 * Some types marked as `any[]` is mis-determined.
 * You can see the source code for the exact type.
 *
 * @module
 */
const checkin_list_1 = __importDefault(require("./teacher/checkin_list"));
exports.CheckinList = checkin_list_1.default;
const checkin_1 = __importDefault(require("./student/checkin"));
exports.Checkin = checkin_1.default;
const sync_course_members_1 = __importDefault(require("./course/sync_course_members"));
exports.SyncCourseMembers = sync_course_members_1.default;
const get_client_id_1 = __importDefault(require("./auth/get_client_id"));
exports.GetClientId = get_client_id_1.default;
const close_course_1 = __importDefault(require("./course/close_course"));
exports.CloseCourse = close_course_1.default;
const create_course_1 = __importDefault(require("./course/create_course"));
exports.CreateCourse = create_course_1.default;
const get_classrooms_list_1 = __importDefault(require("./course/get_classrooms_list"));
exports.GetClassroomsList = get_classrooms_list_1.default;
const get_course_1 = require("./course/get_course");
Object.defineProperty(exports, "GetCourseByID", { enumerable: true, get: function () { return get_course_1.GetCourseByID; } });
Object.defineProperty(exports, "GetCourseByUUID", { enumerable: true, get: function () { return get_course_1.GetCourseByUUID; } });
const get_courses_list_1 = __importDefault(require("./course/get_courses_list"));
exports.GetCoursesList = get_courses_list_1.default;
const get_share_link_1 = __importDefault(require("./course/get_share_link"));
exports.GetShareLink = get_share_link_1.default;
const share_to_classroom_1 = __importDefault(require("./course/share_to_classroom"));
exports.ShareToClassroom = share_to_classroom_1.default;
//# sourceMappingURL=index.js.map