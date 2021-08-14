"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidTimeOffset extends Error {
    constructor(offset) {
        super(`The time offset is in the invalid format: ${offset}`);
        this.offset = offset;
        this.name = "InvalidTimeOffset";
    }
}
exports.default = InvalidTimeOffset;
//# sourceMappingURL=invalid_time_offset.js.map