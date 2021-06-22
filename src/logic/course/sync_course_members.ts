import type CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import PostJsonAuth from "../../request/json/post_auth";

/**
 * Sync the members list of the specified course.
 */
export default async function SyncCourseMembers(
  courseId: number,
  auth: CSCAuth
) {
  const response = await PostJsonAuth(
    BuildUri(`/course/sync/${courseId}`),
    {},
    auth
  );

  return response?.ok ?? false;
}
