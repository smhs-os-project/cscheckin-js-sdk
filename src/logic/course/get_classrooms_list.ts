import CSCAuth from "../../auth";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { GClassroomListResponseSchema } from "../../types/course/resp_gclassroom";

/**
 * Get the available classrooms.
 */
 export default async function GetClassroomsList(auth: CSCAuth) {
    return GetAuthMethod("/course/google", auth, GClassroomListResponseSchema);
}