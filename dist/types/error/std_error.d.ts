import type { Infer } from "myzod";
export declare const StandardErrorResponseSchema: import("myzod").ObjectType<{
    /**
     * User Error
     */
    error: import("myzod").OptionalType<import("myzod").StringType>;
    /**
     * Server Error
     */
    message: import("myzod").OptionalType<import("myzod").StringType>;
}>;
export declare type StandardErrorResponse = Infer<typeof StandardErrorResponseSchema>;
export declare type WouldFail<T> = T | StandardErrorResponse | null;
export declare const StdErrOrNull: (src: unknown) => {
    error?: string | undefined;
    message?: string | undefined;
} | null;
//# sourceMappingURL=std_error.d.ts.map