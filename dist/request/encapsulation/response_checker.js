"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myzod_1 = require("myzod");
const std_error_1 = require("../../types/error/std_error");
async function ResponseChecker(response, schema) {
    if (response) {
        if (response.ok) {
            const responseJson = await response.json();
            const successResp = schema.try(responseJson);
            if (!(successResp instanceof myzod_1.ValidationError))
                return successResp;
            return std_error_1.StdErrOrNull(responseJson);
        }
        console.error(`response failed: ${response.status}\ndetails: ${await response.text()}`);
    }
    else {
        console.error("failed to get the response");
    }
    return null;
}
exports.default = ResponseChecker;
//# sourceMappingURL=response_checker.js.map