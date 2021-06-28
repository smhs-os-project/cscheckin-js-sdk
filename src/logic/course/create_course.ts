import type CSCAuth from "../../auth";
import type { CreateCourseRequest } from "../../types";
import Client, { clientInstance } from "../../request/client";
import { CourseResponseSchema } from "../../types";

/**
 * Create a course.
 *
 * @example
 * ```ts
 * CreateCourse("12345", {
 *   start_timestamp: new Date(),
 *   late_time: "00:10:00",
 *   expire_time: "00:50:00",
 * });
 * ```
 */
export default async function CreateCourse(
  classroomId: string,
  request: CreateCourseRequest,
  auth: CSCAuth
) {
  const { data } = await clientInstance.jsonFetcher(
    `/course/${classroomId}`,
    Client.postJsonRequest(request, await Client.authRequest(auth))
  );

  return Client.responseParser(data, CourseResponseSchema);
}
