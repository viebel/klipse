// https://github.com/thejameskyle/pretty-format
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.prettyFormat = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const printString = require('./printString');

const toString = Object.prototype.toString;
const toISOString = Date.prototype.toISOString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = Symbol.prototype.toString;

const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
const NEWLINE_REGEXP = /\n/ig;

const getSymbols = Object.getOwnPropertySymbols || (obj => []);

function isToStringedArrayType(toStringed) {
  return (
    toStringed === '[object Array]' ||
    toStringed === '[object ArrayBuffer]' ||
    toStringed === '[object DataView]' ||
    toStringed === '[object Float32Array]' ||
    toStringed === '[object Float64Array]' ||
    toStringed === '[object Int8Array]' ||
    toStringed === '[object Int16Array]' ||
    toStringed === '[object Int32Array]' ||
    toStringed === '[object Uint8Array]' ||
    toStringed === '[object Uint8ClampedArray]' ||
    toStringed === '[object Uint16Array]' ||
    toStringed === '[object Uint32Array]'
  );
}

function printNumber(val) {
  if (val != +val) return 'NaN';
  const isNegativeZero = val === 0 && (1 / val) < 0;
  return isNegativeZero ? '-0' : '' + val;
}

function printFunction(val, printFunctionName) {
  if (!printFunctionName) {
    return '[Function]';
  } else if (val.name === '') {
    return '[Function anonymous]'
  } else {
    return '[Function ' + val.name + ']';
  }
}

function printSymbol(val) {
  return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
}

function printError(val) {
  return '[' + errorToString.call(val) + ']';
}

function printBasicValue(val, printFunctionName, escapeRegex) {
  if (val === true || val === false) return '' + val;
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';

  const typeOf = typeof val;

  if (typeOf === 'number') return printNumber(val);
  if (typeOf === 'string') return '"' + printString(val) + '"';
  if (typeOf === 'function') return printFunction(val, printFunctionName);
  if (typeOf === 'symbol') return printSymbol(val);

  const toStringed = toString.call(val);

  if (toStringed === '[object WeakMap]') return 'WeakMap {}';
  if (toStringed === '[object WeakSet]') return 'WeakSet {}';
  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') return printFunction(val, printFunctionName);
  if (toStringed === '[object Symbol]') return printSymbol(val);
  if (toStringed === '[object Date]') return toISOString.call(val);
  if (toStringed === '[object Error]') return printError(val);
  if (toStringed === '[object RegExp]') {
    if (escapeRegex) {
      return printString(regExpToString.call(val));
    }
    return regExpToString.call(val);
  };
  if (toStringed === '[object Arguments]' && val.length === 0) return 'Arguments []';
  if (isToStringedArrayType(toStringed) && val.length === 0) return val.constructor.name + ' []';

  if (val instanceof Error) return printError(val);

  return false;
}

function printList(list, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  let body = '';

  if (list.length) {
    body += edgeSpacing;

    const innerIndent = prevIndent + indent;

    for (let i = 0; i < list.length; i++) {
      body += innerIndent + print(list[i], indent, innerIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);

      if (i < list.length - 1) {
        body += ',' + spacing;
      }
    }

    body += (min ? '' : ',') + edgeSpacing + prevIndent;
  }

  return '[' + body + ']';
}

function printArguments(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  return (min ? '' : 'Arguments ') + printList(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
}

function printArray(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  return (min ? '' : val.constructor.name + ' ') + printList(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
}

function printMap(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  let result = 'Map {';
  const iterator = val.entries();
  let current = iterator.next();

  if (!current.done) {
    result += edgeSpacing;

    const innerIndent = prevIndent + indent;

    while (!current.done) {
      const key = print(current.value[0], indent, innerIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
      const value = print(current.value[1], indent, innerIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);

      result += innerIndent + key + ' => ' + value;

      current = iterator.next();

      if (!current.done) {
        result += ',' + spacing;
      }
    }

    result += (min ? '' : ',') + edgeSpacing + prevIndent;
  }

  return result + '}';
}

function printObject(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  const constructor = min ? '' : (val.constructor ?  val.constructor.name + ' ' : 'Object ');
  let result = constructor + '{';
  let keys = Object.keys(val).sort();
  const symbols = getSymbols(val);

  if (symbols.length) {
    keys = keys
      .filter(key => !(typeof key === 'symbol' || toString.call(key) === '[object Symbol]'))
      .concat(symbols);
  }

  if (keys.length) {
    result += edgeSpacing;

    const innerIndent = prevIndent + indent;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const name = print(key, indent, innerIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
      const value = print(val[key], indent, innerIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);

      result += innerIndent + name + ': ' + value;

      if (i < keys.length - 1) {
        result += ',' + spacing;
      }
    }

    result += (min ? '' : ',') + edgeSpacing + prevIndent;
  }

  return result + '}';
}

function printSet(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  let result = 'Set {';
  const iterator = val.entries();
  let current = iterator.next();

  if (!current.done) {
    result += edgeSpacing;

    const innerIndent = prevIndent + indent;

    while (!current.done) {
      result += innerIndent + print(current.value[1], indent, innerIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);

      current = iterator.next();

      if (!current.done) {
        result += ',' + spacing;
      }
    }

    result += (min ? '' : ',') + edgeSpacing + prevIndent;
  }

  return result + '}';
}

function printComplexValue(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  refs = refs.slice();
  if (refs.indexOf(val) > -1) {
    return '[Circular]';
  } else {
    refs.push(val);
  }

  currentDepth++;

  const hitMaxDepth = currentDepth > maxDepth;

  if (callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function') {
    return print(val.toJSON(), indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  }

  const toStringed = toString.call(val);
  if (toStringed === '[object Arguments]') {
    return hitMaxDepth ? '[Arguments]' : printArguments(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  } else if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? '[Array]' : printArray(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  } else if (toStringed === '[object Map]') {
    return hitMaxDepth ? '[Map]' : printMap(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  } else if (toStringed === '[object Set]') {
    return hitMaxDepth ? '[Set]' : printSet(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  } else if (typeof val === 'object') {
    return hitMaxDepth ? '[Object]' : printObject(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  }
}

function printPlugin(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  let match = false;
  let plugin;

  for (let p = 0; p < plugins.length; p++) {
    plugin = plugins[p];

    if (plugin.test(val)) {
      match = true;
      break;
    }
  }

  if (!match) {
    return false;
  }

  function boundPrint(val) {
    return print(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  }

  function boundIndent(str) {
    const indentation = prevIndent + indent;
    return indentation + str.replace(NEWLINE_REGEXP, '\n' + indentation);
  }

  return plugin.print(val, boundPrint, boundIndent, {
    edgeSpacing: edgeSpacing,
    spacing: spacing
  });
}

function print(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex) {
  const basic = printBasicValue(val, printFunctionName, escapeRegex);
  if (basic) return basic;

  const plugin = printPlugin(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
  if (plugin) return plugin;

  return printComplexValue(val, indent, prevIndent, spacing, edgeSpacing, refs, maxDepth, currentDepth, plugins, min, callToJSON, printFunctionName, escapeRegex);
}

const DEFAULTS = {
  callToJSON: true,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printFunctionName: true,
  escapeRegex: false,
};

function validateOptions(opts) {
  Object.keys(opts).forEach(key => {
    if (!DEFAULTS.hasOwnProperty(key)) {
      throw new Error('prettyFormat: Invalid option: ' + key);
    }
  });

  if (opts.min && opts.indent !== undefined && opts.indent !== 0) {
    throw new Error('prettyFormat: Cannot run with min option and indent');
  }
}

function normalizeOptions(opts) {
  const result = {};

  Object.keys(DEFAULTS).forEach(key =>
    result[key] = opts.hasOwnProperty(key) ? opts[key] : DEFAULTS[key]
  );

  if (result.min) {
    result.indent = 0;
  }

  return result;
}

function createIndent(indent) {
  return new Array(indent + 1).join(' ');
}

function prettyFormat(val, opts) {
  if (!opts) {
    opts = DEFAULTS;
  } else {
    validateOptions(opts)
    opts = normalizeOptions(opts);
  }

  let indent;
  let refs;
  const prevIndent = '';
  const currentDepth = 0;
  const spacing = opts.min ? ' ' : '\n';
  const edgeSpacing = opts.min ? '' : '\n';

  if (opts && opts.plugins.length) {
    indent = createIndent(opts.indent);
    refs = [];
    var pluginsResult = printPlugin(val, indent, prevIndent, spacing, edgeSpacing, refs, opts.maxDepth, currentDepth, opts.plugins, opts.min, opts.callToJSON, opts.printFunctionName, opts.escapeRegex);
    if (pluginsResult) return pluginsResult;
  }

  var basicResult = printBasicValue(val, opts.printFunctionName, opts.escapeRegex);
  if (basicResult) return basicResult;

  if (!indent) indent = createIndent(opts.indent);
  if (!refs) refs = [];
  return printComplexValue(val, indent, prevIndent, spacing, edgeSpacing, refs, opts.maxDepth, currentDepth, opts.plugins, opts.min, opts.callToJSON, opts.printFunctionName, opts.escapeRegex);
}

module.exports = prettyFormat;

},{"./printString":2}],2:[function(require,module,exports){
'use strict';

const ESCAPED_CHARACTERS = /(\\|\"|\')/g;

module.exports = function printString(val) {
  return val.replace(ESCAPED_CHARACTERS, '\\$1');
}

},{}]},{},[1])(1)
});
