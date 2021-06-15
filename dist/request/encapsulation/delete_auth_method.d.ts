import CSCAuth from "../../auth";
import { AnyType } from "myzod/libs/types";
export default function DeleteAuthMethod<T extends AnyType>(method: string, auth: CSCAuth, schema: T): Promise<import("../../types/error/std_error").WouldFail<import("myzod/libs/types").Infer<T>>>;
//# sourceMappingURL=delete_auth_method.d.ts.map