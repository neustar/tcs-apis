"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeferred = void 0;
var Promise = require("bluebird");
function createDeferred() {
    var resolve;
    var reject;
    var promise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    return {
        //@ts-ignore
        resolve: resolve,
        reject: reject,
        promise: promise,
    };
}
exports.createDeferred = createDeferred;
