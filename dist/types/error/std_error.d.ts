import type { Infer } from "myzod";
export declare const StandardErrorResponseSchema: import("myzod/libs/types").ObjectType<{
    /**
     * User Error
     */
    error: import("myzod/libs/types").OptionalType<import("myzod/libs/types").StringType>;
    /**
     * Server Error
     */
    message: import("myzod/libs/types").OptionalType<import("myzod/libs/types").StringType>;
}>;
export declare type StandardErrorResponse = Infer<typeof StandardErrorResponseSchema>;
export declare type WouldFail<T> = T | StandardErrorResponse | null;
export declare const StdErrOrNull: (src: unknown) => {
    error?: string | undefined;
    message?: string | undefined;
} | null;
//# sourceMappingURL=std_error.d.ts.map