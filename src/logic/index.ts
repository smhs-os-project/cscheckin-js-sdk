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
import CheckinList from "./teacher/checkin_list";
import Checkin from "./student/checkin";
import SyncCourseMembers from "./course/sync_course_members";
import GetClientId from "./auth/get_client_id";
import CloseCourse from "./course/close_course";
import CreateCourse from "./course/create_course";
import GetClassroomsList from "./course/get_classrooms_list";
import { GetCourseByID, GetCourseByUUID } from "./course/get_course";
import GetCoursesList from "./course/get_courses_list";
import GetShareLink from "./course/get_share_link";
import ShareToClassroom from "./course/share_to_classroom";

export {
  GetClientId,
  CloseCourse,
  CreateCourse,
  GetClassroomsList,
  GetCourseByUUID,
  GetCourseByID,
  GetCoursesList,
  GetShareLink,
  ShareToClassroom,
  SyncCourseMembers,
  Checkin,
  CheckinList,
};
