"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SDKResponseException extends Error {
    constructor(message, extra) {
        super(message);
        this.extra = extra;
    }
}
exports.default = SDKResponseException;
//# sourceMappingURL=sdk_response_exception.js.map