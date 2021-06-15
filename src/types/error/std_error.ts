import myzod, {Infer} from "myzod";

export const StandardErrorResponseSchema = myzod.object({
    message: myzod.string(),
});

export type StandardErrorResponse = Infer<typeof StandardErrorResponseSchema>;
export type WouldFail<T> = T | StandardErrorResponse | null;
