import myzod, { Infer } from "myzod";
import { AuthUserResponseSchema } from "./resp_auth_user";

export const AuthTokenResponseSchema = myzod.object({
    access_token: myzod.string(),
    token_type: myzod.string(),
    /**
     * `exp` is an unix timestamp.
     */
    exp: myzod.number(),
    user: AuthUserResponseSchema,
});

export type AuthTokenResponse = Infer<typeof AuthTokenResponseSchema>;
