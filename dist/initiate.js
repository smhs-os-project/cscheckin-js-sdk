"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = __importStar(require("@sentry/browser"));
const tracing_1 = require("@sentry/tracing");
const SENTRY_DSN = "https://8951f0b3e3b5442d815dd82410322e1f@o877730.ingest.sentry.io/5828704";
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
            integrations: [new tracing_1.Integrations.BrowserTracing()],
            tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
        });
    }
}
initiate();
//# sourceMappingURL=initiate.js.map