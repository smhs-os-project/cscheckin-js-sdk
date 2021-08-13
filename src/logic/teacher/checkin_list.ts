import type CSCAuth from "../../auth";
import type { TeacherCheckinListResponse } from "../../types";
import { TeacherCheckinListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the students list as well as their checkin status.
 */
export default async function CheckinList(
  courseId: number,
  auth: CSCAuth
): Promise<TeacherCheckinListResponse> {
  const { data } = await clientInstance.jsonFetcher(
    `/checkin/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, TeacherCheckinListResponseSchema);
}
