import CSCAuth from "../../auth";
import { AnyType } from "myzod/libs/types";
export default function PostAuthMethod<T extends object, TT extends AnyType>(method: string, data: T, auth: CSCAuth, schema: TT): Promise<import("../../types/error/std_error").WouldFail<import("myzod/libs/types").Infer<TT>>>;
//# sourceMappingURL=post_auth_method.d.ts.map