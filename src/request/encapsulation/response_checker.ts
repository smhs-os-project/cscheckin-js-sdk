import type { Infer } from "myzod";
import { ValidationError } from "myzod";
import type { AnyType } from "myzod/libs/types";
import * as Sentry from "@sentry/browser";
import type { WouldFail } from "../../types/error/std_error";
import { StdErrOrNull } from "../../types/error/std_error";

export default async function ResponseChecker<T extends AnyType>(
  response: Response | null | undefined,
  schema: T
): Promise<WouldFail<Infer<T>>> {
  const transactions = Sentry.startTransaction({
    name: "Checking the response type",
    op: "request.encapsulation.response_checker",
    description: "checking the type of the response",
  });

  function endTransaction<K>(action: () => K): K {
    const returnValue = action();
    transactions.finish();
    return returnValue;
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
      Sentry.Severity.Error
    );
  } else {
    Sentry.captureMessage("failed to get the response", Sentry.Severity.Error);
  }

  return endTransaction(() => null);
}
