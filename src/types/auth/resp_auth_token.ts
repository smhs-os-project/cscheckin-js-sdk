import myzod, { Infer } from "myzod";

export const AuthTokenUserResponseSchema = myzod.object({
    id: myzod.number(),
    google_user_id: myzod.string(),
    domain: myzod.string(),
    name: myzod.string(),
    email: myzod.string(),
    photo: myzod.string(),
    created_at: myzod.string(),
    updated_at: myzod.string(),
});

export const AuthTokenResponseSchema = myzod.object({
    accessToken: myzod.string(),
    tokenType: myzod.string(),
    /**
     * exp: timestamp
     */
    exp: myzod.number(),
    user: AuthTokenUserResponseSchema,
});

export type AuthTokenUserResponse = Infer<typeof AuthTokenUserResponseSchema>;
export type AuthTokenResponse = Infer<typeof AuthTokenResponseSchema>;
