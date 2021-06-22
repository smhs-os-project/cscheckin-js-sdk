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
const myzod_1 = require("myzod");
const Sentry = __importStar(require("@sentry/browser"));
const std_error_1 = require("../../types/error/std_error");
require("../../initiate");
async function ResponseChecker(response, schema) {
    const transactions = Sentry.startTransaction({
        name: "Checking the response type",
        op: "request.encapsulation.response_checker",
        description: "checking the type of the response",
    });
    function endTransaction(action) {
        const returnValue = action();
        transactions.finish();
        return returnValue;
    }
    if (response) {
        if (response.ok) {
            const responseJson = await response.json();
            const successResp = schema.try(responseJson);
            if (!(successResp instanceof myzod_1.ValidationError))
                return endTransaction(() => successResp);
            Sentry.captureException(successResp);
            Sentry.captureMessage(responseJson, Sentry.Severity.Info);
            return endTransaction(() => std_error_1.StdErrOrNull(responseJson));
        }
        Sentry.captureMessage(`response failed: ${response.status}\ndetails: ${await response.text()}`, Sentry.Severity.Error);
    }
    else {
        Sentry.captureMessage("failed to get the response", Sentry.Severity.Error);
    }
    return endTransaction(() => null);
}
exports.default = ResponseChecker;
//# sourceMappingURL=response_checker.js.map