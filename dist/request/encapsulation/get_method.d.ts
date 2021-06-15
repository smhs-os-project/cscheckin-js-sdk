import { AnyType } from "myzod/libs/types";
export default function GetMethod<T extends AnyType>(method: string, schema: T): Promise<import("../../types/error/std_error").WouldFail<import("myzod/libs/types").Infer<T>>>;
//# sourceMappingURL=get_method.d.ts.map