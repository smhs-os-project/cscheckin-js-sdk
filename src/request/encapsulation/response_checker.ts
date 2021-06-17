import { Infer, ValidationError } from "myzod";
import { AnyType } from "myzod/libs/types";
import { WouldFail, StdErrOrNull } from "../../types/error/std_error";

export default async function ResponseChecker<T extends AnyType>
    (response: Response | null | undefined, schema: T): Promise<WouldFail<Infer<T>>> {
    if (response) {
        if (response.ok) {
            const responseJson = await response.json();
    
            const successResp = schema.try(responseJson);
            if (!(successResp instanceof ValidationError)) return successResp;
    
            console.error("received a malformed response.");
            console.error(responseJson);
            return StdErrOrNull(responseJson);
        }

        console.error(
            `response failed: ${response.status}\ndetails: ${await response.text()}`
        );
    } else {
        console.error("failed to get the response");
    }

    return null;
}
