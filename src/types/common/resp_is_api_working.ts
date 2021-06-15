import myzod, { Infer } from "myzod";

export const IsApiWorkingResponseSchema = myzod.object({
    success: myzod.boolean(),
});

export type IsApiWorkingResponse = Infer<typeof IsApiWorkingResponseSchema>;
