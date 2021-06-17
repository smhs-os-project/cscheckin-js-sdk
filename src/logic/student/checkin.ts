import type CSCAuth from "../../auth";
import PostAuthMethod from "../../request/encapsulation/post_auth_method";
import { StudentCheckinResponseSchema } from "../../types/student/resp_checkin";

export default async function Checkin(courseUUID: string, auth: CSCAuth) {
    return PostAuthMethod(`/checkin/${courseUUID}`, {}, auth, StudentCheckinResponseSchema);
}