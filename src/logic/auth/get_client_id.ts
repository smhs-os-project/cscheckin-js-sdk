import Client, { clientInstance } from "../../request/client";
import type { OrgInfoResponse } from "../../types";
import { OrgInfoResponseSchema } from "../../types";

/**
 * Get the Google OAuth2 client ID for the Google login component
 * from backend.
 */
export default async function GetClientId(): Promise<OrgInfoResponse> {
  const organization = "common"; // TODO: should be fixed when the backend dropped the organization support.
  const { data } = await clientInstance.jsonFetcher(
    `/info/${organization}`,
    {}
  );

  return Client.responseParser(data, OrgInfoResponseSchema);
}
