import myzod, { Infer } from "myzod";
import { AuthIdentRequestSchema } from "./req_auth_ident";

export const AuthUserResponseSchema = myzod.object({
    id: myzod.number(),
    google_user_id: myzod.string(),
    domain: myzod.string(),
    name: myzod.string(),
    email: myzod.string(),
    photo: myzod.string(),
    created_at: myzod.string(),
    updated_at: myzod.string(),
    student: AuthIdentRequestSchema.optional(),
});

export type AuthUserResponse = Infer<typeof AuthUserResponseSchema>;
