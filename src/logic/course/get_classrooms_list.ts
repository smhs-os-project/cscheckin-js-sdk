import type CSCAuth from "../../auth";
import type { GClassroomListResponse } from "../../types";
import { GClassroomListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the available classrooms.
 */
export default async function GetClassroomsList(
  auth: CSCAuth
): Promise<GClassroomListResponse> {
  const { data } = await clientInstance.jsonFetcher(
    "/course/google",
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, GClassroomListResponseSchema);
}
