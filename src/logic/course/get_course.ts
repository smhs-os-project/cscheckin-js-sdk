import type CSCAuth from "../../auth";
import { CourseResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

/**
 * Get the info of the specified UUID of course.
 */
export async function GetCourseByUUID(courseUUID: string) {
  const { data } = await clientInstance.jsonFetcher(
    `/course/uuid/${courseUUID}`,
    {}
  );

  return Client.responseParser(data, CourseResponseSchema);
}

/**
 * Get the info of the specified ID of course.
 */
export async function GetCourseByID(courseId: number, auth: CSCAuth) {
  const response = await clientInstance.jsonFetcher(
    `/course/uuid/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(response, CourseResponseSchema);
}
