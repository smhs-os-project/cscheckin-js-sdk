import myzod, { Infer } from "myzod";

export const AuthIdentRequestSchema = myzod.object({
    class: myzod.number(),
    number: myzod.number(),
});

export type AuthIdentRequest = Infer<typeof AuthIdentRequestSchema>;
