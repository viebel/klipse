// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Parts from Ace; see <https://raw.githubusercontent.com/ajaxorg/ace/master/LICENSE>

// Generated from the Logtalk Ace mode using ace2cm
// Author: Paulo Moura

CodeMirror.defineMode("logtalk", function(cmCfg, modeCfg) {

  // Fake define() function.
  var moduleHolder = Object.create(null);

  // Given a module path as a string, create the canonical version
  // (no leading ./, no ending .js).
  var canonicalPath = function(path) {
    return path.replace(/\.\//, '').replace(/\.js$/, '');
  };

  // We intentionally add the `path` argument to `define()`.
  var define = function(path, init) {
    var exports = Object.create(null);
    init(require, exports);  // module (3rd parameter) isn't supported.
    moduleHolder[canonicalPath(path)] = exports;
  };

  // path: string of the location of the JS file.
  var require = function(path) { return moduleHolder[canonicalPath(path)]; };

  // All dependencies here.
  define("../lib/oop.js", function(require, exports, module) {
    "use strict";
    
    exports.inherits = function(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };
    
    exports.mixin = function(obj, mixin) {
        for (var key in mixin) {
            obj[key] = mixin[key];
        }
        return obj;
    };
    
    exports.implement = function(proto, mixin) {
        exports.mixin(proto, mixin);
    };
    
    });
    

  define("../lib/lang.js", function(require, exports, module) {
    "use strict";
    
    exports.last = function(a) {
        return a[a.length - 1];
    };
    
    exports.stringReverse = function(string) {
        return string.split("").reverse().join("");
    };
    
    exports.stringRepeat = function (string, count) {
        var result = '';
        while (count > 0) {
            if (count & 1)
                result += string;
    
            if (count >>= 1)
                string += string;
        }
        return result;
    };
    
    var trimBeginRegexp = /^\s\s*/;
    var trimEndRegexp = /\s\s*$/;
    
    exports.stringTrimLeft = function (string) {
        return string.replace(trimBeginRegexp, '');
    };
    
    exports.stringTrimRight = function (string) {
        return string.replace(trimEndRegexp, '');
    };
    
    exports.copyObject = function(obj) {
        var copy = {};
        for (var key in obj) {
            copy[key] = obj[key];
        }
        return copy;
    };
    
    exports.copyArray = function(array){
        var copy = [];
        for (var i=0, l=array.length; i<l; i++) {
            if (array[i] && typeof array[i] == "object")
                copy[i] = this.copyObject(array[i]);
            else 
                copy[i] = array[i];
        }
        return copy;
    };
    
    exports.deepCopy = function deepCopy(obj) {
        if (typeof obj !== "object" || !obj)
            return obj;
        var copy;
        if (Array.isArray(obj)) {
            copy = [];
            for (var key = 0; key < obj.length; key++) {
                copy[key] = deepCopy(obj[key]);
            }
            return copy;
        }
        if (Object.prototype.toString.call(obj) !== "[object Object]")
            return obj;
        
        copy = {};
        for (var key in obj)
            copy[key] = deepCopy(obj[key]);
        return copy;
    };
    
    exports.arrayToMap = function(arr) {
        var map = {};
        for (var i=0; i<arr.length; i++) {
            map[arr[i]] = 1;
        }
        return map;
    
    };
    
    exports.createMap = function(props) {
        var map = Object.create(null);
        for (var i in props) {
            map[i] = props[i];
        }
        return map;
    };
    
    /*
     * splice out of 'array' anything that === 'value'
     */
    exports.arrayRemove = function(array, value) {
      for (var i = 0; i <= array.length; i++) {
        if (value === array[i]) {
          array.splice(i, 1);
        }
      }
    };
    
    exports.escapeRegExp = function(str) {
        return str.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
    };
    
    exports.escapeHTML = function(str) {
        return ("" + str).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
    };
    
    exports.getMatchOffsets = function(string, regExp) {
        var matches = [];
    
        string.replace(regExp, function(str) {
            matches.push({
                offset: arguments[arguments.length-2],
                length: str.length
            });
        });
    
        return matches;
    };
    
    /* deprecated */
    exports.deferredCall = function(fcn) {
        var timer = null;
        var callback = function() {
            timer = null;
            fcn();
        };
    
        var deferred = function(timeout) {
            deferred.cancel();
            timer = setTimeout(callback, timeout || 0);
            return deferred;
        };
    
        deferred.schedule = deferred;
    
        deferred.call = function() {
            this.cancel();
            fcn();
            return deferred;
        };
    
        deferred.cancel = function() {
            clearTimeout(timer);
            timer = null;
            return deferred;
        };
        
        deferred.isPending = function() {
            return timer;
        };
    
        return deferred;
    };
    
    
    exports.delayedCall = function(fcn, defaultTimeout) {
        var timer = null;
        var callback = function() {
            timer = null;
            fcn();
        };
    
        var _self = function(timeout) {
            if (timer == null)
                timer = setTimeout(callback, timeout || defaultTimeout);
        };
    
        _self.delay = function(timeout) {
            timer && clearTimeout(timer);
            timer = setTimeout(callback, timeout || defaultTimeout);
        };
        _self.schedule = _self;
    
        _self.call = function() {
            this.cancel();
            fcn();
        };
    
        _self.cancel = function() {
            timer && clearTimeout(timer);
            timer = null;
        };
    
        _self.isPending = function() {
            return timer;
        };
    
        return _self;
    };
    });
    

  define("./text_highlight_rules.js", function(require, exports, module) {
    "use strict";
    
    var lang = require("../lib/lang");
    
    var TextHighlightRules = function() {
    
        // regexp must not have capturing parentheses
        // regexps are ordered -> the first match is used
    
        this.$rules = {
            "start" : [{
                token : "empty_line",
                regex : '^$'
            }, {
                defaultToken : "text"
            }]
        };
    };
    
    (function() {
    
        this.addRules = function(rules, prefix) {
            if (!prefix) {
                for (var key in rules)
                    this.$rules[key] = rules[key];
                return;
            }
            for (var key in rules) {
                var state = rules[key];
                for (var i = 0; i < state.length; i++) {
                    var rule = state[i];
                    if (rule.next || rule.onMatch) {
                        if (typeof rule.next == "string") {
                            if (rule.next.indexOf(prefix) !== 0)
                                rule.next = prefix + rule.next;
                        }
                        if (rule.nextState && rule.nextState.indexOf(prefix) !== 0)
                            rule.nextState = prefix + rule.nextState;
                    }
                }
                this.$rules[prefix + key] = state;
            }
        };
    
        this.getRules = function() {
            return this.$rules;
        };
    
        this.embedRules = function (HighlightRules, prefix, escapeRules, states, append) {
            var embedRules = typeof HighlightRules == "function"
                ? new HighlightRules().getRules()
                : HighlightRules;
            if (states) {
                for (var i = 0; i < states.length; i++)
                    states[i] = prefix + states[i];
            } else {
                states = [];
                for (var key in embedRules)
                    states.push(prefix + key);
            }
    
            this.addRules(embedRules, prefix);
    
            if (escapeRules) {
                var addRules = Array.prototype[append ? "push" : "unshift"];
                for (var i = 0; i < states.length; i++)
                    addRules.apply(this.$rules[states[i]], lang.deepCopy(escapeRules));
            }
    
            if (!this.$embeds)
                this.$embeds = [];
            this.$embeds.push(prefix);
        };
    
        this.getEmbeds = function() {
            return this.$embeds;
        };
    
        var pushState = function(currentState, stack) {
            if (currentState != "start" || stack.length)
                stack.unshift(this.nextState, currentState);
            return this.nextState;
        };
        var popState = function(currentState, stack) {
            // if (stack[0] === currentState)
            stack.shift();
            return stack.shift() || "start";
        };
    
        this.normalizeRules = function() {
            var id = 0;
            var rules = this.$rules;
            function processState(key) {
                var state = rules[key];
                state.processed = true;
                for (var i = 0; i < state.length; i++) {
                    var rule = state[i];
                    var toInsert = null;
                    if (Array.isArray(rule)) {
                        toInsert = rule;
                        rule = {};
                    }
                    if (!rule.regex && rule.start) {
                        rule.regex = rule.start;
                        if (!rule.next)
                            rule.next = [];
                        rule.next.push({
                            defaultToken: rule.token
                        }, {
                            token: rule.token + ".end",
                            regex: rule.end || rule.start,
                            next: "pop"
                        });
                        rule.token = rule.token + ".start";
                        rule.push = true;
                    }
                    var next = rule.next || rule.push;
                    if (next && Array.isArray(next)) {
                        var stateName = rule.stateName;
                        if (!stateName)  {
                            stateName = rule.token;
                            if (typeof stateName != "string")
                                stateName = stateName[0] || "";
                            if (rules[stateName])
                                stateName += id++;
                        }
                        rules[stateName] = next;
                        rule.next = stateName;
                        processState(stateName);
                    } else if (next == "pop") {
                        rule.next = popState;
                    }
    
                    if (rule.push) {
                        rule.nextState = rule.next || rule.push;
                        rule.next = pushState;
                        delete rule.push;
                    }
    
                    if (rule.rules) {
                        for (var r in rule.rules) {
                            if (rules[r]) {
                                if (rules[r].push)
                                    rules[r].push.apply(rules[r], rule.rules[r]);
                            } else {
                                rules[r] = rule.rules[r];
                            }
                        }
                    }
                    var includeName = typeof rule == "string" ? rule : rule.include;
                    if (includeName) {
                        if (Array.isArray(includeName))
                            toInsert = includeName.map(function(x) { return rules[x]; });
                        else
                            toInsert = rules[includeName];
                    }
    
                    if (toInsert) {
                        var args = [i, 1].concat(toInsert);
                        if (rule.noEscape)
                            args = args.filter(function(x) {return !x.next;});
                        state.splice.apply(state, args);
                        // skip included rules since they are already processed
                        //i += args.length - 3;
                        i--;
                    }
                    
                    if (rule.keywordMap) {
                        rule.token = this.createKeywordMapper(
                            rule.keywordMap, rule.defaultToken || "text", rule.caseInsensitive
                        );
                        delete rule.defaultToken;
                    }
                }
            }
            Object.keys(rules).forEach(processState, this);
        };
    
        this.createKeywordMapper = function(map, defaultToken, ignoreCase, splitChar) {
            var keywords = Object.create(null);
            Object.keys(map).forEach(function(className) {
                var a = map[className];
                if (ignoreCase)
                    a = a.toLowerCase();
                var list = a.split(splitChar || "|");
                for (var i = list.length; i--; )
                    keywords[list[i]] = className;
            });
            // in old versions of opera keywords["__proto__"] sets prototype
            // even on objects with __proto__=null
            if (Object.getPrototypeOf(keywords)) {
                keywords.__proto__ = null;
            }
            this.$keywordList = Object.keys(keywords);
            map = null;
            return ignoreCase
                ? function(value) {return keywords[value.toLowerCase()] || defaultToken; }
                : function(value) {return keywords[value] || defaultToken; };
        };
    
        this.getKeywords = function() {
            return this.$keywords;
        };
    
    }).call(TextHighlightRules.prototype);
    
    exports.TextHighlightRules = TextHighlightRules;
    });
    

  define("logtalk_highlight_rules", function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var LogtalkHighlightRules = function() {
        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used
    
        this.$rules = { start: 
           [ { token: 'punctuation.definition.comment.logtalk',
               regex: '/\\*',
               push: 
                [ { token: 'punctuation.definition.comment.logtalk',
                    regex: '\\*/',
                    next: 'pop' },
                  { defaultToken: 'comment.block.logtalk' } ] },
             { token: 
                [ 'comment.line.percentage.logtalk',
                  'punctuation.definition.comment.logtalk' ],
               regex: '%.*$\\n?' },
             { token: 
                [  'meta.type.opening.logtalk',
                  'punctuation.definition.storage.type.logtalk' ],
               regex: ':-\\s(?:object|protocol|category|module)(?=[(])' },
             { token: 
                [  'meta.type.closing.logtalk',
                  'punctuation.definition.storage.type.logtalk' ],
               regex: ':-\\send_(?:object|protocol|category)(?=[.])' },
             { caseInsensitive: false,
               token:  'meta.type.relations.logtalk',
               regex: '\\b(?:complements|extends|i(?:nstantiates|mp(?:orts|lements))|specializes)(?=[(])' },
             { caseInsensitive: false,
               token: 
                [  'meta.modifier.others.logtalk',
                  'punctuation.definition.storage.modifier.logtalk' ],
               regex: ':-\\s(?:e(?:lse|ndif)|built_in|dynamic|synchronized|threaded)(?=[.])' },
             { caseInsensitive: false,
               token: 
                [  'meta.modifier.others.logtalk',
                  'punctuation.definition.storage.modifier.logtalk' ],
               regex: ':-\\s(?:c(?:alls|oinductive)|e(?:lif|n(?:coding|sure_loaded)|xport)|i(?:f|n(?:clude|itialization|fo))|reexport|set_(?:logtalk|prolog)_flag|uses)(?=[(])' },
             { caseInsensitive: false,
               token: 
                [  'meta.modifier.others.logtalk',
                  'punctuation.definition.storage.modifier.logtalk' ],
               regex: ':-\\s(?:alias|info|d(?:ynamic|iscontiguous)|m(?:eta_(?:non_terminal|predicate)|ode|ultifile)|p(?:ublic|r(?:otected|ivate))|op|use(?:s|_module)|synchronized)(?=[(])' },
             { token: 'keyword.operator.message-sending.logtalk',
               regex: '(:|::|\\^\\^)' },
             { token: 'keyword.operator.external-call.logtalk',
               regex: '([{}])' },
             { token: 'keyword.operator.mode.logtalk', regex: '(\\?|@)' },
             { token: 'keyword.operator.comparison.term.logtalk',
               regex: '(@=<|@<|@>|@>=|==|\\\\==)' },
             { token: 'keyword.operator.comparison.arithmetic.logtalk',
               regex: '(=<|<|>|>=|=:=|=\\\\=)' },
             { token: 'keyword.operator.bitwise.logtalk',
               regex: '(<<|>>|/\\\\|\\\\/|\\\\)' },
             { token: 'keyword.operator.evaluable.logtalk',
               regex: '\\b(?:e|pi|div|mod|rem)\\b(?![-!(^~])' },
             { token: 'keyword.operator.evaluable.logtalk',
               regex: '(\\*\\*|\\+|-|\\*|/|//)' },
             { token: 'keyword.operator.misc.logtalk',
               regex: '(:-|!|\\\\+|,|;|-->|->|=|\\=|\\.|=\\.\\.|\\^|\\bas\\b|\\bis\\b)' },
             { caseInsensitive: false,
               token: 'support.function.evaluable.logtalk',
               regex: '\\b(a(bs|cos|sin|tan|tan2)|c(eiling|os)|div|exp|flo(at(_(integer|fractional)_part)?|or)|log|m(ax|in|od)|r(em|ound)|s(i(n|gn)|qrt)|t(an|runcate)|xor)(?=[(])' },
             { token: 'support.function.control.logtalk',
               regex: '\\b(?:true|fa(?:il|lse)|repeat|(?:instantiation|system)_error)\\b(?![-!(^~])' },
             { token: 'support.function.control.logtalk',
               regex: '\\b((?:type|domain|existence|permission|representation|evaluation|resource|syntax)_error)(?=[(])' },
             { token: 'support.function.control.logtalk',
               regex: '\\b(?:ca(?:ll|tch)|ignore|throw|once)(?=[(])' },
             { token: 'support.function.chars-and-bytes-io.logtalk',
               regex: '\\b(?:(?:get|p(?:eek|ut))_(c(?:har|ode)|byte)|nl)(?=[(])' },
             { token: 'support.function.chars-and-bytes-io.logtalk',
               regex: '\\bnl\\b' },
             { token: 'support.function.atom-term-processing.logtalk',
               regex: '\\b(?:atom_(?:length|c(?:hars|o(?:ncat|des)))|sub_atom|char_code|number_c(?:har|ode)s)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.term-testing.logtalk',
               regex: '\\b(?:var|atom(ic)?|integer|float|c(?:allable|ompound)|n(?:onvar|umber)|ground|acyclic_term)(?=[(])' },
             { token: 'support.function.term-comparison.logtalk',
               regex: '\\b(compare)(?=[(])' },
             { token: 'support.function.term-io.logtalk',
               regex: '\\b(?:read(_term)?|write(?:q|_(?:canonical|term))?|(current_)?(?:char_conversion|op))(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.term-creation-and-decomposition.logtalk',
               regex: '\\b(arg|copy_term|functor|numbervars|term_variables)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.term-unification.logtalk',
               regex: '\\b(subsumes_term|unify_with_occurs_check)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.stream-selection-and-control.logtalk',
               regex: '\\b(?:(?:se|curren)t_(?:in|out)put|open|close|flush_output|stream_property|at_end_of_stream|set_stream_position)(?=[(])' },
             { token: 'support.function.stream-selection-and-control.logtalk',
               regex: '\\b(?:flush_output|at_end_of_stream)\\b' },
             { token: 'support.function.prolog-flags.logtalk',
               regex: '\\b((?:se|curren)t_prolog_flag)(?=[(])' },
             { token: 'support.function.compiling-and-loading.logtalk',
               regex: '\\b(logtalk_(?:compile|l(?:ibrary_path|oad|oad_context)|make(_target_action)?))(?=[(])' },
             { token: 'support.function.compiling-and-loading.logtalk',
               regex: '\\b(logtalk_make)\\b' },
             { caseInsensitive: false,
               token: 'support.function.event-handling.logtalk',
               regex: '\\b(?:(?:abolish|define)_events|current_event)(?=[(])' },
             { token: 'support.function.implementation-defined-hooks.logtalk',
               regex: '\\b(?:(?:create|current|set)_logtalk_flag|halt)(?=[(])' },
             { token: 'support.function.implementation-defined-hooks.logtalk',
               regex: '\\b(halt)\\b' },
             { token: 'support.function.sorting.logtalk',
               regex: '\\b((key)?(sort))(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.entity-creation-and-abolishing.logtalk',
               regex: '\\b((c(?:reate|urrent)|abolish)_(?:object|protocol|category))(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.reflection.logtalk',
               regex: '\\b((object|protocol|category)_property|co(mplements_object|nforms_to_protocol)|extends_(object|protocol|category)|imp(orts_category|lements_protocol)|(instantiat|specializ)es_class)(?=[(])' },
             { token: 'support.function.logtalk',
               regex: '\\b((?:for|retract)all)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.execution-context.logtalk',
               regex: '\\b(?:context|parameter|se(?:lf|nder)|this)(?=[(])' },
             { token: 'support.function.database.logtalk',
               regex: '\\b(?:a(?:bolish|ssert(?:a|z))|clause|retract(all)?)(?=[(])' },
             { token: 'support.function.all-solutions.logtalk',
               regex: '\\b((?:bag|set)of|f(?:ind|or)all)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.multi-threading.logtalk',
               regex: '\\b(threaded(_(call|once|ignore|exit|peek|wait|notify))?)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.engines.logtalk',
               regex: '\\b(threaded_engine(_(create|destroy|self|next(?:_reified)?|yield|post|fetch))?)(?=[(])' },
             { caseInsensitive: false,
               token: 'support.function.reflection.logtalk',
               regex: '\\b(?:current_predicate|predicate_property)(?=[(])' },
             { token: 'support.function.event-handler.logtalk',
               regex: '\\b(?:before|after)(?=[(])' },
             { token: 'support.function.message-forwarding-handler.logtalk',
               regex: '\\b(forward)(?=[(])' },
             { token: 'support.function.grammar-rule.logtalk',
               regex: '\\b(?:expand_(?:goal|term)|(?:goal|term)_expansion|phrase)(?=[(])' },
             { token: 'punctuation.definition.string.begin.logtalk',
               regex: '\'',
               push: 
                [ { token: 'constant.character.escape.logtalk',
                    regex: '\\\\([\\\\abfnrtv"\']|(x[a-fA-F0-9]+|[0-7]+)\\\\)' },
                  { token: 'punctuation.definition.string.end.logtalk',
                    regex: '\'',
                    next: 'pop' },
                  { defaultToken: 'string.quoted.single.logtalk' } ] },
             { token: 'punctuation.definition.string.begin.logtalk',
               regex: '"',
               push: 
                [ { token: 'constant.character.escape.logtalk', regex: '\\\\.' },
                  { token: 'punctuation.definition.string.end.logtalk',
                    regex: '"',
                    next: 'pop' },
                  { defaultToken: 'string.quoted.double.logtalk' } ] },
             { token: 'constant.numeric.logtalk',
               regex: '\\b(0b[0-1]+|0o[0-7]+|0x[0-9a-fA-F]+)\\b' },
             { token: 'constant.numeric.logtalk',
               regex: '\\b(0\'\\\\.|0\'.|0\'\'|0\'")' },
             { token: 'constant.numeric.logtalk',
               regex: '\\b(\\d+\\.?\\d*((e|E)(\\+|-)?\\d+)?)\\b' },
             { token: 'variable.other.logtalk',
               regex: '\\b([A-Z_][A-Za-z0-9_]*)\\b' } ] };
        
        this.normalizeRules();
    };
    
    oop.inherits(LogtalkHighlightRules, TextHighlightRules);
    
    exports.LogtalkHighlightRules = LogtalkHighlightRules;
    });


  // Ace highlight rules function imported below.
  var HighlightRules = require("logtalk_highlight_rules").LogtalkHighlightRules;

  

  // Ace's Syntax Tokenizer.

  // tokenizing lines longer than this makes editor very slow
  var MAX_TOKEN_COUNT = 1000;
  var Tokenizer = function(rules) {
      this.states = rules;

      this.regExps = {};
      this.matchMappings = {};
      for (var key in this.states) {
          var state = this.states[key];
          var ruleRegExps = [];
          var matchTotal = 0;
          var mapping = this.matchMappings[key] = {defaultToken: "text"};
          var flag = "g";

          var splitterRurles = [];
          for (var i = 0; i < state.length; i++) {
              var rule = state[i];
              if (rule.defaultToken)
                  mapping.defaultToken = rule.defaultToken;
              if (rule.caseInsensitive)
                  flag = "gi";
              if (rule.regex == null)
                  continue;

              if (rule.regex instanceof RegExp)
                  rule.regex = rule.regex.toString().slice(1, -1);

              // Count number of matching groups. 2 extra groups from the full match
              // And the catch-all on the end (used to force a match);
              var adjustedregex = rule.regex;
              var matchcount = new RegExp("(?:(" + adjustedregex + ")|(.))").exec("a").length - 2;
              if (Array.isArray(rule.token)) {
                  if (rule.token.length == 1 || matchcount == 1) {
                      rule.token = rule.token[0];
                  } else if (matchcount - 1 != rule.token.length) {
                      throw new Error("number of classes and regexp groups in '" + 
                          rule.token + "'\n'" + rule.regex +  "' doesn't match\n"
                          + (matchcount - 1) + "!=" + rule.token.length);
                  } else {
                      rule.tokenArray = rule.token;
                      rule.token = null;
                      rule.onMatch = this.$arrayTokens;
                  }
              } else if (typeof rule.token == "function" && !rule.onMatch) {
                  if (matchcount > 1)
                      rule.onMatch = this.$applyToken;
                  else
                      rule.onMatch = rule.token;
              }

              if (matchcount > 1) {
                  if (/\\\d/.test(rule.regex)) {
                      // Replace any backreferences and offset appropriately.
                      adjustedregex = rule.regex.replace(/\\([0-9]+)/g, function(match, digit) {
                          return "\\" + (parseInt(digit, 10) + matchTotal + 1);
                      });
                  } else {
                      matchcount = 1;
                      adjustedregex = this.removeCapturingGroups(rule.regex);
                  }
                  if (!rule.splitRegex && typeof rule.token != "string")
                      splitterRurles.push(rule); // flag will be known only at the very end
              }

              mapping[matchTotal] = i;
              matchTotal += matchcount;

              ruleRegExps.push(adjustedregex);

              // makes property access faster
              if (!rule.onMatch)
                  rule.onMatch = null;
          }
          
          splitterRurles.forEach(function(rule) {
              rule.splitRegex = this.createSplitterRegexp(rule.regex, flag);
          }, this);

          this.regExps[key] = new RegExp("(" + ruleRegExps.join(")|(") + ")|($)", flag);
      }
  };

  (function() {
      this.$setMaxTokenCount = function(m) {
          MAX_TOKEN_COUNT = m | 0;
      };
      
      this.$applyToken = function(str) {
          var values = this.splitRegex.exec(str).slice(1);
          var types = this.token.apply(this, values);

          // required for compatibility with old modes
          if (typeof types === "string")
              return [{type: types, value: str}];

          var tokens = [];
          for (var i = 0, l = types.length; i < l; i++) {
              if (values[i])
                  tokens[tokens.length] = {
                      type: types[i],
                      value: values[i]
                  };
          }
          return tokens;
      },

      this.$arrayTokens = function(str) {
          if (!str)
              return [];
          var values = this.splitRegex.exec(str);
          if (!values)
              return "text";
          var tokens = [];
          var types = this.tokenArray;
          for (var i = 0, l = types.length; i < l; i++) {
              if (values[i + 1])
                  tokens[tokens.length] = {
                      type: types[i],
                      value: values[i + 1]
                  };
          }
          return tokens;
      };

      this.removeCapturingGroups = function(src) {
          var r = src.replace(
              /\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,
              function(x, y) {return y ? "(?:" : x;}
          );
          return r;
      };

      this.createSplitterRegexp = function(src, flag) {
          if (src.indexOf("(?=") != -1) {
              var stack = 0;
              var inChClass = false;
              var lastCapture = {};
              src.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(
                  m, esc, parenOpen, parenClose, square, index
              ) {
                  if (inChClass) {
                      inChClass = square != "]";
                  } else if (square) {
                      inChClass = true;
                  } else if (parenClose) {
                      if (stack == lastCapture.stack) {
                          lastCapture.end = index+1;
                          lastCapture.stack = -1;
                      }
                      stack--;
                  } else if (parenOpen) {
                      stack++;
                      if (parenOpen.length != 1) {
                          lastCapture.stack = stack
                          lastCapture.start = index;
                      }
                  }
                  return m;
              });

              if (lastCapture.end != null && /^\)*$/.test(src.substr(lastCapture.end)))
                  src = src.substring(0, lastCapture.start) + src.substr(lastCapture.end);
          }
          return new RegExp(src, (flag||"").replace("g", ""));
      };

      /**
      * Returns an object containing two properties: `tokens`, which contains all the tokens; and `state`, the current state.
      * @returns {Object}
      **/
      this.getLineTokens = function(line, startState) {
          if (startState && typeof startState != "string") {
              var stack = startState.slice(0);
              startState = stack[0];
          } else
              var stack = [];

          var currentState = startState || "start";
          var state = this.states[currentState];
          if (!state) {
              currentState = "start";
              state = this.states[currentState];
          }
          var mapping = this.matchMappings[currentState];
          var re = this.regExps[currentState];
          re.lastIndex = 0;

          var match, tokens = [];
          var lastIndex = 0;

          var token = {type: null, value: ""};

          while (match = re.exec(line)) {
              var type = mapping.defaultToken;
              var rule = null;
              var value = match[0];
              var index = re.lastIndex;

              if (index - value.length > lastIndex) {
                  var skipped = line.substring(lastIndex, index - value.length);
                  if (token.type == type) {
                      token.value += skipped;
                  } else {
                      if (token.type)
                          tokens.push(token);
                      token = {type: type, value: skipped};
                  }
              }

              for (var i = 0; i < match.length-2; i++) {
                  if (match[i + 1] === undefined)
                      continue;

                  rule = state[mapping[i]];

                  if (rule.onMatch)
                      type = rule.onMatch(value, currentState, stack);
                  else
                      type = rule.token;

                  if (rule.next) {
                      if (typeof rule.next == "string")
                          currentState = rule.next;
                      else
                          currentState = rule.next(currentState, stack);

                      state = this.states[currentState];
                      if (!state) {
                          window.console && console.error && console.error(currentState, "doesn't exist");
                          currentState = "start";
                          state = this.states[currentState];
                      }
                      mapping = this.matchMappings[currentState];
                      lastIndex = index;
                      re = this.regExps[currentState];
                      re.lastIndex = index;
                  }
                  break;
              }

              if (value) {
                  if (typeof type == "string") {
                      if ((!rule || rule.merge !== false) && token.type === type) {
                          token.value += value;
                      } else {
                          if (token.type)
                              tokens.push(token);
                          token = {type: type, value: value};
                      }
                  } else if (type) {
                      if (token.type)
                          tokens.push(token);
                      token = {type: null, value: ""};
                      for (var i = 0; i < type.length; i++)
                          tokens.push(type[i]);
                  }
              }

              if (lastIndex == line.length)
                  break;

              lastIndex = index;

              if (tokens.length > MAX_TOKEN_COUNT) {
                  // chrome doens't show contents of text nodes with very long text
                  while (lastIndex < line.length) {
                      if (token.type)
                          tokens.push(token);
                      token = {
                          value: line.substring(lastIndex, lastIndex += 2000),
                          type: "overflow"
                      };
                  }
                  currentState = "start";
                  stack = [];
                  break;
              }
          }

          if (token.type)
              tokens.push(token);
          
          if (stack.length > 1) {
              if (stack[0] !== currentState)
                  stack.unshift(currentState);
          }
          return {
              tokens : tokens,
              state : stack.length ? stack : currentState
          };
      };

  }).call(Tokenizer.prototype);

  // Token conversion.
  // See <https://github.com/ajaxorg/ace/wiki/Creating-or-Extending-an-Edit-Mode#common-tokens>
  // This is not an exact match nor the best match that can be made.
  var tokenFromAceToken = {
    empty: null,
    text: null,

    // Keyword
    keyword: 'keyword',
      control: 'keyword',
      operator: 'operator',

    // Constants
    constant: 'atom',
      numeric: 'number',
      character: 'atom',
        escape: 'atom',

    // Variables
    variable: 'variable',
    parameter: 'variable-3',
    language: 'variable-2',  // Python's `self` uses that.

    // Comments
    comment: 'comment',
      line: 'comment',
        'double-slash': 'comment',
        'double-dash': 'comment',
        'number-sign': 'comment',
        percentage: 'comment',
      block: 'comment',
        documentation: 'comment',

    // String
    string: 'string',
      quoted: 'string',
        single: 'string',
        double: 'string',
        triple: 'string',
      unquoted: 'string',
      interpolated: 'string',
      regexp: 'string-2',

    meta: 'meta',
    literal: 'qualifier',
    support: 'builtin',

    // Markup
    markup: 'tag',
    underline: 'link',
    link: 'link',
    bold: 'strong',
    heading: 'header',
    italic: 'em',
    list: 'variable-2',
    numbered: 'variable-2',
    unnumbered: 'variable-2',
    quote: 'quote',
    raw: 'variable-2',  // Markdown's raw block uses that.

    // Invalid
    invalid: 'error',
    illegal: 'invalidchar',
    deprecated: 'error'
  };

  // Takes a list of Ace tokens, returns a (string) CodeMirror token.
  var cmTokenFromAceTokens = function(tokens) {
    var token = null;
    for (var i = 0; i < tokens.length; i++) {
      // Find the most specific token.
      if (tokenFromAceToken[tokens[i]] !== undefined) {
        token = tokenFromAceToken[tokens[i]];
      }
    }
    return token;
  };

  // Consume a token from plannedTokens.
  var consumeToken = function(stream, state) {
    var plannedToken = state.plannedTokens.shift();
    if (plannedToken === undefined) {
      return null;
    }
    stream.match(plannedToken.value);
    var tokens = plannedToken.type.split('.');
    return cmTokenFromAceTokens(tokens);
  };

  var matchToken = function(stream, state) {
    // Anormal start: we already have planned tokens to consume.
    if (state.plannedTokens.length > 0) {
      return consumeToken(stream, state);
    }

    // Normal start.
    var currentState = state.current;
    var currentLine = stream.match(/.*$/, false)[0];
    var tokenized = tokenizer.getLineTokens(currentLine, currentState);
    // We got a {tokens, state} object.
    // Each token is a {value, type} object.
    state.plannedTokens = tokenized.tokens;
    state.current = tokenized.state;

    // Consume a token.
    return consumeToken(stream, state);
  }

  // Initialize all state.
  var aceHighlightRules = new HighlightRules();
  var tokenizer = new Tokenizer(aceHighlightRules.$rules);

  return {
    startState: function() {
      return {
        current: 'start',
        // List of {value, type}, with type being an Ace token string.
        plannedTokens: []
      };
    },
    blankLine: function(state) { matchToken('', state); },
    token: matchToken,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "%",
    fold: ['indent', 'comment']
  };
});

CodeMirror.defineMIME("text/x-logtalk", "logtalk");
