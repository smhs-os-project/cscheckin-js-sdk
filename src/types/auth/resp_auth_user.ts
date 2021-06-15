import myzod, { Infer } from "myzod";

export const AuthUserResponseSchema = myzod.object({
    id: myzod.number(),
    google_user_id: myzod.string(),
    domain: myzod.string(),
    name: myzod.string(),
    email: myzod.string(),
    photo: myzod.string(),
    created_at: myzod.string(),
    updated_at: myzod.string(),
});

export type AuthUserResponse = Infer<typeof AuthUserResponseSchema>;
