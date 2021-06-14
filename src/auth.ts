import GetAccessToken from "./logic/get_access_token";

export default class CSCAuth {
    private accessToken: string | undefined;

    constructor(private gIdToken: string, private gAccessToken: string) {}

    get AccessToken() {
        // get lazily
        if (!this.accessToken) {
            this.accessToken = GetAccessToken(this.gIdToken, this.gAccessToken);
        }
        return this.accessToken;
    }
}
