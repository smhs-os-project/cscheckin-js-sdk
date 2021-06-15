import { ValidationError } from "myzod";
import GetAccessToken from "./logic/auth/get_access_token";
import { AuthTokenResponse, AuthTokenResponseSchema } from "./types/auth/resp_auth_token";

export default class CSCAuth {
    private accessData: AuthTokenResponse | null = null;

    constructor(private gIdToken: string, private gAccessToken: string) {}

    async getAccessData(): Promise<AuthTokenResponse | null> {
        // get lazily
        if (!this.accessData) {
            const accessData = await GetAccessToken({
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
}
