import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Sync the members list of the specified course.
 */
export default async function SyncCourseMembers(
  courseId: number,
  auth: CSCAuth
) {
  const [, error, extra] = await clientInstance.jsonFetcher(
    `/course/sync/${courseId}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.isResponseOk(extra?.statusCode ?? -1, error);
}
