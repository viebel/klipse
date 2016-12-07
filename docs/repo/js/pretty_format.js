// https://github.com/thejameskyle/pretty-format

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
