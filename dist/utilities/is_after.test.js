"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_after_1 = require("./is_after");
describe("getAddedTime", () => {
    it("2001-1-1 12:00:00 + 03:15:17 = 2001-1-1 15:15:17", () => {
        expect(is_after_1.getAddedTime(new Date(Date.UTC(2001, 0, 1, 12, 0, 0)), "03:15:17")
            .toISOString()).toBe("2001-01-01T15:15:17.000Z");
    });
    it("2001-1-1 12:00:00 + 12:00:00 = 2001-1-2 00:00:00", () => {
        expect(is_after_1.getAddedTime(new Date(Date.UTC(2001, 0, 1, 12, 0, 0)), "12:00:00")
            .toISOString()).toBe("2001-01-02T00:00:00.000Z");
    });
});
//# sourceMappingURL=is_after.test.js.map