import type { Infer } from "myzod";
import type { AnyType } from "myzod/libs/types";
import type { WouldFail } from "../../types/error/std_error";
export default function ResponseChecker<T extends AnyType>(response: Response | null | undefined, schema: T): Promise<WouldFail<Infer<T>>>;
//# sourceMappingURL=response_checker.d.ts.map