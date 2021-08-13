import type CSCAuth from "../../auth";
import type { ShareResponse } from "../../types";
import { ShareResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Share this course to Google Classroom.
 *
 * @returns the link sent
 */
export default async function ShareToClassroom(
  courseId: number,
  auth: CSCAuth
): Promise<ShareResponse> {
  const { data } = await clientInstance.jsonFetcher(
    `/course/share/${courseId}/post`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.responseParser(data, ShareResponseSchema);
}
