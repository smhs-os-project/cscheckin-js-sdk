/* eslint-disable vars-on-top */
/* eslint-disable no-var */
interface Window {
  CSCHECKIN_SDK_INITIATED: boolean | undefined;
}

// used in initiate.ts
declare var CSCHECKIN_SDK_INITIATED: Window["CSCHECKIN_SDK_INITIATED"];
