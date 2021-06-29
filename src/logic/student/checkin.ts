import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";
import { CheckinResponseSchema } from "../../types/student/resp_checkin";

export default async function Checkin(courseUUID: string, auth: CSCAuth) {
  const { data } = await clientInstance.jsonFetcher(
    `/checkin/${courseUUID}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.responseParser(data, CheckinResponseSchema);
}
