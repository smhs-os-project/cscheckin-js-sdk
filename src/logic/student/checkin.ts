import type CSCAuth from "../../auth";
import Client, { clientInstance } from "../../request/client";

export default async function Checkin(courseUUID: string, auth: CSCAuth) {
  const [, error, extra] = await clientInstance.jsonFetcher(
    `/checkin/${courseUUID}`,
    Client.postJsonRequest({}, await Client.authRequest(auth))
  );

  return Client.isResponseOk(extra?.statusCode ?? -1, error);
}
