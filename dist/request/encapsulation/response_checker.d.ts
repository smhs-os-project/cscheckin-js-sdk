import { Infer } from "myzod";
import { AnyType } from "myzod/libs/types";
import { WouldFail } from "../../types/error/std_error";
export default function ResponseChecker<T extends AnyType>(response: Response | null | undefined, schema: T): Promise<WouldFail<Infer<T>>>;
//# sourceMappingURL=response_checker.d.ts.map