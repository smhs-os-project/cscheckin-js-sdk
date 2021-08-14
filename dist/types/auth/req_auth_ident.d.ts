import type { Infer } from "myzod";
/**
 * The schema of the `SetIdentity()` request.
 */
export declare const AuthIdentRequestSchema: import("myzod").ObjectType<{
    /**
     * The class of the credential holder.
     */
    class: import("myzod").StringType;
    /**
     * The no. of the credential holder.
     */
    number: import("myzod").StringType;
}>;
/**
 * The request of `SetIdentity()`
 */
export declare type AuthIdentRequest = Infer<typeof AuthIdentRequestSchema>;
//# sourceMappingURL=req_auth_ident.d.ts.map