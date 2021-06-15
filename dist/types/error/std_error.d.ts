import { Infer } from "myzod";
export declare const StandardErrorResponseSchema: import("myzod/libs/types").ObjectType<{
    message: import("myzod/libs/types").StringType;
}>;
export declare type StandardErrorResponse = Infer<typeof StandardErrorResponseSchema>;
export declare type WouldFail<T> = T | StandardErrorResponse | null;
export declare const StdErrOrNull: (src: unknown) => {
    message: string;
} | null;
//# sourceMappingURL=std_error.d.ts.map