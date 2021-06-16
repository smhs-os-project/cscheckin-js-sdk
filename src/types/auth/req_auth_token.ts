import myzod, { Infer } from "myzod";

export enum Organization {
    SMHS = "smhs",
    FSSH = "fssh",
    COMMON = "common"
}

export const AuthTokenRequestSchema = myzod.object({
    id_token: myzod.string(),
    access_token: myzod.string(),
});

export type AuthTokenRequest = Infer<typeof AuthTokenRequestSchema>;
