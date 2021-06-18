import myzod, { Infer } from "myzod";

export const AuthIdentRequestSchema = myzod.object({
    class: myzod.string(),
    number: myzod.string(),
});

export type AuthIdentRequest = Infer<typeof AuthIdentRequestSchema>;
