import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Sync the members list of the specified course.
 */
export default async function SyncCourseMembers(
  courseId: number,
  auth: CSCAuth
): Promise<boolean> {
  const { statusCode } = await clientInstance.textFetcher(
    `/course/sync/${courseId}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.isResponseOk(statusCode ?? -1);
}
