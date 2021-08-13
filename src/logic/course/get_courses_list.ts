import type CSCAuth from "../../auth";
import type { CourseListResponse } from "../../types";
import { CourseListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the available courses.
 */
export default async function GetCoursesList(
  auth: CSCAuth
): Promise<CourseListResponse> {
  const { data } = await clientInstance.jsonFetcher(
    "/course",
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, CourseListResponseSchema);
}
