import CSCAuth from "../../auth";
import PostAuthMethod from "../../request/encapsulation/post_auth_method";
import { ShareResponseSchema } from "../../types/course/resp_share";

/**
 * Share this course to Google Classroom.
 * 
 * @returns the link sent
 */
 export default async function GetShareLink(courseId: string, auth: CSCAuth) {
    return PostAuthMethod(`/course/share/${courseId}/post`, {}, auth, ShareResponseSchema);
}
