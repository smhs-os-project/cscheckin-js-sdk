import { AnyType } from "myzod/libs/types";
export default function PostMethod<T extends object, TT extends AnyType>(method: string, data: T, schema: TT): Promise<import("../../types/error/std_error").WouldFail<import("myzod/libs/types").Infer<TT>>>;
//# sourceMappingURL=post_method.d.ts.map