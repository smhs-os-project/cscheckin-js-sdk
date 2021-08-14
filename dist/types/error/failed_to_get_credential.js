"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FailedToGetCredential extends Error {
    constructor() {
        super("Failed to get the credential header to request.");
        this.name = "FailedToGetCredential";
    }
}
exports.default = FailedToGetCredential;
//# sourceMappingURL=failed_to_get_credential.js.map