import type CSCAuth from "../../auth";
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
) {
  const { data } = await clientInstance.jsonFetcher(
    `/course/share/${courseId}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.responseParser(data, ShareResponseSchema);
}
