import type CSCAuth from "../../auth";
import { GClassroomListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the available classrooms.
 */
export default async function GetClassroomsList(auth: CSCAuth) {
  const response = clientInstance.jsonFetcher(
    "/course/google",
    await Client.authRequest(auth)
  );
  return Client.responseParser(response, GClassroomListResponseSchema);
}
