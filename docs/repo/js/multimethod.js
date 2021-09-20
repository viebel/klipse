require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var multimethod = require('@arrows/multimethod');

window.multimethod = multimethod;

},{"@arrows/multimethod":"@arrows/multimethod"}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = (...fns) => (initialArg) => fns.reduceRight((arg, fn) => fn(arg), initialArg);
exports.compose = compose;
exports.default = compose;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createErrorClass = (name, message, serializeStacktrace = false) => {
    return class extends Error {
        constructor(details = null) {
            const fullMessage = `${message}${details ? ` ${details}` : ''}`;
            super(fullMessage);
            this.name = name;
            this.message = fullMessage;
        }
        toJSON() {
            return JSON.stringify({
                error: Object.assign({ name: this.name, message: this.message }, (serializeStacktrace && { stacktrace: this.stack })),
            });
        }
    };
};
exports.createErrorClass = createErrorClass;
exports.default = createErrorClass;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createErrorClass_1 = require("@arrows/error/createErrorClass");
exports.NoMethodError = createErrorClass_1.default('NoMethodError', 'No method specified for provided arguments.');
exports.NoArgumentsError = createErrorClass_1.default('NoArgumentsError', 'You have to provide at least one argument.');
exports.FirstArgumentError = createErrorClass_1.default('FirstArgumentError', 'First argument of multi must be either dispatch function or partially applied method.');
exports.NotMethodError = createErrorClass_1.default('NotMethodError', 'Argument is not a method');
exports.NotMultimethodError = createErrorClass_1.default('NotMultimethodError', 'Argument is not a multimethod.');

},{"@arrows/error/createErrorClass":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("@arrows/composition/compose");
const errors_1 = require("./errors");
const multimethod_1 = require("./internal/multimethod");
/**
 * Creates a new multimethods from the existing ones,
 * convenient for adding multiple methods.
 */
const fromMulti = (...methods) => (multimethod) => {
    if (methods.length === 0) {
        throw new errors_1.NoArgumentsError();
    }
    if (!multimethod_1.areMethodsValid(methods)) {
        throw new errors_1.NotMethodError();
    }
    if (typeof multimethod !== "function" || !multimethod[multimethod_1.multimethodKey]) {
        throw new errors_1.NotMultimethodError();
    }
    return compose_1.default(...methods)(multimethod);
};
exports.fromMulti = fromMulti;
exports.default = fromMulti;

},{"./errors":4,"./internal/multimethod":9,"@arrows/composition/compose":2}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equal = require("fast-deep-equal");
const createCaseEntry_1 = require("./createCaseEntry");
const addEntry = (methodEntries, caseValue, caseCorrespondingValue) => {
    const caseEntry = createCaseEntry_1.default(caseValue);
    const index = methodEntries.findIndex((entry) => equal(entry[0], caseEntry));
    const newMethodEntry = [caseEntry, caseCorrespondingValue];
    if (index === -1) {
        return [newMethodEntry, ...methodEntries];
    }
    const newMethodEntries = [...methodEntries];
    newMethodEntries[index] = newMethodEntry;
    return newMethodEntries;
};
exports.default = addEntry;

},{"./createCaseEntry":7,"fast-deep-equal":12}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isConstructor_1 = require("./isConstructor");
const createCaseEntry = (caseValue) => {
    if (isConstructor_1.default(caseValue)) {
        return { type: 'constructor', value: caseValue };
    }
    if (typeof caseValue === 'function') {
        return { type: 'function', value: caseValue };
    }
    if (Array.isArray(caseValue) &&
        caseValue.some((item) => isConstructor_1.default(item))) {
        return {
            type: 'mixed',
            values: caseValue.map((item) => {
                return {
                    type: isConstructor_1.default(item) ? 'constructor' : 'value',
                    value: item,
                };
            }),
        };
    }
    return {
        type: 'value',
        value: caseValue,
    };
};
exports.default = createCaseEntry;

},{"./isConstructor":8}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isConstructor = (value) => {
    return (typeof value === 'function' &&
        value.name &&
        value.name[0] === value.name[0].toUpperCase());
};
exports.default = isConstructor;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("@arrows/composition/compose");
const equal = require("fast-deep-equal");
const errors_1 = require("../errors");
const multimethodKey = Symbol("multimethod");
exports.multimethodKey = multimethodKey;
const methodKey = Symbol("method");
exports.methodKey = methodKey;
const implicitDispatch = (...args) => args.length > 1 ? [...args] : args[0];
const countSegments = (dispatch) => {
    let count = 1;
    let current = dispatch;
    try {
        while (typeof current === "function") {
            const next = current();
            if (typeof next === "function") {
                count++;
                current = next;
            }
            else {
                return count;
            }
        }
    }
    catch (_a) { } // tslint:disable-line
    return count;
};
const findTarget = (methodEntries, currentDispatchValue, args, defaultMethod) => {
    const entry = methodEntries.find(([dispatchEntry]) => {
        switch (dispatchEntry.type) {
            case "value":
                return equal(dispatchEntry.value, currentDispatchValue);
            case "function":
                return dispatchEntry.value(...args);
            case "constructor":
                return (currentDispatchValue === dispatchEntry.value ||
                    currentDispatchValue instanceof dispatchEntry.value);
            case "mixed":
                return dispatchEntry.values
                    .map((item, index) => item.type === "constructor"
                    ? currentDispatchValue[index] instanceof item.value
                    : equal(currentDispatchValue[index], item.value))
                    .every((matching) => matching === true);
        }
    });
    const target = entry ? entry[1] : defaultMethod;
    if (!entry && target === null) {
        throw new errors_1.NoMethodError(`Args: ${args}`);
    }
    return target;
};
const createSimpleTarget = (methodEntries, defaultMethod, dispatch) => {
    const fn = (...args) => {
        const currentDispatchValue = dispatch(...args);
        const target = findTarget(methodEntries, currentDispatchValue, args, defaultMethod);
        if (typeof target !== "function") {
            return target;
        }
        return target(...args);
    };
    Object.defineProperty(fn, "length", { value: dispatch.length });
    return fn;
};
const createSegmentedTarget = (methodEntries, defaultMethod, dispatch, segmentsCount) => {
    const recur = (counter, previousSegmentsArgs = []) => {
        if (counter === 1) {
            return (...args) => {
                const segmentsArgs = [...previousSegmentsArgs, args];
                const count = segmentsArgs.length;
                let currentDispatchValue = dispatch(...segmentsArgs[0]);
                for (let i = 1; i < count; i++) {
                    currentDispatchValue = currentDispatchValue(...segmentsArgs[i]);
                }
                const target = findTarget(methodEntries, currentDispatchValue, [].concat(...segmentsArgs), defaultMethod);
                if (typeof target !== "function") {
                    return target;
                }
                let result = target;
                for (let i = 0; i < count; i++) {
                    result = result(...segmentsArgs[i]);
                }
                return result;
            };
        }
        const fn = (...args) => {
            return recur(counter - 1, [...previousSegmentsArgs, args]);
        };
        Object.defineProperty(fn, "length", { value: dispatch.length });
        return fn;
    };
    return recur(segmentsCount);
};
const areMethodsValid = (args) => {
    return args.every((item) => typeof item === "function" && item[methodKey] === true);
};
exports.areMethodsValid = areMethodsValid;
const getFirstArgumentType = (arg) => {
    if (typeof arg !== "function") {
        throw new errors_1.FirstArgumentError();
    }
    return arg[methodKey] ? "method" : "dispatch";
};
const createMultimethod = (methodEntries = []) => (defaultMethod = null) => (arg0, ...methods) => {
    if (arg0 === undefined) {
        throw new errors_1.NoArgumentsError();
    }
    if (methods.length > 0 && !areMethodsValid(methods)) {
        throw new errors_1.NotMethodError("Second or further argument of multi must be a partially applied method.");
    }
    const firstArgumentType = getFirstArgumentType(arg0);
    const allMethods = (firstArgumentType !== "method"
        ? methods
        : [arg0, ...methods]);
    const dispatch = (firstArgumentType === "dispatch"
        ? arg0
        : implicitDispatch);
    const segmentsCount = countSegments(dispatch);
    const multimethod = segmentsCount === 1
        ? createSimpleTarget(methodEntries, defaultMethod, dispatch)
        : createSegmentedTarget(methodEntries, defaultMethod, dispatch, segmentsCount);
    // @ts-ignore
    multimethod[multimethodKey] = {
        defaultMethod,
        dispatch,
        methodEntries,
    };
    if (methods.length !== 0) {
        return compose_1.default(...allMethods)(multimethod);
    }
    return multimethod;
};
exports.createMultimethod = createMultimethod;

},{"../errors":4,"@arrows/composition/compose":2,"fast-deep-equal":12}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const addEntry_1 = require("./internal/addEntry");
const multimethod_1 = require("./internal/multimethod");
/**
 * Adds method to a multimethod
 */
const method = (caseValue, correspondingValue) => {
    const partialMethod = (multimethod) => {
        if (!multimethod[multimethod_1.multimethodKey]) {
            throw new errors_1.NotMultimethodError();
        }
        const first = caseValue;
        const second = correspondingValue;
        const isNotDefault = second !== undefined;
        const fn = isNotDefault ? second : first;
        const dispatchValues = isNotDefault ? first : null;
        const { methodEntries, defaultMethod, dispatch } = multimethod[multimethod_1.multimethodKey];
        if (isNotDefault) {
            const newMethodEntries = addEntry_1.default(methodEntries, dispatchValues, fn);
            return multimethod_1.createMultimethod(newMethodEntries)(defaultMethod)(dispatch);
        }
        return multimethod_1.createMultimethod(methodEntries)(fn)(dispatch);
    };
    // @ts-ignore
    partialMethod[multimethod_1.methodKey] = true;
    return partialMethod;
};
exports.method = method;
exports.default = method;

},{"./errors":4,"./internal/addEntry":6,"./internal/multimethod":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multimethod_1 = require("./internal/multimethod");
/**
 * Creates multimethod - a function that can dynamically choose proper implementation,
 * based on arbitrary dispatch of its arguments
 */
const multi = multimethod_1.createMultimethod()();
exports.multi = multi;
exports.default = multi;

},{"./internal/multimethod":9}],12:[function(require,module,exports){
'use strict';

// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

},{}],"@arrows/multimethod":[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fromMulti_1 = require("./fromMulti");
exports.fromMulti = fromMulti_1.default;
const method_1 = require("./method");
exports.method = method_1.default;
const multi_1 = require("./multi");
exports.multi = multi_1.default;
exports.default = {
    fromMulti: fromMulti_1.default,
    method: method_1.default,
    multi: multi_1.default,
};

},{"./fromMulti":5,"./method":10,"./multi":11}]},{},[1]);
