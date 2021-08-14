"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The error thrown by API.
 */
class APIError extends Error {
    constructor(message) {
        super(message);
        this.name = "APIError";
    }
}
exports.default = APIError;
//# sourceMappingURL=api_error.js.map