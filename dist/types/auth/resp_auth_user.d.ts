import type { Infer } from "myzod";
/**
 * The schema of the response of `GetUserInfo()`.
 */
export declare const AuthUserResponseSchema: import("myzod").ObjectType<{
    /**
     * The unique user ID recorded in the backend database.
     */
    id: import("myzod").NumberType;
    /**
     * The user ID recorded in the Google database.
     */
    google_user_id: import("myzod").StringType;
    /**
     * The domain serving the user.
     *
     * @example `example.com`
     */
    domain: import("myzod").StringType;
    /**
     * The name of this user.
     *
     * @example `Jesse Lin`
     */
    name: import("myzod").StringType;
    /**
     * The email of this user.
     *
     * @example `example@example.com`
     */
    email: import("myzod").StringType;
    /**
     * The avatar URL of this user.
     */
    photo: import("myzod").StringType;
    /**
     * When did this user entry create.
     */
    created_at: import("myzod").StringType;
    /**
     * When did this user entry update.
     */
    updated_at: import("myzod").StringType;
    /**
     * The student information.
     *
     * @see AuthIdentRequestSchema
     */
    student: import("myzod").OptionalType<import("myzod").ObjectType<{
        class: import("myzod").StringType;
        number: import("myzod").StringType;
    }>>;
}>;
/**
 * The response of `GetUserInfo()`.
 */
export declare type AuthUserResponse = Infer<typeof AuthUserResponseSchema>;
//# sourceMappingURL=resp_auth_user.d.ts.map