import type { AnyType } from "myzod/libs/types";
import type CSCAuth from "../../auth";
export default function GetAuthMethod<T extends AnyType>(method: string, auth: CSCAuth, schema: T): Promise<import("../../types/error/std_error").WouldFail<import("myzod/libs/types").Infer<T>>>;
//# sourceMappingURL=get_auth_method.d.ts.map