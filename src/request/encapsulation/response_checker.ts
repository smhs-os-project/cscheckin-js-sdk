import { Infer, ValidationError } from "myzod";
import { AnyType } from "myzod/libs/types";
import { WouldFail, StdErrOrNull } from "../../types/error/std_error";
import * as Sentry from "@sentry/browser";
import "../../initiate";


export default async function ResponseChecker<T extends AnyType>
    (response: Response | null | undefined, schema: T): Promise<WouldFail<Infer<T>>> {
    const transactions = Sentry.startTransaction({
        name: "Checking the response type",
        op: "request.encapsulation.response_checker",
        description: "checking the type of the response",
    });

    function endTransaction<K>(action: () => K): K {
        const response = action();
        transactions.finish();
        return response;
    }

    if (response) {
        if (response.ok) {
            const responseJson = await response.json();
    
            const successResp = schema.try(responseJson);
            if (!(successResp instanceof ValidationError))
                return endTransaction(() => successResp);

            Sentry.captureException(successResp);
            Sentry.captureMessage(responseJson, Sentry.Severity.Info);

            return endTransaction(() => StdErrOrNull(responseJson));
        }

        Sentry.captureMessage(
            `response failed: ${response.status}\ndetails: ${await response.text()}`,
            Sentry.Severity.Error,
        );
    } else {
        Sentry.captureMessage("failed to get the response", Sentry.Severity.Error);
    }

    return endTransaction(() => null);
}
