"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_api_working_1 = __importDefault(require("./is_api_working"));
test("API should be working", async () => {
    expect(await is_api_working_1.default()).toBe(true);
});
//# sourceMappingURL=is_api_working.test.js.map