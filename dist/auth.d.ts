import type { AuthTokenResponse, AuthUserResponse } from "./types";
/**
 * The structure that `CSCAuth.export()` will return.
 */
export declare const CSCAuthExportStructure: import("myzod").ObjectType<{
    gIdToken: import("myzod").StringType;
    gAccessToken: import("myzod").StringType;
    accessData: import("myzod").OptionalType<import("myzod").ObjectType<{
        access_token: import("myzod").StringType;
        token_type: import("myzod").StringType;
        exp: import("myzod").NumberType;
        user: import("myzod").ObjectType<{
            id: import("myzod").NumberType;
            google_user_id: import("myzod").StringType;
            domain: import("myzod").StringType;
            name: import("myzod").StringType;
            email: import("myzod").StringType;
            photo: import("myzod").StringType;
            created_at: import("myzod").StringType; /**
             * Construct this manager.
             *
             * @param gIdToken The ID token received from Google.
             * @param gAccessToken The access token received from Google.
             */
            updated_at: import("myzod").StringType;
            student: import("myzod").OptionalType<import("myzod").ObjectType<{
                class: import("myzod").StringType;
                number: import("myzod").StringType;
            }>>;
        }>;
    }>>;
}>;
/**
 * The CSCheckin authentication manager.
 */
export default class CSCAuth {
    private gIdToken;
    private gAccessToken;
    private accessData;
    /**
     * Construct this manager.
     *
     * @param gIdToken The ID token received from Google.
     * @param gAccessToken The access token received from Google.
     */
    constructor(gIdToken: string, gAccessToken: string);
    /**
     * Get the credential including token and user information.
     */
    getAccessData(): Promise<AuthTokenResponse>;
    /**
     * Get the authentication header that can use for directly requesting API.
     */
    getAuthenticationHeader(): Promise<string>;
    /**
     * Get the user information.
     *
     * The response of this API won't be cached!
     */
    userInfo(): Promise<AuthUserResponse>;
    /**
     * Set the student class and no.
     *
     * @param userClass The student class.
     * @param userNo The student no.
     */
    setIdentity(userClass: string, userNo: string): Promise<boolean>;
    /**
     * Revoke this access token.
     */
    revoke(): Promise<boolean>;
    /**
     * Import the credential from JSON-serialized CSCAuthExportStructure.
     *
     * @param data the JSON-serialized data from `CSCAuth.export()`.
     */
    static import(data: string): CSCAuth;
    /**
     * Export the credential to JSON-serialized CSCAuthExportStructure.
     *
     * @returns {string} JSON-serialized CSCAuthExportStructure
     */
    export(): string;
}
//# sourceMappingURL=auth.d.ts.map