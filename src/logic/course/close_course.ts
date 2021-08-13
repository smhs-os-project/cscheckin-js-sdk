import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Close a course.
 */
export default async function CloseCourse(
  courseId: number,
  auth: CSCAuth
): Promise<boolean> {
  const { statusCode } = await clientInstance.textFetcher(
    `/course/${courseId}`,
    await Client.authRequest(auth, {
      method: "DELETE",
    })
  );

  return Client.isResponseOk(statusCode ?? -1);
}
