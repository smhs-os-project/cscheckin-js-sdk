import"core-js/modules/es.function.name";function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _classCallCheck(b,c){if(!(b instanceof c))throw new TypeError("Cannot call a class as a function")}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(d){return!1}}function _construct(e,f,g){return(_construct=isNativeReflectConstruct()?Reflect.construct:function _construct(e,f,g){var h=[null];h.push.apply(h,f);var c=Function.bind.apply(e,h),b=new c();return g&&_setPrototypeOf(b,g.prototype),b}).apply(null,arguments)}function _getPrototypeOf(i){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(i){return i.__proto__||Object.getPrototypeOf(i)},_getPrototypeOf(i)}function _inherits(j,k){if("function"!=typeof k&&null!==k)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(k&&k.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),k&&_setPrototypeOf(j,k)}function _isNativeFunction(l){return -1!==Function.toString.call(l).indexOf("[native code]")}function _possibleConstructorReturn(a,m){return m&&("object"===_typeof(m)||"function"==typeof m)?m:_assertThisInitialized(a)}function _setPrototypeOf(i,n){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(i,n){return i.__proto__=n,i},_setPrototypeOf(i,n)}var _typeof=function(o){return o&&"undefined"!=typeof Symbol&&o.constructor===Symbol?"symbol":typeof o};function _wrapNativeSuper(g){var p="function"==typeof Map?new Map():void 0;return _wrapNativeSuper=function _wrapNativeSuper(g){if(null===g||!_isNativeFunction(g))return g;if("function"!=typeof g)throw new TypeError("Super expression must either be null or a function");if(void 0!==p){if(p.has(g))return p.get(g);p.set(g,q)}function q(){return _construct(g,arguments,_getPrototypeOf(this).constructor)}return q.prototype=Object.create(g.prototype,{constructor:{value:q,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(q,g)},_wrapNativeSuper(g)}var FailedToGetCredential=function(r){"use strict";function FailedToGetCredential(){var s;return _classCallCheck(this,FailedToGetCredential),(s=_possibleConstructorReturn(this,_getPrototypeOf(FailedToGetCredential).call(this,"Failed to get the credential header to request."))).name="FailedToGetCredential",s}return _inherits(FailedToGetCredential,r),FailedToGetCredential}(_wrapNativeSuper(Error));export{FailedToGetCredential as default}