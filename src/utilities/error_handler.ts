import * as Sentry from "@sentry/browser";

export default function exceptionHandler(exception: Error | unknown) {
  if (exception instanceof Error) {
    Sentry.captureException(exception);
  } else
    try {
      Sentry.captureMessage(JSON.stringify(exception));
    } catch (e) {
      Sentry.captureMessage("An non-parsable exception just triggered.");
    }

  console.error(exception); // TODO: the better logging way
}
