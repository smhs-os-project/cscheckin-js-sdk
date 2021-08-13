import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";
import type { CheckinResponse } from "../../types";
import { CheckinResponseSchema } from "../../types";

/**
 * Check in the specified course.
 */
export default async function Checkin(
  courseUUID: string,
  auth: CSCAuth
): Promise<CheckinResponse> {
  const { data } = await clientInstance.jsonFetcher(
    `/checkin/${courseUUID}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.responseParser(data, CheckinResponseSchema);
}
