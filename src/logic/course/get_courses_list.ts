import type CSCAuth from "../../auth";
import { CourseListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the available courses.
 */
export default async function GetCoursesList(auth: CSCAuth) {
  const { data } = await clientInstance.jsonFetcher(
    "/course",
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, CourseListResponseSchema);
}
