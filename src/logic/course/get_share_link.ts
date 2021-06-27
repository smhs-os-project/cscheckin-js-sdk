import type CSCAuth from "../../auth";
import { ShareResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the share link.
 */
export default async function GetShareLink(courseId: string, auth: CSCAuth) {
  const response = clientInstance.jsonFetcher(
    `/course/share/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(response, ShareResponseSchema);
}
