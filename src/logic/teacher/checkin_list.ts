import type CSCAuth from "../../auth";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { TeacherCheckinListResponseSchema } from "../../types/teacher/resp_checkin_list";

export default async function CheckinList(courseId: string, auth: CSCAuth) {
  return GetAuthMethod(
    `/checkin/${courseId}`,
    auth,
    TeacherCheckinListResponseSchema
  );
}
