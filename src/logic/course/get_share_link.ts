import type CSCAuth from "../../auth";
import type { ShareResponse } from "../../types";
import { ShareResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the share link.
 */
export default async function GetShareLink(
  courseId: number,
  auth: CSCAuth
): Promise<ShareResponse> {
  const { data } = await clientInstance.jsonFetcher(
    `/course/share/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, ShareResponseSchema);
}
