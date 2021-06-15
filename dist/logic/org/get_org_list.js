"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_method_1 = __importDefault(require("../../request/encapsulation/get_method"));
const resp_org_info_1 = require("../../types/org_info/resp_org_info");
/**
 * Get the organization list as well as
 * its Chinese name and client ID.
 */
async function GetOrganizationList() {
    return get_method_1.default("/info", resp_org_info_1.OrgInfoListResponseSchema);
}
exports.default = GetOrganizationList;
//# sourceMappingURL=get_org_list.js.map