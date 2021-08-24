/**
  * 
  * Tau Prolog. A Prolog interpreter in JavaScript.
  * 
  * Copyright (C) 2017 - 2018 José Antonio Riaza Valverde
  * 
  * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  * 
  * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  * 
  * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  * 
  * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
  * 
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * 
  **/

(function() {
	
	// VERSION
	var version = { major: 0, minor: 2, patch: 56, status: "beta" };
	
	
	
	// PARSER
	
	var indexOf;
	if(!Array.prototype.indexOf) {
		indexOf = function(array, elem) {
			var len = array.length;
			for(var i = 0; i < len; i++) {
				if(elem === array[i]) return i;
			}
			return -1;
		};
	} else {
		indexOf = function(array, elem) {
			return array.indexOf(elem);
		};
	}

	var reduce = function(array, fn) {
		if(array.length === 0) return undefined;
		var elem = array[0];
		var len = array.length;
		for(var i = 1; i < len; i++) {
			elem = fn(elem, array[i]);
		}
		return elem;
	};

	var map;
	if(!Array.prototype.map) {
		map = function(array, fn) {
			var a = [];
			var len = array.length;
			for(var i = 0; i < len; i++) {
				a.push( fn(array[i]) );
			}
			return a;
		};
	} else {
		map = function(array, fn) {
			return array.map(fn);
		};
	}
	
	var filter;
	if(!Array.prototype.filter) {
		filter = function(array, fn) {
			var a = [];
			var len = array.length;
			for(var i = 0; i < len; i++) {
				if(fn(array[i]))
					a.push( array[i] );
			}
			return a;
		};
	} else {
		filter = function(array, fn) {
			return array.filter(fn);
		};
	}
	
	var codePointAt;
	if(!String.prototype.codePointAt) {
		codePointAt = function(str, i) {
			return str.charCodeAt(i);
		};
	} else {
		codePointAt = function(str, i) {
			return str.codePointAt(i);
		};
	}
	
	var fromCodePoint;
	if(!String.fromCodePoint) {
		fromCodePoint = function() {
			return String.fromCharCode.apply(null, arguments);
		};
	} else {
		fromCodePoint = function() {
			return String.fromCodePoint.apply(null, arguments);
		};
	}



	var ERROR = 0;
	var SUCCESS = 1;

	var regex_escape = /(\\a)|(\\b)|(\\f)|(\\n)|(\\r)|(\\t)|(\\v)|\\x([0-9a-fA-F]+)\\|\\([0-7]+)\\|(\\\\)|(\\')|('')|(\\")|(\\`)|(\\.)|(.)/g;
	var escape_map = {"\\a": 7, "\\b": 8, "\\f": 12, "\\n": 10, "\\r": 13, "\\t": 9, "\\v": 11};
	function escape(str) {
		var s = [];
		var _error = false;
		str.replace(regex_escape, function(match, a, b, f, n, r, t, v, hex, octal, back, single, dsingle, double, backquote, error, char) {
			switch(true) {
				case hex !== undefined:
					s.push( parseInt(hex, 16) );
					return "";
				case octal !== undefined:
					s.push( parseInt(octal, 8) );
					return "";
				case back !== undefined:
				case single !== undefined:
				case dsingle !== undefined:
				case double !== undefined:
				case backquote !== undefined:
					s.push( codePointAt(match.substr(1),0) );
					return "";
				case char !== undefined:
					s.push( codePointAt(char,0) );
					return "";
				case error !== undefined:
					_error = true;
				default:
					s.push(escape_map[match]);
					return "";
			}
		});
		if(_error)
			return null;
		return s;
	}

	// Escape atoms
	function escapeAtom(str, quote) {
		var atom = '';
		if( str.length < 2 ) return str;
		try {
			str = str.replace(/\\([0-7]+)\\/g, function(match, g1) {
				return fromCodePoint(parseInt(g1, 8));
			});
			str = str.replace(/\\x([0-9a-fA-F]+)\\/g, function(match, g1) {
				return fromCodePoint(parseInt(g1, 16));
			});
		} catch(error) {
			return null;
		}
		for( var i = 0; i < str.length; i++) {
			var a = str.charAt(i);
			var b = str.charAt(i+1);
			if( a === quote && b === quote ) {
				i++;
				atom += quote;
			} else if( a === '\\' ) {
				if( ['a','b','f','n','r','t','v',"'",'"','\\','\a','\b','\f','\n','\r','\t','\v'].indexOf(b) !== -1 ) {
					i += 1;
					switch( b ) {
						case 'a': atom += '\a'; break;
						case 'b': atom += '\b'; break;
						case 'f': atom += '\f'; break;
						case 'n': atom += '\n'; break;
						case 'r': atom += '\r'; break;
						case 't': atom += '\t'; break;
						case 'v': atom += '\v'; break;
						case "'": atom += "'"; break;
						case '"': atom += '"'; break;
						case '\\': atom += '\\'; break;
					}
				} else {
					return null;
				}
			} else {
				atom += a;
			}
		}
		return atom;
	}
	
	// Redo escape
	function redoEscape(str) {
		var atom = '';
		for( var i = 0; i < str.length; i++) {
			switch( str.charAt(i) ) {
				case "'": atom += "\\'"; break;
				case '\\': atom += '\\\\'; break;
				//case '\a': atom += '\\a'; break;
				case '\b': atom += '\\b'; break;
				case '\f': atom += '\\f'; break;
				case '\n': atom += '\\n'; break;
				case '\r': atom += '\\r'; break;
				case '\t': atom += '\\t'; break;
				case '\v': atom += '\\v'; break;
				default: atom += str.charAt(i); break;
			}
		}
		return atom;
	}

	// String to num
	function convertNum(num) {
		var n = num.substr(2);
		switch(num.substr(0,2).toLowerCase()) {
			case "0x":
				return parseInt(n, 16);
			case "0b":
				return parseInt(n, 2);
			case "0o":
				return parseInt(n, 8);
			case "0'":
				return escape(n)[0];
			default:
				return parseFloat(num);
		}
	}

	// Regular expressions for tokens
	var rules = {
		whitespace: /^\s*(?:(?:%.*)|(?:\/\*(?:\n|\r|.)*?\*\/)|(?:\s+))\s*/,
		variable: /^(?:[A-Z_][a-zA-Z0-9_]*)/,
		atom: /^(\!|,|;|[a-z][0-9a-zA-Z_]*|[#\$\&\*\+\-\.\/\:\<\=\>\?\@\^\~\\]+|'(?:[^']*?(?:\\(?:x?\d+)?\\)*(?:'')*(?:\\')*)*')/,
		number: /^(?:0o[0-7]+|0x[0-9a-fA-F]+|0b[01]+|0'(?:''|\\[abfnrtv\\'"`]|\\x?\d+\\|[^\\])|\d+(?:\.\d+(?:[eE][+-]?\d+)?)?)/,
		string: /^(?:"([^"]|""|\\")*"|`([^`]|``|\\`)*`)/,
		l_brace: /^(?:\[)/,
		r_brace: /^(?:\])/,
		l_bracket: /^(?:\{)/,
		r_bracket: /^(?:\})/,
		bar: /^(?:\|)/,
		l_paren: /^(?:\()/,
		r_paren: /^(?:\))/
	};

	// Replace chars of char_conversion session
	function replace( thread, text ) {
		if( thread.getFlag( "char_conversion" ).id === "on" ) {
			return text.replace(/./g, function(char) {
				return thread.getCharConversion( char );
			});
		}
		return text;
	}

	// Tokenize strings
	function Tokenizer(thread) {
		this.thread = thread;
		this.text = ""; // Current text to be analized
		this.tokens = []; // Consumed tokens
	}

	Tokenizer.prototype.set_last_tokens = function(tokens) {
		return this.tokens = tokens;
	};

	Tokenizer.prototype.new_text = function(text) {
		this.text = text;
		this.tokens = [];
	};

	Tokenizer.prototype.get_tokens = function(init) {
		var text;
		var len = 0; // Total length respect to text
		var line = 0;
		var start = 0;
		var tokens = [];
		var last_in_blank = false;

		if(init) {
			var token = this.tokens[init-1];
			len = token.len;
			text = replace( this.thread, this.text.substr(token.len) );
			line = token.line;
			start = token.start;
		}
		else
			text = this.text;


		// If there is nothing to be analized, return null
		if(/^\s*$/.test(text))
			return null;

		while(text !== "") {
			var matches = [];
			var last_is_blank = false;

			if(/^\n/.exec(text) !== null) {
				line++;
				start = 0;
				len++;
				text = text.replace(/\n/, "");
				last_in_blank = true;
				continue;
			}

			for(var rule in rules) {
				if(rules.hasOwnProperty(rule)) {
					var matchs = rules[rule].exec( text );
					if(matchs) {
						matches.push({
							value: matchs[0],
							name: rule,
							matches: matchs
						});
					}
				}
			}

			// Lexical error
			if(!matches.length)
				return this.set_last_tokens( [{ value: text, matches: [], name: "lexical", line: line, start: start }] );

			var token = reduce( matches, function(a, b) {
				return a.value.length >= b.value.length ? a : b;
			} );

			token.start = start;
			token.line = line;

			text = text.replace(token.value, "");
			start += token.value.length;
			len += token.value.length;

			switch(token.name) {
				case "atom":
					token.raw = token.value;
					if(token.value.charAt(0) === "'") {
						token.value = escapeAtom( token.value.substr(1, token.value.length - 2), "'" );
						if( token.value === null ) {
							token.name = "lexical";
							token.value = "unknown escape sequence";
						}
					}
					break;
				case "number":
					token.float = token.value.match(/[.eE]/) !== null && token.value !== "0'.";
					token.value = convertNum( token.value );
					token.blank = last_is_blank;
					break;
				case "string":
					var del = token.value.charAt(0);
					token.value = escapeAtom( token.value.substr(1, token.value.length - 2), del );
					if( token.value === null ) {
						token.name = "lexical";
						token.value = "unknown escape sequence";
					}
					break;
				case "whitespace":
					var last = tokens[tokens.length-1];
					if(last) last.space = true;
					last_is_blank = true;
					continue;
				case "r_bracket":
					if( tokens.length > 0 && tokens[tokens.length-1].name === "l_bracket" ) {
						token = tokens.pop();
						token.name = "atom";
						token.value = "{}";
						token.raw = "{}";
						token.space = false;
					}
					break;
				case "r_brace":
					if( tokens.length > 0 && tokens[tokens.length-1].name === "l_brace" ) {
						token = tokens.pop();
						token.name = "atom";
						token.value = "[]";
						token.raw = "[]";
						token.space = false;
					}
					break;
			}
			token.len = len;
			tokens.push( token );
			last_is_blank = false;
		}

		var t = this.set_last_tokens( tokens );
		return t.length === 0 ? null : t;
	};

	// Parse an expression
	function parseExpr(thread, tokens, start, priority, toplevel) {
		if(!tokens[start]) return {type: ERROR, value: pl.error.syntax(tokens[start-1], "expression expected", true)};
		var error;

		if(priority === "0") {
			var token = tokens[start];
			switch(token.name) {
				case "number":
					return {type: SUCCESS, len: start+1, value: new pl.type.Num(token.value, token.float)};
				case "variable":
					return {type: SUCCESS, len: start+1, value: new pl.type.Var(token.value)};
				case "string":
					var str;
					switch( thread.getFlag( "double_quotes" ).id ) {
						case "atom":;
							str = new Term( token.value, [] );
							break;
						case "codes":
							str = new Term( "[]", [] );
							for(var i = token.value.length-1; i >= 0; i-- )
								str = new Term( ".", [new pl.type.Num( codePointAt(token.value,i), false ), str] );
							break;
						case "chars":
							str = new Term( "[]", [] );
							for(var i = token.value.length-1; i >= 0; i-- )
								str = new Term( ".", [new pl.type.Term( token.value.charAt(i), [] ), str] );
							break;
					}
					return {type: SUCCESS, len: start+1, value: str};
				case "l_paren":
					var expr = parseExpr(thread, tokens, start+1, thread.__get_max_priority(), true);
					if(expr.type !== SUCCESS) return expr;
					if(tokens[expr.len] && tokens[expr.len].name === "r_paren") {
						expr.len++;
						return expr;
					}
					return {type: ERROR, derived: true, value: pl.error.syntax(tokens[expr.len] ? tokens[expr.len] : tokens[expr.len-1], ") or operator expected", !tokens[expr.len])}
				case "l_bracket":
					var expr = parseExpr(thread, tokens, start+1, thread.__get_max_priority(), true);
					if(expr.type !== SUCCESS) return expr;
					if(tokens[expr.len] && tokens[expr.len].name === "r_bracket") {
						expr.len++;
						expr.value = new Term( "{}", [expr.value] );
						return expr;
					}
					return {type: ERROR, derived: true, value: pl.error.syntax(tokens[expr.len] ? tokens[expr.len] : tokens[expr.len-1], "} or operator expected", !tokens[expr.len])}
			}
			// Compound term
			var result = parseTerm(thread, tokens, start, toplevel);
			if(result.type === SUCCESS || result.derived)
				return result;
			// List
			result = parseList(thread, tokens, start);
			if(result.type === SUCCESS || result.derived)
				return result;
			// Unexpected
			return {type: ERROR, derived: false, value: pl.error.syntax(tokens[start], "unexpected token")};
		}

		var max_priority = thread.__get_max_priority();
		var next_priority = thread.__get_next_priority(priority);
		var aux_start = start;
		
		// Prefix operators
		if(tokens[start].name === "atom" && tokens[start+1] && (tokens[start].space || tokens[start+1].name !== "l_paren")) {
			var token = tokens[start++];
			var classes = thread.__lookup_operator_classes(priority, token.value);
			
			// Signed number
			if(token.value === "-") {
				var number = tokens[start];
				if(number && number.name === "number") {
					return {
						value: new pl.type.Num( token.value==="-" ? -number.value : number.value, number.float ),
						len: ++start,
						type: SUCCESS
					};
				}
			}
			
			// Associative prefix operator
			if(classes && classes.indexOf("fy") > -1) {
				var expr = parseExpr(thread, tokens, start, priority, toplevel);
				if(expr.type !== ERROR) {
					return {
						value: new pl.type.Term(token.value, [expr.value]),
						len: expr.len,
						type: SUCCESS
					};
				} else {
					error = expr;
				}
			// Non-associative prefix operator
			} else if(classes && classes.indexOf("fx") > -1) {
				var expr = parseExpr(thread, tokens, start, next_priority, toplevel);
				if(expr.type !== ERROR) {
					return {
						value: new pl.type.Term(token.value, [expr.value]),
						len: expr.len,
						type: SUCCESS
					};
				} else {
					error = expr;
				}
			}
		}

		start = aux_start;
		var expr = parseExpr(thread, tokens, start, next_priority, toplevel);
		if(expr.type === SUCCESS) {
			start = expr.len;
			var token = tokens[start];
			if(tokens[start] && (
				tokens[start].name === "atom" && thread.__lookup_operator_classes(priority, token.value) ||
				tokens[start].name === "bar" && thread.__lookup_operator_classes(priority, "|")
			) ) {
				var next_priority_lt = next_priority;
				var next_priority_eq = priority;
				var classes = thread.__lookup_operator_classes(priority, token.value);

				if(classes.indexOf("xf") > -1) {
					return {
						value: new pl.type.Term(token.value, [expr.value]),
						len: ++expr.len,
						type: SUCCESS
					};
				} else if(classes.indexOf("xfx") > -1) {
					var expr2 = parseExpr(thread, tokens, start + 1, next_priority_lt, toplevel);
					if(expr2.type === SUCCESS) {
						return {
							value: new pl.type.Term(token.value, [expr.value, expr2.value]),
							len: expr2.len,
							type: SUCCESS
						};
					} else {
						expr2.derived = true;
						return expr2;
					}
				} else if(classes.indexOf("xfy") > -1) {
					var expr2 = parseExpr(thread, tokens, start + 1, next_priority_eq, toplevel);
					if(expr2.type === SUCCESS) {
						return {
							value: new pl.type.Term(token.value, [expr.value, expr2.value]),
							len: expr2.len,
							type: SUCCESS
						};
					} else {
						expr2.derived = true;
						return expr2;
					}
				} else if(expr.type !== ERROR) {
					while(true) {
						start = expr.len;
						var token = tokens[start];
						if(token && token.name === "atom" && thread.__lookup_operator_classes(priority, token.value)) {
							var classes = thread.__lookup_operator_classes(priority, token.value);
							if( classes.indexOf("yf") > -1 ) {
								expr = {
									value: new pl.type.Term(token.value, [expr.value]),
									len: ++start,
									type: SUCCESS
								};
							} else if( classes.indexOf("yfx") > -1 ) {
								var expr2 = parseExpr(thread, tokens, ++start, next_priority_lt, toplevel);
								if(expr2.type === ERROR) {
									expr2.derived = true;
									return expr2;
								}
								start = expr2.len;
								expr = {
									value: new pl.type.Term(token.value, [expr.value, expr2.value]),
									len: start,
									type: SUCCESS
								};
							} else { break; }
						} else { break; }
					}
				}
			} else {
				error = {type: ERROR, value: pl.error.syntax(tokens[expr.len-1], "operator expected")};
			}
			return expr;
		}
		return expr;
	}

	// Parse a compound term
	function parseTerm(thread, tokens, start, toplevel) {
		if(!tokens[start] || (tokens[start].name === "atom" && tokens[start].raw === "." && !toplevel && (tokens[start].space || !tokens[start+1] || tokens[start+1].name !== "l_paren")))
			return {type: ERROR, derived: false, value: pl.error.syntax(tokens[start-1], "unfounded token")};
		var atom = tokens[start];
		var exprs = [];
		if(tokens[start].name === "atom" && tokens[start].raw !== ",") {
			start++;
			if(tokens[start-1].space) return {type: SUCCESS, len: start, value: new pl.type.Term(atom.value, exprs)};
			if(tokens[start] && tokens[start].name === "l_paren") {
				if(tokens[start+1] && tokens[start+1].name === "r_paren") 
					return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start+1], "argument expected")};
				var expr = parseExpr(thread, tokens, ++start, "999", true);
				if(expr.type === ERROR) {
					if( expr.derived )
						return expr;
					else
						return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start] ? tokens[start] : tokens[start-1], "argument expected", !tokens[start])};
				}
				exprs.push(expr.value);
				start = expr.len;
				while(tokens[start] && tokens[start].name === "atom" && tokens[start].value === ",") {
					expr = parseExpr(thread, tokens, start+1, "999", true);
					if(expr.type === ERROR) {
						if( expr.derived )
							return expr;
						else
							return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start+1] ? tokens[start+1] : tokens[start], "argument expected", !tokens[start+1])};
					}
					exprs.push(expr.value);
					start = expr.len;
				}
				if(tokens[start] && tokens[start].name === "r_paren") start++;
				else return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start] ? tokens[start] : tokens[start-1], ", or ) expected", !tokens[start])};
			}
			return {type: SUCCESS, len: start, value: new pl.type.Term(atom.value, exprs)};
		}
		return {type: ERROR, derived: false, value: pl.error.syntax(tokens[start], "term expected")};
	}

	// Parse a list
	function parseList(thread, tokens, start) {
		if(!tokens[start]) 
			return {type: ERROR, derived: false, value: pl.error.syntax(tokens[start-1], "[ expected")};
		if(tokens[start] && tokens[start].name === "l_brace") {
			var expr = parseExpr(thread, tokens, ++start, "999", true);
			var exprs = [expr.value];
			var cons = undefined;

			if(expr.type === ERROR) {
				if(tokens[start] && tokens[start].name === "r_brace") {
					return {type: SUCCESS, len: start+1, value: new pl.type.Term("[]", [])};
				}
				return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start], "] expected")};
			}
			
			start = expr.len;

			while(tokens[start] && tokens[start].name === "atom" && tokens[start].value === ",") {
				expr = parseExpr(thread, tokens, start+1, "999", true);
				if(expr.type === ERROR) {
					if( expr.derived )
						return expr;
					else
						return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start+1] ? tokens[start+1] : tokens[start], "argument expected", !tokens[start+1])};
				}
				exprs.push(expr.value);
				start = expr.len;
			}
			var bar = false
			if(tokens[start] && tokens[start].name === "bar") {
				bar = true;
				expr = parseExpr(thread, tokens, start+1, "999", true);
				if(expr.type === ERROR) {
					if( expr.derived )
						return expr;
					else
						return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start+1] ? tokens[start+1] : tokens[start], "argument expected", !tokens[start+1])};
				}
				cons = expr.value;
				start = expr.len;
			}
			if(tokens[start] && tokens[start].name === "r_brace")
				return {type: SUCCESS, len: start+1, value: arrayToList(exprs, cons) };
			else
				return {type: ERROR, derived: true, value: pl.error.syntax(tokens[start] ? tokens[start] : tokens[start-1], bar ? "] expected" : ", or | or ] expected", !tokens[start])};
		}
		return {type: ERROR, derived: false, value: pl.error.syntax(tokens[start], "list expected")};
	}

	// Parse a rule
	function parseRule(thread, tokens, start) {
		var line = tokens[start].line;
		var expr = parseExpr(thread, tokens, start, thread.__get_max_priority(), false);
		var rule = null;
		var obj;
		if(expr.type !== ERROR) {
			start = expr.len;
			if(tokens[start] && tokens[start].name === "atom" && tokens[start].raw === ".") {
				start++;
				if( pl.type.is_term(expr.value) ) {
					if(expr.value.indicator === ":-/2") {
						rule = new pl.type.Rule(expr.value.args[0], body_conversion(expr.value.args[1]))
						obj = {
							value: rule,
							len: start,
							type: SUCCESS
						};
					} else if(expr.value.indicator === "-->/2") {
						rule = rule_to_dcg(new pl.type.Rule(expr.value.args[0], expr.value.args[1]), thread);
						rule.body = body_conversion( rule.body );
						obj = {
							value: rule,
							len: start,
							type: pl.type.is_rule( rule ) ? SUCCESS : ERROR
						};
					} else {
						rule = new pl.type.Rule(expr.value, null);
						obj = {
							value: rule,
							len: start,
							type: SUCCESS
						};
					}
					if( rule ) {
						var singleton = rule.singleton_variables();
						if( singleton.length > 0 )
							thread.throw_warning( pl.warning.singleton( singleton, rule.head.indicator, line ) );
					}
					return obj;
				} else {
					return { type: ERROR, value: pl.error.syntax(tokens[start], "callable expected") };
				}
			} else {
				return { type: ERROR, value: pl.error.syntax(tokens[start] ? tokens[start] : tokens[start-1], ". or operator expected") };
			}
		}
		return expr;
	}

	// Parse a program
	function parseProgram(thread, string, options) {
		options = options ? options : {};
		options.from = options.from ? options.from : "$tau-js";
		options.reconsult = options.reconsult !== undefined ? options.reconsult : true;
		var tokenizer = new Tokenizer( thread );
		var reconsulted = {};
		var indicator;
		tokenizer.new_text( string );
		var n = 0;
		var tokens = tokenizer.get_tokens( n );
		do {
			if( tokens === null || !tokens[n] ) break;
			var expr = parseRule(thread, tokens, n);
			if( expr.type === ERROR ) {
				return new Term("throw", [expr.value]);
			} else if(expr.value.body === null && expr.value.head.indicator === "?-/1") {
				var n_thread = new Thread( thread.session );
				n_thread.add_goal( expr.value.head.args[0] );
				n_thread.answer( function( answer ) {
					if( pl.type.is_error( answer ) ) {
						thread.throw_warning( answer.args[0] );
					} else if( answer === false || answer === null ) {
						thread.throw_warning( pl.warning.failed_goal( expr.value.head.args[0], expr.len ) );
					}
				} );
				n = expr.len;
				var result = true;
			} else if(expr.value.body === null && expr.value.head.indicator === ":-/1") {
				var result = thread.run_directive(expr.value.head.args[0]);
				n = expr.len;
				if(expr.value.head.args[0].indicator === "char_conversion/2") {
					tokens = tokenizer.get_tokens( n );
					n = 0;
				}
			} else {
				indicator = expr.value.head.indicator;
				if( options.reconsult !== false && reconsulted[indicator] !== true && !thread.is_multifile_predicate( indicator ) ) {
					thread.session.rules[indicator] = filter( thread.session.rules[indicator] || [], function( rule ) { return rule.dynamic; } );
					reconsulted[indicator] = true;
				}
				var result = thread.add_rule(expr.value, options);
				n = expr.len;
			}
			if(!result) {
				return result;
			}
		} while( true );
		return true;
	}
	
	// Parse a query
	function parseQuery(thread, string) {
		var tokenizer = new Tokenizer( thread );
		tokenizer.new_text( string );
		var n = 0;
		do {
			var tokens = tokenizer.get_tokens( n );
			if( tokens === null ) break;
			var expr = parseExpr(thread, tokens, 0, thread.__get_max_priority(), false);
			if(expr.type !== ERROR) {
				var expr_position = expr.len;
				var tokens_pos = expr_position;
				if(tokens[expr_position] && tokens[expr_position].name === "atom" && tokens[expr_position].raw === ".") {
					thread.add_goal( body_conversion(expr.value) );
				} else {
					var token = tokens[expr_position];
					return new Term("throw", [pl.error.syntax(token ? token : tokens[expr_position-1], ". or operator expected", !token)] );
				}
				
				n = expr.len + 1;
			} else {
				return new Term("throw", [expr.value]);
			}
		} while( true );
		return true;
	}


	
	// UTILS

	// Rule to DCG
	function rule_to_dcg(rule, thread) {
		rule = rule.rename( thread );
		var begin = thread.next_free_variable();
		var dcg = body_to_dcg( rule.body, begin, thread );
		if( dcg.error ) return dcg.value;
		rule.body = dcg.value;
		rule.head.args = rule.head.args.concat([begin,dcg.variable]);
		rule.head = new Term(rule.head.id, rule.head.args);
		return rule;
	}

	// Body to DCG
	function body_to_dcg(expr, last, thread) {
		var free;
		if( pl.type.is_term( expr ) && expr.indicator === "!/0" ) {
			return {
				value: expr,
				variable: last,
				error: false
			};
		} else if( pl.type.is_term( expr ) && expr.indicator === ",/2" ) {
			var left = body_to_dcg(expr.args[0], last, thread);
			if( left.error ) return left;
			var right = body_to_dcg(expr.args[1], left.variable, thread);
			if( right.error ) return right;
			return {
				value: new Term(',', [left.value, right.value]),
				variable: right.variable,
				error: false
			};
		} else if( pl.type.is_term( expr ) && expr.indicator === "{}/1" ) {
			return {
				value: expr.args[0],
				variable: last,
				error: false
			};
		} else if( pl.type.is_empty_list( expr ) ) {
			return {
				value: new Term("true", []),
				variable: last,
				error: false
			};
		} else if( pl.type.is_list( expr ) ) {
			free = thread.next_free_variable();
			var pointer = expr;
			var prev;
			while( pointer.indicator === "./2" ) {
				prev = pointer;
				pointer = pointer.args[1];
			}
			if( pl.type.is_variable( pointer ) ) {
				return {
					value: pl.error.instantiation("DCG"),
					variable: last,
					error: true
				};
			} else if( !pl.type.is_empty_list( pointer ) ) {
				return {
					value: pl.error.type("list", expr, "DCG"),
					variable: last,
					error: true
				};
			} else {
				prev.args[1] = free;
				return {
					value: new Term("=", [last, expr]),
					variable: free,
					error: false
				};
			}
		} else if( pl.type.is_callable( expr ) ) {
			free = thread.next_free_variable();
			expr.args = expr.args.concat([last,free]);
			expr = new Term( expr.id, expr.args );
			return {
				value: expr,
				variable: free,
				error: false
			};
		} else {
			return {
				value: pl.error.type( "callable", expr, "DCG" ),
				variable: last,
				error: true
			};
		}
	}
	
	// Body conversion
	function body_conversion( expr ) {
		if( pl.type.is_variable( expr ) )
			return new Term( "call", [expr] );
		else if( pl.type.is_term( expr ) && [",/2", ";/2", "->/2"].indexOf(expr.indicator) !== -1 )
			return new Term( expr.id, [body_conversion( expr.args[0] ), body_conversion( expr.args[1] )] );
		return expr;
	}
	
	// List to Prolog list
	function arrayToList( array, cons ) {
		var list = cons ? cons : new pl.type.Term( "[]", [] );
		for(var i = array.length-1; i >= 0; i-- )
			list = new pl.type.Term( ".", [array[i], list] );
		return list;
	}
	
	// Remove element from array
	function remove( array, element ) {
		for( var i = array.length - 1; i >= 0; i-- ) {
			if( array[i] === element ) {
				array.splice(i, 1);
			}
		}
	}
	
	// Remove duplicate elements
	function nub( array ) {
		var seen = {};
		var unique = [];
		for( var i = 0; i < array.length; i++ ) {
			if( !(array[i] in seen) ) {
				unique.push( array[i] );
				seen[array[i]] = true;
			}
		}
		return unique;
	}
	
	// Retract a rule
	function retract( thread, point, indicator, rule ) {
		if( thread.session.rules[indicator] !== null ) {
			for( var i = 0; i < thread.session.rules[indicator].length; i++ ) {
				if( thread.session.rules[indicator][i] === rule ) {
					thread.session.rules[indicator].splice( i, 1 );
					thread.success( point );
					break;
				}
			}
		}
	}
	
	// call/n
	function callN( n ) {
		return function ( thread, point, atom ) {
			var closure = atom.args[0], args = atom.args.slice(1, n);
			if( pl.type.is_variable( closure ) ) {
				thread.throwError( pl.error.instantiation( thread.level ) );
			} else if( !pl.type.is_callable( closure ) ) {
				thread.throwError( pl.error.type( "callable", closure, thread.level ) );
			} else {
				var goal = new Term( closure.id, closure.args.concat( args ) );
				thread.prepend( [new State( point.goal.replace( goal ), point.substitution, point )] );
			}
		};
	}
	
	// String to indicator
	function str_indicator( str ) {
		for( var i = str.length - 1; i >= 0; i-- )
			if( str.charAt(i) === "/" )
				return new Term( "/", [new Term( str.substring(0, i) ), new Num( parseInt(str.substring(i+1)), false )] );
	}
	
	

	// PROLOG OBJECTS
	
	// Variables
	function Var( id ) {
		this.id = id;
	}
	
	// Numbers
	function Num( value, is_float ) {
		this.is_float = is_float !== undefined ? is_float : parseInt( value ) !== value;
		this.value = this.is_float ? value : parseInt( value );
	}
	
	// Terms
	var term_ref = 0;
	function Term( id, args, ref ) {
		this.ref = ref || ++term_ref;
		this.id = id;
		this.args = args || [];
		this.indicator = id + "/" + this.args.length;
	}
	
	// Substitutions
	function Substitution( links ) {
		links = links || {};
		this.links = links;
	}
	
	// States
	function State( goal, subs, parent ) {
		subs = subs || new Substitution();
		parent = parent || null;
		this.goal = goal;
		this.substitution = subs;
		this.parent = parent;
	}
	
	// Rules
	function Rule( head, body, dynamic ) {
		this.head = head;
		this.body = body;
		this.dynamic = dynamic ? dynamic : false;
	}

	// Session
	function Session( limit ) {
		limit = limit === undefined || limit <= 0 ? 1000 : limit;
		this.rules = {};
		this.src_predicates = {};
		this.rename = 0;
		this.modules = [];
		this.thread = new Thread( this );
		this.total_threads = 1;
		this.renamed_variables = {};
		this.public_predicates = {};
		this.multifile_predicates = {};
		this.limit = limit;
		this.format_success = function( state ) { return state.substitution; };
		this.format_error = function( state ) { return state.goal; };
		this.flag = {	
			bounded: pl.flag.bounded.value,
			max_integer: pl.flag.max_integer.value,
			min_integer: pl.flag.min_integer.value,
			integer_rounding_function: pl.flag.integer_rounding_function.value,
			char_conversion: pl.flag.char_conversion.value,
			debug: pl.flag.debug.value,
			max_arity: pl.flag.max_arity.value,
			unknown: pl.flag.unknown.value,
			double_quotes: pl.flag.double_quotes.value,
			occurs_check: pl.flag.occurs_check.value,
			dialect: pl.flag.dialect.value,
			version_data: pl.flag.version_data.value,
			nodejs: pl.flag.nodejs.value
		};
		this.__loaded_modules = [];
		this.__char_conversion = {};
		this.__operators = {
			1200: { ":-": ["fx", "xfx"],  "-->": ["xfx"], "?-": ["fx"] },
			1100: { ";": ["xfy"] },
			1050: { "->": ["xfy"] },
			1000: { ",": ["xfy"] },
			900: { "\\+": ["fy"] },
			700: {
				"=": ["xfx"], "\\=": ["xfx"], "==": ["xfx"], "\\==": ["xfx"],
				"@<": ["xfx"], "@=<": ["xfx"], "@>": ["xfx"], "@>=": ["xfx"],
				"=..": ["xfx"], "is": ["xfx"], "=:=": ["xfx"], "=\\=": ["xfx"],
				"<": ["xfx"], "=<": ["xfx"], ">": ["xfx"], ">=": ["xfx"]
			},
			600: { ":": ["xfy"] },
			500: { "+": ["yfx"], "-": ["yfx"], "/\\": ["yfx"], "\\/": ["yfx"] },
			400: {
				"*": ["yfx"], "/": ["yfx"], "//": ["yfx"], "rem": ["yfx"],
				"mod": ["yfx"], "<<": ["yfx"], ">>": ["yfx"]
			},
			200: { "**": ["xfx"], "^": ["xfy"], "-": ["fy"], "+": ["fy"], "\\": ["fy"] }
		};
	}
	
	// Threads
	function Thread( session ) {
		this.epoch = Date.now();
		this.session = session;
		this.session.total_threads++;
		this.total_steps = 0;
		this.cpu_time = 0;
		this.cpu_time_last = 0;
		this.points = [];
		this.debugger = false;
		this.debugger_states = [];
		this.level = "top_level/0";
		this.__calls = [];
		this.current_limit = this.session.limit;
		this.warnings = [];
	}
	
	// Modules
	function Module( id, rules, exports ) {
		this.id = id;
		this.rules = rules;
		this.exports = exports;
		pl.module[id] = this;
	}
	
	Module.prototype.exports_predicate = function( indicator ) {
		return this.exports.indexOf( indicator ) !== -1;
	};


	// PROLOG OBJECTS TO STRING
	
	// Variables
	Var.prototype.toString = function() {
		return this.id;
	};
	
	// Numbers
	Num.prototype.toString = function() {
		return this.is_float && indexOf(this.value.toString(), ".") === -1 ? this.value + ".0" : this.value.toString();
	};
	
	// Terms
	Term.prototype.toString = function() {
		switch( this.indicator ){
			case "[]/0":
			case "{}/0":
			case "!/0":
				return this.id;
			case "{}/1":
				return "{" + this.args[0].toString() + "}";
			case "./2":
				var list = "[" + this.args[0].toString();
				var pointer = this.args[1];
				while( pointer.indicator === "./2" ) {
					list += ", " + pointer.args[0].toString();
					pointer = pointer.args[1];
				}
				if( pointer.indicator !== "[]/0" ) {
					list += "|" + pointer.toString();
				}
				list += "]";
				return list;
			case ",/2":
				return "(" + this.args[0].toString() + ", " + this.args[1].toString() + ")";
			default:
				var id = this.id;
				if( ! /^(!|,|;|[a-z][0-9a-zA-Z_]*)$/.test( id ) && id !== "{}" && id !== "[]" )
					id = "'" + redoEscape(id) + "'";
				return id + (this.args.length ? "(" + this.args.join(", ") + ")" : "");
		}
	};
	
	// Substitutions
	Substitution.prototype.toString = function() {
		var str = "{";
		for( var link in this.links ) {
			if(!this.links.hasOwnProperty(link)) continue;
			if( str !== "{" ) {
				str += ", ";
			}
			str += link + "/" + this.links[link].toString();
		}
		str += "}";
		return str;
	};
	
	// States
	State.prototype.toString = function() {
		if( this.goal === null ) {
			return "<" + this.substitution.toString() + ">";
		} else {
			return "<" + this.goal.toString() + ", " + this.substitution.toString() + ">";
		}
	};
	
	// Rules
	Rule.prototype.toString = function() {
		if( !this.body ) {
			return this.head + ".";
		} else {
			return this.head + " :- " + this.body + ".";
		}
	};
	
	// Session
	Session.prototype.toString = function() {
		var str = "";
		for(var i = 0; i < this.modules.length; i++) {
			str += ":- use_module(library(" + this.modules[i] + ")).\n";
		}
		str += "\n";
		for(key in this.rules) {
			for(i = 0; i < this.rules[key].length; i++) {
				str += this.rules[key][i].toString();
				str += "\n";
			}
		}
		return str;
	};
	
	
	
	// CLONE PROLOG OBJECTS
	
	// Variables
	Var.prototype.clone = function() {
		return new Var( this.id );
	};
	
	// Numbers
	Num.prototype.clone = function() {
		return new Num( this.value, this.is_float );
	};
	
	// Terms
	Term.prototype.clone = function() {
		return new Term( this.id, map( this.args, function( arg ) {
			return arg.clone();
		} ) );
	};
	
	// Substitutions
	Substitution.prototype.clone = function() {
		var links = {};
		for( var link in this.links ) {
			if(!this.links.hasOwnProperty(link)) continue;
			links[link] = this.links[link].clone();
		}
		return new Substitution( links );
	};
	
	// States
	State.prototype.clone = function() {
		return new State( this.goal.clone(), this.substitution.clone(), this.parent );
	};
	
	// Rules
	Rule.prototype.clone = function() {
		return new Rule( this.head.clone(), this.body !== null ? this.body.clone() : null );
	};
	
	
	
	// COMPARE PROLOG OBJECTS
	
	// Variables
	Var.prototype.equals = function( obj ) {
		return pl.type.is_variable( obj ) && this.id === obj.id;
	};
	
	// Numbers
	Num.prototype.equals = function( obj ) {
		return pl.type.is_number( obj ) && this.value === obj.value && this.is_float === obj.is_float;
	};
	
	// Terms
	Term.prototype.equals = function( obj ) {
		if( !pl.type.is_term( obj ) || this.indicator !== obj.indicator ) {
			return false;
		}
		for( var i = 0; i < this.args.length; i++ ) {
			if( !this.args[i].equals( obj.args[i] ) ) {
				return false;
			}
		}
		return true;
	};
	
	// Substitutions
	Substitution.prototype.equals = function( obj ) {
	var link;
		if( !pl.type.is_substitution( obj ) ) {
			return false;
		}
		for( link in this.links ) {
			if(!this.links.hasOwnProperty(link)) continue;
			if( !obj.links[link] || !this.links[link].equals( obj.links[link] ) ) {
				return false;
			}
		}
		for( link in obj.links ) {
			if(!obj.links.hasOwnProperty(link)) continue;
			if( !this.links[link] ) {
				return false;
			}
		}
		return true;
	};
	
	// States
	State.prototype.equals = function( obj ) {
		return pl.type.is_state( obj ) && this.goal.equals( obj.goal ) && this.substitution.equals( obj.substitution ) && this.parent === obj.parent;
	};
	
	// Rules
	Rule.prototype.equals = function( obj ) {
		return pl.type.is_rule( obj ) && this.head.equals( obj.head ) && (this.body === null && obj.body === null || this.body !== null && this.body.equals( obj.body ));
	};
	
	
	
	// RENAME VARIABLES OF PROLOG OBJECTS
	
	// Variables
	Var.prototype.rename = function( thread ) {
		return thread.get_free_variable( this );
	};
	
	// Numbers
	Num.prototype.rename = function( _ ) {
		return this;
	};
	
	// Terms
	Term.prototype.rename = function( thread ) {
		return new Term( this.id, map( this.args, function( arg ) {
			return arg.rename( thread );
		} ) );
	};
	
	// Rules
	Rule.prototype.rename = function( thread ) {
		return new Rule( this.head.rename( thread ), this.body !== null ? this.body.rename( thread ) : null );
	};
	
	
	
	// GET VARIABLES FROM PROLOG OBJECTS
	
	// Variables
	Var.prototype.variables = function() {
		return [this.id];
	};
	
	// Numbers
	Num.prototype.variables = function() {
		return [];
	};
	
	// Terms
	Term.prototype.variables = function() {
		return [].concat.apply( [], map( this.args, function( arg ) {
			return arg.variables();
		} ) );
	};
	
	// Rules
	Rule.prototype.variables = function() {
		if( this.body === null ) {
			return this.head.variables();
		} else {
			return this.head.variables().concat( this.body.variables() );
		}
	};
	
	
	
	// APPLY SUBSTITUTIONS TO PROLOG OBJECTS
	
	// Variables
	Var.prototype.apply = function( subs ) {
		if( subs.lookup( this.id ) ) {
			return subs.lookup( this.id );
		}
		return this;
	};
	
	// Numbers
	Num.prototype.apply = function( _ ) {
		return this;
	};
	
	// Terms
	Term.prototype.apply = function( subs ) {
		return new Term( this.id, map( this.args, function( arg ) {
			return arg.apply( subs );
		} ), this.ref );
	};
	
	// Rules
	Rule.prototype.apply = function( subs ) {
		return new Rule( this.head.apply( subs ), this.body !== null ? this.body.apply( subs ) : null );
	};
	
	// Substitutions
	Substitution.prototype.apply = function( subs ) {
		var link, links = {};
		for( link in this.links ) {
			if(!this.links.hasOwnProperty(link)) continue;
			links[link] = this.links[link].apply(subs);
		}
		return new Substitution( links );
	};
	
	
	
	// UNIFY PROLOG OBJECTS
	
	// Variables
	Var.prototype.unify = function( obj, occurs_check ) {
		if( occurs_check && indexOf( obj.variables(), this.id ) !== -1 && !pl.type.is_variable( obj ) ) {
			return null;
		}
		var links = {};
		links[this.id] = obj;
		return new State( obj, new Substitution( links ) );
	};
	
	// Numbers
	Num.prototype.unify = function( obj, _ ) {
		if( pl.type.is_number( obj ) && this.value === obj.value && this.is_float === obj.is_float ) {
			return new State( obj, new Substitution() );
		}
		return null;
	};
	
	// Terms
	Term.prototype.unify = function( obj, occurs_check ) {
		if( pl.type.is_term( obj ) && this.indicator === obj.indicator ) {
			var subs = new Substitution();
			for( var i = 0; i < this.args.length; i++ ) {
				var state = pl.unify( this.args[i].apply( subs ), obj.args[i].apply( subs ), occurs_check );
				if( state === null ) {
					return null;
				}
				for( var x in state.substitution.links ) subs.links[x] = state.substitution.links[x];
				subs = subs.apply( state.substitution );
			}
			return new State( this.apply( subs ), subs );
		}
		return null;
	};
	
	
	
	// SELECTION FUNCTION
	
	// Select term
	Term.prototype.select = function() {
		if( this.indicator === ",/2" ) {
			return this.args[0].select();
		} else {
			return this;
		}
	};
	
	// Replace term
	Term.prototype.replace = function( expr ) {
		if( this.indicator === ",/2" ) {
			if( this.args[0].indicator === ",/2" ) {
				return new Term( ",", [this.args[0].replace( expr ), this.args[1]] );
			} else {
				return expr === null ? this.args[1] : new Term( ",", [expr, this.args[1]] );
			}
		} else {
			return expr;
		}
	};

	// Search term
	Term.prototype.search = function( expr ) {
		if( pl.type.is_term( expr ) && expr.ref !== undefined && this.ref === expr.ref )
			return true;
		for( var i = 0; i < this.args.length; i++ )
			if( pl.type.is_term( this.args[i] ) && this.args[i].search( expr ) )
				return true;
		return false;
	};
	
	
	
	// PROLOG SESSIONS AND THREADS

	// Get conversion of the char
	Session.prototype.getCharConversion = function( char ) {
		return this.__char_conversion[char] || char;
	};
	Thread.prototype.getCharConversion = function( char ) {
		return this.session.getCharConversion( char );
	};
	
	// Parse an expression
	Session.prototype.parse = function( string ) {
		return this.thread.parse( string );
	};
	
	Thread.prototype.parse = function( string ) {
		var tokenizer = new Tokenizer( this );
		tokenizer.new_text( string );
		var tokens = tokenizer.get_tokens();
		if( tokens === null )
			return false;
		var expr = parseExpr(this, tokens, 0, this.__get_max_priority(), false);
		if( expr.len !== tokens.length )
			return false;
		return { value: expr.value, expr: expr, tokens: tokens };
	};
	
	// Get flag value
	Session.prototype.getFlag = function( flag ) {
		return this.flag[flag];
	};
	Thread.prototype.getFlag = function( flag ) {
		return this.session.getFlag( flag );
	};

	// Add a rule
	Session.prototype.add_rule = function( rule, options ) {
		options = options ? options : {};
		options.from = options.from ? options.from : "$tau-js";
		this.src_predicates[rule.head.indicator] = options.from;
		if(!this.rules[rule.head.indicator]) {
			this.rules[rule.head.indicator] = [];
		}
		this.rules[rule.head.indicator].push(rule);
		if( !this.public_predicates.hasOwnProperty( rule.head.indicator ) )
			this.public_predicates[rule.head.indicator] = false;
		return true;
	};
	Thread.prototype.add_rule = function( rule, options ) {
		return this.session.add_rule( rule, options );
	};

	// Run a directive
	Session.prototype.run_directive = function( directive ) {
		this.thread.run_directive( directive );
	};
	Thread.prototype.run_directive = function( directive ) {
		if( pl.type.is_directive( directive ) ) {
			pl.directive[directive.indicator]( this, directive );
			return true;
		}
		return false;
	};
	
	// Get maximum priority of the operators
	Session.prototype.__get_max_priority = function() {
		return "1200";
	};
	Thread.prototype.__get_max_priority = function() {
		return this.session.__get_max_priority();
	};
	
	// Get next priority of the operators
	Session.prototype.__get_next_priority = function( priority ) {
		var max = 0;
		priority = parseInt( priority );
		for( var key in this.__operators ) {
			if( !this.__operators.hasOwnProperty(key) ) continue;
			var n = parseInt(key);
			if( n > max && n < priority ) max = n;
		}
		return max.toString();
	};
	Thread.prototype.__get_next_priority = function( priority ) {
		return this.session.__get_next_priority( priority );
	};
	
	// Get classes of an operator
	Session.prototype.__lookup_operator_classes = function( priority, operator ) {
		if( this.__operators.hasOwnProperty( priority ) && this.__operators[priority][operator] instanceof Array ) {
			return this.__operators[priority][operator]  || false;
		}
		return false;
	};
	Thread.prototype.__lookup_operator_classes = function( priority, operator ) {
		return this.session.__lookup_operator_classes( priority, operator );
	};
	
	// Throw a warning
	Session.prototype.throw_warning = function( warning ) {
		this.thread.throw_warning( warning );
	};
	Thread.prototype.throw_warning = function( warning ) {
		this.warnings.push( warning );
	};
	
	// Get warnings
	Session.prototype.getWarnings = function() {
		return this.thread.getWarnings();
	};
	Thread.prototype.getWarnings = function() {
		return this.warnings;
	};

	// Add a goal
	Session.prototype.add_goal = function( goal, unique ) {
		this.thread.add_goal( goal, unique );
	};
	Thread.prototype.add_goal = function( goal, unique, parent ) {
		parent = parent ? parent : null;
		if( unique === true )
			this.points = [];
		var vars = goal.variables();
		var links = {};
		for( var i = 0; i < vars.length; i++ )
			links[vars[i]] = new Var(vars[i]);
		this.points.push( new State( goal, new Substitution(links), parent ) );
	};

	// Consult a program from a string
	Session.prototype.consult = function( program, options ) {
		return this.thread.consult( program, options );
	};
	Thread.prototype.consult = function( program, options ) {
		var string = "";
		if( typeof program === "string" ) {
			string = program;
			var len = string.length;
			if( string.substring( len-3, len ) === ".pl" && document.getElementById( string ) ) {
				var script = document.getElementById( string );
				var type = script.getAttribute( "type" );
				if( type !== null && type.replace( / /g, "" ).toLowerCase() === "text/prolog" ) {
					string = script.text;
				}
			}
		} else if( program.nodeName ) {
			switch( program.nodeName.toLowerCase() ) {
				case "input":
				case "textarea":
					string = program.value;
					break;
				default:
					string = program.innerHTML;
					break;
			}
		} else {
			return false;
		}
		this.warnings = [];
		return parseProgram( this, string, options );
	};

	// Query goal from a string (without ?-)
	Session.prototype.query = function( string ) {
		return this.thread.query( string );
	};
	Thread.prototype.query = function( string ) {
		this.points = [];
		this.debugger_points = [];
		return parseQuery( this, string );
	};
	
	// Get free variable
	Session.prototype.get_free_variable = function( variable ) {
		return this.thread.get_free_variable( variable );
	};
	Thread.prototype.get_free_variable = function( variable ) {
		var variables = [];
		if( variable.id === "_" || this.session.renamed_variables[variable.id] === undefined ) {
			this.session.rename++;
			if( this.points.length > 0 )
				variables = this.points[0].substitution.domain();
			while( indexOf( variables, pl.format_variable( this.session.rename ) ) !== -1 ) {
				this.session.rename++;
			}
			if( variable.id === "_" ) {
				return new Var( pl.format_variable( this.session.rename ) );
			} else {
				this.session.renamed_variables[variable.id] = pl.format_variable( this.session.rename );
			}
		}
		return new Var( this.session.renamed_variables[variable.id] );
	};
	
	// Get next free variable
	Session.prototype.next_free_variable = function() {
		return this.thread.next_free_variable();
	};
	Thread.prototype.next_free_variable = function() {
		this.session.rename++;
		var variables = [];
		if( this.points.length > 0 )
			variables = this.points[0].substitution.domain();
		while( indexOf( variables, pl.format_variable( this.session.rename ) ) !== -1 ) {
			this.session.rename++;
		}
		return new Var( pl.format_variable( this.session.rename ) );
	};
	
	// Check if a predicate is public
	Session.prototype.is_public_predicate = function( indicator ) {
		return !this.public_predicates.hasOwnProperty( indicator ) || this.public_predicates[indicator] === true;
	};
	Thread.prototype.is_public_predicate = function( indicator ) {
		return this.session.is_public_predicate( indicator );
	};
	
	// Check if a predicate is multifile
	Session.prototype.is_multifile_predicate = function( indicator ) {
		return this.multifile_predicates.hasOwnProperty( indicator ) && this.multifile_predicates[indicator] === true;
	};
	Thread.prototype.is_multifile_predicate = function( indicator ) {
		return this.session.is_multifile_predicate( indicator );
	};
	
	// Insert states at the beginning
	Session.prototype.prepend = function( states ) {
		return this.thread.prepend( states );
	};
	Thread.prototype.prepend = function( states ) {
		this.points = states.concat( this.points );
	};
	
	// Remove the selected term and prepend the current state
	Session.prototype.success = function( point, parent ) {
		return this.thread.success( point, parent );
	}
	Thread.prototype.success = function( point, parent ) {
		var parent = typeof parent === "undefined" ? point : parent;
		this.prepend( [new State( point.goal.replace( null ), point.substitution, parent ) ] );
	};
	
	// Throw error
	Session.prototype.throwError = function( error ) {
		return this.thread.throwError( error );
	};
	Thread.prototype.throwError = function( error ) {
		this.prepend( [new State( new Term( "throw", [error] ), new Substitution(), null, null )] );
	};
	
	// Selection rule
	Session.prototype.stepRule = function( mod, atom ) {
		return this.thread.stepRule( mod, atom );
	}
	Thread.prototype.stepRule = function( mod, atom ) {
		var name = atom.indicator;
		if( mod === "user" )
			mod = null;
		if( mod === null && this.session.rules.hasOwnProperty(name) )
			return this.session.rules[name];
		var modules = mod === null ? this.session.modules : (indexOf(this.session.modules, mod) === -1 ? [] : [mod]);
		for( var i = 0; i < modules.length; i++ ) {
			var module = pl.module[modules[i]];
			if( module.rules.hasOwnProperty(name) && (module.rules.hasOwnProperty(this.level) || module.exports_predicate(name)) )
				return pl.module[modules[i]].rules[name];
		}
		return null;
	};
	
	// Resolution step
	Session.prototype.step = function() {
		return this.thread.step();
	}
	Thread.prototype.step = function() {
		if( this.points.length === 0 ) {
			return;
		}
		var asyn = false;
		var point = this.points.shift();
		
		if( this.debugger )
			this.debugger_states.push( point );
		
		if( pl.type.is_term( point.goal ) ) {
			
			var atom = point.goal.select();
			var mod = null;
			var states = [];
			if( atom !== null ) {

				this.total_steps++;
				var level = point;
				while( level.parent !== null && level.parent.goal.search( atom ) )
					level = level.parent;
				this.level = level.parent === null ? "top_level/0" : level.parent.goal.select().indicator;
				
				if( pl.type.is_term( atom ) && atom.indicator === ":/2" ) {
					mod = atom.args[0].id;
					atom = atom.args[1];
				}

				if( mod === null && pl.type.is_builtin( atom ) ) {
					this.__call_indicator = atom.indicator;
					asyn = pl.predicate[atom.indicator]( this, point, atom );
				} else {
					var srule = this.stepRule(mod, atom);
					if( srule === null ) {
						if( !this.session.rules.hasOwnProperty( atom.indicator ) ) {
							if( this.getFlag( "unknown" ).id === "error" ) {
								this.throwError( pl.error.existence( "procedure", atom.indicator, this.level ) );
							} else if( this.getFlag( "unknown" ).id === "warning" ) {
								this.throw_warning( "unknown procedure " + atom.indicator + " (from " + this.level + ")" );
							}
						}
					} else if( srule instanceof Function ) {
						asyn = srule( this, point, atom );
					} else {
						for( var _rule in srule ) {
							if(!srule.hasOwnProperty(_rule)) continue;
							var rule = srule[_rule];
							this.session.renamed_variables = {};
							rule = rule.rename( this );
							var occurs_check = this.getFlag( "occurs_check" ).indicator === "true/0";
							var state = pl.unify( atom, rule.head, occurs_check );
							if( state !== null ) {
								state.goal = point.goal.replace( rule.body );
								if( state.goal !== null ) {
									state.goal = state.goal.apply( state.substitution );
								}
								state.substitution = point.substitution.apply( state.substitution );
								state.parent = point;
								states.push( state );
							}
						}
						this.prepend( states );
					}
				}
			}
		} else if( pl.type.is_variable( point.goal ) ) {
			this.throwError( pl.error.instantiation( this.level ) );
		} else {
			this.throwError( pl.error.type( "callable", point.goal, this.level ) );
		}
		return asyn;
	};
	
	// Find next computed answer
	Session.prototype.answer = function( success ) {
		return this.thread.answer( success );
	}
	Thread.prototype.answer = function( success ) {
		success = success || function( _ ) { };
		this.__calls.push( success );
		if( this.__calls.length > 1 ) {
			return;
		}
		this.again();
	};
	
	// Find all computed answers
	Session.prototype.answers = function( callback, max, after ) {
		return this.thread.answers( callback, max, after );
	}
	Thread.prototype.answers = function( callback, max, after ) {
		var answers = max || 1000;
		var thread = this;
		if( max <= 0 ) {
			if(after)
				after();
			return;
		}
		this.answer( function( answer ) {
			callback( answer );
			if( answer !== false ) {
				setTimeout( function() {
					thread.answers( callback, max-1, after );
				}, 1 );
			} else if(after) {
				after();
			}
		} );
	};

	// Again finding next computed answer
	Session.prototype.again = function() {
		return this.thread.again();
	};
	Thread.prototype.again = function() {
		var answer;
		var t0 = Date.now();
		while( this.__calls.length > 0 ) {
			this.warnings = [];
			this.current_limit = this.session.limit;
			while( this.current_limit > 0 && this.points.length > 0 && this.points[0].goal !== null && !pl.type.is_error( this.points[0].goal ) ) {
				this.current_limit--;
				if( this.step() === true ) {
					return;
				}
			}
			var t1 = Date.now();
			this.cpu_time_last = t1-t0;
			this.cpu_time += this.cpu_time_last;
			var success = this.__calls.shift();
			if( this.current_limit <= 0 ) {
				success( null );
			} else if( this.points.length === 0 ) {
				success( false );
			} else if( pl.type.is_error( this.points[0].goal ) ) {
				answer = this.session.format_error( this.points.shift() );
				this.points = [];
				success( answer );
			} else {
				if( this.debugger )
					this.debugger_states.push( this.points[0] );
				answer = this.session.format_success( this.points.shift() );
				success( answer );
			}
		}
	};
	
	// Unfolding transformation
	Session.prototype.unfold = function( rule ) {
		if(rule.body === null)
			return false;
		var head = rule.head;
		var body = rule.body;
		var atom = body.select();
		var thread = new Thread( this );
		var unfolded = [];
		thread.add_goal( atom );
		thread.step();
		for( var i = 0; i < thread.points.length; i++ ) {
			var point = thread.points[i];
			var head2 = head.apply( point.substitution );
			var body2 = body.replace( point.goal );
			if( body2 !== null )
				body2 = body2.apply( point.substitution );
			unfolded.push( new Rule( head2, body2 ) );
		}
		var rules = this.rules[head.indicator];
		var index = indexOf( rules, rule );
		if( unfolded.length > 0 && index !== -1 ) {
			rules.splice.apply( rules, [index, 1].concat(unfolded) );
			return true;
		}
		return false;
	};
	Thread.prototype.unfold = function(rule) {
		return this.session.unfold(rule);
	};

	
	
	// INTERPRET EXPRESSIONS
	
	// Variables
	Var.prototype.interpret = function( thread ) {
		return pl.error.instantiation( thread.level );
	};
	
	// Numbers
	Num.prototype.interpret = function( thread ) {
		return this;
	};
	
	// Terms
	Term.prototype.interpret = function( thread ) {
		if( pl.type.is_unitary_list( this ) ) {
			return this.args[0].interpret( thread );
		} else {
			return pl.operate( thread, this );
		}
	};
	
	
	
	// COMPARE PROLOG OBJECTS
	
	// Variables
	Var.prototype.compare = function( obj ) {
		if( this.id < obj.id ) {
			return -1;
		} else if( this.id > obj.id ) {
			return 1;
		} else {
			return 0;
		}
	};
	
	// Numbers
	Num.prototype.compare = function( obj ) {
		if( this.value === obj.value && this.is_float === obj.is_float ) {
			return 0;
		} else if( this.value < obj.value || this.value === obj.value && this.is_float && !obj.is_float ) {
			return -1;
		} else if( this.value > obj.value ) {
			return 1;
		}
	};
	
	// Terms
	Term.prototype.compare = function( obj ) {
		if( this.args.length < obj.args.length || this.args.length === obj.args.length && this.id < obj.id ) {
			return -1;
		} else if( this.args.length > obj.args.length || this.args.length === obj.args.length && this.id > obj.id ) {
			return 1;
		} else {
			for( var i = 0; i < this.args.length; i++ ) {
				var arg = pl.compare( this.args[i], obj.args[i] );
				if( arg !== 0 ) {
					return arg;
				}
			}
			return 0;
		}
	};
	

	
	// SUBSTITUTIONS
	
	// Lookup variable
	Substitution.prototype.lookup = function( variable ) {
		if( this.links[variable] ) {
			return this.links[variable];
		} else {
			return null;
		}
	};
	
	// Filter variables
	Substitution.prototype.filter = function( predicate ) {
		var links = {};
		for( var id in this.links ) {
			if(!this.links.hasOwnProperty(id)) continue;
			var value = this.links[id];
			if( predicate( id, value ) ) {
				links[id] = value;
			}
		}
		return new Substitution( links );
	};
	
	// Exclude variables
	Substitution.prototype.exclude = function( variables ) {
		var links = {};
		for( var variable in this.links ) {
			if(!this.links.hasOwnProperty(variable)) continue;
			if( indexOf( variables, variable ) === -1 ) {
				links[variable] = this.links[variable];
			}
		}
		return new Substitution( links );
	};
	
	// Add link
	Substitution.prototype.add = function( variable, value ) {
		var subs = new Substitution();
		subs.links[variable] = value;
		return subs;
	};
	
	// Get domain
	Substitution.prototype.domain = function( plain ) {
		var f = plain === true ? function(x){return x;} : function(x){return new Var(x);};
		var vars = [];
		for( var x in this.links )
			vars.push( f(x) );
		return vars;
	};
	
	
	
	// GENERATE JAVASCRIPT CODE FROM PROLOG OBJECTS
	
	// Variables
	Var.prototype.compile = function() {
		return 'new pl.type.Var("' + this.id.toString() + '")';
	};
	
	// Numbers
	Num.prototype.compile = function() {
		return 'new pl.type.Num(' + this.value.toString() + ', ' + this.is_float.toString() + ')';
	};
	
	// Terms
	Term.prototype.compile = function() {
		return 'new pl.type.Term("' + this.id.replace(/"/g, '\\"') + '", [' + map( this.args, function( arg ) {
			return arg.compile();
		} ) + '])';
	};
	
	// Rules
	Rule.prototype.compile = function() {
		return 'new pl.type.Rule(' + this.head.compile() + ', ' + (this.body === null ? 'null' : this.body.compile()) + ')';
	};
	
	// Sessions
	Session.prototype.compile = function() {
		var str, obj = [], rules;
		for( var _indicator in this.rules ) {
			if(!this.rules.hasOwnProperty(_indicator)) continue;
			var indicator = this.rules[_indicator];
			rules = [];
			str = "\"" + _indicator + "\": [";
			for( var i = 0; i < indicator.length; i++ ) {
				rules.push( indicator[i].compile() );
			}
			str += rules.join();
			str += "]";
			obj.push( str );
		}
		return "{" + obj.join() + "};";
	};
	
	
	
	// PROLOG TO JAVASCRIPT
	Var.prototype.toJavaScript = function() {
		return undefined;
	};
	
	// Numbers
	Num.prototype.toJavaScript = function() {
		return this.value;
	};
	
	// Terms
	Term.prototype.toJavaScript = function() {
		if( this.args.length === 0 && this.indicator !== "[]/0" ) {
			return this.id;
		} else if( pl.type.is_list( this ) ) {
			var arr = [];
			var pointer = this;
			var value;
			while( pointer.indicator === "./2" ) {
				value = pointer.args[0].toJavaScript();
				if( value === undefined )
					return undefined;
				arr.push( value );
				pointer = pointer.args[1];
			}
			if( pointer.indicator === "[]/0" )
				return arr;
		}
		return undefined;
	};
	
	
	
	// RULES
	
	// Return singleton variables in the session
	Rule.prototype.singleton_variables = function() {
		var variables = this.head.variables();
		var count = {};
		var singleton = [];
		if( this.body !== null )
			variables = variables.concat( this.body.variables() );
		for( var i = 0; i < variables.length; i++ ) {
			if( count[variables[i]] === undefined )
				count[variables[i]] = 0;
			count[variables[i]]++;
		}
		for( var key in count )
			if( key !== "_" && count[key] === 1 )
				singleton.push( key );
		return singleton;
	};
	
	
	
	// PROLOG

	var pl = {
		
		// Environment
		__env: typeof module !== 'undefined' && module.exports ? global : window,
		
		// Modules
		module: {},
		
		// Version
		version: version,
		
		// Parser
		parser: {
			tokenizer: Tokenizer,
			expression: parseExpr
		},
		
		// Utils
		utils: {
			
			// String to indicator
			str_indicator: str_indicator
			
		},
		
		// Statistics
		statistics: {
			
			// Number of created terms
			getCountTerms: function() {
				return term_ref;
			}
			
		},
		
		// JavaScript to Prolog
		fromJavaScript: {
			
			// Type testing
			test: {
				
				// Boolean
				boolean: function( obj ) {
					return obj === true || obj === false;
				},
				
				// Number
				number: function( obj ) {
					return typeof obj === "number";
				},
				
				// String
				string: function( obj ) {
					return typeof obj === "string";
				},
				
				// List
				list: function( obj ) {
					return obj instanceof Array;
				},
				
				// Variable
				variable: function( obj ) {
					return obj === undefined;
				},
				
				// Any
				any: function( _ ) {
					return true;
				}
				
			},
			
			// Function conversion
			conversion: {
				
				// Bolean
				boolean: function( obj ) {
					return new Term( obj ? "true" : "false", [] );
				},
				
				// Number
				number: function( obj ) {
					return new Num( obj, obj % 1 !== 0 );
				},
				
				// String
				string: function( obj ) {
					return new Term( obj, [] );
				},
				
				// List
				list: function( obj ) {
					var arr = [];
					var elem;
					for( var i = 0; i < obj.length; i++ ) {
						elem = pl.fromJavaScript.apply( obj[i] );
						if( elem === undefined )
							return undefined;
						arr.push( elem );
					}
					return arrayToList( arr );
				},
				
				// Variable
				variable: function( obj ) {
					return new Var( "_" );
				},
				
				// Any
				any: function( obj ) {
					return undefined;
				}
				
			},
			
			// Transform object
			apply: function( obj ) {
				for( var i in pl.fromJavaScript.test )
					if( i !== "any" && pl.fromJavaScript.test[i]( obj ) )
						return pl.fromJavaScript.conversion[i]( obj );
				return pl.fromJavaScript.conversion.any( obj );
			}
		},
		
		// Types
		type: {
			
			// Objects
			Var: Var,
			Num: Num,
			Term: Term,
			Rule: Rule,
			State: State,
			Module: Module,
			Thread: Thread,
			Session: Session,
			Substitution: Substitution,
			
			// Order
			order: [Var, Num, Term],
			
			// Compare types
			compare: function( x, y ) {
				var ord_x = indexOf( pl.type.order, x.constructor );
				var ord_y = indexOf( pl.type.order, y.constructor );
				if( ord_x < ord_y ) {
					return -1;
				} else if( ord_x > ord_y ) {
					return 1;
				} else {
					if( x.constructor === Num )
						if( x.is_float && y.is_float )
							return 0;
						else if( x.is_float )
							return -1;
						else if( y.is_float )
							return 1;
					return 0;
				}
			},
			
			// Is a substitution
			is_substitution: function( obj ) {
				return obj instanceof Substitution;
			},
			
			// Is a state
			is_state: function( obj ) {
				return obj instanceof State;
			},
			
			// Is a rule
			is_rule: function( obj ) {
				return obj instanceof Rule;
			},
			
			// Is a variable
			is_variable: function( obj ) {
				return obj instanceof Var;
			},
			
			// Is an anonymous variable
			is_anonymous_var: function( obj ) {
				return obj instanceof Var && obj.id === "_";
			},
			
			// Is a callable term
			is_callable: function( obj ) {
				return obj instanceof Term;
			},
			
			// Is a number
			is_number: function( obj ) {
				return obj instanceof Num;
			},
			
			// Is an integer
			is_integer: function( obj ) {
				return obj instanceof Num && !obj.is_float;
			},
			
			// Is a float
			is_float: function( obj ) {
				return obj instanceof Num && obj.is_float;
			},
			
			// Is a term
			is_term: function( obj ) {
				return obj instanceof Term;
			},
			
			// Is an atom
			is_atom: function( obj ) {
				return obj instanceof Term && obj.args.length === 0;
			},
			
			// Is a ground term
			is_ground: function( obj ) {
				if( obj instanceof Var ) return false;
				if( obj instanceof Term )
					for( var i = 0; i < obj.args.length; i++ )
						if( !pl.type.is_ground( obj.args[i] ) )
							return false;
				return true;
			},
			
			// Is atomic
			is_atomic: function( obj ) {
				return obj instanceof Term && obj.args.length === 0 || obj instanceof Num;
			},
			
			// Is compound
			is_compound: function( obj ) {
				return obj instanceof Term && obj.args.length > 0;
			},
			
			// Is a list
			is_list: function( obj ) {
				return obj instanceof Term && (obj.indicator === "[]/0" || obj.indicator === "./2");
			},
			
			// Is an empty list
			is_empty_list: function( obj ) {
				return obj instanceof Term && obj.indicator === "[]/0";
			},
			
			// Is a non empty list
			is_non_empty_list: function( obj ) {
				return obj instanceof Term && obj.indicator === "./2";
			},
			
			// Is a fully list
			is_fully_list: function( obj ) {
				while( obj instanceof Term && obj.indicator === "./2" ) {
					obj = obj.args[1];
				}
				return obj instanceof Var || obj instanceof Term && obj.indicator === "[]/0";
			},
			
			// Is a instantiated list
			is_instantiated_list: function( obj ) {
				while( obj instanceof Term && obj.indicator === "./2" ) {
					obj = obj.args[1];
				}
				return obj instanceof Term && obj.indicator === "[]/0";
			},
			
			// Is an unitary list
			is_unitary_list: function( obj ) {
				return obj instanceof Term && obj.indicator === "./2" && obj.args[1] instanceof Term && obj.args[1].indicator === "[]/0";
			},
			
			// Is a character
			is_character: function( obj ) {
				return obj instanceof Term && obj.id.length === 1 || obj.id.length > 0 && obj.id.length <= 2 && codePointAt( obj.id, 0 ) >= 65536;
			},
			
			// Is a character
			is_character_code: function( obj ) {
				return obj instanceof Num && !obj.is_float;
			},
			
			// Is an operator
			is_operator: function( obj ) {
				return obj instanceof Term && pl.arithmetic.evaluation[obj.indicator];
			},
			
			// Is a directive
			is_directive: function( obj ) {
				return obj instanceof Term && pl.directive[obj.indicator] !== undefined;
			},
			
			// Is a built-in predicate
			is_builtin: function( obj ) {
				return obj instanceof Term && pl.predicate[obj.indicator] !== undefined;
			},
			
			// Is an error
			is_error: function( obj ) {
				return obj instanceof Term && obj.indicator === "throw/1";
			},
			
			// Is a predicate indicator
			is_predicate_indicator: function( obj ) {
				return obj instanceof Term && obj.indicator === "//2" && obj.args[0] instanceof Term && obj.args[0].args.length === 0 && obj.args[1] instanceof Num && obj.args[1].is_float === false;
			},
			
			// Is a flag
			is_flag: function( obj ) {
				return obj instanceof Term && obj.args.length === 0 && pl.flag[obj.id] !== undefined;
			},
			
			// Is a valid value for a flag
			is_value_flag: function( flag, obj ) {
				if( !pl.type.is_flag( flag ) ) return false;
				for( var value in pl.flag[flag.id].allowed ) {
					if(!pl.flag[flag.id].allowed.hasOwnProperty(value)) continue;
					if( pl.flag[flag.id].allowed[value].equals( obj ) ) return true;
				}
				return false;
			},
			
			// Is a modifiable flag
			is_modifiable_flag: function( obj ) {
				return pl.type.is_flag( obj ) && pl.flag[obj.id].changeable;
			},
			
			// Is an existing module
			is_module: function( obj ) {
				return obj instanceof Term && obj.indicator === "library/1" && obj.args[0] instanceof Term && obj.args[0].args.length === 0 && pl.module[obj.args[0].id] !== undefined;
			}
			
		},

		// Arithmetic functions
		arithmetic: {
			
			// Evaluation
			evaluation: {
				"e/0": {
					type_args: null,
					type_result: true,
					fn: function( _ ) { return Math.E; }
				},
				"pi/0": {
					type_args: null,
					type_result: true,
					fn: function( _ ) { return Math.PI; }
				},
				"tau/0": {
					type_args: null,
					type_result: true,
					fn: function( _ ) { return 2*Math.PI; }
				},
				"epsilon/0": {
					type_args: null,
					type_result: true,
					fn: function( _ ) { return Number.EPSILON; }
				},
				"+/1": {
					type_args: null,
					type_result: null,
					fn: function( x, _ ) { return x; }
				},
				"-/1": {
					type_args: null,
					type_result: null,
					fn: function( x, _ ) { return -x; }
				},
				"\\/1": {
					type_args: false,
					type_result: false,
					fn: function( x, _ ) { return ~x; }
				},
				"abs/1": {
					type_args: null,
					type_result: null,
					fn: function( x, _ ) { return Math.abs( x ); }
				},
				"sign/1": {
					type_args: null,
					type_result: null,
					fn: function( x, _ ) { return Math.sign( x ); }
				},
				"float_integer_part/1": {
					type_args: true,
					type_result: false,
					fn: function( x, _ ) { return parseInt( x ); }
				},
				"float_fractional_part/1": {
					type_args: true,
					type_result: true,
					fn: function( x, _ ) { return x - parseInt( x ); }
				},
				"float/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return parseFloat( x ); }
				},
				"floor/1": {
					type_args: true,
					type_result: false,
					fn: function( x, _ ) { return Math.floor( x ); }
				},
				"truncate/1": {
					type_args: true,
					type_result: false,
					fn: function( x, _ ) { return parseInt( x ); }
				},
				"round/1": {
					type_args: true,
					type_result: false,
					fn: function( x, _ ) { return Math.round( x ); }
				},
				"ceiling/1": {
					type_args: true,
					type_result: false,
					fn: function( x, _ ) { return Math.ceil( x ); }
				},
				"sin/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.sin( x ); }
				},
				"cos/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.cos( x ); }
				},
				"tan/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.tan( x ); }
				},
				"asin/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.asin( x ); }
				},
				"acos/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.acos( x ); }
				},
				"atan/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.atan( x ); }
				},
				"atan2/2": {
					type_args: null,
					type_result: true,
					fn: function( x, y, _ ) { return Math.atan2( x, y ); }
				},
				"exp/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.exp( x ); }
				},
				"sqrt/1": {
					type_args: null,
					type_result: true,
					fn: function( x, _ ) { return Math.sqrt( x ); }
				},
				"log/1": {
					type_args: null,
					type_result: true,
					fn: function( x, thread ) { return x > 0 ? Math.log( x ) : pl.error.evaluation( "undefined", thread.__call_indicator ); }
				},
				"+/2": {
					type_args: null,
					type_result: null,
					fn: function( x, y, _ ) { return x + y; }
				},
				"-/2": {
					type_args: null,
					type_result: null,
					fn:  function( x, y, _ ) { return x - y; }
				},
				"*/2": {
					type_args: null,
					type_result: null,
					fn: function( x, y, _ ) { return x * y; }
				},
				"//2": {
					type_args: null,
					type_result: true,
					fn: function( x, y, thread ) { return y ? x / y : pl.error.evaluation( "zero_division", thread.__call_indicator ); }
				},
				"///2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, thread ) { return y ? parseInt( x / y ) : pl.error.evaluation( "zero_division", thread.__call_indicator ); }
				},
				"**/2": {
					type_args: null,
					type_result: true,
					fn: function( x, y, _ ) { return Math.pow(x, y); }
				},
				"^/2": {
					type_args: null,
					type_result: null,
					fn: function( x, y, _ ) { return Math.pow(x, y); }
				},
				"<</2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, _ ) { return x << y; }
				},
				">>/2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, _ ) { return x >> y; }
				},
				"/\\/2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, _ ) { return x & y; }
				},
				"\\//2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, _ ) { return x | y; }
				},
				"xor/2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, _ ) { return x ^ y; }
				},
				"rem/2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, thread ) { return y ? x % y : pl.error.evaluation( "zero_division", thread.__call_indicator ); }
				},
				"mod/2": {
					type_args: false,
					type_result: false,
					fn: function( x, y, thread ) { return y ? x - parseInt( x / y ) * y : pl.error.evaluation( "zero_division", thread.__call_indicator ); }
				},
				"max/2": {
					type_args: null,
					type_result: null,
					fn: function( x, y, _ ) { return Math.max( x, y ); }
				},
				"min/2": {
					type_args: null,
					type_result: null,
					fn: function( x, y, _ ) { return Math.min( x, y ); }
				}
				
			}
			
		},
		
		// Directives
		directive: {
			
			// dynamic/1
			"dynamic/1": function( thread, atom ) {
				var indicator = atom.args[0];
				if( pl.type.is_variable( indicator ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_compound( indicator ) || indicator.indicator !== "//2" ) {
					thread.throwError( pl.error.type( "predicate_indicator", indicator, atom.indicator ) );
				} else if( pl.type.is_variable( indicator.args[0] ) || pl.type.is_variable( indicator.args[1] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( indicator.args[0] ) ) {
					thread.throwError( pl.error.type( "atom", indicator.args[0], atom.indicator ) );
				} else if( !pl.type.is_integer( indicator.args[1] ) ) {
					thread.throwError( pl.error.type( "integer", indicator.args[1], atom.indicator ) );
				} else {
					var key = atom.args[0].args[0].id + "/" + atom.args[0].args[1].value;
					thread.session.public_predicates[key] = true;
					if( !thread.session.rules[key] )
						thread.session.rules[key] = [];
				}
			},
			
			// multifile/1
			"multifile/1": function( thread, atom ) {
				var indicator = atom.args[0];
				if( pl.type.is_variable( indicator ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_compound( indicator ) || indicator.indicator !== "//2" ) {
					thread.throwError( pl.error.type( "predicate_indicator", indicator, atom.indicator ) );
				} else if( pl.type.is_variable( indicator.args[0] ) || pl.type.is_variable( indicator.args[1] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( indicator.args[0] ) ) {
					thread.throwError( pl.error.type( "atom", indicator.args[0], atom.indicator ) );
				} else if( !pl.type.is_integer( indicator.args[1] ) ) {
					thread.throwError( pl.error.type( "integer", indicator.args[1], atom.indicator ) );
				} else {
					thread.session.multifile_predicates[atom.args[0].args[0].id + "/" + atom.args[0].args[1].value] = true;
				}
			},
			
			// set_prolog_flag
			"set_prolog_flag/2": function( thread, atom ) {
				var flag = atom.args[0], value = atom.args[1];
				if( pl.type.is_variable( flag ) || pl.type.is_variable( value ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( flag ) ) {
					thread.throwError( pl.error.type( "atom", flag, atom.indicator ) );
				} else if( !pl.type.is_flag( flag ) ) {
					thread.throwError( pl.error.domain( "prolog_flag", flag, atom.indicator ) );
				} else if( !pl.type.is_value_flag( flag, value ) ) {
					thread.throwError( pl.error.domain( "flag_value", new Term( "+", [flag, value] ), atom.indicator ) );
				} else if( !pl.type.is_modifiable_flag( flag ) ) {
					thread.throwError( pl.error.permission( "modify", "flag", flag ) );
				} else {
					thread.session.flag[flag.id] = value;
				}
			},
			
			// use_module/1
			"use_module/1": function( thread, atom ) {
				var module = atom.args[0];
				if( pl.type.is_variable( module ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_term( module ) ) {
					thread.throwError( pl.error.type( "term", module, atom.indicator ) );
				} else {
					if( pl.type.is_module( module ) ) {
						var name = module.args[0].id;
						if( indexOf(thread.session.modules, name) === -1 )
							thread.session.modules.push( name );
					} else {
						// TODO
						// error no existe modulo
					}
				}
			},
			
			// char_conversion/2
			"char_conversion/2": function( thread, atom ) {
				var inchar = atom.args[0], outchar = atom.args[1];
				if( pl.type.is_variable( inchar ) || pl.type.is_variable( outchar ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_character( inchar ) ) {
					thread.throwError( pl.error.type( "character", inchar, atom.indicator ) );
				} else if( !pl.type.is_character( outchar ) ) {
					thread.throwError( pl.error.type( "character", outchar, atom.indicator ) );
				} else {
					if( inchar.id === outchar.id ) {
						delete thread.session.__char_conversion[inchar.id];
					} else {
						thread.session.__char_conversion[inchar.id] = outchar.id;
					}
				}
			},
			
			// op/3
			"op/3": function( thread, atom ) {
				var priority = atom.args[0], type = atom.args[1], operator = atom.args[2];
				if( pl.type.is_variable( priority ) || pl.type.is_variable( type ) || pl.type.is_variable( operator ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_integer( priority ) ) {
					thread.throwError( pl.error.type( "integer", priority, atom.indicator ) );
				} else if( !pl.type.is_atom( type ) ) {
					thread.throwError( pl.error.type( "atom", type, atom.indicator ) );
				} else if( !pl.type.is_atom( operator ) ) {
					thread.throwError( pl.error.type( "atom", operator, atom.indicator ) );
				} else if( priority.value < 0 || priority.value > 1200 ) {
					thread.throwError( pl.error.domain( "operator_priority", priority, atom.indicator ) );
				} else if( operator.id === "," ) {
					thread.throwError( pl.error.permission( "modify", "operator", operator, atom.indicator ) );
				} else if( operator.id === "|" && (priority.value < 1001 || type.id.length !== 3 ) ) {
					thread.throwError( pl.error.permission( "modify", "operator", operator, atom.indicator ) );
				} else if( ["fy", "fx", "yf", "xf", "xfx", "yfx", "xfy"].indexOf( type.id ) === -1 ) {
					thread.throwError( pl.error.domain( "operator_specifier", type, atom.indicator ) );
				} else {
					var fix = { prefix: null, infix: null, postfix: null };
					for( var p in thread.session.__operators ) {
						if(!thread.session.__operators.hasOwnProperty(p)) continue;
						var classes = thread.session.__operators[p][operator.id];
						if( classes ) {
							if( indexOf( classes, "fx" ) !== -1 ) { fix.prefix = { priority: p, type: "fx" }; }
							if( indexOf( classes, "fy" ) !== -1 ) { fix.prefix = { priority: p, type: "fy" }; }
							if( indexOf( classes, "xf" ) !== -1 ) { fix.postfix = { priority: p, type: "xf" }; }
							if( indexOf( classes, "yf" ) !== -1 ) { fix.postfix = { priority: p, type: "yf" }; }
							if( indexOf( classes, "xfx" ) !== -1 ) { fix.infix = { priority: p, type: "xfx" }; }
							if( indexOf( classes, "xfy" ) !== -1 ) { fix.infix = { priority: p, type: "xfy" }; }
							if( indexOf( classes, "yfx" ) !== -1 ) { fix.infix = { priority: p, type: "yfx" }; }
						}
					}
					var current_class;
					switch( type.id ) {
						case "fy": case "fx": current_class = "prefix"; break;
						case "yf": case "xf": current_class = "postfix"; break;
						default: current_class = "infix"; break;
					}
					if( ((fix.prefix && current_class === "prefix" || fix.postfix && current_class === "postfix" || fix.infix && current_class === "infix")
						&& fix[current_class].type !== type.id || fix.infix && current_class === "postfix" || fix.postfix && current_class === "infix") && priority.value !== 0 ) {
						thread.throwError( pl.error.permission( "create", "operator", operator, atom.indicator ) );
					} else {
						if( fix[current_class] ) {
							remove( thread.session.__operators[fix[current_class].priority][operator.id], type.id );
							if( thread.session.__operators[fix[current_class].priority][operator.id].length === 0 ) {
								delete thread.session.__operators[fix[current_class].priority][operator.id];
							}
						}
						if( priority.value > 0 ) {
							if( !thread.session.__operators[priority.value] ) thread.session.__operators[priority.value.toString()] = {};
							if( !thread.session.__operators[priority.value][operator.id] ) thread.session.__operators[priority.value][operator.id] = [];
							thread.session.__operators[priority.value][operator.id].push( type.id );
						}
						return true;
					}
				}
			}
			
		},
		
		// Built-in predicates
		predicate: {
			
			// INPUT AND OUTPUT
			
			// op/3
			"op/3": function( thread, point, atom ) {
				if( pl.directive["op/3"]( thread, atom ) )
					thread.success( point );
			},
			
			// current_op/3
			"current_op/3": function( thread, point, atom ) {
				var priority = atom.args[0], specifier = atom.args[1], operator = atom.args[2];
				var points = [];
				for( var p in thread.session.__operators )
					for( var o in thread.session.__operators[p] )
						for( var i = 0; i < thread.session.__operators[p][o].length; i++ )
							points.push( new State(
								point.goal.replace(
									new Term( ",", [
										new Term( "=", [new Num( p, false ), priority] ),
										new Term( ",", [
											new Term( "=", [new Term( thread.session.__operators[p][o][i], [] ), specifier] ),
											new Term( "=", [new Term( o, [] ), operator] )
										] )
									] )
								),
								point.substitution,
								point
							) );
				thread.prepend( points );
			},
		
			// LOGIC AND CONTROL STRUCTURES
		
			// ;/2 (disjunction)
			";/2": function( thread, point, atom ) {
				if( pl.type.is_term( atom.args[0] ) && atom.args[0].indicator === "->/2" ) {
					var points = thread.points;
					var format_success = thread.session.format_success;
					var format_error = thread.session.format_error;
					thread.session.format_success = function(x) { return x.substitution; };
					thread.session.format_error = function(x) { return x.goal; };
					thread.points = [new State( atom.args[0].args[0], point.substitution, point )];
					var callback = function( answer ) {
						thread.points = points;
						thread.session.format_success = format_success;
						thread.session.format_error = format_error;
						if( answer === false ) {
							thread.points = [new State( point.goal.replace( atom.args[1] ), point.substitution, point )].concat( points );
						} else if( pl.type.is_error( answer ) )
							thread.throwError( answer.args[0] );
						else if( answer === null ) {
							thread.points = [point].concat( points );
							thread.__calls.shift()( null );
						} else {
							thread.points = [new State( point.goal.replace( atom.args[0].args[1] ).apply( answer ), point.substitution.apply( answer ), point )].concat( points );
						}
					};
					thread.__calls.unshift( callback );
				} else {
					var left = new State( point.goal.replace( atom.args[0] ), point.substitution, point );
					var right = new State( point.goal.replace( atom.args[1] ), point.substitution, point );
					thread.prepend( [left, right] );
				}
			},
			
			// !/0 (cut)
			"!/0": function( thread, point, atom ) {
				var parent_cut, states = [];
				parent_cut = point;
				while( parent_cut.parent !== null && parent_cut.parent.goal.search( atom ) )
					parent_cut = parent_cut.parent;
				for( var i = 0; i < thread.points.length; i++ ) {
					var state = thread.points[i];
					var node = state.parent;
					while( node !== null && node !== parent_cut.parent ) {
						node = node.parent;
					}
					if( node === null && node !== parent_cut.parent )
						states.push( state );
				}
				thread.points = [new State( point.goal.replace( null ), point.substitution, point )].concat( states );
			},
			
			// \+ (negation)
			"\\+/1": function( thread, point, atom ) {
				var goal = atom.args[0];
				if( pl.type.is_variable( goal ) ) {
					thread.throwError( pl.error.instantiation( thread.level ) );
				} else if( !pl.type.is_callable( goal ) ) {
					thread.throwError( pl.error.type( "callable", goal, thread.level ) );
				} else {
					thread.prepend( [
						new State( point.goal.replace( new Term( ",", [new Term( ",", [ new Term( "call", [goal] ), new Term( "!", [] ) ] ), new Term( "fail", [] ) ] ) ), point.substitution, point ),
						new State( point.goal.replace( null ), point.substitution, point )
					] );
				}
			},
			
			// ->/2 (implication)
			"->/2": function( thread, point, atom ) {
				var goal = point.goal.replace( new Term( ",", [atom.args[0], new Term( ",", [new Term( "!" ), atom.args[1]] )] ) );
				thread.prepend( [new State( goal, point.substitution, point )] );
			},
			
			// fail/0
			"fail/0": function( _1, _2, _3 ) {},
			
			// false/0
			"false/0": function( _1, _2, _3 ) {},
			
			// true/0
			"true/0": function( thread, point, _ ) {
				thread.success( point );
			},
			
			// call/1..8
			"call/1": callN(1),
			"call/2": callN(2),
			"call/3": callN(3),
			"call/4": callN(4),
			"call/5": callN(5),
			"call/6": callN(6),
			"call/7": callN(7),
			"call/8": callN(8),
			
			// once/1
			"once/1": function( thread, point, atom ) {
				var goal = atom.args[0];
				thread.prepend( [new State( point.goal.replace( new Term( ",", [new Term( "call", [goal] ), new Term( "!", [] )] ) ), point.substitution, point )] );
			},
			
			// forall/2
			"forall/2": function( thread, point, atom ) {
				var generate = atom.args[0], test = atom.args[1];
				thread.prepend( [new State( point.goal.replace( new Term( "\\+", [new Term( ",", [new Term( "call", [generate] ), new Term( "\\+", [new Term( "call", [test] )] )] )] ) ), point.substitution, point )] );
			},
			
			// repeat/0
			"repeat/0": function( thread, point, _ ) {
				thread.prepend( [new State( point.goal.replace( null ), point.substitution, point ), point] );
			},
			
			// EXCEPTIONS
			
			// throw/1
			"throw/1": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.throwError( pl.error.instantiation( thread.level ) );
				} else {
					thread.throwError( atom.args[0] );
				}
			},
			
			// catch/3
			"catch/3": function( thread, point, atom ) {
				var points = thread.points;
				thread.points = [];
				thread.prepend( [new State( atom.args[0], point.substitution, point )] );
				var format_success = thread.session.format_success;
				var format_error = thread.session.format_error;
				thread.session.format_success = function(x) { return x.substitution; };
				thread.session.format_error = function(x) { return x.goal; };
				var callback = function( answer ) {
					var call_points = thread.points;
					thread.points = points;
					thread.session.format_success = format_success;
					thread.session.format_error = format_error;
					if( pl.type.is_error( answer ) ) {
						var states = [];
						for( var i = 0; i < thread.points.length; i++ ) {
							var state = thread.points[i];
							var node = state.parent;
							while( node !== null && node !== point.parent ) {
								node = node.parent;
							}
							if( node === null && node !== point.parent )
								states.push( state );
						}
						thread.points = states;
						var occurs_check = thread.getFlag( "occurs_check" ).indicator === "true/0";
						var state = pl.unify( answer.args[0], atom.args[1], occurs_check );
						if( state !== null ) {
							state.substitution = point.substitution.apply( state.substitution );
							state.goal = point.goal.replace( atom.args[2] ).apply( state.substitution );
							state.parent = point;
							thread.prepend( [state] );
						} else {
							thread.throwError( answer.args[0] );
						}
					} else if( answer !== false ) {
						var answer_state = answer === null ? [] : [new State(
							point.goal.apply( answer ).replace( null ),
							point.substitution.apply( answer ),
							point
						)];
						var catch_points = map( call_points, function( state ) {
							if( state.goal === null )
								state.goal = new Term( "true", [] );
							state = new State(
								point.goal.replace( new Term( "catch", [state.goal, atom.args[1], atom.args[2]] ) ),
								point.substitution.apply( state.substitution ),
								state.parent
							);
							state.exclude = atom.args[0].variables();
							return state;
						} );
						thread.prepend( answer_state.concat( catch_points ) );
						if( answer === null ) {
							this.current_limit = 0;
							thread.__calls.shift()( null );
						}
					}
				};
				thread.__calls.unshift( callback );
			},
			
			// UNIFICATION
			
			// =/2 (unification)
			"=/2": function( thread, point, atom ) {
				var occurs_check = thread.getFlag( "occurs_check" ).indicator === "true/0";
				var state = pl.unify( atom.args[0], atom.args[1], occurs_check );
				if( state !== null ) {
					state.goal = point.goal.apply( state.substitution ).replace( null );
					state.substitution = point.substitution.apply( state.substitution );
					state.parent = point;
					thread.prepend( [state] );
				}
			},
			
			// unify_with_occurs_check/2
			"unify_with_occurs_check/2": function( thread, point, atom ) {
				var state = pl.unify( atom.args[0], atom.args[1], true );
				if( state !== null ) {
					state.goal = point.goal.apply( state.substitution ).replace( null );
					state.substitution = point.substitution.apply( state.substitution );
					state.parent = point;
					thread.prepend( [state] );
				}
			},
			
			// \=/2
			"\\=/2": function( thread, point, atom ) {
				var occurs_check = thread.getFlag( "occurs_check" ).indicator === "true/0";
				var state = pl.unify( atom.args[0], atom.args[1], occurs_check );
				if( state === null ) {
					thread.success( point );
				}
			},
			
			// subsumes_term/2
			"subsumes_term/2": function( thread, point, atom ) {
				var occurs_check = thread.getFlag( "occurs_check" ).indicator === "true/0";
				var state = pl.unify( atom.args[1], atom.args[0], occurs_check );
				if( state !== null && atom.args[1].apply( state.substitution ).equals( atom.args[1] ) ) {
					thread.success( point );
				}
			},
			
			// ALL SOLUTIONS
			
			// findall/3
			"findall/3": function( thread, point, atom ) {
				var template = atom.args[0], goal = atom.args[1], instances = atom.args[2];
				if( pl.type.is_variable( goal ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( goal ) ) {
					thread.throwError( pl.error.type( "callable", goal, atom.indicator ) );
				} else if( !pl.type.is_variable( instances ) && !pl.type.is_list( instances ) ) {
					thread.throwError( pl.error.type( "list", instances, atom.indicator ) );
				} else {
					var variable = thread.next_free_variable();
					var newGoal = new Term( ",", [goal, new Term( "=", [variable, template] )] );
					var points = thread.points;
					var limit = thread.session.limit;
					var format_success = thread.session.format_success;
					thread.session.format_success = function(x) { return x.substitution; };
					thread.add_goal( newGoal, true, point );
					var answers = [];
					var callback = function( answer ) {
						if( answer !== false && answer !== null && !pl.type.is_error( answer ) ) {
							thread.__calls.unshift( callback );
							answers.push( answer.links[variable.id] );
							thread.session.limit = thread.current_limit;
						} else {
							thread.points = points;
							thread.session.limit = limit;
							thread.session.format_success = format_success;
							if( pl.type.is_error( answer ) ) {
								thread.throwError( answer.args[0] );
							} else if( thread.current_limit > 0 ) {
								var list = new Term( "[]" );
								for( var i = answers.length - 1; i >= 0; i-- ) {
									list = new Term( ".", [answers[i], list] );
								}
								thread.prepend( [new State( point.goal.replace( new Term( "=", [instances, list] ) ), point.substitution, point )] );
							}
						}
					};
					thread.__calls.unshift( callback );
				}
			},
			
			// bagof/3
			"bagof/3": function( thread, point, atom ) {
				var answer, template = atom.args[0], goal = atom.args[1], instances = atom.args[2];
				if( pl.type.is_variable( goal ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( goal ) ) {
					thread.throwError( pl.error.type( "callable", goal, atom.indicator ) );
				} else if( !pl.type.is_variable( instances ) && !pl.type.is_list( instances ) ) {
					thread.throwError( pl.error.type( "list", instances, atom.indicator ) );
				} else {
					var variable = thread.next_free_variable();
					var template_vars;
					if( goal.indicator === "^/2" ) {
						template_vars = goal.args[0].variables();
						goal = goal.args[1];
					} else {
						template_vars = [];
					}
					template_vars = template_vars.concat( template.variables() );
					var free_vars = goal.variables().filter( function( v ){
						return indexOf( template_vars, v ) === -1;
					} );
					var list_vars = new Term( "[]" );
					for( var i = free_vars.length - 1; i >= 0; i-- ) {
						list_vars = new Term( ".", [ new Var( free_vars[i] ), list_vars ] );
					}
					var newGoal = new Term( ",", [goal, new Term( "=", [variable, new Term( ",", [list_vars, template] )] )] );
					var points = thread.points;
					var limit = thread.session.limit;
					var format_success = thread.session.format_success;
					thread.session.format_success = function(x) { return x.substitution; };
					thread.add_goal( newGoal, true, point );
					var answers = [];
					var callback = function( answer ) {
						if( answer !== false && answer !== null && !pl.type.is_error( answer ) ) {
							thread.__calls.unshift( callback );
							var match = false;
							var arg_vars = answer.links[variable.id].args[0];
							var arg_template = answer.links[variable.id].args[1];
							for( var _elem in answers ) {
								if(!answers.hasOwnProperty(_elem)) continue;
								var elem = answers[_elem];
								if( elem.variables.equals( arg_vars ) ) {
									elem.answers.push( arg_template );
									match = true;
									break;
								}
							}
							if( !match ) {
								answers.push( {variables: arg_vars, answers: [arg_template]} );
							}
							thread.session.limit = thread.current_limit;
						} else {
							thread.points = points;
							thread.session.limit = limit;
							thread.session.format_success = format_success;
							if( pl.type.is_error( answer ) ) {
								thread.throwError( answer.args[0] );
							} else if( thread.current_limit > 0 ) {
								var states = [];
								for( var i = 0; i < answers.length; i++ ) {
									answer = answers[i].answers;
									var list = new Term( "[]" );
									for( var j = answer.length - 1; j >= 0; j-- ) {
										list = new Term( ".", [answer[j], list] );
									}
									states.push( new State(
										point.goal.replace( new Term( ",", [new Term( "=", [list_vars, answers[i].variables] ), new Term( "=", [instances, list] )] ) ),
										point.substitution, point
									) );
								}
								thread.prepend( states );
							}
						}
					};
					thread.__calls.unshift( callback );
				}
			},
	
			// setof/3
			"setof/3": function( thread, point, atom ) {
				var answer, template = atom.args[0], goal = atom.args[1], instances = atom.args[2];
				if( pl.type.is_variable( goal ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( goal ) ) {
					thread.throwError( pl.error.type( "callable", goal, atom.indicator ) );
				} else if( !pl.type.is_variable( instances ) && !pl.type.is_list( instances ) ) {
					thread.throwError( pl.error.type( "list", instances, atom.indicator ) );
				} else {
					var variable = thread.next_free_variable();
					var template_vars;
					if( goal.indicator === "^/2" ) {
						template_vars = goal.args[0].variables();
						goal = goal.args[1];
					} else {
						template_vars = [];
					}
					template_vars = template_vars.concat( template.variables() );
					var free_vars = goal.variables().filter( function( v ){
						return indexOf( template_vars, v ) === -1;
					} );
					var list_vars = new Term( "[]" );
					for( var i = free_vars.length - 1; i >= 0; i-- ) {
						list_vars = new Term( ".", [ new Var( free_vars[i] ), list_vars ] );
					}
					var newGoal = new Term( ",", [goal, new Term( "=", [variable, new Term( ",", [list_vars, template] )] )] );
					var points = thread.points;
					var limit = thread.session.limit;
					var format_success = thread.session.format_success;
					thread.session.format_success = function(x) { return x.substitution; };
					thread.add_goal( newGoal, true, point );
					var answers = [];
					var callback = function( answer ) {
						if( answer !== false && answer !== null && !pl.type.is_error( answer ) ) {
							thread.__calls.unshift( callback );
							var match = false;
							var arg_vars = answer.links[variable.id].args[0];
							var arg_template = answer.links[variable.id].args[1];
							for( var _elem in answers ) {
								if(!answers.hasOwnProperty(_elem)) continue;
								var elem = answers[_elem];
								if( elem.variables.equals( arg_vars ) ) {
									elem.answers.push( arg_template );
									match = true;
									break;
								}
							}
							if( !match ) {
								answers.push( {variables: arg_vars, answers: [arg_template]} );
							}
							thread.session.limit = thread.current_limit;
						} else {
							thread.points = points;
							thread.session.limit = limit;
							thread.session.format_success = format_success;
							if( pl.type.is_error( answer ) ) {
								thread.throwError( answer.args[0] );
							} else if( thread.current_limit > 0 ) {
								var states = [];
								for( var i = 0; i < answers.length; i++ ) {
									answer = answers[i].answers.sort( pl.compare );
									var list = new Term( "[]" );
									for( var j = answer.length - 1; j >= 0; j-- ) {
										list = new Term( ".", [answer[j], list] );
									}
									states.push( new State(
										point.goal.replace( new Term( ",", [new Term( "=", [list_vars, answers[i].variables] ), new Term( "=", [instances, list] )] ) ),
										point.substitution, point
									) );
								}
								thread.prepend( states );
							}
						}
					};
					thread.__calls.unshift( callback );
				}
			},
			
			// TERM CREATION AND DECOMPOSITION
			
			// functor/3
			"functor/3": function( thread, point, atom ) {
				var subs;
				var term = atom.args[0], name = atom.args[1], arity = atom.args[2];
				if( pl.type.is_variable( term ) && (pl.type.is_variable( name ) || pl.type.is_variable( arity )) ) {
					thread.throwError( pl.error.instantiation( "functor/3" ) );
				} else if( !pl.type.is_variable( arity ) && !pl.type.is_integer( arity ) ) {
					thread.throwError( pl.error.type( "integer", atom.args[2], "functor/3" ) );
				} else if( !pl.type.is_variable( name ) && !pl.type.is_atomic( name ) ) {
					thread.throwError( pl.error.type( "atomic", atom.args[1], "functor/3" ) );
				} else if( pl.type.is_integer( name ) && pl.type.is_integer( arity ) && arity.value !== 0 ) {
					thread.throwError( pl.error.type( "atom", atom.args[1], "functor/3" ) );
				} else if( pl.type.is_variable( term ) ) {
					if( atom.args[2].value >= 0 ) {
						var args = [];
						for( var i = 0; i < arity.value; i++ )
							args.push( thread.next_free_variable() );
						var functor = pl.type.is_integer( name ) ? name : new Term( name.id, args );
						thread.prepend( [new State( point.goal.replace( new Term( "=", [term, functor] ) ), point.substitution, point.parent )] );
					}
				} else {
					var id = pl.type.is_integer( term ) ? term : new Term( term.id, [] );
					var length = pl.type.is_integer( term ) ? new Num( 0, false ) : new Num( term.args.length, false );
					var goal = new Term( ",", [new Term( "=", [id, name] ), new Term( "=", [length, arity] )] );
					thread.prepend( [new State( point.goal.replace( goal ), point.substitution, point.parent )] );
				}
			},
			
			// arg/3
			"arg/3": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) || pl.type.is_variable( atom.args[1] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( atom.args[0].value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", atom.args[0], atom.indicator ) );
				} else if( !pl.type.is_compound( atom.args[1] ) ) {
					thread.throwError( pl.error.type( "compound", atom.args[1], atom.indicator ) );
				} else {
					var n = atom.args[0].value;
					if( n > 0 && n <= atom.args[1].args.length ) {
						var goal = new Term( "=", [atom.args[1].args[n-1], atom.args[2]] );
						thread.prepend( [new State( point.goal.replace( goal ), point.substitution, point )] );
					}
				}
			},
			
			// =../2 (univ)
			"=../2": function( thread, point, atom ) {
				var list;
				if( pl.type.is_variable( atom.args[0] ) && (pl.type.is_variable( atom.args[1] )
				|| pl.type.is_non_empty_list( atom.args[1] ) && pl.type.is_variable( atom.args[1].args[0] )) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_fully_list( atom.args[1] ) ) {
					thread.throwError( pl.error.type( "list", atom.args[1], atom.indicator ) );
				} else if( !pl.type.is_variable( atom.args[0] ) ) {
					if( pl.type.is_atomic( atom.args[0] ) ) {
						list = new Term( ".", [atom.args[0], new Term( "[]" )] );
					} else {
						list = new Term( "[]" );
						for( var i = atom.args[0].args.length - 1; i >= 0; i-- ) {
							list = new Term( ".", [atom.args[0].args[i], list] );
						}
						list = new Term( ".", [new Term( atom.args[0].id ), list] );
					}
					thread.prepend( [new State( point.goal.replace( new Term( "=", [list, atom.args[1]] ) ), point.substitution, point )] );
				} else if( !pl.type.is_variable( atom.args[1] ) ) {
					var args = [];
					list = atom.args[1].args[1];
					while( list.indicator === "./2" ) {
						args.push( list.args[0] );
						list = list.args[1];
					}
					if( pl.type.is_variable( atom.args[0] ) && pl.type.is_variable( list ) ) {
						thread.throwError( pl.error.instantiation( atom.indicator ) );
					} else if( args.length === 0 && pl.type.is_compound( atom.args[1].args[0] ) ) {
						thread.throwError( pl.error.type( "atomic", atom.args[1].args[0], atom.indicator ) );
					} else if( args.length > 0 && (pl.type.is_compound( atom.args[1].args[0] ) || pl.type.is_number( atom.args[1].args[0] )) ) {
						thread.throwError( pl.error.type( "atom", atom.args[1].args[0], atom.indicator ) );
					} else {
						if( args.length === 0 ) {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [atom.args[1].args[0], atom.args[0]], point ) ), point.substitution, point )] );
						} else {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [new Term( atom.args[1].args[0].id, args ), atom.args[0]] ) ), point.substitution, point )] );
						}
					}
				}
			},
			
			// copy_term/2
			"copy_term/2": function( thread, point, atom ) {
				var renamed = atom.args[0].rename( thread );
				thread.prepend( [new State( point.goal.replace( new Term( "=", [renamed, atom.args[1]] ) ), point.substitution, point.parent )] );
			},
			
			// term_variables/2
			"term_variables/2": function( thread, point, atom ) {
				var term = atom.args[0], vars = atom.args[1];
				if( !pl.type.is_fully_list( vars ) ) {
					thread.throwError( pl.error.type( "list", vars, atom.indicator ) );
				} else {
					var list = arrayToList( map( nub( term.variables() ), function(v) {
						return new Var(v);
					} ) );
					thread.prepend( [new State( point.goal.replace( new Term( "=", [vars, list] ) ), point.substitution, point )] );
				}
			},
			
			// CLAUSE RETRIEVAL AND INFORMATION
			
			// clause/2
			"clause/2": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( atom.args[0] ) ) {
					thread.throwError( pl.error.type( "callable", atom.args[0], atom.indicator ) );
				} else if( !pl.type.is_variable( atom.args[1] ) && !pl.type.is_callable( atom.args[1] ) ) {
					thread.throwError( pl.error.type( "callable", atom.args[1], atom.indicator ) );
				} else if( thread.session.rules[atom.args[0].indicator] !== undefined ) {
					if( thread.is_public_predicate( atom.args[0].indicator ) ) {
						var states = [];
						for( var _rule in thread.session.rules[atom.args[0].indicator] ) {
							if(!thread.session.rules[atom.args[0].indicator].hasOwnProperty(_rule)) continue;
							var rule = thread.session.rules[atom.args[0].indicator][_rule];
							thread.session.renamed_variables = {};
							rule = rule.rename( thread );
							if( rule.body === null ) {
								rule.body = new Term( "true" );
							}
							var goal = new Term( ",", [new Term( "=", [rule.head, atom.args[0]] ), new Term( "=", [rule.body, atom.args[1]] )] );
							states.push( new State( point.goal.replace( goal ), point.substitution, point ) );
						}
						thread.prepend( states );
					} else {
						thread.throwError( pl.error.permission( "access", "private_procedure", atom.args[0].indicator, atom.indicator ) );
					}
				}
			},
			
			// current_predicate/1
			"current_predicate/1": function( thread, point, atom ) {
				var indicator = atom.args[0];
				if( !pl.type.is_variable( indicator ) && (!pl.type.is_compound( indicator ) || indicator.indicator !== "//2") ) {
					thread.throwError( pl.error.type( "predicate_indicator", indicator, atom.indicator ) );
				} else if( !pl.type.is_variable( indicator ) && !pl.type.is_variable( indicator.args[0] ) && !pl.type.is_atom( indicator.args[0] ) ) {
					thread.throwError( pl.error.type( "atom", indicator.args[0], atom.indicator ) );
				} else if( !pl.type.is_variable( indicator ) && !pl.type.is_variable( indicator.args[1] ) && !pl.type.is_integer( indicator.args[1] ) ) {
					thread.throwError( pl.error.type( "integer", indicator.args[1], atom.indicator ) );
				} else {
					var states = [];
					for( var i in thread.session.rules ) {
						if(!thread.session.rules.hasOwnProperty(i)) continue;
						var index = i.lastIndexOf( "/" );
						var name = i.substr( 0, index );
						var arity = parseInt( i.substr( index+1, i.length-(index+1) ) );
						var predicate = new Term( "/", [new Term( name ), new Num( arity, false )] );
						var goal = new Term( "=", [predicate, indicator] );
						states.push( new State( point.goal.replace( goal ), point.substitution, point ) );
					}
					thread.prepend( states );
				}
			},
			
			// CLAUSE CREATION AND DESTRUCTION
			
			// asserta/1
			"asserta/1": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( atom.args[0] ) ) {
					thread.throwError( pl.error.type( "callable", atom.args[0], atom.indicator ) );
				} else {
					var head, body;
					if( atom.args[0].indicator === ":-/2" ) {
						head = atom.args[0].args[0];
						body = body_conversion( atom.args[0].args[1] );
					} else {
						head = atom.args[0];
						body = null;
					}
					if( !pl.type.is_callable( head ) ) {
						thread.throwError( pl.error.type( "callable", head, atom.indicator ) );
					} else if( body !== null && !pl.type.is_callable( body ) ) {
						thread.throwError( pl.error.type( "callable", body, atom.indicator ) );
					} else if( thread.is_public_predicate( head.indicator ) ) {
						if( thread.session.rules[head.indicator] === undefined ) {
							thread.session.rules[head.indicator] = [];
						}
						thread.session.public_predicates[head.indicator] = true;
						thread.session.rules[head.indicator] = [new Rule( head, body, true )].concat( thread.session.rules[head.indicator] );
						thread.success( point );
					} else {
						thread.throwError( pl.error.permission( "modify", "static_procedure", head.indicator, atom.indicator ) );
					}
				}
			},
			
			// assertz/1
			"assertz/1": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( atom.args[0] ) ) {
					thread.throwError( pl.error.type( "callable", atom.args[0], atom.indicator ) );
				} else {
					var head, body;
					if( atom.args[0].indicator === ":-/2" ) {
						head = atom.args[0].args[0];
						body = body_conversion( atom.args[0].args[1] );
					} else {
						head = atom.args[0];
						body = null;
					}
					if( !pl.type.is_callable( head ) ) {
						thread.throwError( pl.error.type( "callable", head, atom.indicator ) );
					} else if( body !== null && !pl.type.is_callable( body ) ) {
						thread.throwError( pl.error.type( "callable", body, atom.indicator ) );
					} else if( thread.is_public_predicate( head.indicator ) ) {
						if( thread.session.rules[head.indicator] === undefined ) {
							thread.session.rules[head.indicator] = [];
						}
						thread.session.public_predicates[head.indicator] = true;
						thread.session.rules[head.indicator].push( new Rule( head, body, true ) );
						thread.success( point );
					} else {
						thread.throwError( pl.error.permission( "modify", "static_procedure", head.indicator, atom.indicator ) );
					}
				}
			},
			
			// retract/1
			"retract/1": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( atom.args[0] ) ) {
					thread.throwError( pl.error.type( "callable", atom.args[0], atom.indicator ) );
				} else {
					var head, body;
					if( atom.args[0].indicator === ":-/2" ) {
						head = atom.args[0].args[0];
						body = atom.args[0].args[1];
					} else {
						head = atom.args[0];
						body = new Term( "true" );
					}
					if( typeof point.retract === "undefined" ) {
						if( thread.is_public_predicate( head.indicator ) ) {
							if( thread.session.rules[head.indicator] !== undefined ) {
								var states = [];
								for( var i = 0; i < thread.session.rules[head.indicator].length; i++ ) {
									thread.session.renamed_variables = {};
									var orule = thread.session.rules[head.indicator][i];
									var rule = orule.rename( thread );
									if( rule.body === null )
										rule.body = new Term( "true", [] );
									var occurs_check = thread.getFlag( "occurs_check" ).indicator === "true/0";
									var unify = pl.unify( new Term( ",", [head, body] ), new Term( ",", [rule.head, rule.body] ), occurs_check );
									if( unify !== null ) {
										var state = new State( point.goal.replace( new Term(",", [
											new Term( "retract", [ new Term( ":-", [head, body] ) ] ),
											new Term( ",", [
												new Term( "=", [head, rule.head] ),
												new Term( "=", [body, rule.body] )
											] )
										] ) ), point.substitution, point );
										state.retract = orule;
										states.push( state );
									}
								}
								thread.prepend( states );
							}
						} else {
							thread.throwError( pl.error.permission( "modify", "static_procedure", head.indicator, atom.indicator ) );
						}
					} else {
						retract( thread, point, head.indicator, point.retract );
					}
				}
			},
			
			// retractall/1
			"retractall/1": function( thread, point, atom ) {
				var head = atom.args[0];
				if( pl.type.is_variable( head ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_callable( head ) ) {
					thread.throwError( pl.error.type( "callable", head, atom.indicator ) );
				} else {
				thread.prepend( [
						new State( point.goal.replace( new Term( ",", [
							new Term( "retract", [new pl.type.Term( ":-", [head, new Var( "_" )] )] ),
							new Term( "fail", [] )
						] ) ), point.substitution, point ),
						new State( point.goal.replace( null ), point.substitution, point )
					] );
				}
			},

			// abolish/1
			"abolish/1": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) || pl.type.is_term( atom.args[0] ) && atom.args[0].indicator === "//2"
				&& (pl.type.is_variable( atom.args[0].args[0] ) || pl.type.is_variable( atom.args[0].args[1] )) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_term( atom.args[0] ) || atom.args[0].indicator !== "//2" ) {
					thread.throwError( pl.error.type( "predicate_indicator", atom.args[0], atom.indicator ) );
				} else if( !pl.type.is_atom( atom.args[0].args[0] ) ) {
					thread.throwError( pl.error.type( "atom", atom.args[0].args[0], atom.indicator ) );
				} else if( !pl.type.is_integer( atom.args[0].args[1] ) ) {
					thread.throwError( pl.error.type( "integer", atom.args[0].args[1], atom.indicator ) );
				} else if( atom.args[0].args[1].value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", atom.args[0].args[1], atom.indicator ) );
				} else if( pl.type.is_number(thread.getFlag( "max_arity" )) && atom.args[0].args[1].value > thread.getFlag( "max_arity" ).value ) {
					thread.throwError( pl.error.representation( "max_arity", atom.indicator ) );
				} else {
					var indicator = atom.args[0].args[0].id + "/" + atom.args[0].args[1].value;
					if( thread.is_public_predicate( indicator ) ) {
						delete thread.session.rules[indicator];
						thread.success( point );
					} else {
						thread.throwError( pl.error.permission( "modify", "static_procedure", indicator, atom.indicator ) );
					}
				}
			},
			
			// ATOM PROCESSING
			
			// atom_length/2
			"atom_length/2": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( atom.args[0] ) ) {
					thread.throwError( pl.error.type( "atom", atom.args[0], atom.indicator ) );
				} else if( !pl.type.is_variable( atom.args[1] ) && !pl.type.is_integer( atom.args[1] ) ) {
					thread.throwError( pl.error.type( "integer", atom.args[1], atom.indicator ) );
				} else if( pl.type.is_integer( atom.args[1] ) && atom.args[1].value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", atom.args[1], atom.indicator ) );
				} else {
					var length = new Num( atom.args[0].id.length, false );
					thread.prepend( [new State( point.goal.replace( new Term( "=", [length, atom.args[1]] ) ), point.substitution, point )] );
				}
			},
			
			// atom_concat/3
			"atom_concat/3": function( thread, point, atom ) {
				var str, goal, start = atom.args[0], end = atom.args[1], whole = atom.args[2];
				if( pl.type.is_variable( whole ) && (pl.type.is_variable( start ) || pl.type.is_variable( end )) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( start ) && !pl.type.is_atom( start ) ) {
					thread.throwError( pl.error.type( "atom", start, atom.indicator ) );
				} else if( !pl.type.is_variable( end ) && !pl.type.is_atom( end ) ) {
					thread.throwError( pl.error.type( "atom", end, atom.indicator ) );
				} else if( !pl.type.is_variable( whole ) && !pl.type.is_atom( whole ) ) {
					thread.throwError( pl.error.type( "atom", whole, atom.indicator ) );
				} else {
					var v1 = pl.type.is_variable( start );
					var v2 = pl.type.is_variable( end );
					//var v3 = pl.type.is_variable( whole );
					if( !v1 && !v2 ) {
						goal = new Term( "=", [whole, new Term( start.id + end.id )] );
						thread.prepend( [new State( point.goal.replace( goal ), point.substitution, point )] );
					} else if( v1 && !v2 ) {
						str = whole.id.substr( 0, whole.id.length - end.id.length );
						if( str + end.id === whole.id ) {
							goal = new Term( "=", [start, new Term( str )] );
							thread.prepend( [new State( point.goal.replace( goal ), point.substitution, point )] );
						}
					} else if( v2 && !v1 ) {
						str = whole.id.substr( start.id.length );
						if( start.id + str === whole.id ) {
							goal = new Term( "=", [end, new Term( str )] );
							thread.prepend( [new State( point.goal.replace( goal ), point.substitution, point )] );
						}
					} else {
						var states = [];
						for( var i = 0; i <= whole.id.length; i++ ) {
							var atom1 = new Term( whole.id.substr( 0, i ) );
							var atom2 = new Term( whole.id.substr( i ) );
							goal = new Term( ",", [new Term( "=", [atom1, start] ), new Term( "=", [atom2, end] )] );
							states.push( new State( point.goal.replace( goal ), point.substitution, point ) );
						}
						thread.prepend( states );
					}
				}
			},
			
			// sub_atom/5
			"sub_atom/5": function( thread, point, atom ) {
				var i, atom1 = atom.args[0], before = atom.args[1], length = atom.args[2], after = atom.args[3], subatom = atom.args[4];
				if( pl.type.is_variable( atom1 ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( before ) && !pl.type.is_integer( before ) ) {
					thread.throwError( pl.error.type( "integer", before, atom.indicator ) );
				} else if( !pl.type.is_variable( length ) && !pl.type.is_integer( length ) ) {
					thread.throwError( pl.error.type( "integer", length, atom.indicator ) );
				} else if( !pl.type.is_variable( after ) && !pl.type.is_integer( after ) ) {
					thread.throwError( pl.error.type( "integer", after, atom.indicator ) );
				} else if( pl.type.is_integer( before ) && before.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", before, atom.indicator ) );
				} else if( pl.type.is_integer( length ) && length.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", length, atom.indicator ) );
				} else if( pl.type.is_integer( after ) && after.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", after, atom.indicator ) );
				} else {
					var bs = [], ls = [], as = [];
					if( pl.type.is_variable( before ) ) {
						for( i = 0; i <= atom1.id.length; i++ ) {
							bs.push( i );
						}
					} else {
						bs.push( before.value );
					}
					if( pl.type.is_variable( length ) ) {
						for( i = 0; i <= atom1.id.length; i++ ) {
							ls.push( i );
						}
					} else {
						ls.push( length.value );
					}
					if( pl.type.is_variable( after ) ) {
						for( i = 0; i <= atom1.id.length; i++ ) {
							as.push( i );
						}
					} else {
						as.push( after.value );
					}
					var states = [];
					for( var _i in bs ) {
						if(!bs.hasOwnProperty(_i)) continue;
						i = bs[_i];
						for( var _j in ls ) {
							if(!ls.hasOwnProperty(_j)) continue;
							var j = ls[_j];
							var k = atom1.id.length - i - j;
							if( indexOf( as, k ) !== -1 ) {
							if( i+j+k === atom1.id.length ) {
									var str = atom1.id.substr( i, j );
									if( atom1.id === atom1.id.substr( 0, i ) + str + atom1.id.substr( i+j, k ) ) {
										var pl1 = new Term( "=", [new Term( str ), subatom] );
										var pl2 = new Term( "=", [before, new Num( i )] );
										var pl3 = new Term( "=", [length, new Num( j )] );
										var pl4 = new Term( "=", [after, new Num( k )] );
										var goal = new Term( ",", [ new Term( ",", [ new Term( ",", [pl2, pl3] ), pl4] ), pl1] );
										states.push( new State( point.goal.replace( goal ), point.substitution, point ) );
									}
								}
							}
						}
					}
					thread.prepend( states );
				}
			},
			
			// atom_chars/2
			"atom_chars/2": function( thread, point, atom ) {
				var atom1 = atom.args[0], list = atom.args[1];
				if( pl.type.is_variable( atom1 ) && pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( atom1 ) && !pl.type.is_atom( atom1 ) ) {
					thread.throwError( pl.error.type( "atom", atom1, atom.indicator ) );
				} else {
					if( !pl.type.is_variable( atom1 ) ) {
						var list1 = new Term( "[]" );
						for( var i = atom1.id.length-1; i >= 0; i-- ) {
							list1 = new Term( ".", [new Term( atom1.id.charAt( i ) ), list1] );
						}
						thread.prepend( [new State( point.goal.replace( new Term( "=", [list, list1] ) ), point.substitution, point )] );
					} else {			
						var pointer = list;
						var v = pl.type.is_variable( atom1 );
						var str = "";
						while( pointer.indicator === "./2" ) {
							if( !pl.type.is_character( pointer.args[0] ) ) {
								if( pl.type.is_variable( pointer.args[0] ) && v ) {
									thread.throwError( pl.error.instantiation( atom.indicator ) );
									return;
								} else if( !pl.type.is_variable( pointer.args[0] ) ) {
									thread.throwError( pl.error.type( "character", pointer.args[0], atom.indicator ) );
									return;
								}
							} else {
								str += pointer.args[0].id;
							}
							pointer = pointer.args[1];
						}
						if( pl.type.is_variable( pointer ) && v ) {
							thread.throwError( pl.error.instantiation( atom.indicator ) );
						} else if( !pl.type.is_empty_list( pointer ) && !pl.type.is_variable( pointer ) ) {
							thread.throwError( pl.error.type( "list", list, atom.indicator ) );
						} else {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [new Term( str ), atom1] ) ), point.substitution, point )] );
						}
					}
				}
			},
			
			// atom_codes/2
			"atom_codes/2": function( thread, point, atom ) {
				var atom1 = atom.args[0], list = atom.args[1];
				if( pl.type.is_variable( atom1 ) && pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( atom1 ) && !pl.type.is_atom( atom1 ) ) {
					thread.throwError( pl.error.type( "atom", atom1, atom.indicator ) );
				} else {
					if( !pl.type.is_variable( atom1 ) ) {
						var list1 = new Term( "[]" );
						for( var i = atom1.id.length-1; i >= 0; i-- ) {
							list1 = new Term( ".", [new Num( codePointAt(atom1.id,i), false ), list1] );
						}
						thread.prepend( [new State( point.goal.replace( new Term( "=", [list, list1] ) ), point.substitution, point )] );
					} else {			
						var pointer = list;
						var v = pl.type.is_variable( atom1 );
						var str = "";
						while( pointer.indicator === "./2" ) {
							if( !pl.type.is_character_code( pointer.args[0] ) ) {
								if( pl.type.is_variable( pointer.args[0] ) && v ) {
									thread.throwError( pl.error.instantiation( atom.indicator ) );
									return;
								} else if( !pl.type.is_variable( pointer.args[0] ) ) {
									thread.throwError( pl.error.representation( "character_code", atom.indicator ) );
									return;
								}
							} else {
								str += fromCodePoint( pointer.args[0].value );
							}
							pointer = pointer.args[1];
						}
						if( pl.type.is_variable( pointer ) && v ) {
							thread.throwError( pl.error.instantiation( atom.indicator ) );
						} else if( !pl.type.is_empty_list( pointer ) && !pl.type.is_variable( pointer ) ) {
							thread.throwError( pl.error.type( "list", list, atom.indicator ) );
						} else {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [new Term( str ), atom1] ) ), point.substitution, point )] );
						}
					}
				}
			},
			
			// char_code/2
			"char_code/2": function( thread, point, atom ) {
				var char = atom.args[0], code = atom.args[1];
				if( pl.type.is_variable( char ) && pl.type.is_variable( code ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( char ) && !pl.type.is_character( char ) ) {
					thread.throwError( pl.error.type( "character", char, atom.indicator ) );
				} else if( !pl.type.is_variable( code ) && !pl.type.is_integer( code ) ) {
					thread.throwError( pl.error.type( "integer", code, atom.indicator ) );
				} else if( !pl.type.is_variable( code ) && !pl.type.is_character_code( code ) ) {
					thread.throwError( pl.error.representation( "character_code", atom.indicator ) );
				} else {
					if( pl.type.is_variable( code ) ) {
						var code1 = new Num( codePointAt(char.id,0 ), false );
						thread.prepend( [new State( point.goal.replace( new Term( "=", [code1, code] ) ), point.substitution, point )] );
					} else {
						var char1 = new Term( fromCodePoint( code.value ) );
						thread.prepend( [new State( point.goal.replace( new Term( "=", [char1, char] ) ), point.substitution, point )] );
					}
				}
			},
			
			// number_chars/2
			"number_chars/2": function( thread, point, atom ) {
				var str, num = atom.args[0], list = atom.args[1];
				if( pl.type.is_variable( num ) && pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( num ) && !pl.type.is_number( num ) ) {
					thread.throwError( pl.error.type( "number", num, atom.indicator ) );
				} else if( !pl.type.is_variable( list ) && !pl.type.is_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else {
					var isvar = pl.type.is_variable( num );
					if( !pl.type.is_variable( list ) ) {	
						var pointer = list;
						var total = true;
						str = "";
						while( pointer.indicator === "./2" ) {
							if( !pl.type.is_character( pointer.args[0] ) ) {
								if( pl.type.is_variable( pointer.args[0] ) ) {
									total = false;
								} else if( !pl.type.is_variable( pointer.args[0] ) ) {
									thread.throwError( pl.error.type( "character", pointer.args[0], atom.indicator ) );
									return;
								}
							} else {
								str += pointer.args[0].id;
							}
							pointer = pointer.args[1];
						}
						total = total && pl.type.is_empty_list( pointer );
						if( !pl.type.is_empty_list( pointer ) && !pl.type.is_variable( pointer ) ) {
							thread.throwError( pl.error.type( "list", list, atom.indicator ) );
							return;
						}
						if( !total && isvar ) {
							thread.throwError( pl.error.instantiation( atom.indicator ) );
							return;
						} else if( total ) {
							if( pl.type.is_variable( pointer ) && isvar ) {
								thread.throwError( pl.error.instantiation( atom.indicator ) );
								return;
							} else {
								var expr = thread.parse( str );
								var num2 = expr.value;
								if( !pl.type.is_number( num2 ) || expr.tokens[expr.tokens.length-1].space ) {
									thread.throwError( pl.error.syntax_by_predicate( "parseable_number", atom.indicator ) );
								} else {
									thread.prepend( [new State( point.goal.replace( new Term( "=", [num, num2] ) ), point.substitution, point )] );
								}
								return;
							}
						}
					}
					if( !isvar ) {
						str = num.toString();
						var list2 = new Term( "[]" );
						for( var i = str.length - 1; i >= 0; i-- ) {
							list2 = new Term( ".", [ new Term( str.charAt( i ) ), list2 ] );
						}
						thread.prepend( [new State( point.goal.replace( new Term( "=", [list, list2] ) ), point.substitution, point )] );
					}
				}
			},
			
			// number_codes/2
			"number_codes/2": function( thread, point, atom ) {
				var str, num = atom.args[0], list = atom.args[1];
				if( pl.type.is_variable( num ) && pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( num ) && !pl.type.is_number( num ) ) {
					thread.throwError( pl.error.type( "number", num, atom.indicator ) );
				} else if( !pl.type.is_variable( list ) && !pl.type.is_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else {
					var isvar = pl.type.is_variable( num );
					if( !pl.type.is_variable( list ) ) {	
						var pointer = list;
						var total = true;
						str = "";
						while( pointer.indicator === "./2" ) {
							if( !pl.type.is_character_code( pointer.args[0] ) ) {
								if( pl.type.is_variable( pointer.args[0] ) ) {
									total = false;
								} else if( !pl.type.is_variable( pointer.args[0] ) ) {
									thread.throwError( pl.error.type( "character_code", pointer.args[0], atom.indicator ) );
									return;
								}
							} else {
								str += fromCodePoint( pointer.args[0].value );
							}
							pointer = pointer.args[1];
						}
						total = total && pl.type.is_empty_list( pointer );
						if( !pl.type.is_empty_list( pointer ) && !pl.type.is_variable( pointer ) ) {
							thread.throwError( pl.error.type( "list", list, atom.indicator ) );
							return;
						}
						if( !total && isvar ) {
							thread.throwError( pl.error.instantiation( atom.indicator ) );
							return;
						} else if( total ) {
							if( pl.type.is_variable( pointer ) && isvar ) {
								thread.throwError( pl.error.instantiation( atom.indicator ) );
								return;
							} else {
								var expr = thread.parse( str );
								var num2 = expr.value;
								if( !pl.type.is_number( num2 ) || expr.tokens[expr.tokens.length-1].space ) {
									thread.throwError( pl.error.syntax_by_predicate( "parseable_number", atom.indicator ) );
								} else {
									thread.prepend( [new State( point.goal.replace( new Term( "=", [num, num2] ) ), point.substitution, point )] );
								}
								return;
							}
						}
					}
					if( !isvar ) {
						str = num.toString();
						var list2 = new Term( "[]" );
						for( var i = str.length - 1; i >= 0; i-- ) {
							list2 = new Term( ".", [ new Num( codePointAt(str,i), false ), list2 ] );
						}
						thread.prepend( [new State( point.goal.replace( new Term( "=", [list, list2] ) ), point.substitution, point )] );
					}
				}
			},
			
			// upcase_atom/2
			"upcase_atom/2": function( thread, point, atom ) {
				var original = atom.args[0], upcase = atom.args[1];
				if( pl.type.is_variable( original ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( original ) ) {
					thread.throwError( pl.error.type( "atom", original, atom.indicator ) );
				} else if( !pl.type.is_variable( upcase ) && !pl.type.is_atom( upcase ) ) {
					thread.throwError( pl.error.type( "atom", upcase, atom.indicator ) );
				} else {
					thread.prepend( [new State( point.goal.replace( new Term( "=", [upcase, new Term( original.id.toUpperCase(), [] )] ) ), point.substitution, point )] );
				}
			},
			
			// downcase_atom/2
			"downcase_atom/2": function( thread, point, atom ) {
				var original = atom.args[0], downcase = atom.args[1];
				if( pl.type.is_variable( original ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( original ) ) {
					thread.throwError( pl.error.type( "atom", original, atom.indicator ) );
				} else if( !pl.type.is_variable( downcase ) && !pl.type.is_atom( downcase ) ) {
					thread.throwError( pl.error.type( "atom", downcase, atom.indicator ) );
				} else {
					thread.prepend( [new State( point.goal.replace( new Term( "=", [downcase, new Term( original.id.toLowerCase(), [] )] ) ), point.substitution, point )] );
				}
			},
			
			// atomic_list_concat/2
			"atomic_list_concat/2": function( thread, point, atom ) {
				var list = atom.args[0], concat = atom.args[1];
				thread.prepend( [new State( point.goal.replace( new Term( "atomic_list_concat", [list, new Term( "", [] ), concat] ) ), point.substitution, point )] );
			},
			
			// atomic_list_concat/3
			"atomic_list_concat/3": function( thread, point, atom ) {
				var list = atom.args[0], separator = atom.args[1], concat = atom.args[2];
				if( pl.type.is_variable( separator ) || pl.type.is_variable( list ) && pl.type.is_variable( concat ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( list ) && !pl.type.is_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else if( !pl.type.is_variable( concat ) && !pl.type.is_atom( concat ) ) {
					thread.throwError( pl.error.type( "atom", concat, atom.indicator ) );
				} else {
					if( !pl.type.is_variable( concat ) ) {
						var atomic = arrayToList( map(
							concat.id.split( separator.id ),
							function( id ) {
								return new Term( id, [] );
							}
						) );
						thread.prepend( [new State( point.goal.replace( new Term( "=", [atomic, list] ) ), point.substitution, point )] );
					} else {
						var id = "";
						var pointer = list;
						while( pl.type.is_term( pointer ) && pointer.indicator === "./2" ) {
							if( !pl.type.is_atom( pointer.args[0] ) && !pl.type.is_number( pointer.args[0] ) ) {
								thread.throwError( pl.error.type( "atomic", pointer.args[0], atom.indicator ) );
								return;
							}
							if( id !== "" )
								id += separator.id;
							if( pl.type.is_atom( pointer.args[0] ) )
								id += pointer.args[0].id;
							else
								id += "" + pointer.args[0].value;
							pointer = pointer.args[1];
						}
						id = new Term( id, [] );
						if( pl.type.is_variable( pointer ) ) {
							thread.throwError( pl.error.instantiation( atom.indicator ) );
						} else if( !pl.type.is_term( pointer ) || pointer.indicator !== "[]/0" ) {
							thread.throwError( pl.error.type( "list", list, atom.indicator ) );
						} else {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [id, concat] ) ), point.substitution, point )] );
						}
					}
				}
			},
			
			// TERM COMPARISON
			
			"@=</2": function( thread, point, atom ) {
				if( pl.compare( atom.args[0], atom.args[1] ) <= 0 ) {
					thread.success( point );
				}
			},
			
			"==/2": function( thread, point, atom ) {
				if( pl.compare( atom.args[0], atom.args[1] ) === 0 ) {
					thread.success( point );
				}
			},
			
			"\\==/2": function( thread, point, atom ) {
				if( pl.compare( atom.args[0], atom.args[1] ) !== 0 ) {
					thread.success( point );
				}
			},
			
			"@</2": function( thread, point, atom ) {
				if( pl.compare( atom.args[0], atom.args[1] ) < 0 ) {
					thread.success( point );
				}
			},
			
			"@>/2": function( thread, point, atom ) {
				if( pl.compare( atom.args[0], atom.args[1] ) > 0 ) {
					thread.success( point );
				}
			},
			
			"@>=/2": function( thread, point, atom ) {
				if( pl.compare( atom.args[0], atom.args[1] ) >= 0 ) {
					thread.success( point );
				}
			},
			
			"compare/3": function( thread, point, atom ) {
				var order = atom.args[0], left = atom.args[1], right = atom.args[2];
				if( !pl.type.is_variable( order ) && !pl.type.is_atom( order ) ) {
					thread.throwError( pl.error.type( "atom", order, atom.indicator ) );
				} else if( pl.type.is_atom( order ) && ["<", ">", "="].indexOf( order.id ) === -1 ) {
					thread.throwError( pl.type.domain( "order", order, atom.indicator ) );
				} else {
					var compare = pl.compare( left, right );
					compare = compare === 0 ? "=" : (compare === -1 ? "<" : ">");
					thread.prepend( [new State( point.goal.replace( new Term( "=", [order, new Term( compare, [] )] ) ), point.substitution, point )] );
				}
			},
			
			// EVALUATION
			
			// is/2
			"is/2": function( thread, point, atom ) {
				var op = atom.args[1].interpret( thread );
				if( !pl.type.is_number( op ) ) {
					thread.throwError( op );
				} else {
					thread.prepend( [new State( point.goal.replace( new Term( "=", [atom.args[0], op], thread.level ) ), point.substitution, point )] );
				}
			},
			
			// between/3
			"between/3": function( thread, point, atom ) {
				var lower = atom.args[0], upper = atom.args[1], bet = atom.args[2];
				if( pl.type.is_variable( lower ) || pl.type.is_variable( upper ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_integer( lower ) ) {
					thread.throwError( pl.error.type( "integer", lower, atom.indicator ) );
				} else if( !pl.type.is_integer( upper ) ) {
					thread.throwError( pl.error.type( "integer", upper, atom.indicator ) );
				} else if( !pl.type.is_variable( bet ) && !pl.type.is_integer( bet ) ) {
					thread.throwError( pl.error.type( "integer", bet, atom.indicator ) );
				} else {
					if( pl.type.is_variable( bet ) ) {
						var states = [new State( point.goal.replace( new Term( "=", [bet, lower] ) ), point.substitution, point )];
						if( lower.value < upper.value )
							states.push( new State( point.goal.replace( new Term( "between", [new Num( lower.value+1, false ), upper, bet] ) ), point.substitution, point ) );
						thread.prepend( states );
					} else if( lower.value <= bet.value && upper.value >= bet.value ) {
						thread.success( point );
					}
				}
			},
			
			// succ/2
			"succ/2": function( thread, point, atom ) {
				var n = atom.args[0], m = atom.args[1];
				if( pl.type.is_variable( n ) && pl.type.is_variable( m ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( n ) && !pl.type.is_integer( n ) ) {
					thread.throwError( pl.error.type( "integer", n, atom.indicator ) );
				} else if( !pl.type.is_variable( m ) && !pl.type.is_integer( m ) ) {
					thread.throwError( pl.error.type( "integer", m, atom.indicator ) );
				} else if( !pl.type.is_variable( n ) && n.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", n, atom.indicator ) );
				} else if( !pl.type.is_variable( m ) && m.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", m, atom.indicator ) );
				} else {
					if( pl.type.is_variable( m ) || m.value > 0 ) {
						if( pl.type.is_variable( n ) ) {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [n, new Num( m.value-1, false )] ) ), point.substitution, point )] );
						} else {
							thread.prepend( [new State( point.goal.replace( new Term( "=", [m, new Num( n.value+1, false )] ) ), point.substitution, point )] );
						}
					}
				}
			},
			
			// =:=/2
			"=:=/2": function( thread, point, atom ) {
				var cmp = pl.arithmetic_compare( thread, atom.args[0], atom.args[1] );
				if( pl.type.is_term( cmp ) ) {
					thread.throwError( cmp );
				} else if( cmp === 0 ) {
					thread.success( point );
				}
			},
			
			// =\=/2
			"=\\=/2": function( thread, point, atom ) {
				var cmp = pl.arithmetic_compare( thread, atom.args[0], atom.args[1] );
				if( pl.type.is_term( cmp ) ) {
					thread.throwError( cmp );
				} else if( cmp !== 0 ) {
					thread.success( point );
				}
			},
			
			// </2
			"</2": function( thread, point, atom ) {
				var cmp = pl.arithmetic_compare( thread, atom.args[0], atom.args[1] );
				if( pl.type.is_term( cmp ) ) {
					thread.throwError( cmp );
				} else if( cmp < 0 ) {
					thread.success( point );
				}
			},
			
			// =</2
			"=</2": function( thread, point, atom ) {
				var cmp = pl.arithmetic_compare( thread, atom.args[0], atom.args[1] );
				if( pl.type.is_term( cmp ) ) {
					thread.throwError( cmp );
				} else if( cmp <= 0 ) {
					thread.success( point );
				}
			},
			
			// >/2
			">/2": function( thread, point, atom ) {
				var cmp = pl.arithmetic_compare( thread, atom.args[0], atom.args[1] );
				if( pl.type.is_term( cmp ) ) {
					thread.throwError( cmp );
				} else if( cmp > 0 ) {
					thread.success( point );
				}
			},
			
			// >=/2
			">=/2": function( thread, point, atom ) {
				var cmp = pl.arithmetic_compare( thread, atom.args[0], atom.args[1] );
				if( pl.type.is_term( cmp ) ) {
					thread.throwError( cmp );
				} else if( cmp >= 0 ) {
					thread.success( point );
				}
			},
			
			// TYPE TEST
			
			// var/1
			"var/1": function( thread, point, atom ) {
				if( pl.type.is_variable( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// atom/1
			"atom/1": function( thread, point, atom ) {
				if( pl.type.is_atom( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// atomic/1
			"atomic/1": function( thread, point, atom ) {
				if( pl.type.is_atomic( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// compound/1
			"compound/1": function( thread, point, atom ) {
				if( pl.type.is_compound( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// integer/1
			"integer/1": function( thread, point, atom ) {
				if( pl.type.is_integer( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// float/1
			"float/1": function( thread, point, atom ) {
				if( pl.type.is_float( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// number/1
			"number/1": function( thread, point, atom ) {
				if( pl.type.is_number( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// nonvar/1
			"nonvar/1": function( thread, point, atom ) {
				if( !pl.type.is_variable( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			// ground/1
			"ground/1": function( thread, point, atom ) {
				if( atom.variables().length === 0 ) {
					thread.success( point );
				}
			},
			
			// acyclic_term/1
			"acyclic_term/1": function( thread, point, atom ) {
				var test = point.substitution.apply( point.substitution );
				var variables = atom.args[0].variables();
				for( var i = 0; i < variables.length; i++ )
					if( !point.substitution.links[variables[i]].equals( test.links[variables[i]] ) )
						return;
				thread.success( point );
			},
			
			// callable/1
			"callable/1": function( thread, point, atom ) {
				if( pl.type.is_callable( atom.args[0] ) ) {
					thread.success( point );
				}
			},
			
			
			// IMPLEMENTATION DEFINED HOOKS
			
			// halt/0
			"halt/0": function( thread, point, _ ) {
				thread.points = [];
			},
			
			// halt/1
			"halt/1": function( thread, point, atom ) {
				var int = atom.args[0];
				if( pl.type.is_variable( int ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_integer( int ) ) {
					thread.throwError( pl.error.type( "integer", int, atom.indicator ) );
				} else {
					thread.points = [];
				}
			},
			
			// current_prolog_flag/2
			"current_prolog_flag/2": function( thread, point, atom ) {
				var flag = atom.args[0], value = atom.args[1];
				if( !pl.type.is_variable( flag ) && !pl.type.is_atom( flag ) ) {
					thread.throwError( pl.error.type( "atom", flag, atom.indicator ) );
				} else if( !pl.type.is_variable( flag ) && !pl.type.is_flag( flag ) ) {
					thread.throwError( pl.error.domain( "prolog_flag", flag, atom.indicator ) );
				} else {
					var states = [];
					for( var name in pl.flag ) {
						if(!pl.flag.hasOwnProperty(name)) continue;
						var goal = new Term( ",", [new Term( "=", [new Term( name ), flag] ), new Term( "=", [thread.getFlag(name), value] )] );
						states.push( new State( point.goal.replace( goal ), point.substitution, point ) );
					}
					thread.prepend( states );
				}
			},
			
			// set_prolog_flag/2
			"set_prolog_flag/2": function( thread, point, atom ) {
				var flag = atom.args[0], value = atom.args[1];
				if( pl.type.is_variable( flag ) || pl.type.is_variable( value ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( flag ) ) {
					thread.throwError( pl.error.type( "atom", flag, atom.indicator ) );
				} else if( !pl.type.is_flag( flag ) ) {
					thread.throwError( pl.error.domain( "prolog_flag", flag, atom.indicator ) );
				} else if( !pl.type.is_value_flag( flag, value ) ) {
					thread.throwError( pl.error.domain( "flag_value", new Term( "+", [flag, value] ), atom.indicator ) );
				} else if( !pl.type.is_modifiable_flag( flag ) ) {
					thread.throwError( pl.error.permission( "modify", "flag", flag ) );
				} else {
					thread.session.flag[flag.id] = value;
					thread.success( point );
				}
			}
			
		},
		
		// Flags
		flag: {
			
			// Bounded numbers
			bounded: {
				allowed: [new Term( "true" ), new Term( "false" )],
				value: new Term( "true" ),
				changeable: false
			},
			
			// Maximum integer
			max_integer: {
				allowed: [new Num( Number.MAX_SAFE_INTEGER )],
				value: new Num( Number.MAX_SAFE_INTEGER ),
				changeable: false
			},
			
			// Minimum integer
			min_integer: {
				allowed: [new Num( Number.MIN_SAFE_INTEGER )],
				value: new Num( Number.MIN_SAFE_INTEGER ),
				changeable: false
			},
			
			// Rounding function
			integer_rounding_function: {
				allowed: [new Term( "down" ), new Term( "toward_zero" )],
				value: new Term( "toward_zero" ),
				changeable: false
			},
			
			// Character conversion
			char_conversion : {
				allowed: [new Term( "on" ), new Term( "off" )],
				value: new Term( "on" ),
				changeable: true
			},
			
			// Debugger
			debug: {
				allowed: [new Term( "on" ), new Term( "off" )],
				value: new Term( "off" ),
				changeable: true
			},
			
			// Maximum arity of predicates
			max_arity: {
				allowed: [new Term( "unbounded" )],
				value: new Term( "unbounded" ),
				changeable: false
			},
			
			// Unkwnow predicates behavior
			unknown: {
				allowed: [new Term( "error" ), new Term( "fail" ), new Term( "warning" )],
				value: new Term( "error" ),
				changeable: true
			},
			
			// Double quotes behavior
			double_quotes: {
				allowed: [new Term( "chars" ), new Term( "codes" ), new Term( "atom" )],
				value: new Term( "codes" ),
				changeable: true
			},
			
			// Occurs check behavior
			occurs_check: {
				allowed: [new Term( "false" ), new Term( "true" )],
				value: new Term( "false" ),
				changeable: true
			},
			
			// Dialect
			dialect: {
				allowed: [new Term( "tau" )],
				value: new Term( "tau" ),
				changeable: false
			},
			
			// Version
			version_data: {
				allowed: [new Term( "tau", [new Num(version.major,false), new Num(version.minor,false), new Num(version.patch,false), new Term(version.status)] )],
				value: new Term( "tau", [new Num(version.major,false), new Num(version.minor,false), new Num(version.patch,false), new Term(version.status)] ),
				changeable: false
			},
			
			// NodeJS
			nodejs: {
				allowed: [new Term( "yes" ), new Term( "no" )],
				value: new Term( typeof module !== 'undefined' && module.exports ? "yes" : "no" ),
				changeable: false
			}
			
		},
		
		// Unify
		unify: function( obj1, obj2, occurs_check ) {
			occurs_check = occurs_check === undefined ? false : occurs_check;
			if( this.type.is_anonymous_var( obj1 ) ) {
				return new State( obj2, new Substitution() );
			} else if( this.type.is_anonymous_var( obj2 ) ) {
				return new State( obj1, new Substitution() );
			} else if( this.type.is_variable( obj2 ) ) {
				var links = {};
				if( occurs_check && indexOf( obj1.variables(), obj2.id ) !== -1 && !pl.type.is_variable( obj1 ) ) {
					return null;
				}
				links[obj2.id] = obj1;
				return new State( obj1, new Substitution( links ) );
			} else {
				return obj1.unify( obj2, occurs_check );
			}
		},
		
		// Compare
		compare: function( obj1, obj2 ) {
			var type = pl.type.compare( obj1, obj2 );
			return type !== 0 ? type : obj1.compare( obj2 );
		},
		
		// Arithmetic comparison
		arithmetic_compare: function( thread, obj1, obj2 ) {
			var expr1 = obj1.interpret( thread );
			if( !pl.type.is_number( expr1 ) ) {
				return expr1;
			} else {
				var expr2 = obj2.interpret( thread );
				if( !pl.type.is_number( expr2 ) ) {
					return expr2;
				} else {
					return expr1.value < expr2.value ? -1 : (expr1.value > expr2.value ? 1 : 0);
				}
			}
		},
		
		// Operate
		operate: function( thread, obj ) {
			if( pl.type.is_operator( obj ) ) {
				var op = pl.type.is_operator( obj );
				var args = [], value;
				var type = false;
				for( var i = 0; i < obj.args.length; i++ ) {
					value = obj.args[i].interpret( thread );
					if( !pl.type.is_number( value ) ) {
						return value;
					} else if( op.type_args !== null && value.is_float !== op.type_args ) {
						return pl.error.type( op.type_args ? "float" : "integer", value, thread.__call_indicator );
					} else {
						args.push( value.value );
					}
					type = type || value.is_float;
				}
				args.push( thread );
				value = pl.arithmetic.evaluation[obj.indicator].fn.apply( this, args );
				type = op.type_result === null ? type : op.type_result;
				if( pl.type.is_term( value ) ) {
					return value;
				} else if( value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY ) {
					return pl.error.evaluation( "overflow", thread.__call_indicator );
				} else if( type === false && thread.getFlag( "bounded" ).id === "true" && (value > thread.getFlag( "max_integer" ).value || value < thread.getFlag( "min_integer" ).value) ) {
					return pl.error.evaluation( "int_overflow", thread.__call_indicator );
				} else {
					return new Num( value, type );
				}
			} else {
				return pl.error.type( "evaluable", obj.indicator, thread.__call_indicator );
			}
		},
		
		// Errors
		error: {
			
			// Existence error
			existence: function( type, object, indicator ) {
				return new Term( "error", [new Term( "existence_error", [new Term( type ), str_indicator( object )] ), str_indicator( indicator )] );
			},
			
			// Type error
			type: function( expected, found, indicator ) {
				return new Term( "error", [new Term( "type_error", [new Term( expected ), found] ), str_indicator( indicator )] );
			},
			
			// Instantation error
			instantiation: function( indicator ) {
				return new Term( "error", [new Term( "instantiation_error" ), str_indicator( indicator )] );
			},
			
			// Domain error
			domain: function( expected, found, indicator ) {
				return new Term( "error", [new Term( "domain_error", [new Term( expected ), found]), str_indicator( indicator )] );
			},
			
			// Representation error
			representation: function( flag, indicator ) {
				return new Term( "error", [new Term( "representation_error", [new Term( flag )] ), str_indicator( indicator )] );
			},
			
			// Permission error
			permission: function( operation, type, found, indicator ) {
				return new Term( "error", [new Term( "permission_error", [new Term( operation ), new Term( type ), found] ), str_indicator( indicator )] );
			},
			
			// Evaluation error
			evaluation: function( error, indicator ) {
				return new Term( "error", [new Term( "evaluation_error", [new Term( error )] ), str_indicator( indicator )] );
			},
			
			// Syntax error
			syntax: function( token, expected, last ) {
				token = token || {value: "", line: 0, column: 0, matches: [""], start: 0};
				var position = last && token.matches.length > 0 ? token.start + token.matches[0].length : token.start;
				var found = last ? new Term("token_not_found") : new Term("found", [new Term(token.value.toString())]);
				var info = new Term( ".", [new Term( "line", [new Num(token.line+1)] ), new Term( ".", [new Term( "column", [new Num(position+1)] ), new Term( ".", [found, new Term( "[]", [] )] )] )] );
				return new Term( "error", [new Term( "syntax_error", [new Term( expected )] ), info] );
			},
			
			// Syntax error by predicate
			syntax_by_predicate: function( expected, indicator ) {
				return new Term( "error", [new Term( "syntax_error", [new Term( expected ) ] ), str_indicator( indicator )] );
			}
			
		},
		
		// Warnings
		warning: {
			
			// Singleton variables
			singleton: function( variables, rule, line ) {
				var list = new Term( "[]" );
				for( var i = variables.length-1; i >= 0; i-- )
					list = new Term( ".", [new Var(variables[i]), list] );
				return new Term( "warning", [new Term( "singleton_variables", [list, str_indicator(rule)]), new Term(".",[new Term( "line", [ new Num( line, false ) ]), new Term("[]")])] );
			},
			
			// Failed goal
			failed_goal: function( goal, line ) {
				return new Term( "warning", [new Term( "failed_goal", [goal]), new Term(".",[new Term( "line", [ new Num( line, false ) ]), new Term("[]")])] );
			}

		},
		
		// Format of renamed variables
		format_variable: function( variable ) {
			return "_" + variable;
		},
		
		// Format of computed answers
		format_answer: function( answer, thread ) {
			if( thread instanceof Session )
				thread = thread.thread;
			if( pl.type.is_error( answer ) ) {
				return "uncaught exception: " + answer.args[0].toString();
			} else if( answer === false ) {
				return "false.";
			} else if( answer === null ) {
				return "limit exceeded ;";
			} else {
				var i = 0;
				var str = "";
				if( pl.type.is_substitution( answer ) ) {
					var dom = answer.domain( true );
					answer = answer.filter( function( id, value ) {
						return !pl.type.is_variable( value ) || dom.indexOf( value.id ) !== -1 && id !== value.id;
					} );
				}
				for( var link in answer.links ) {
					if(!answer.links.hasOwnProperty(link)) continue;
					i++;
					if( str !== "" ) {
						str += ", ";
					}
					str += link.toString() + " = " + answer.links[link].toString();
				}
				var delimiter = typeof thread === "undefined" || thread.points.length > 0 ? " ;" : "."; 
				if( i === 0 ) {
					return "true" + delimiter;
				} else {
					return str + delimiter;
				}
			}
		},
		
		// Flatten default errors
		flatten_error: function( error ) {
			if( !pl.type.is_error( error ) ) return null;
			error = error.args[0];
			var obj = {};
			obj.type = error.args[0].id;
			obj.thrown = obj.type === "syntax_error" ? null : error.args[1].id;
			obj.expected = null;
			obj.found = null;
			obj.representation = null;
			obj.existence = null;
			obj.existence_type = null;
			obj.line = null;
			obj.column = null;
			obj.permission_operation = null;
			obj.permission_type = null;
			obj.evaluation_type = null;
			if( obj.type === "type_error" || obj.type === "domain_error" ) {
				obj.expected = error.args[0].args[0].id;
				obj.found = error.args[0].args[1].toString();
			} else if( obj.type === "syntax_error" ) {
				if( error.args[1].indicator === "./2" ) {
					obj.expected = error.args[0].args[0].id;
					obj.found = error.args[1].args[1].args[1].args[0];
					obj.found = obj.found.id === "token_not_found" ? obj.found.id : obj.found.args[0].id;
					obj.line = error.args[1].args[0].args[0].value;
					obj.column = error.args[1].args[1].args[0].args[0].value;
				} else {
					obj.thrown = error.args[1].id;
				}
			} else if( obj.type === "permission_error" ) {
				obj.found = error.args[0].args[2].toString();
				obj.permission_operation = error.args[0].args[0].id;
				obj.permission_type = error.args[0].args[1].id;
			} else if( obj.type === "evaluation_error" ) {
				obj.evaluation_type = error.args[0].args[0].id;
			} else if( obj.type === "representation_error" ) {
				obj.representation = error.args[0].args[0].id;
			} else if( obj.type === "existence_error" ) {
				obj.existence = error.args[0].args[1].toString();
				obj.existence_type = error.args[0].args[0].id;
			}
			return obj;
		},
		
		// Create new session
		create: function( limit ) {
			return new pl.type.Session( limit );
		}
		
	};

	if( typeof module !== 'undefined' ) {
		module.exports = pl;
	} else {
		window.pl = pl;
	}
	
})();
var pl;
(function( pl ) {

	var predicates = function() {
		
		return {
			
			// append/2
			"append/2": [
				new pl.type.Rule(new pl.type.Term("append", [new pl.type.Var("X"),new pl.type.Var("L")]), new pl.type.Term("foldl", [new pl.type.Term("append", []),new pl.type.Var("X"),new pl.type.Term("[]", []),new pl.type.Var("L")]))
			],

			// append/3
			"append/3": [
				new pl.type.Rule(new pl.type.Term("append", [new pl.type.Term("[]", []),new pl.type.Var("X"),new pl.type.Var("X")]), null),
				new pl.type.Rule(new pl.type.Term("append", [new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("T")]),new pl.type.Var("X"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("S")])]), new pl.type.Term("append", [new pl.type.Var("T"),new pl.type.Var("X"),new pl.type.Var("S")]))
			],
			
			// member/2
			"member/2": [
				new pl.type.Rule(new pl.type.Term("member", [new pl.type.Var("X"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("_")])]), null),
				new pl.type.Rule(new pl.type.Term("member", [new pl.type.Var("X"),new pl.type.Term(".", [new pl.type.Var("_"),new pl.type.Var("Xs")])]), new pl.type.Term("member", [new pl.type.Var("X"),new pl.type.Var("Xs")]))
			],
			
			// permutation/2
			"permutation/2": [
				new pl.type.Rule(new pl.type.Term("permutation", [new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("permutation", [new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("T")]),new pl.type.Var("S")]), new pl.type.Term(",", [new pl.type.Term("permutation", [new pl.type.Var("T"),new pl.type.Var("P")]),new pl.type.Term(",", [new pl.type.Term("append", [new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("P")]),new pl.type.Term("append", [new pl.type.Var("X"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("Y")]),new pl.type.Var("S")])])]))
			],
			
			// maplist/2
			"maplist/2": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("X")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("Xs")])]))
			],
			
			// maplist/3
			"maplist/3": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("A"),new pl.type.Var("As")]),new pl.type.Term(".", [new pl.type.Var("B"),new pl.type.Var("Bs")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("A"),new pl.type.Var("B")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("As"),new pl.type.Var("Bs")])]))
			],
			
			// maplist/4
			"maplist/4": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("A"),new pl.type.Var("As")]),new pl.type.Term(".", [new pl.type.Var("B"),new pl.type.Var("Bs")]),new pl.type.Term(".", [new pl.type.Var("C"),new pl.type.Var("Cs")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("A"),new pl.type.Var("B"),new pl.type.Var("C")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("As"),new pl.type.Var("Bs"),new pl.type.Var("Cs")])]))
			],
			
			// maplist/5
			"maplist/5": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("A"),new pl.type.Var("As")]),new pl.type.Term(".", [new pl.type.Var("B"),new pl.type.Var("Bs")]),new pl.type.Term(".", [new pl.type.Var("C"),new pl.type.Var("Cs")]),new pl.type.Term(".", [new pl.type.Var("D"),new pl.type.Var("Ds")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("A"),new pl.type.Var("B"),new pl.type.Var("C"),new pl.type.Var("D")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("As"),new pl.type.Var("Bs"),new pl.type.Var("Cs"),new pl.type.Var("Ds")])]))
			],
			
			// maplist/6
			"maplist/6": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("A"),new pl.type.Var("As")]),new pl.type.Term(".", [new pl.type.Var("B"),new pl.type.Var("Bs")]),new pl.type.Term(".", [new pl.type.Var("C"),new pl.type.Var("Cs")]),new pl.type.Term(".", [new pl.type.Var("D"),new pl.type.Var("Ds")]),new pl.type.Term(".", [new pl.type.Var("E"),new pl.type.Var("Es")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("A"),new pl.type.Var("B"),new pl.type.Var("C"),new pl.type.Var("D"),new pl.type.Var("E")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("As"),new pl.type.Var("Bs"),new pl.type.Var("Cs"),new pl.type.Var("Ds"),new pl.type.Var("Es")])]))
			],
			
			// maplist/7
			"maplist/7": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("A"),new pl.type.Var("As")]),new pl.type.Term(".", [new pl.type.Var("B"),new pl.type.Var("Bs")]),new pl.type.Term(".", [new pl.type.Var("C"),new pl.type.Var("Cs")]),new pl.type.Term(".", [new pl.type.Var("D"),new pl.type.Var("Ds")]),new pl.type.Term(".", [new pl.type.Var("E"),new pl.type.Var("Es")]),new pl.type.Term(".", [new pl.type.Var("F"),new pl.type.Var("Fs")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("A"),new pl.type.Var("B"),new pl.type.Var("C"),new pl.type.Var("D"),new pl.type.Var("E"),new pl.type.Var("F")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("As"),new pl.type.Var("Bs"),new pl.type.Var("Cs"),new pl.type.Var("Ds"),new pl.type.Var("Es"),new pl.type.Var("Fs")])]))
			],
			
			// maplist/8
			"maplist/8": [
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("A"),new pl.type.Var("As")]),new pl.type.Term(".", [new pl.type.Var("B"),new pl.type.Var("Bs")]),new pl.type.Term(".", [new pl.type.Var("C"),new pl.type.Var("Cs")]),new pl.type.Term(".", [new pl.type.Var("D"),new pl.type.Var("Ds")]),new pl.type.Term(".", [new pl.type.Var("E"),new pl.type.Var("Es")]),new pl.type.Term(".", [new pl.type.Var("F"),new pl.type.Var("Fs")]),new pl.type.Term(".", [new pl.type.Var("G"),new pl.type.Var("Gs")])]), new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P"),new pl.type.Var("A"),new pl.type.Var("B"),new pl.type.Var("C"),new pl.type.Var("D"),new pl.type.Var("E"),new pl.type.Var("F"),new pl.type.Var("G")]),new pl.type.Term("maplist", [new pl.type.Var("P"),new pl.type.Var("As"),new pl.type.Var("Bs"),new pl.type.Var("Cs"),new pl.type.Var("Ds"),new pl.type.Var("Es"),new pl.type.Var("Fs"),new pl.type.Var("Gs")])]))
			],
			
			// include/3
			"include/3": [
				new pl.type.Rule(new pl.type.Term("include", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("include", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("T")]),new pl.type.Var("L")]), new pl.type.Term(",", [new pl.type.Term("=..", [new pl.type.Var("P"),new pl.type.Var("A")]),new pl.type.Term(",", [new pl.type.Term("append", [new pl.type.Var("A"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Term("[]", [])]),new pl.type.Var("B")]),new pl.type.Term(",", [new pl.type.Term("=..", [new pl.type.Var("F"),new pl.type.Var("B")]),new pl.type.Term(",", [new pl.type.Term(";", [new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("F")]),new pl.type.Term(",", [new pl.type.Term("=", [new pl.type.Var("L"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("S")])]),new pl.type.Term("!", [])])]),new pl.type.Term("=", [new pl.type.Var("L"),new pl.type.Var("S")])]),new pl.type.Term("include", [new pl.type.Var("P"),new pl.type.Var("T"),new pl.type.Var("S")])])])])]))
			],
			
			// exclude/3
			"exclude/3": [
				new pl.type.Rule(new pl.type.Term("exclude", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Term("[]", [])]), null),
				new pl.type.Rule(new pl.type.Term("exclude", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("T")]),new pl.type.Var("S")]), new pl.type.Term(",", [new pl.type.Term("exclude", [new pl.type.Var("P"),new pl.type.Var("T"),new pl.type.Var("E")]),new pl.type.Term(",", [new pl.type.Term("=..", [new pl.type.Var("P"),new pl.type.Var("L")]),new pl.type.Term(",", [new pl.type.Term("append", [new pl.type.Var("L"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Term("[]", [])]),new pl.type.Var("Q")]),new pl.type.Term(",", [new pl.type.Term("=..", [new pl.type.Var("R"),new pl.type.Var("Q")]),new pl.type.Term(";", [new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("R")]),new pl.type.Term(",", [new pl.type.Term("!", []),new pl.type.Term("=", [new pl.type.Var("S"),new pl.type.Var("E")])])]),new pl.type.Term("=", [new pl.type.Var("S"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("E")])])])])])])]))
			],
			
			// foldl/4
			"foldl/4": [
				new pl.type.Rule(new pl.type.Term("foldl", [new pl.type.Var("_"),new pl.type.Term("[]", []),new pl.type.Var("I"),new pl.type.Var("I")]), null),
				new pl.type.Rule(new pl.type.Term("foldl", [new pl.type.Var("P"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Var("T")]),new pl.type.Var("I"),new pl.type.Var("R")]), new pl.type.Term(",", [new pl.type.Term("=..", [new pl.type.Var("P"),new pl.type.Var("L")]),new pl.type.Term(",", [new pl.type.Term("append", [new pl.type.Var("L"),new pl.type.Term(".", [new pl.type.Var("I"),new pl.type.Term(".", [new pl.type.Var("H"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Term("[]", [])])])]),new pl.type.Var("L2")]),new pl.type.Term(",", [new pl.type.Term("=..", [new pl.type.Var("P2"),new pl.type.Var("L2")]),new pl.type.Term(",", [new pl.type.Term("call", [new pl.type.Var("P2")]),new pl.type.Term("foldl", [new pl.type.Var("P"),new pl.type.Var("T"),new pl.type.Var("X"),new pl.type.Var("R")])])])])]))
			],
			
			// select/3
			"select/3": [
				new pl.type.Rule(new pl.type.Term("select", [new pl.type.Var("E"),new pl.type.Term(".", [new pl.type.Var("E"),new pl.type.Var("Xs")]),new pl.type.Var("Xs")]), null),
				new pl.type.Rule(new pl.type.Term("select", [new pl.type.Var("E"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Ys")])]), new pl.type.Term("select", [new pl.type.Var("E"),new pl.type.Var("Xs"),new pl.type.Var("Ys")]))
			],
			
			// sum_list/2
			"sum_list/2": [
				new pl.type.Rule(new pl.type.Term("sum_list", [new pl.type.Term("[]", []),new pl.type.Num(0, false)]), null),
				new pl.type.Rule(new pl.type.Term("sum_list", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Var("S")]), new pl.type.Term(",", [new pl.type.Term("sum_list", [new pl.type.Var("Xs"),new pl.type.Var("Y")]),new pl.type.Term("is", [new pl.type.Var("S"),new pl.type.Term("+", [new pl.type.Var("X"),new pl.type.Var("Y")])])]))
			],
			
			// max_list/2
			"max_list/2": [
				new pl.type.Rule(new pl.type.Term("max_list", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Term("[]", [])]),new pl.type.Var("X")]), null),
				new pl.type.Rule(new pl.type.Term("max_list", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Var("S")]), new pl.type.Term(",", [new pl.type.Term("max_list", [new pl.type.Var("Xs"),new pl.type.Var("Y")]),new pl.type.Term(";", [new pl.type.Term(",", [new pl.type.Term(">=", [new pl.type.Var("X"),new pl.type.Var("Y")]),new pl.type.Term(",", [new pl.type.Term("=", [new pl.type.Var("S"),new pl.type.Var("X")]),new pl.type.Term("!", [])])]),new pl.type.Term("=", [new pl.type.Var("S"),new pl.type.Var("Y")])])]))
			],
			
			// min_list/2
			"min_list/2": [
				new pl.type.Rule(new pl.type.Term("min_list", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Term("[]", [])]),new pl.type.Var("X")]), null),
				new pl.type.Rule(new pl.type.Term("min_list", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Var("S")]), new pl.type.Term(",", [new pl.type.Term("min_list", [new pl.type.Var("Xs"),new pl.type.Var("Y")]),new pl.type.Term(";", [new pl.type.Term(",", [new pl.type.Term("=<", [new pl.type.Var("X"),new pl.type.Var("Y")]),new pl.type.Term(",", [new pl.type.Term("=", [new pl.type.Var("S"),new pl.type.Var("X")]),new pl.type.Term("!", [])])]),new pl.type.Term("=", [new pl.type.Var("S"),new pl.type.Var("Y")])])]))
			],
			
			// prod_list/2
			"prod_list/2": [
				new pl.type.Rule(new pl.type.Term("prod_list", [new pl.type.Term("[]", []),new pl.type.Num(1, false)]), null),
				new pl.type.Rule(new pl.type.Term("prod_list", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Var("S")]), new pl.type.Term(",", [new pl.type.Term("prod_list", [new pl.type.Var("Xs"),new pl.type.Var("Y")]),new pl.type.Term("is", [new pl.type.Var("S"),new pl.type.Term("*", [new pl.type.Var("X"),new pl.type.Var("Y")])])]))
			],
			
			// last/2
			"last/2": [
				new pl.type.Rule(new pl.type.Term("last", [new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Term("[]", [])]),new pl.type.Var("X")]), null),
				new pl.type.Rule(new pl.type.Term("last", [new pl.type.Term(".", [new pl.type.Var("_"),new pl.type.Var("Xs")]),new pl.type.Var("X")]), new pl.type.Term("last", [new pl.type.Var("Xs"),new pl.type.Var("X")]))
			],
			
			// prefix/2
			"prefix/2": [
				new pl.type.Rule(new pl.type.Term("prefix", [new pl.type.Var("Part"),new pl.type.Var("Whole")]), new pl.type.Term("append", [new pl.type.Var("Part"),new pl.type.Var("_"),new pl.type.Var("Whole")]))
			],
			
			// nth0/3
			"nth0/3": [
				new pl.type.Rule(new pl.type.Term("nth0", [new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z")]), new pl.type.Term(";", [new pl.type.Term("->", [new pl.type.Term("var", [new pl.type.Var("X")]),new pl.type.Term("nth", [new pl.type.Num(0, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("_")])]),new pl.type.Term(",", [new pl.type.Term(">=", [new pl.type.Var("X"),new pl.type.Num(0, false)]),new pl.type.Term(",", [new pl.type.Term("nth", [new pl.type.Num(0, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("_")]),new pl.type.Term("!", [])])])]))
			],
			
			// nth1/3
			"nth1/3": [
				new pl.type.Rule(new pl.type.Term("nth1", [new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z")]), new pl.type.Term(";", [new pl.type.Term("->", [new pl.type.Term("var", [new pl.type.Var("X")]),new pl.type.Term("nth", [new pl.type.Num(1, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("_")])]),new pl.type.Term(",", [new pl.type.Term(">", [new pl.type.Var("X"),new pl.type.Num(0, false)]),new pl.type.Term(",", [new pl.type.Term("nth", [new pl.type.Num(1, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("_")]),new pl.type.Term("!", [])])])]))
			],
			
			// nth0/4
			"nth0/4": [
				new pl.type.Rule(new pl.type.Term("nth0", [new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("W")]), new pl.type.Term(";", [new pl.type.Term("->", [new pl.type.Term("var", [new pl.type.Var("X")]),new pl.type.Term("nth", [new pl.type.Num(0, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("W")])]),new pl.type.Term(",", [new pl.type.Term(">=", [new pl.type.Var("X"),new pl.type.Num(0, false)]),new pl.type.Term(",", [new pl.type.Term("nth", [new pl.type.Num(0, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("W")]),new pl.type.Term("!", [])])])]))
			],
			
			// nth1/4
			"nth1/4": [
				new pl.type.Rule(new pl.type.Term("nth1", [new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("W")]), new pl.type.Term(";", [new pl.type.Term("->", [new pl.type.Term("var", [new pl.type.Var("X")]),new pl.type.Term("nth", [new pl.type.Num(1, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("W")])]),new pl.type.Term(",", [new pl.type.Term(">", [new pl.type.Var("X"),new pl.type.Num(0, false)]),new pl.type.Term(",", [new pl.type.Term("nth", [new pl.type.Num(1, false),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z"),new pl.type.Var("W")]),new pl.type.Term("!", [])])])]))
			],
			
			// nth/5
			// DO NOT EXPORT
			"nth/5": [
				new pl.type.Rule(new pl.type.Term("nth", [new pl.type.Var("N"),new pl.type.Var("N"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Var("X"),new pl.type.Var("Xs")]), null),
				new pl.type.Rule(new pl.type.Term("nth", [new pl.type.Var("N"),new pl.type.Var("O"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Xs")]),new pl.type.Var("Y"),new pl.type.Term(".", [new pl.type.Var("X"),new pl.type.Var("Ys")])]), new pl.type.Term(",", [new pl.type.Term("is", [new pl.type.Var("M"),new pl.type.Term("+", [new pl.type.Var("N"),new pl.type.Num(1, false)])]),new pl.type.Term("nth", [new pl.type.Var("M"),new pl.type.Var("O"),new pl.type.Var("Xs"),new pl.type.Var("Y"),new pl.type.Var("Ys")])]))
			],
			
			// length/2
			"length/2": function( thread, point, atom ) {
				var list = atom.args[0], length = atom.args[1];
				if( !pl.type.is_variable( length ) && !pl.type.is_integer( length ) ) {
					thread.throwError( pl.error.type( "integer", length, atom.indicator ) );
				} else if( pl.type.is_integer( length ) && length.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", length, atom.indicator ) );
				} else {
					var newgoal = new pl.type.Term("length", [list, new pl.type.Num(0, false), length]);
					if( pl.type.is_integer( length ) )
						newgoal = new pl.type.Term( ",", [newgoal, new pl.type.Term( "!", [] )] );
					thread.prepend( [new pl.type.State(point.goal.replace(newgoal), point.substitution, point)] );
				}
			},
			
			// length/3
			// DO NOT EXPORT
			"length/3": [
				new pl.type.Rule(new pl.type.Term("length", [new pl.type.Term("[]", []),new pl.type.Var("N"),new pl.type.Var("N")]), null),
				new pl.type.Rule(new pl.type.Term("length", [new pl.type.Term(".", [new pl.type.Var("_"),new pl.type.Var("X")]),new pl.type.Var("A"),new pl.type.Var("N")]), new pl.type.Term(",", [new pl.type.Term("is", [new pl.type.Var("B"),new pl.type.Term("+", [new pl.type.Var("A"),new pl.type.Num(1, false)])]),new pl.type.Term("length", [new pl.type.Var("X"),new pl.type.Var("B"),new pl.type.Var("N")])]))
			],
			
			// replicate/3
			"replicate/3": function( thread, point, atom ) {
				var elem = atom.args[0], times = atom.args[1], list = atom.args[2];
				if( pl.type.is_variable( times ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_integer( times ) ) {
					thread.throwError( pl.error.type( "integer", times, atom.indicator ) );
				} else if( times.value < 0 ) {
					thread.throwError( pl.error.domain( "not_less_than_zero", times, atom.indicator ) );
				} else if( !pl.type.is_variable( list ) && !pl.type.is_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else {
					var replicate = new pl.type.Term( "[]" );
					for( var i = 0; i < times.value; i++ ) {
						replicate = new pl.type.Term( ".", [elem, replicate] );
					}
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [replicate, list] ) ), point.substitution, point )] );
				}
			},
			
			// sort/2
			"sort/2": function( thread, point, atom ) {
				var list = atom.args[0], expected = atom.args[1];
				if( pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( expected ) && !pl.type.is_fully_list( expected ) ) {
					thread.throwError( pl.error.type( "list", expected, atom.indicator ) );
				} else {
					var arr = [];
					var pointer = list;
					while( pointer.indicator === "./2" ) {
						arr.push( pointer.args[0] );
						pointer = pointer.args[1];
					}
					if( pl.type.is_variable( pointer ) ) {
						thread.throwError( pl.error.instantiation( atom.indicator ) );
					} else if( !pl.type.is_empty_list( pointer ) ) {
						thread.throwError( pl.error.type( "list", list, atom.indicator ) );
					} else {
						var sorted_arr = arr.sort( pl.compare );
						var sorted_list = new pl.type.Term( "[]" );
						for( var i = sorted_arr.length - 1; i >= 0; i-- ) {
							sorted_list = new pl.type.Term( ".", [sorted_arr[i], sorted_list] );
						}
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [sorted_list, expected] ) ), point.substitution, point )] );
					}
				}
			},
			
			// keysort/2
			"keysort/2": function( thread, point, atom ) {
				var list = atom.args[0], expected = atom.args[1];
				if( pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( expected ) && !pl.type.is_fully_list( expected ) ) {
					thread.throwError( pl.error.type( "list", expected, atom.indicator ) );
				} else {
					var arr = [];
					var elem;
					var pointer = list;
					while( pointer.indicator === "./2" ) {
						elem = pointer.args[0];
						if( pl.type.is_variable( elem ) ) {
							thread.throwError( pl.error.instantiation( atom.indicator ) );
							return;
						} else if( !pl.type.is_term( elem ) || elem.indicator !== "-/2" ) {
							thread.throwError( pl.error.type( "pair", elem, atom.indicator ) );
							return;
						}
						elem.args[0].pair = elem.args[1];
						arr.push( elem.args[0] );
						pointer = pointer.args[1];
					}
					if( pl.type.is_variable( pointer ) ) {
						thread.throwError( pl.error.instantiation( atom.indicator ) );
					} else if( !pl.type.is_empty_list( pointer ) ) {
						thread.throwError( pl.error.type( "list", list, atom.indicator ) );
					} else {
						var sorted_arr = arr.sort( pl.compare );
						var sorted_list = new pl.type.Term( "[]" );
						for( var i = sorted_arr.length - 1; i >= 0; i-- ) {
							sorted_list = new pl.type.Term( ".", [new pl.type.Term( "-", [sorted_arr[i], sorted_arr[i].pair] ), sorted_list] );
							delete sorted_arr[i].pair;
						}
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [sorted_list, expected] ) ), point.substitution, point )] );
					}
				}
			},
			
			// take/3
			"take/3": function( thread, point, atom ) {
				var number = atom.args[0], list = atom.args[1], take = atom.args[2];
				if( pl.type.is_variable( list ) || pl.type.is_variable( number ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else if( !pl.type.is_integer( number ) ) {
					thread.throwError( pl.error.type( "integer", number, atom.indicator ) );
				} else if( !pl.type.is_variable( take ) && !pl.type.is_list( take ) ) {
					thread.throwError( pl.error.type( "list", take, atom.indicator ) );
				} else {
					var i = number.value;
					var arr = [];
					var pointer = list;
					while( i > 0 && pointer.indicator === "./2" ) {
						arr.push( pointer.args[0] );
						pointer = pointer.args[1];
						i--;
					}
					if( i === 0 ) {
						var new_list = new pl.type.Term( "[]" );
						for( var i = arr.length - 1; i >= 0; i-- ) {
							new_list = new pl.type.Term( ".", [arr[i], new_list] );
						}
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [new_list, take] ) ), point.substitution, point )] );
					}
				}
			},
			
			// drop/3
			"drop/3": function( thread, point, atom ) {
				var number = atom.args[0], list = atom.args[1], drop = atom.args[2];
				if( pl.type.is_variable( list ) || pl.type.is_variable( number ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else if( !pl.type.is_integer( number ) ) {
					thread.throwError( pl.error.type( "integer", number, atom.indicator ) );
				} else if( !pl.type.is_variable( drop ) && !pl.type.is_list( drop ) ) {
					thread.throwError( pl.error.type( "list", drop, atom.indicator ) );
				} else {
					var i = number.value;
					var arr = [];
					var pointer = list;
					while( i > 0 && pointer.indicator === "./2" ) {
						arr.push( pointer.args[0] );
						pointer = pointer.args[1];
						i--;
					}
					if( i === 0 )
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [pointer, drop] ) ), point.substitution, point )] );
				}
			},
			
			// reverse/2
			"reverse/2": function( thread, point, atom ) {
				var list = atom.args[0], reversed = atom.args[1];
				var ins_list = pl.type.is_instantiated_list( list );
				var ins_reversed = pl.type.is_instantiated_list( reversed );
				if( pl.type.is_variable( list ) && pl.type.is_variable( reversed ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( list ) && !pl.type.is_fully_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else if( !pl.type.is_variable( reversed ) && !pl.type.is_fully_list( reversed ) ) {
					thread.throwError( pl.error.type( "list", reversed, atom.indicator ) );
				} else if( !ins_list && !ins_reversed ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else {
					var pointer = ins_list ? list : reversed;
					var new_reversed = new pl.type.Term( "[]", [] );
					while( pointer.indicator === "./2" ) {
						new_reversed = new pl.type.Term( ".", [pointer.args[0], new_reversed] );
						pointer = pointer.args[1];
					}
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [new_reversed, ins_list ? reversed : list] ) ), point.substitution, point )] );
				}
			},
			
			// list_to_set/2
			"list_to_set/2": function( thread, point, atom ) {
				var list = atom.args[0], lset = atom.args[1];
				if( pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else {
					var pointer = list;
					var elems = [];
					while( pointer.indicator === "./2" ) {
						elems.push( pointer.args[0] );
						pointer = pointer.args[1];
					}
					if( pl.type.is_variable( pointer ) ) {
						thread.throwError( pl.error.instantiation( atom.indicator ) );
					} else if( !pl.type.is_term( pointer ) || pointer.indicator !== "[]/0" ) {
						thread.throwError( pl.error.type( "list", list, atom.indicator ) );
					} else {
						var arr = [], nub = new pl.type.Term( "[]", [] );
						var match;
						for( var i = 0; i < elems.length; i++ ) {
							match = false
							for( var j = 0; j < arr.length && !match; j++ ) {
								match = pl.compare( elems[i], arr[j] ) === 0;
							}
							if( !match )
								arr.push( elems[i] );
						}
						for( i = arr.length - 1; i >= 0; i-- )
							nub = new pl.type.Term( ".", [arr[i],nub] );
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [lset,nub] ) ), point.substitution, point )] );
					}
				}
			}
			
		};
	};
	
	var exports = ["append/2", "append/3", "member/2", "permutation/2", "maplist/2", "maplist/3", "maplist/4", "maplist/5", "maplist/6", "maplist/7", "maplist/8", "include/3", "exclude/3", "foldl/4", "sum_list/2", "max_list/2", "min_list/2", "prod_list/2", "last/2", "prefix/2", "nth0/3", "nth1/3", "nth0/4", "nth1/4", "length/2", "replicate/3", "select/3", "sort/2", "keysort/2", "take/3", "drop/3", "reverse/2", "list_to_set/2"];


	if( typeof module !== 'undefined' ) {
		module.exports = function( p ) {
			pl = p;
			new pl.type.Module( "lists", predicates(), exports );
		};
	} else {
		new pl.type.Module( "lists", predicates(), exports );
	}

})( pl );
var pl;
(function( pl ) {

	var predicates = function() {
		
		return {
			
			// maybe/0
			"maybe/0": function( thread, point, _ ) {
				if( Math.random() < 0.5 ) {
					thread.success( point );
				}
			},
			
			// maybe/1
			"maybe/1": function( thread, point, atom ) {
				var num = atom.args[0];
				if( Math.random() < num.value ) {
					thread.success( point );
				}
			},
			
			// random/1
			"random/1": function( thread, point, atom ) {
				var rand = atom.args[0];
				if( !pl.type.is_variable( rand ) && !pl.type.is_number( rand ) ) {
					thread.throwError( pl.error.type( "number", rand, atom.indicator ) );
				} else {
					var gen = Math.random();
					thread.prepend( [new pl.type.State(
						point.goal.replace( new pl.type.Term( "=", [rand, new pl.type.Num( gen, true )] ) ),
						point.substitution, point 
					)] );
				}
			},
			
			// random/3
			"random/3": function( thread, point, atom ) {
				var lower = atom.args[0], upper = atom.args[1], rand = atom.args[2];
				if( pl.type.is_variable( lower ) || pl.type.is_variable( upper ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_number( lower ) ) {
					thread.throwError( pl.error.type( "number", lower, atom.indicator ) );
				} else if( !pl.type.is_number( upper ) ) {
					thread.throwError( pl.error.type( "number", upper, atom.indicator ) );
				} else if( !pl.type.is_variable( rand ) && !pl.type.is_number( rand ) ) {
					thread.throwError( pl.error.type( "number", rand, atom.indicator ) );
				} else {
					if( lower.value < upper.value ) {
						var float = lower.is_float || upper.is_float;
						var gen = lower.value + Math.random() * (upper.value - lower.value);
						if( !float )
							gen = Math.floor( gen );
						thread.prepend( [new pl.type.State(
							point.goal.replace( new pl.type.Term( "=", [rand, new pl.type.Num( gen, float )] ) ),
							point.substitution, point 
						)] );
					}
				}
			},
			
			// random_between/3
			"random_between/3": function( thread, point, atom ) {
				var lower = atom.args[0], upper = atom.args[1], rand = atom.args[2];
				if( pl.type.is_variable( lower ) || pl.type.is_variable( upper ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_integer( lower ) ) {
					thread.throwError( pl.error.type( "integer", lower, atom.indicator ) );
				} else if( !pl.type.is_integer( upper ) ) {
					thread.throwError( pl.error.type( "integer", upper, atom.indicator ) );
				} else if( !pl.type.is_variable( rand ) && !pl.type.is_integer( rand ) ) {
					thread.throwError( pl.error.type( "integer", rand, atom.indicator ) );
				} else {
					if( lower.value < upper.value ) {
						var gen = Math.floor(lower.value + Math.random() * (upper.value - lower.value + 1));
						thread.prepend( [new pl.type.State(
							point.goal.replace( new pl.type.Term( "=", [rand, new pl.type.Num( gen, false )] ) ),
							point.substitution, point 
						)] );
					}
				}
			},
			
			// random_member/2
			"random_member/2": function( thread, point, atom ) {
				var member = atom.args[0], list = atom.args[1];
				if( pl.type.is_variable( list ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else {
					var array = [];
					var pointer = list;
					while( pointer.indicator == "./2" ) {
						array.push(pointer.args[0]);
						pointer = pointer.args[1];
					}
					if( array.length > 0 ) {
						var gen = Math.floor(Math.random() * array.length);
						thread.prepend( [new pl.type.State(
							point.goal.replace( new pl.type.Term( "=", [member, array[gen]] ) ),
							point.substitution, point 
						)] );
					}
				}
			},
			
			// random_permutation/2
			"random_permutation/2": function( thread, point, atom ) {
				var i;
				var list = atom.args[0], permutation = atom.args[1];
				var ins_list = pl.type.is_instantiated_list( list );
				var ins_permutation = pl.type.is_instantiated_list( permutation );
				if( pl.type.is_variable( list ) && pl.type.is_variable( permutation ) || !ins_list && !ins_permutation ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( list ) && !pl.type.is_fully_list( list ) ) {
					thread.throwError( pl.error.type( "list", list, atom.indicator ) );
				} else if( !pl.type.is_variable( permutation ) && !pl.type.is_fully_list( permutation ) ) {
					thread.throwError( pl.error.type( "list", permutation, atom.indicator ) );
				} else {
					var pointer = ins_list ? list : permutation;
					var array = [];
					while( pointer.indicator === "./2" ) {
						array.push( pointer.args[0] );
						pointer = pointer.args[1];
					}
					for( i = 0; i < array.length; i++ ) {
						var rand = Math.floor( Math.random() * array.length );
						var tmp = array[i];
						array[i] = array[rand];
						array[rand] = tmp;
					}
					var new_list = new pl.type.Term( "[]", [] );
					for( i = array.length-1; i >= 0; i-- )
						new_list = new pl.type.Term( ".", [array[i], new_list] );
					thread.prepend( [new pl.type.State(
						point.goal.replace( new pl.type.Term( "=", [new_list, ins_list ? permutation : list] ) ),
						point.substitution, point 
					)] );
				}
			}
		
		};
		
	};
	
	var exports = ["maybe/0", "maybe/1", "random/1", "random/3", "random_between/3", "random_member/2", "random_permutation/2"];


	if( typeof module !== 'undefined' ) {
		module.exports = function( p ) {
			pl = p;
			new pl.type.Module( "random", predicates(), exports );
		};
	} else {
		new pl.type.Module( "random", predicates(), exports );
	}

})( pl );
var pl;
(function( pl ) {

	var predicates = function() {
		
		return {
			
			// time/1
			"time/1": function( thread, point, atom ) {
				var goal = atom.args[0];
				if( pl.type.is_variable( goal ) ) {
					thread.throwError( pl.error.instantiation( thread.level ) );
				} else if( !pl.type.is_callable( goal ) ) {
					thread.throwError( pl.error.type( "callable", goal, thread.level ) );
				} else {
					var points = thread.points;
					thread.points = [new pl.type.State( goal, point.substitution, point )];
					var t0 = Date.now();
					var c0 = pl.statistics.getCountTerms();
					var i0 = thread.total_steps;
					var format_success = thread.session.format_success;
					var format_error = thread.session.format_error;
					thread.session.format_success = function(x) { return x.substitution; };
					thread.session.format_error = function(x) { return x.goal; };
					var callback = function( answer ) {
						var t1 = Date.now();
						var c1 = pl.statistics.getCountTerms();
						var i1 = thread.total_steps;
						var newpoints = thread.points;
						thread.points = points;
						thread.session.format_success = format_success;
						thread.session.format_error = format_error;
						if( pl.type.is_error( answer ) )
							thread.throwError( answer.args[0] );
						else if( answer === null ) {
							thread.points = [point].concat( points );
							thread.__calls.shift()( null );
						} else {
							console.log( "% Tau Prolog: executed in " + (t1-t0) + " milliseconds, " + (c1-c0) + " atoms created, " + (i1-i0) + " resolution steps performed.");
							for( var i = 0; i < newpoints.length; i++ ) {
								if( newpoints[i].goal === null )
									newpoints[i].goal = new pl.type.Term( "true", [] );
								newpoints[i].goal = point.goal.replace( new pl.type.Term( "time", [newpoints[i].goal] ) );
							}
							thread.points = [ new pl.type.State( point.goal.apply(answer).replace(null), answer, point ) ].concat( newpoints.concat( points ) );
						}
					};
					thread.__calls.unshift( callback );
				}
			},
			
			// statistics/0
			"statistics/0": function( thread, point, atom ) {
				console.log( "% Tau Prolog statistics" );
				for( var x in statistics ) {
					console.log( "%%% " + x + ": " + statistics[x]( thread ).toString() );
				}
				thread.success( point );
			},
			
			// statistics/2
			"statistics/2": function( thread, point, atom ) {
				var key = atom.args[0], value = atom.args[1];
				if( !pl.type.is_variable( key ) && !pl.type.is_atom( key ) ) {
					thread.throwError( pl.error.type( "atom", key, atom.indicator ) );
				} else if( !pl.type.is_variable( key ) && statistics[key.id] === undefined ) {
					thread.throwError( pl.error.domain( "statistics_key", key, atom.indicator ) );
				} else {
					if( !pl.type.is_variable( key ) ) {
						var value_ = statistics[key.id]( thread );
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [value, value_] ) ), point.substitution, point )] );
					} else {
						var states = [];
						for( var x in statistics ) {
							var value_ = statistics[x]( thread );
							states.push( new pl.type.State( point.goal.replace(
								new pl.type.Term( ",", [
									new pl.type.Term( "=", [key, new pl.type.Term( x, [] )] ),
									new pl.type.Term( "=", [value, value_] )
								] )
							), point.substitution, point ) );
						}
						thread.prepend( states );
					}
				}
			}

		};
	};
	
	var exports = ["time/1", "statistics/0", "statistics/2"];
	
	var statistics = {
		
		// Total number of defined atoms
		atoms: function( thread ) {
			return new pl.type.Num( pl.statistics.getCountTerms(), false );
		},
		
		// Total number of clauses
		clauses: function( thread ) {
			var total = 0;
			for( var x in thread.session.rules )
				if( thread.session.rules[x] instanceof Array )
					total += thread.session.rules[x].length;
			for( var i = 0; i < thread.session.modules.length; i++ ) {
				var module = pl.module[thread.session.modules[i]];
				for( var j = 0; j < module.exports.length; j++ ) {
					var predicate = module.rules[module.exports[j]];
					if( predicate instanceof Array )
						total += predicate.length;
					}
			}
			return new pl.type.Num( total, false );
		},
		
		// Total cpu time
		cputime: function( thread ) {
			return new pl.type.Num( thread.cpu_time , false );
		},
		
		// Time stamp when thread was started
		epoch: function( thread ) {
			return new pl.type.Num( thread.epoch, false );
		},
		
		// Total number of resolution steps
		inferences: function( thread ) {
			return new pl.type.Num( thread.total_steps, false );
		},
		
		// Total number of defined modules
		modules:  function( thread ) {
			return new pl.type.Num( thread.session.modules.length, false );
		},
		
		// Total number of predicates
		predicates: function( thread ) {
			var total = Object.keys( thread.session.rules ).length;
			for( var i = 0; i < thread.session.modules.length; i++ ) {
				var module = pl.module[thread.session.modules[i]];
				total += module.exports.length;
			}
			return new pl.type.Num( total, false );
		},
		
		// [CPU time, CPU time since last]
		runtime: function( thread ) {
			return new pl.type.Term( ".", [new pl.type.Num( thread.cpu_time, false ), new pl.type.Term( ".", [new pl.type.Num( thread.cpu_time_last, false ), new pl.type.Term( "[]", [] )] )] );
		},
		
		// Total number of threads in current session
		threads: function( thread ) {
			return new pl.type.Num( thread.session.total_threads, false );
		}
		
	};

	if( typeof module !== 'undefined' ) {
		module.exports = function( p ) {
			pl = p;
			new pl.type.Module( "statistics", predicates(), exports );
		};
	} else {
		new pl.type.Module( "statistics", predicates(), exports );
	}

})( pl );
var pl;
(function( pl ) {

	var predicates = function() {
		
		return {
			
			// EVENTS
			
			// bind/4
			"bind/4": function( thread, point, atom ) {
				var elem = atom.args[0], type = atom.args[1], event = atom.args[2], goal = atom.args[3];
				if( pl.type.is_variable( elem ) || pl.type.is_variable( type ) && pl.type.is_variable( goal ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( elem ) ) {
					thread.throwError( pl.error.type( "HTMLObject", elem, atom.indicator ) );
				} else if( !pl.type.is_atom( type ) ) {
					thread.throwError( pl.error.type( "atom", type, atom.indicator ) );
				} else if( !pl.type.is_variable( event ) && !pl.type.is_dom_event_object( event ) ) {
					thread.throwError( pl.error.type( "DOMEventObject", type, atom.indicator ) );
				} else if( !pl.type.is_variable( goal ) ) {
					var thread_ = new pl.type.Thread( thread.session );
					var eventObject = new pl.type.DOMEvent( type.id );
					var links = {};
					if( pl.type.is_variable( event ) )
						links[event.id] = eventObject;
					var subs = new pl.type.Substitution( links );
					var handler = function( e ) {
						eventObject.event = e;
						thread_.add_goal( goal.apply( subs ) );
						thread_.answer( thread.__calls[0] );
					};
					events.add( elem.object, type.id, handler );
					elem.object.tau_events = elem.object.tau_events === undefined ? {} : elem.object.tau_events;
					if( elem.object.tau_events[type.id] === undefined )
						elem.object.tau_events[type.id] = [];
					elem.object.tau_events[type.id].push( {goal: goal, fn: handler} );
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [eventObject, event] ) ), point.substitution, point )] );
				} else {
					var event = elem.object.tau_events ? elem.object.tau_events[type.id] : undefined;
					if( event !== undefined ) {
						var states = [];
						for( var i = 0; i < event.length; i++ )
							states.push( new pl.type.State( point.goal.replace( new pl.type.Term( "=", [goal, event[i].goal.rename(thread)] ) ), point.substitution, point ) );
						thread.prepend( states );
					}
				}
			},
			
			// unbind/2
			"unbind/2": function( thread, point, atom ) {
				var elem = atom.args[0], type = atom.args[1];
				if( pl.type.is_variable( elem ) || pl.type.is_variable( type ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( elem ) ) {
					thread.throwError( pl.error.type( "HTMLObject", elem, atom.indicator ) );
				} else if( !pl.type.is_atom( type ) ) {
					thread.throwError( pl.error.type( "atom", type, atom.indicator ) );
				} else if( !pl.type.is_variable( goal ) ) {
					if( elem.object.tau_events && elem.object.tau_events[type.id] ) {
						var event = elem.object.tau_events[type.id];
						for( var i = 0; i < event.length; i++ ) {
							events.remove( elem.object, type.id, event[i].fn );
						}
						delete elem.object.tau_events[type.id];
					}
					thread.success( point );
				}
			},
			
			// unbind/3
			"unbind/3": function( thread, point, atom ) {
				var elem = atom.args[0], type = atom.args[1], goal = atom.args[2];
				if( pl.type.is_variable( elem ) || pl.type.is_variable( type ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( elem ) ) {
					thread.throwError( pl.error.type( "HTMLObject", elem, atom.indicator ) );
				} else if( !pl.type.is_atom( type ) ) {
					thread.throwError( pl.error.type( "atom", type, atom.indicator ) );
				} else if( !pl.type.is_variable( goal ) && !pl.type.is_term( goal ) ) {
					thread.throwError( pl.error.type( "term", goal, atom.indicator ) );
				} else if( !pl.type.is_variable( goal ) ) {
					if( elem.object.tau_events && elem.object.tau_events[type.id] ) {
						var event = elem.object.tau_events[type.id];
						var newevents = [];
						for( var i = 0; i < event.length; i++ ) {
							if( pl.unify( event[i].goal, goal ) !== null ) {
								events.remove( elem.object, type.id, event[i].fn );
							} else {
								newevents.push( event[i] );
							}
						}
						elem.object.tau_events[type.id] = newevents;
					}
					thread.success( point );
				}
			},
			
			// event_property/3
			"event_property/3": function( thread, point, atom ) {
				var event = atom.args[0], prop = atom.args[1], val = atom.args[2]
				if( pl.type.is_variable( event ) || pl.type.is_variable( prop ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_event_object( event ) ) {
					thread.throwError( pl.error.type( "DOMEventObject", event, atom.indicator ) );
				} else if( !pl.type.is_atom( prop ) ) {
					thread.throwError( pl.error.type( "atom", prop, atom.indicator ) );
				} else if( !pl.type.is_variable( val ) && !pl.type.is_atomic( val ) ) {
					thread.throwError( pl.error.type( "atomic", val, atom.indicator ) );
				} else {
					if( event.event !== null && event.event[prop.id] ) {
						var value = event.event[prop.id];
						value = isNaN(value) ? new pl.type.Term( value, [] ) : new pl.type.Num( value );
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [value, val] ) ), point.substitution, point )] );
					}
				}
			},
			
			// prevent_default/1
			"prevent_default/1": function( thread, point, atom ) {
				var event = atom.args[0];
				if( pl.type.is_variable( event ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_event_object( event ) ) {
					thread.throwError( pl.error.type( "eventObject", event, atom.indicator ) );
				} else {
					if( event.event !== null ) {
						event.event.preventDefault();
						thread.success( point );
					}
				}
			},
			
			// EFFECTS
			
			// hide/1
			"hide/1": function( thread, point, atom ) {
				var element = atom.args[0];
				if( pl.type.is_variable( element ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else {
					var state = document.defaultView.getComputedStyle( element.object, "" ).display;
					if( state !== undefined && state !== "none" )
						element.object.tau_display = state;
					element.object.style.display = "none";
					thread.success( point );
				}
			},
			
			// show/1
			"show/1": function( thread, point, atom ) {
				var element = atom.args[0];
				if( pl.type.is_variable( element ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else {
					element.object.style.display = element.object.tau_display !== undefined ? element.object.tau_display : "block";
					thread.success( point );
				}
			},
			
			// toggle/1
			"toggle/1": [
				new pl.type.Rule(new pl.type.Term("toggle", [new pl.type.Var("X")]), new pl.type.Term(";", [new pl.type.Term("->", [new pl.type.Term(",", [new pl.type.Term("style", [new pl.type.Var("X"),new pl.type.Term("display", []),new pl.type.Var("Y")]),new pl.type.Term("=", [new pl.type.Var("Y"),new pl.type.Term("none", [])])]),new pl.type.Term("show", [new pl.type.Var("X")])]),new pl.type.Term("hide", [new pl.type.Var("X")])]))
			],
			
			// DOM MANIPULATION
			
			// get_by_id/2
			"get_by_id/2": function( session, point, atom ) {
				var id = atom.args[0], object = atom.args[1];
				if( pl.type.is_variable( id ) ) {
					session.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( id ) ) {
					session.throwError( pl.error.type( "atom", id, atom.indicator ) );
				} else if( !pl.type.is_variable( object ) && !pl.type.is_dom_object( object ) ) {
					session.throwError( pl.error.type( "HTMLObject", object, atom.indicator ) );
				} else {
					var element = document.getElementById( id.id );
					if( element ) {
						var html = new pl.type.DOM( element );
						session.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [html, object] ) ), point.substitution, point )] );
					}
				}
			},
			
			// get_by_class/2
			"get_by_class/2": function( session, point, atom ) {
				var name = atom.args[0], object = atom.args[1];
				if( pl.type.is_variable( name ) ) {
					session.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( name ) ) {
					session.throwError( pl.error.type( "atom", name, atom.indicator ) );
				} else if( !pl.type.is_variable( object ) && !pl.type.is_dom_object( object ) ) {
					session.throwError( pl.error.type( "HTMLObject", object, atom.indicator ) );
				} else {
					var elements = document.getElementsByClassName( name.id );
					if( elements ) {
						var states = [];
						for( var i = 0; i < elements.length; i++ ) {
							var html = new pl.type.DOM( elements[i] );
							states.push( new pl.type.State( point.goal.replace( new pl.type.Term( "=", [html, object] ) ), point.substitution, point ) );
						}
						session.prepend( states );
					}
				}
			},
			
			// get_by_tag/2
			"get_by_tag/2": function( session, point, atom ) {
				var tag = atom.args[0], object = atom.args[1];
				if( pl.type.is_variable( tag ) ) {
					session.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( tag ) ) {
					session.throwError( pl.error.type( "atom", tag, atom.indicator ) );
				} else if( !pl.type.is_variable( object ) && !pl.type.is_dom_object( object ) ) {
					session.throwError( pl.error.type( "HTMLObject", object, atom.indicator ) );
				} else {
					var elements = document.getElementsByTagName( tag.id );
					if( elements ) {
						var states = [];
						for( var i = 0; i < elements.length; i++ ) {
							var html = new pl.type.DOM( elements[i] );
							states.push( new pl.type.State( point.goal.replace( new pl.type.Term( "=", [html, object] ) ), point.substitution, point ) );
						}
						session.prepend( states );
					}
				}
			},
			
			// style/3
			"style/3": function( session, point, atom ) {
				var html = atom.args[0], property = atom.args[1], value = atom.args[2];
				var styleValue = styleFromProlog( value );
				var ground = pl.type.is_ground( value );
				if( pl.type.is_variable( html ) || pl.type.is_variable( property ) ) {
					session.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( html ) ) {
					session.throwError( pl.error.type( "HTMLObject", html, atom.indicator ) );
				} else if( !pl.type.is_atom( property ) ) {
					session.throwError( pl.error.type( "atom", property, atom.indicator ) );
				} else if( !pl.type.is_variable( value ) && ground && styleValue === false ) {
					session.throwError( pl.error.domain( "style_value", value, atom.indicator ) );
				} else {
					if( !ground ) {
						var style = document.defaultView.getComputedStyle( html.object, "" )[property.id] || "";
						if( style === '' && html.object.style[property.id] )
							style = html.object.style[property.id];
						var html_value = styleToProlog( style );
						session.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [value, html_value] ) ), point.substitution, point )] );
					} else {
						html.object.style[property.id] = styleValue;
						session.success( point );
					}
				}
			},
			
			// attr/3
			"attr/3": function( session, point, atom ) {
				var html = atom.args[0], attr = atom.args[1], value = atom.args[2];
				var styleValue = styleFromProlog( value );
				var ground = pl.type.is_ground( value );
				if( pl.type.is_variable( html ) || pl.type.is_variable( attr ) ) {
					session.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( html ) ) {
					session.throwError( pl.error.type( "HTMLObject", selector, atom.indicator ) );
				} else if( !pl.type.is_atom( attr ) ) {
					session.throwError( pl.error.type( "atom", attr, atom.indicator ) );
				} else if( !pl.type.is_variable( value ) && ground && styleValue === false ) {
					session.throwError( pl.error.domain( "attribute_value", value, atom.indicator ) );
				} else {
					if( !ground ) {
						var html_value = attr.id === "value" ? new pl.type.Term(html.object.value) : styleToProlog(html.object.getAttribute(attr.id));
						if( html_value !== null && html_value !== undefined )
							session.prepend( [new pl.type.State(
								point.goal.replace( new pl.type.Term( "=", [value, html_value] ) ),
								point.substitution, point
							)] );
					} else {
						if( attr.id === "value" ) {
							html.object.value = styleValue;
						} else {
							html.object.setAttribute( attr.id, styleValue );
						}
						session.success( point );
					}
				}
			},
			
			// html/2
			"html/2": function( thread, point, atom ) {
				var html = atom.args[0], value = atom.args[1];
				if( pl.type.is_variable( html ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else {
					if( pl.type.is_variable( value ) ) {
						var inner = new pl.type.Term( html.object.innerHTML );
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [inner, value] ) ), point.substitution, point )] );
					} else {
						if( pl.type.is_atom( value ) )
							html.object.innerHTML = value.id;
						else
							html.object.innerHTML = value.toString();
						thread.success( point );
					}
				}
			},
			
			// create/2
			"create/2": function( thread, point, atom ) {
				var tag = atom.args[0], element = atom.args[1];
				if( pl.type.is_variable( tag ) && pl.type.is_variable( element ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( tag ) && !pl.type.is_atom( tag ) ) {
					thread.throwError( pl.error.type( "atom", tag, atom.indicator ) );
				} else if( !pl.type.is_variable( element ) && !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else if( pl.type.is_variable( element ) ) {
					var node = new pl.type.DOM( document.createElement( tag.id ) );
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [element, node] ) ), point.substitution, point )] );
				} else if( pl.type.is_variable( element ) ) {
					var node = new pl.type.DOM( document.createElement( tag.id.toLowerCase() ) );
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [element, node] ) ), point.substitution, point )] );
				} else if( pl.type.is_variable( tag ) ) {
					var type = new pl.type.Term( element.object.nodeName.toLowerCase() );
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [type, tag] ) ), point.substitution, point )] );
				}
			},
			
			// parent_of/2
			"parent_of/2": function( thread, point, atom ) {
				var child = atom.args[0], parent = atom.args[1];
				if( pl.type.is_variable( parent ) && pl.type.is_variable( child ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( parent ) && !pl.type.is_dom_object( parent ) ) {
					thread.throwError( pl.error.type( "HTMLObject", parent, atom.indicator ) );
				} else if( !pl.type.is_variable( child ) && !pl.type.is_dom_object( child ) ) {
					thread.throwError( pl.error.type( "HTMLObject", child, atom.indicator ) );
				} else if( pl.type.is_variable( child ) ) {
					var children = parent.object.children;
					var states = [];
					for( var i = 0; i < children.length; i++ ) {
						states.push( new pl.type.State( point.goal.replace( new pl.type.Term( "=", [child, new pl.type.DOM( children[i] )] ) ), point.substitution, point ) );
					}
					thread.prepend( states );
				} else {
					if( child.object.parentNode ) {
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [parent, new pl.type.DOM( child.object.parentNode )] ) ), point.substitution, point )] );
					}
				}
			},
			
			// sibling/2
			"sibling/2": function( thread, point, atom ) {
				var left = atom.args[0], right = atom.args[1];
				if( pl.type.is_variable( left ) && pl.type.is_variable( right ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( left ) && !pl.type.is_dom_object( left ) ) {
					thread.throwError( pl.error.type( "HTMLObject", left, atom.indicator ) );
				} else if( !pl.type.is_variable( right ) && !pl.type.is_dom_object( right ) ) {
					thread.throwError( pl.error.type( "HTMLObject", right, atom.indicator ) );
				} else {
					if( pl.type.is_variable( left ) && right.object.previousElementSibling ) {
						var elem = new pl.type.DOM( right.object.previousElementSibling );
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [left, elem] ) ), point.substitution, point )] );
					} else if( !pl.type.is_variable( left ) &&  left.object.nextElementSibling ) {
						var elem = new pl.type.DOM( left.object.nextElementSibling );
						thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [right, elem] ) ), point.substitution, point )] );
					}
				}
			},
			
			// remove/1
			"remove/1": function( thread, point, atom ) {
				var element = atom.args[0];
				if( pl.type.is_variable( element ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else {
					if( element.object.parentNode ) {
						element.object.parentNode.removeChild( element.object );
						thread.success( point );
					}
				}
			},
			
			// insert_after/2
			"insert_after/2": function( thread, point, atom ) {
				var element = atom.args[0], reference = atom.args[1];
				if( pl.type.is_variable( element ) || pl.type.is_variable( reference ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else if( !pl.type.is_dom_object( reference ) ) {
					thread.throwError( pl.error.type( "HTMLObject", reference, atom.indicator ) );
				} else {
					if( reference.object.parentNode ) {
						reference.object.parentNode.insertBefore(element.object, reference.object.nextSibling);
						thread.success( point );
					}
				}
			},
			
			// insert_before/2
			"insert_before/2": function( thread, point, atom ) {
				var element = atom.args[0], reference = atom.args[1];
				if( pl.type.is_variable( element ) || pl.type.is_variable( reference ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else if( !pl.type.is_dom_object( reference ) ) {
					thread.throwError( pl.error.type( "HTMLObject", reference, atom.indicator ) );
				} else {
					if( reference.object.parentNode ) {
						reference.object.parentNode.insertBefore(element.object, reference.object);
						thread.success( point );
					}
				}
			},
			
			// prepend_child/2
			"prepend_child/2": function( thread, point, atom ) {
				var parent = atom.args[0], child = atom.args[1];
				if( pl.type.is_variable( parent ) || pl.type.is_variable( child ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( parent ) ) {
					thread.throwError( pl.error.type( "HTMLObject", parent, atom.indicator ) );
				} else if( !pl.type.is_dom_object( child ) ) {
					thread.throwError( pl.error.type( "HTMLObject", child, atom.indicator ) );
				} else {
					if( parent.object.firstChild )
						parent.object.insertBefore( child.object, parent.object.firstChild );
					else
						parent.object.appendChild( child.object );
					thread.success( point );
				}
			},
			
			// append_child/2
			"append_child/2": function( thread, point, atom ) {
				var parent = atom.args[0], child = atom.args[1];
				if( pl.type.is_variable( parent ) || pl.type.is_variable( child ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( parent ) ) {
					thread.throwError( pl.error.type( "HTMLObject", parent, atom.indicator ) );
				} else if( !pl.type.is_dom_object( child ) ) {
					thread.throwError( pl.error.type( "HTMLObject", child, atom.indicator ) );
				} else {
					parent.object.appendChild( child.object );
					thread.success( point );
				}
			},
			
			// add_class/2
			"add_class/2": function( thread, point, atom ) {
				var element = atom.args[0], name = atom.args[1];
				if( pl.type.is_variable( element ) || pl.type.is_variable( name ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else if( !pl.type.is_atom( name ) ) {
					thread.throwError( pl.error.type( "atom", name, atom.indicator ) );
				} else {
					var arr = element.object.className.split(" ");
					if( arr.indexOf( name.id ) === -1 ) {
						element.object.className += " " + name.id;
					}
					thread.success( point );
				}
			},
			
			// remove_class/2
			"remove_class/2": function( thread, point, atom ) {
				var element = atom.args[0], name = atom.args[1];
				if( pl.type.is_variable( element ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else if( !pl.type.is_atom( name ) && !pl.type.is_variable( name ) ) {
					thread.throwError( pl.error.type( "atom", name, atom.indicator ) );
				} else {
					var arr = element.object.className.split(" ");
					if( pl.type.is_variable( name ) ) {
						var states = [];
						for( var i = 0; i < arr.length; i++ ) {
							states.push( new pl.type.State( point.goal.replace(
								new pl.type.Term( ",", [
									new pl.type.Term( "=", [name, new pl.type.Term( arr[i], [] )] ),
									new pl.type.Term( "remove_class", [element, name] )
								] )
							), point.substitution, point ) );
						}
						thread.prepend( states );
					} else {
						var newclasses = "";
						for( var i = 0; i < arr.length; i++ )
							if( arr[i] !== name.id )
								newclasses += arr[i] + " ";
						element.object.className = newclasses;
						thread.success( point );
					}
				}
			},
			
			// has_class/2
			"hasClass/2": function( thread, point, atom ) {
				var element = atom.args[0], name = atom.args[1];
				if( pl.type.is_variable( element ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_dom_object( element ) ) {
					thread.throwError( pl.error.type( "HTMLObject", element, atom.indicator ) );
				} else if( !pl.type.is_atom( name ) && !pl.type.is_variable( name ) ) {
					thread.throwError( pl.error.type( "atom", name, atom.indicator ) );
				} else {
					var arr = element.object.className.split(" ");
					if( pl.type.is_variable( name ) ) {
						var states = [];
						for( var i = 0; i < arr.length; i++ )
							states.push( new pl.type.State( point.goal.replace( new pl.type.Term( "=", [name, new pl.type.Term( arr[i], [] )] ) ), point.substitution, point ) );
						thread.prepend( states );
					} else {
						if( arr.indexOf( name.id ) !== -1 )
							thread.success( point );
					}
				}
			}
			
		};
	};
	
	var exports = ["show/1", "hide/1", "toggle/1", "create/2", "get_by_id/2", "get_by_tag/2", "get_by_class/2", "attr/3", "style/3", "html/2", "parent_of/2", "insert_after/2", "insert_before/2", "append_child/2", "prepend_child/2", "sibling/2", "remove/1", "add_class/2", "remove_class/2", "has_class/2", "bind/4", "unbind/2", "unbind/3", "event_property/3", "prevent_default/1"];
	
	
	
	// DOM HTML OBJECTS
	
	// Get value of style from Prolog object
	function styleFromProlog( obj ) {
		if( obj === undefined || obj === null )
			return false;
		else if( pl.type.is_number( obj ) )
			return obj.value;
		else if( pl.type.is_term( obj ) && obj.args.length === 0 )
			return obj.id;
		else if( pl.type.is_term( obj ) && obj.indicator === "px/1" && pl.type.is_number( obj.args[0] ) )
			return obj.args[0].value.toString() + "px";
		else if( pl.type.is_term( obj ) && obj.indicator === "%/1" && pl.type.is_number( obj.args[0] ) )
			return obj.args[0].value.toString() + "%";
		else if( pl.type.is_term( obj ) && obj.indicator === "url/1" && pl.type.is_atom( obj.args[0] ) )
			return "url(\"" + obj.args[0].id + "\")";
		else if( pl.type.is_term( obj ) && obj.indicator === "rgb/3" && pl.type.is_integer( obj.args[0] ) && pl.type.is_integer( obj.args[1] ) && pl.type.is_integer( obj.args[2] ) )
			return obj.toString();
		return false;
	}
	
	// Get value of style to Prolog object
	function styleToProlog( str ) {
		if( str === undefined || str === null )
			return
		else if( /^-?[0-9]*\.?[0-9]*\s*px\s*$/.test( str ) )
			return new pl.type.Term( "px", [new pl.type.Num( parseInt( str ) )] );
		else if( /^-?[0-9]*\.?[0-9]*\s*\%\s*$/.test( str ) )
			return new pl.type.Term( "%", [new pl.type.Num( parseFloat( str ) )] );
		else if( /^url\(["'].*["']\)$/.test( str ) )
			return new pl.type.Term( "url", [new pl.type.Term( str.substring(5, str.length-2) )] );
		else if( /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)\s*$/.test( str ) ) {
			var rgb = str.replace("rgb","").replace("(","").replace(")","").split(",");
			return new pl.type.Term( "rgb", [new pl.type.Num(parseInt(rgb[0]), false), new pl.type.Num(parseInt(rgb[1]), false), new pl.type.Num(parseInt(rgb[2]), false)] );
		}
		return new pl.type.Term( str.toString(), [] );
	}
	
	// Is a DOM object
	pl.type.is_dom_object = function( obj ) {
		return obj instanceof pl.type.DOM;
	};

	// Ordering relation
	pl.type.order.push( pl.type.DOM );

	// DOM Prolog object
	pl.type.DOM = function( object ) {
		this.object = object;
	}

	// toString
	pl.type.DOM.prototype.toString = function() {
		return "HTMLObject" + this.object.nodeName;
	};

	// clone
	pl.type.DOM.prototype.clone = function() {
		return new pl.type.DOM( this.object );
	};

	// equals
	pl.type.DOM.prototype.equals = function( obj ) {
		return pl.type.is_dom_object( obj ) && this.object === obj.object;
	};

	// rename
	pl.type.DOM.prototype.rename = function( _ ) {
		return this;
	};

	// get variables
	pl.type.DOM.prototype.variables = function() {
		return [];
	};

	// apply substitutions
	pl.type.DOM.prototype.apply = function( _ ) {
		return this;
	};

	// unify
	pl.type.DOM.prototype.unify = function( obj, _ ) {
		if( pl.type.is_dom_object( obj ) && this.object === obj.object ) {
			return new pl.type.State( obj, new pl.type.Substitution() );
		}
		return null;
	};

	// interpret
	pl.type.DOM.prototype.interpret = function( indicator ) {
		return pl.error.instantiation( indicator );
	};

	// compare
	pl.type.DOM.prototype.compare = function( obj ) {
		if( this.object === obj.object ) {
			return 0;
		} else if( this.object < obj.object ) {
			return -1;
		} else if( this.object > obj.object ) {
			return 1;
		}
	};
	
	// to javascript
	pl.type.DOM.prototype.toJavaScript = function() {
		return this.object;
	};
	
	// from javascript
	pl.fromJavaScript.test.dom = function( obj ) {
		return obj instanceof HTMLElement;
	};
	pl.fromJavaScript.conversion.dom = function( obj ) {
		return new pl.type.DOM( obj );
	};
	
	// from javascript (collection)
	pl.fromJavaScript.test.dom_collection = function( obj ) {
		return obj instanceof HTMLCollection;
	};
	pl.fromJavaScript.conversion.dom_collection = function( obj ) {
		var arr = Array.prototype.slice.call( obj, 0 );
		return pl.fromJavaScript.apply( arr );
	};
	
	
	
	// DOM EVENT OBJECTS
	
	// Is a DOM Event object
	pl.type.is_dom_event_object = function( obj ) {
		return obj instanceof pl.type.DOMEvent;
	};

	// Ordering relation
	pl.type.order.push( pl.type.DOMEvent );

	// DOM Event Prolog object
	pl.type.DOMEvent = function( type, event, epoch ) {
		this.type = type;
		this.event = event || null;
		this.epoch = epoch || (new Date).getTime();
	}

	// toString
	pl.type.DOMEvent.prototype.toString = function() {
		return "eventObject" + this.type.toUpperCase();
	};

	// clone
	pl.type.DOMEvent.prototype.clone = function() {
		return new pl.type.DOMEvent( this.type, this.event, this.epoch );
	};

	// equals
	pl.type.DOMEvent.prototype.equals = function( obj ) {
		return pl.type.is_dom_event_object( obj ) && this.type === obj.type && this.epoch === obj.epoch;
	};

	// rename
	pl.type.DOMEvent.prototype.rename = function( _ ) {
		return this;
	};

	// get variables
	pl.type.DOMEvent.prototype.variables = function() {
		return [];
	};

	// apply substitutions
	pl.type.DOMEvent.prototype.apply = function( _ ) {
		return this;
	};

	// unify
	pl.type.DOMEvent.prototype.unify = function( obj, _ ) {
		if( pl.type.is_dom_event_object( obj ) && this.type === obj.type && this.epoch === obj.epoch ) {
			return new pl.type.State( obj, new pl.type.Substitution() );
		}
		return null;
	};

	// interpret
	pl.type.DOMEvent.prototype.interpret = function( indicator ) {
		return pl.error.instantiation( indicator );
	};

	// compare
	pl.type.DOMEvent.prototype.compare = function( obj ) {
		if( this.epoch === obj.epoch ) {
			return 0;
		} else if( this.epoch < obj.epoch ) {
			return -1;
		} else if( this.epoch > obj.epoch ) {
			return 1;
		}
	};
	
	// to javascript
	pl.type.DOMEvent.prototype.toJavaScript = function() {
		return this.event;
	};
	
	// from javascript
	pl.fromJavaScript.test.event = function( obj ) {
		return obj instanceof Event;
	};
	pl.fromJavaScript.conversion.event = function( obj ) {
		return new pl.type.DOMEvent( obj.type, obj );
	};
	
	
	// EVENT HANDLING
	var events = (function() {

		var tau_fn_event = {};


		var add = function(element, evt, fn) {

			if(element.addEventListener !== undefined) {
				element.addEventListener(evt, fn);
				return true;
			}

			else if(element.attachEvent !== undefined) {
				element.attachEvent("on" + evt, fn);
				return true;
			}

			var prop = element["on" + evt];
			var fns = [];
			if(prop) {
				if(prop.tau_fn_event === tau_fn_event) {
					if(prop.fns.indexOf(fn) === -1 )
						prop.fns.push(fn);
					return true;
				} else {
					fns.push(prop);
				}
			}

			fns.push(fn);
			element["on" + evt] = function(e) {
				for(var i = 0; i < fns.length; i++)
					fns[i].call(element, e, element);	
			};
			element["on" + evt].fns = fns;
			element["on" + evt].tau_fn_event = tau_fn_event;
			return true;
		};

		var remove = function(element, evt, fn) {

			if(element.removeEventListener) {
				element.removeEventListener(evt, fn);
				return true;
			}

			else if(element.detachEvent) {
				element.detachEvent("on" + evt, fn);
				return true;
			}

			else if(element["on" + evt]) {
				var f = element["on" + evt];
				if(f === fn)
					element["on" + evt] = undefined;
				else if(f.tau_fn_event === tau_fn_event) {
					for(var i = 0; i < f.fns.length; i++) {
						if(f.fns[i] === fn) {
							f.fns.splice(i, 1);
							break;
						}
					}
					return true;
				}
				else
					return false;
			}

			return true;
		};

		return {
			add: add,
			remove: remove
		};
	})();

	

	if( typeof module !== 'undefined' ) {
		module.exports = function( p ) {
			pl = p;
			new pl.type.Module( "dom", predicates(), exports );
		};
	} else {
		new pl.type.Module( "dom", predicates(), exports );
	}
	

})( pl );
var pl;
(function( pl ) {

	var predicates = function() {
		
		return {
			
			// global/1
			"global/1": function( thread, point, atom ) {
				thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [atom.args[0], new pl.type.JSValue( pl.__env )] ) ), point.substitution, point )] );
			},
			
			// apply/3:
			"apply/3": [
				new pl.type.Rule(new pl.type.Term("apply", [new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z")]), new pl.type.Term(",", [new pl.type.Term("global", [new pl.type.Var("G")]),new pl.type.Term("apply", [new pl.type.Var("G"),new pl.type.Var("X"),new pl.type.Var("Y"),new pl.type.Var("Z")])]))
			],
			
			// apply/4
			"apply/4": function( thread, point, atom ) {
				var context = atom.args[0], name = atom.args[1], args = atom.args[2], result = atom.args[3];
				if( pl.type.is_variable( context ) || pl.type.is_variable( name ) || pl.type.is_variable( args ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_atom( name ) && (!pl.type.is_js_object( name ) || typeof name.value !== "function") ) {
					thread.throwError( pl.error.type( "atom_or_JSValueFUNCTION", name, atom.indicator ) );
				} else if( !pl.type.is_list( args ) ) {
					thread.throwError( pl.error.type( "list", args, atom.indicator ) );
				}
				var ctx = context.toJavaScript();
				var fn = pl.type.is_atom( name ) ? ctx[name.id] : name.toJavaScript();
				if( typeof fn === "function" ) {
					var pointer = args;
					var pltojs;
					var arr = [];
					while( pointer.indicator === "./2" ) {
						pltojs = pointer.args[0].toJavaScript();
						if( pltojs === undefined ) {
							thread.throwError( pl.error.domain( "javascript_object", pointer.args[0], atom.indicator ) );
							return undefined;
						}
						arr.push( pltojs );
						pointer = pointer.args[1];
					}
					if( pl.type.is_variable( pointer ) ) {
						thread.throwError( pl.error.instantiation( atom.indicator ) );
						return;
					} else if( pointer.indicator !== "[]/0" ) {
						thread.throwError( pl.error.type( "list", args, atom.indicator ) );
						return
					}
					var value;
					try {
						value = fn.apply( ctx, arr );
					} catch( e ) {
						thread.throwError( pl.error.javascript( e.toString(), atom.indicator ) );
						return;
					}
					value = pl.fromJavaScript.apply( value );
					thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [value, result] ) ), point.substitution, point )] );
				}
			},
			
			// prop/2:
			"prop/2": [
				new pl.type.Rule(new pl.type.Term("prop", [new pl.type.Var("X"),new pl.type.Var("Y")]), new pl.type.Term(",", [new pl.type.Term("global", [new pl.type.Var("G")]),new pl.type.Term("prop", [new pl.type.Var("G"),new pl.type.Var("X"),new pl.type.Var("Y")])]))
			],
			
			// prop/3
			"prop/3": function( thread, point, atom ) {
				var context = atom.args[0], name = atom.args[1], result = atom.args[2];
				if( pl.type.is_variable( context ) ) {
					thread.throwError( pl.error.instantiation( atom.indicator ) );
				} else if( !pl.type.is_variable( name ) && !pl.type.is_atom( name ) ) {
					thread.throwError( pl.error.type( "atom", name, atom.indicator ) );
				} else {
					if( pl.type.is_atom( name ) ) {
						var fn = context.toJavaScript()[name.id];
						if( fn !== undefined ) {
							fn = pl.fromJavaScript.apply( fn );
							thread.prepend( [new pl.type.State( point.goal.replace( new pl.type.Term( "=", [fn, result] ) ), point.substitution, point )] );
						}
					} else {
						var fn = context.toJavaScript();
						var states = [];
						for( var x in fn ) {
							if( fn.hasOwnProperty( x ) ) {
								var fn_ = pl.fromJavaScript.apply( fn[x] );
								states.push( new pl.type.State( point.goal.replace( new pl.type.Term( ",", [
									new pl.type.Term( "=", [fn_, result] ),
									new pl.type.Term( "=", [new pl.type.Term(x, []), name] )
								]) ), point.substitution, point ) );
							}
						}
						thread.prepend( states );
					}
				}
			}

		};
	};
	
	var exports = ["global/1", "apply/3", "apply/4", "prop/2", "prop/3"];



	// JS OBJECTS
	
	// Is a JS object
	pl.type.is_js_object = function( obj ) {
		return obj instanceof pl.type.JSValue;
	};

	// Ordering relation
	pl.type.order.push( pl.type.JSValue );

	// JSValue Prolog object
	pl.type.JSValue = function( value ) {
		this.value = value;
	}

	// toString
	pl.type.JSValue.prototype.toString = function() {
		return "JSValue" + (typeof this.value).toUpperCase();
	};

	// clone
	pl.type.JSValue.prototype.clone = function() {
		return new pl.type.JSValue( this.value );
	};

	// equals
	pl.type.JSValue.prototype.equals = function( obj ) {
		return pl.type.is_js_object( obj ) && this.value === obj.value;
	};

	// rename
	pl.type.JSValue.prototype.rename = function( _ ) {
		return this;
	};

	// get variables
	pl.type.JSValue.prototype.variables = function() {
		return [];
	};

	// apply substitutions
	pl.type.JSValue.prototype.apply = function( _ ) {
		return this;
	};

	// unify
	pl.type.JSValue.prototype.unify = function( obj, _ ) {
		if( pl.type.is_js_object( obj ) && this.value === obj.value ) {
			return new pl.type.State( obj, new pl.type.Substitution() );
		}
		return null;
	};

	// interpret
	pl.type.JSValue.prototype.interpret = function( indicator ) {
		return pl.error.instantiation( indicator );
	};

	// compare
	pl.type.JSValue.prototype.compare = function( obj ) {
		if( this.value === obj.value ) {
			return 0;
		} else if( this.value < obj.value ) {
			return -1;
		} else if( this.value > obj.value ) {
			return 1;
		}
	};
	
	// to javascript
	pl.type.JSValue.prototype.toJavaScript = function() {
		return this.value;
	};
	
	// from javascrip
	pl.fromJavaScript.conversion.any = function( obj ) {
		return new pl.type.JSValue( obj );
	};
	
	
	
	// JavaScript error
	pl.error.javascript = function( error, indicator ) {
		return new pl.type.Term( "error", [new pl.type.Term( "javascript_error", [new pl.type.Term( error )] ), pl.utils.str_indicator( indicator )] );
	};
	
	


	if( typeof module !== 'undefined' ) {
		module.exports = function( p ) {
			pl = p;
			new pl.type.Module( "js", predicates(), exports );
		};
	} else {
		new pl.type.Module( "js", predicates(), exports );
	}

})( pl );