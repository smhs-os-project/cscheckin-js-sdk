import"core-js/modules/es.array.concat";import"core-js/modules/es.promise";import"core-js/modules/es.object.to-string";import a,{clientInstance as b}from"../../request/client";import{CheckinResponseSchema as c}from"../../types";export default async function Checkin(d,e){var f=(await b.jsonFetcher("/checkin/".concat(d),a.postJsonRequest({},await a.authRequest(e)))).data;return a.responseParser(f,c)}
//# sourceMappingURL=checkin.js.map