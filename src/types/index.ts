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

import {
  AuthIdentRequestSchema,
  AuthIdentRequest,
} from "./auth/req_auth_ident";
import {
  AuthTokenRequestSchema,
  AuthTokenRequest,
} from "./auth/req_auth_token";
import {
  AuthTokenResponseSchema,
  AuthTokenResponse,
} from "./auth/resp_auth_token";
import {
  AuthUserResponseSchema,
  AuthUserResponse,
} from "./auth/resp_auth_user";
import { OrgInfoResponse, OrgInfoResponseSchema } from "./auth/resp_client_id";
import { CheckinState } from "./common/checkin_state";
import {
  CreateCourseRequestSchema,
  CreateCourseRequest,
} from "./course/req_course";
import {
  CourseResponseSchema,
  CourseListResponseSchema,
  CourseResponse,
  CourseListResponse,
} from "./course/resp_course";
import {
  GClassroomResponseSchema,
  GClassroomListResponseSchema,
  GClassroomResponse,
  GClassroomListResponse,
} from "./course/resp_gclassroom";
import { ShareResponseSchema, ShareResponse } from "./course/resp_share";
import {
  StandardErrorResponseSchema,
  StandardErrorResponse,
} from "./error/std_error";
import { CheckinResponse, CheckinResponseSchema } from "./student/resp_checkin";
import {
  StudentCheckinInfoResponseSchema,
  TeacherCheckinListResponseSchema,
  StudentCheckinInfoResponse,
  TeacherCheckinListResponse,
} from "./teacher/resp_checkin_list";

export {
  AuthIdentRequestSchema,
  AuthIdentRequest,
  AuthTokenRequestSchema,
  AuthTokenRequest,
  AuthTokenResponseSchema,
  AuthTokenResponse,
  AuthUserResponseSchema,
  AuthUserResponse,
  CheckinState,
  CreateCourseRequestSchema,
  CreateCourseRequest,
  CourseResponseSchema,
  CourseListResponseSchema,
  CourseResponse,
  CourseListResponse,
  GClassroomResponseSchema,
  GClassroomListResponseSchema,
  GClassroomResponse,
  GClassroomListResponse,
  ShareResponseSchema,
  ShareResponse,
  StandardErrorResponseSchema,
  StandardErrorResponse,
  StudentCheckinInfoResponseSchema,
  TeacherCheckinListResponseSchema,
  StudentCheckinInfoResponse,
  TeacherCheckinListResponse,
  CheckinResponseSchema,
  CheckinResponse,
  OrgInfoResponseSchema,
  OrgInfoResponse,
};
