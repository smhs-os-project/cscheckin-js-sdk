import type CSCAuth from "../../auth";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { ShareResponseSchema } from "../../types/course/resp_share";

/**
 * Get the share link.
 */
export default async function GetShareLink(courseId: string, auth: CSCAuth) {
  return GetAuthMethod(`/course/share/${courseId}`, auth, ShareResponseSchema);
}
