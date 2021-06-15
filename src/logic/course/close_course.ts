import CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import DeleteJsonAuth from "../../request/json/delete_auth";

/**
 * Close a course.
 */
export default async function CloseCourse(courseId: number, auth: CSCAuth) {
    const response = await DeleteJsonAuth(BuildUri(`/course/${courseId}`), auth);

    return response?.ok ?? false;
}
