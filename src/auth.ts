import myzod from "myzod";
import { ValidationError } from "myzod";
import GetAccessToken from "./logic/auth/get_access_token";
import SetIdentity from "./logic/auth/set_ident";
import { Organization } from "./types/auth/req_auth_token";
import { AuthTokenResponse, AuthTokenResponseSchema } from "./types/auth/resp_auth_token";
import { AuthUserResponse } from "./types/auth/resp_auth_user";

export const CSCAuthExportStructure = myzod.object({
    organization: myzod.enum(Organization),
    gIdToken: myzod.string(),
    gAccessToken: myzod.string(),
});

export default class CSCAuth {
    private accessData: AuthTokenResponse | null = null;

    constructor(private organization: Organization, private gIdToken: string, private gAccessToken: string) {}

    async getAccessData(): Promise<AuthTokenResponse | null> {
        // get lazily
        if (!this.accessData) {
            const accessData = await GetAccessToken(this.organization, {
                id_token: this.gIdToken,
                access_token: this.gAccessToken
            });
            const resp = AuthTokenResponseSchema.try(accessData);

            if (resp instanceof ValidationError) {
                console.error("error: accessData is not a valid data.");
                console.log(accessData);
            } else {
                this.accessData = resp;
            }
        }

        return null;
    }

    async getAuthenticationHeader(): Promise<string | null> {
        const accessData = await this.getAccessData();
        if (accessData) return `Bearer ${accessData.access_token}`;
        return null;
    }

    async userInfo(): Promise<AuthUserResponse | null> {
        const accessData = await this.getAccessData();
        if (accessData) return accessData.user;
        return null;
    }

    async setIdentity(userClass: number, userNo: number): Promise<boolean> {
        return SetIdentity({ class: userClass, number: userNo }, this);
    }

    static import(data: string): CSCAuth | null {
        const deserialized = CSCAuthExportStructure.try(
            JSON.parse(data)
        );
        if (deserialized instanceof ValidationError) return null;
     
        const { organization, gAccessToken, gIdToken } = deserialized;
        return new CSCAuth(organization, gAccessToken, gIdToken);
    }

    export(): string {
        return JSON.stringify({
            organization: this.organization,
            gAccessToken: this.gAccessToken,
            gIdToken: this.gIdToken,
        });
    }
}
