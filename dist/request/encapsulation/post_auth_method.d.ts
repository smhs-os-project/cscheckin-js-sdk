import type { AnyType } from "myzod/libs/types";
import type CSCAuth from "../../auth";
export default function PostAuthMethod<T extends Record<string, unknown>, TT extends AnyType>(method: string, data: T, auth: CSCAuth, schema: TT): Promise<import("../../types/error/std_error").WouldFail<import("myzod/libs/types").Infer<TT>>>;
//# sourceMappingURL=post_auth_method.d.ts.map