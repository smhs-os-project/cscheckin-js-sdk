import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

export default async function Checkin(courseUUID: string, auth: CSCAuth) {
  const { statusCode } = await clientInstance.jsonFetcher(
    `/checkin/${courseUUID}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.isResponseOk(statusCode ?? -1);
}
