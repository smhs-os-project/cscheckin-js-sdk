import { Infer } from "myzod";
export declare enum Organization {
    SMHS = "smhs",
    FSSH = "fssh"
}
export declare const AuthTokenRequestSchema: import("myzod/libs/types").ObjectType<{
    id_token: import("myzod/libs/types").StringType;
    access_token: import("myzod/libs/types").StringType;
}>;
export declare type AuthTokenRequest = Infer<typeof AuthTokenRequestSchema>;
//# sourceMappingURL=req_auth_token.d.ts.map