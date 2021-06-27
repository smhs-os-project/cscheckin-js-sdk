import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

/**
 * Close a course.
 */
export default async function CloseCourse(courseId: number, auth: CSCAuth) {
  const [, error, extra] = await clientInstance.textFetcher(
    `/course/${courseId}`,
    await Client.authRequest(auth, {
      method: "DELETE",
    })
  );

  return Client.isResponseOk(extra?.statusCode ?? -1, error);
}
