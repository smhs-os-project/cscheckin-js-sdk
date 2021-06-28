import type CSCAuth from "../../auth";
/**
 * Share this course to Google Classroom.
 *
 * @returns the link sent
 */
export default function ShareToClassroom(courseId: string, auth: CSCAuth): Promise<{
    link: string;
}>;
//# sourceMappingURL=share_to_classroom.d.ts.map