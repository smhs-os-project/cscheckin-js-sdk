import type CSCAuth from "../../auth";
import { ShareResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the share link.
 */
export default async function GetShareLink(courseId: number, auth: CSCAuth) {
  const { data } = await clientInstance.jsonFetcher(
    `/course/share/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, ShareResponseSchema);
}
