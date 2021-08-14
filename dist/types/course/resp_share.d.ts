import type { Infer } from "myzod";
/**
 * The schema of the response of `ShareToClassroom()` or `GetShareLink()`.
 */
export declare const ShareResponseSchema: import("myzod").ObjectType<{
    /**
     * The link for checking in this course.
     */
    link: import("myzod").StringType;
}>;
/**
 * The response of `ShareToClassroom()` or `GetShareLink()`.
 */
export declare type ShareResponse = Infer<typeof ShareResponseSchema>;
//# sourceMappingURL=resp_share.d.ts.map