import type { AuthTokenResponse, AuthUserResponse } from "./types";
export declare const CSCAuthExportStructure: import("myzod/libs/types").ObjectType<{
    gIdToken: import("myzod/libs/types").StringType;
    gAccessToken: import("myzod/libs/types").StringType;
    accessData: import("myzod/libs/types").OptionalType<import("myzod/libs/types").ObjectType<{
        access_token: import("myzod/libs/types").StringType;
        token_type: import("myzod/libs/types").StringType;
        exp: import("myzod/libs/types").NumberType;
        user: import("myzod/libs/types").ObjectType<{
            id: import("myzod/libs/types").NumberType;
            google_user_id: import("myzod/libs/types").StringType;
            domain: import("myzod/libs/types").StringType;
            name: import("myzod/libs/types").StringType;
            email: import("myzod/libs/types").StringType;
            photo: import("myzod/libs/types").StringType;
            created_at: import("myzod/libs/types").StringType;
            updated_at: import("myzod/libs/types").StringType;
            student: import("myzod/libs/types").OptionalType<import("myzod/libs/types").ObjectType<{
                class: import("myzod/libs/types").StringType;
                number: import("myzod/libs/types").StringType;
            }>>;
        }>;
    }>>;
}>;
export default class CSCAuth {
    private gIdToken;
    private gAccessToken;
    private accessData;
    constructor(gIdToken: string, gAccessToken: string);
    getAccessData(): Promise<AuthTokenResponse | null>;
    getAuthenticationHeader(): Promise<string | null>;
    userInfo(): Promise<AuthUserResponse | null>;
    setIdentity(userClass: string, userNo: string): Promise<boolean>;
    revoke(): Promise<boolean>;
    static import(data: string): CSCAuth | null;
    export(): string;
}
//# sourceMappingURL=auth.d.ts.map