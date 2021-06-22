import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

const SENTRY_DSN =
  "https://aef2e0b49198404988c3bcfff43dc1d3@o877730.ingest.sentry.io/5828881";
/**
 * Set tracesSampleRate to 1.0 to capture 100%
 * of transactions for performance monitoring.
 * We recommend adjusting this value in production.
 */
const SENTRY_TRACES_SAMPLE_RATE = 0.8;

function initiate() {
  if (!globalThis.CSCHECKIN_SDK_INITIATED) {
    globalThis.CSCHECKIN_SDK_INITIATED = false;

    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
    });
  }
}

initiate();
