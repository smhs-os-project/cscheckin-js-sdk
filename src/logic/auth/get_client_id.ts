import Client, { clientInstance } from "../../request/client";
import { OrgInfoResponseSchema } from "../../types";

/**
 * Get the Google OAuth2 client ID in the backend.
 */
export default async function GetClientId() {
  const organization = "common"; // TODO: should be fixed when the backend dropped the organization support.
  const [response] = await clientInstance.jsonFetcher(
    `/info/${organization}`,
    {}
  );

  return Client.responseParser(response, OrgInfoResponseSchema);
}
