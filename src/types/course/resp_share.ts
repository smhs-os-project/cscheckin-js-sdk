import myzod, { Infer } from "myzod";

export const ShareResponseSchema = myzod.object({
    link: myzod.string(),
});

export type ShareResponse = Infer<typeof ShareResponseSchema>;
