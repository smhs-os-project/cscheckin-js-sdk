import type { Infer } from "myzod";
import myzod from "myzod";

export const ShareResponseSchema = myzod.object({
  link: myzod.string(),
});

export type ShareResponse = Infer<typeof ShareResponseSchema>;
