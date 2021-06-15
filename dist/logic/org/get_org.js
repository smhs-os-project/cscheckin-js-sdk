"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_method_1 = __importDefault(require("../../request/encapsulation/get_method"));
const resp_org_info_1 = require("../../types/org_info/resp_org_info");
/**
 * Get the specified organization as well as
 * its Chinese name and client ID.
 *
 * @param organization The organization to get its
 * Chinese name & client ID.
 */
async function GetOrganization(organization) {
    return get_method_1.default(`/info/${organization}`, resp_org_info_1.OrgInfoResponseSchema);
}
exports.default = GetOrganization;
//# sourceMappingURL=get_org.js.map