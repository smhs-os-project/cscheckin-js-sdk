import myzod, {Infer, ValidationError} from "myzod";

export const StandardErrorResponseSchema = myzod.object({
    /**
     * User Error
     */
    error: myzod.string().optional(),
    /**
     * Server Error
     */
    message: myzod.string().optional(),
});

export type StandardErrorResponse = Infer<typeof StandardErrorResponseSchema>;
export type WouldFail<T> = T | StandardErrorResponse | null;

export const StdErrOrNull = (src: unknown) => {
    const checked = StandardErrorResponseSchema.try(src);

    if (checked instanceof ValidationError) return null;
    return checked;
}
