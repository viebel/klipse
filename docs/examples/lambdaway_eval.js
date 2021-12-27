/* 
JS.js | alainmarty 20160210 | copyleft under GPL
contains static modules:
  LAMBDATALK, ALPHAWIKI, FORUM, SECTIONEDIT, SHOW, LIGHTBOX, MINIBOX
  other modules are in the plugin folder and are called dynamically as needed:
  LAMBDALISP, LAMBDASHEET, ...
*/
//---------------------------------------------------------------------------------//
// LAMBDATALK
//---------------------------------------------------------------------------------//
var LAMBDATALK = (function () {

var dict    = {};  // JS + user functions 
var g_cons  = {};  // an object containing user defined conses
var g_array = {};  // an object containing user defined arrays
var g_lambda_num = 0; // global number for lambdas used in function eval_lambda()
var g_cons_num   = 0; // global number for conses structs
var g_array_num  = 0; // global number for array structs

var evaluate = function( str ) {     // called at each keyUp (public) 
  var t0 = new Date().getTime();
  str = preprocessing( str );        // cleaning, hiding braces, sugar, ... 
  var bal = balance( str );          // control braces
  if (bal.left != bal.right)
    str = 'none';
  else {
    str = eval_special_forms( str ); // handle '{, q, if, lambda, def, let
    str = eval_forms( str );         // evaluate {first rest}
  }
  str = postprocessing( str );       // cleaning, showing braces
  var t1 = new Date().getTime();
  return {val:str, bal:bal, time:t1-t0};
};

// 1. EVALUATION OF SYMBOLIC EXPRESSIONS

var loop_rex   = /\{([^\s{}]*)(?:[\s]*)([^{}]*)\}/g; // regexp sliding window
var debug = false;

var eval_forms = function( str ) {  // (public)
  var index = 0, trace = 'TRACE\n';
  while (str != (str = str.replace( loop_rex, do_apply)))
    if (debug) trace += index++ + ': ' + str + '\n';
  if (debug) console.log( trace );
  return str;
};
var do_apply = function() { 
  var f = arguments[1] || '', r = arguments[2] || '';
  if (dict.hasOwnProperty(f)) {          // first belongs to dict
    return dict[f].apply( null, [r] );   // [r] is a pointer to a string
  } else {                               // return (f r) unevaluated
    return (r == '')? '(' + f + ')' : '(' + f + ' ' + r + ')'; // {} -> ()
  }
};

//---------------------------------------------------------------------------------//
// 2. EVALUATION OF SPECIAL FORMS ['{, q, if, let, lambda, def]

var eval_special_forms = function( str ) {
  //g_lambda_num = 0;            // reset user defined lambdas
  //g_cons_num = 0;              // reset user defined conses
  //g_array_num = 0;             // reset user defined arrays
  str = eval_apos( str );      // '{foo bar} '{foo bar} '{foo bar}
  str = eval_quotes( str );    // {q s-expressions}
  str = eval_ifs( str );       // {if bool then one else two}
  str = eval_lets( str );      // {let { {:arg val} ... } body}
  str = eval_lambdas( str );   // {lambda {:args} body}
  str = eval_defs( str);       // {def name body}
  return str;
};

var catch_sexpression = function( symbol, str ) {
  var start = str.indexOf( symbol );
  if (start == -1) return 'none';
  var d0, d1, d2;
  if (symbol === "'{")     { d0 = 1; d1 = 1; d2 = 1; } 
  else if (symbol === "{") { d0 = 0; d1 = 0; d2 = 1; } 
  else                     { d0 = 0; d1 = symbol.length; d2 = 0; }
  var nb = 1, index = start+d0;
  while(nb > 0) { if (index > 100000) {console.log( 'oops' ); return 'none';}
    index++;
         if ( str.charAt(index) == '{' ) nb++;
    else if ( str.charAt(index) == '}' ) nb--;
  }
  return str.substring( start+d1, index+d2 );
};
var eval_apos = function( str ) {
  while (true) {
    var s = catch_sexpression( "'{", str );
    if (s === 'none') break;
    str = str.replace( "'"+s, hide_braces( s.trim() ) );
  }
  return str;
};
var eval_quotes = function( str ) {
  while (true) {
    var s = catch_sexpression( '{q ', str );
    if (s === 'none') break;
    str = str.replace( '{q '+s+'}', hide_braces( s.trim() ) );
  }
  return str;
};
var eval_ifs = function( str ) { // {if bool then one else two}
  while (true) {
    var s = catch_sexpression( '{if ', str );
    if (s === 'none') break;
    str = str.replace( '{if '+s+'}', eval_if( s.trim() ) );
  }
  return str;
};
var eval_lambdas = function( str ) {
  while (true) {
    var s = catch_sexpression( '{lambda ', str );
    if (s === 'none') break;
    str = str.replace( '{lambda '+s+'}', eval_lambda(s.trim()) );
  }
  return str;
};
var eval_defs = function( str, flag ) {
  flag = (flag === undefined)? true : false;
  while (true) {
    var s = catch_sexpression( '{def ', str );
    if (s === 'none') break;
    str = str.replace( '{def '+s+'}', eval_def( s.trim(), flag ) );
  }
  return str;
};
var eval_lets = function( str ) {
  while (true) {
    var s = catch_sexpression( '{let ', str );
    if (s === 'none') break;
    str = str.replace( '{let '+s+'}', eval_let(s.trim()) );
  }
  return str;
};
//
var eval_if = function( s ) {
  s = eval_ifs( s );
  var pif = parse_if( s );
  return '{_if_ ' + pif[0] +
     ' then ' + hide_braces(pif[1]) + ' else ' + hide_braces(pif[2]) + '}';
};
var eval_lambda = function (s) {
  s = eval_lambdas( s );
  var name = 'lambda_' + g_lambda_num ++,
      args = supertrim( s.substring(1, s.indexOf('}')) ).split(' '),
      body = supertrim( s.substring(s.indexOf('}')+1) );
  for (var reg_args=[], i=0; i < args.length; i++)
    reg_args[i] = RegExp( args[i], 'g');
  dict[name] = function () {
    var vals = supertrim(arguments[0]).split(' ');
    return function (bod) {
      if (vals.length < args.length) {
        for (var i=0; i < vals.length; i++)
          bod = bod.replace( reg_args[i], vals[i] );
          var _args = args.slice(vals.length).join(' ');
          bod = eval_lambda( '{' + _args + '}' + bod ); 
      } else { // vals.length >= args.length, ignore extra values
        for (var i=0; i < args.length; i++) 
          bod = bod.replace( reg_args[i], vals[i] );
      }
      return bod;
    }(body);
  };
  return name;
};
var eval_def = function (s, flag) {	
  s = eval_defs( s, false );
  var name = s.substring(0, s.indexOf(' ')).trim(),
      body = s.substring(s.indexOf(' ')).trim(); 
  body = supertrim(body);
  if (dict.hasOwnProperty(body)) {
    dict[name] = dict[body];
    delete dict[body];
  } else { 
    dict[name] = function() { return body };
  }
  return (flag)? name : '';
};
var eval_let = function (s) {
  s = eval_lets( s );
  s = supertrim( s );
  var varvals = catch_sexpression( '{', s );
  var body = supertrim( s.replace( varvals, '' ) );
  varvals = varvals.substring(1, varvals.length-1);
  var avv = [], i=0;
  while (true) {
    avv[i] = catch_sexpression( '{', varvals );
    if (avv[i] === 'none') break;
    varvals = varvals.replace( avv[i], '' );
    i++;
  } 
  for (var one ='', two='', i=0; i<avv.length-1; i++) {
    var index = avv[i].indexOf( ' ' );
    one += avv[i].substring( 1, index ) + ' ';
	two += avv[i].substring(index+1, avv[i].length-1) + ' ';
  }
  return '{{lambda {'+ one + '} ' + body + '} ' + two + '}';
};

//---------------------------------------------------------------------------------//
// 3. PRE-PROCESSING, POST-PROCESSING, UTILITY FUNCTIONS

var preprocessing = function( str ) {
  //delete_lambdas();
  //delete_conses();
  //delete_arrays();
  str = str.trim() 
           .replace( /°°°[\s\S]*?°°°/g, '' )     // delete °°° comments °°°
           .replace( /<=/g, '__lte__' )          // prevent "<=" break -> "< ="
           .replace( /<([^<>]*)>/g, '< $1>' )    // breaks HTML < tags>
           .replace( /<\/([^<>]*)>/g, '< /$1>' ) // breaks HTML < /tags>
           .replace( /__lte__/g, '<=' );         // retrieve the "<=" operators
  str = hide_show_braces( str, true );      // hide braces between °° .. .. °°
  str += '\n'; // add a CR at the end for "closing" a final alternate form  
  // some sugar form to frequently used standard form {first rest} :
  str = str.replace( /_h([1-6]) (.*?)\n/g, '{h$1 $2}' )    // titles
           .replace( /_p (.*?)\n/g, '{p $1}' )             // paragraphs
           .replace( /_(u|o)l ([^\n]*?)\n/g, '{_$1l $2}' ) // list items
           .replace( /_(u|o)l([0-9]+) ([^\n]*?)\n/g, '{__$1l $2 $3}' )
           .replace( /\[\[([^\[\]]*?)\]\]/g, doWikiLink ); // wiki-links
  return str;
};
var postprocessing = function( str ) {
  str = str.replace( /(<\/ol><ol>|<\/ul><ul>)/g,'' ) // clean list items
           .replace( /<(u|o)l>/g, '<$1l>' )
           .replace( /<\/(u|o)l>/g,'</$1l>' );
  str = hide_show_braces( str, false ); // show braces escaped by °° .. .. °°
  str = show_braces(str);
  delete_lambdas();
  delete_conses();
  delete_arrays();
  return str;
};
var delete_lambdas = function () {
  g_lambda_num = 0;
  for (var key in dict) {
    if (key.substring(0,7) === 'lambda_') {
      delete dict[key]
    }
  } 
};
var delete_arrays = function () {
  g_array_num = 0;
  for (var key in g_array) {
    if (key.substring(0,6) === 'array_') {
      delete g_array[key]
    }
  } 
};
var delete_conses = function () {
  g_cons_num = 0;
  for (var key in g_cons) {
    if (key.substring(0,5) === 'cons_') {
      delete g_cons[key]
    }
  } 
};

//---------------------------------------------------------------------------------//
var balance = function ( str ) {
  var acc_strt    = str.match( /\{/g ), 
      acc_stop    = str.match( /\}/g ), 
      nb_acc_strt = (acc_strt)? acc_strt.length : 0,
      nb_acc_stop = (acc_stop)? acc_stop.length : 0;
  return {left:nb_acc_strt, right:nb_acc_stop}; 
};
var hide_show_braces = function ( str, flag ) { // °° some text °°
  // braces are hidden in pre-processing and showed in post-processing
  var tab = str.match( /°°[\s\S]*?°°/g );
  if (tab == null) return str;
  for (var i=0; i< tab.length; i++)
    str = str.replace( tab[i], ((flag)? hide_braces(tab[i]) : show_braces(tab[i]) ));
  str = str.replace( /°°/g, '' );
  return str;
};
var hide_braces = function( s ) { // deactivate s-exprs
  return s.replace( /\{/g, '&#123;' ).replace( /\}/g, '&#125;' );
};
var show_braces = function( s ) { // reactivate s-exprs
  return s.replace(/&#123;/g, '{').replace(/&#125;/g, '}') 
};
var supertrim = function (str) {  // trimmed + multiple spaces reduced to one
  return str.trim().replace(/\s+/g, ' ')
};
var doWikiLink = function ( m, nom ) { 
  // wikilinks alternatives to {a {@ src=""...}}
  if (nom.match( /\|/ )) { // [[nom|URL]]  -> <a href="URL">nom</a>
    var tab = nom.split( '|' );
    return '<a href="' + tab[1] + '">' + tab[0] + '</a>';
  }
  else  // [[nom]]  -> <a href="?view=nom">nom</a>
    return '<a href="?view=' + nom + '">' + nom + '</a>'; 
};
var parse_if = function(s) {
  var index1 = s.indexOf( 'then' ),
      index2 = s.indexOf( 'else' ),
      bool_term = s.substring(0,index1).trim(),
      then_term = s.substring(index1+5,index2).trim(),
      else_term = s.substring(index2+5).trim();
  return [bool_term, then_term, else_term]
};

//---------------------------------------------------------------------------------//
// 4. DICTIONARY
// every elements of dict have this structure :
// dict[ tag ] = function () { .. .. };
// from the function catch_sexprs(), arguments come as a single element array, 
// so  "var args = arguments[0]" gives arguments as a string
// and "var args = arguments[0].split(' ')" gives arguments as an array


dict['debug'] = function() {
  var args = arguments[0]; // true|false
  debug = (args === 'true')? true : false;
  return ''
}

dict['lib'] = function () { // {lib} -> list the functions in dict
  var str = '', index = 0;
  for (var key in dict) {
    //if(dict.hasOwnProperty(key) && key != 'lambda_' && key != '_if_' ) {
    if(dict.hasOwnProperty(key) && !key.match('lambda_') && !key.match( /^_/ ) ) {
      str += key + ', ';
      index++;
    }
  }
  return '<b>dictionary: </b>(' + 
         index + ') [ ' + str.substring(0,str.length-2) + ' ]<br /> ';
};

dict['lambdas'] = function () { // {lambdas} -> list lambdas in dict
  var str = '', index = 0;
  for (var key in dict) {
    if(dict.hasOwnProperty(key) && key.match('lambda_')) {
      str += key + ', ';
      index++;
    }
  }
  return '<b>lambdas: </b>(' + 
         index + ') [ ' + str.substring(0,str.length-2) + ' ]<br /> ';
};

dict['conses'] = function () { // {lists} -> list the lists in g_cons
  var str = '', index = 0;
  for (var key in g_cons) {
    if(g_cons.hasOwnProperty(key)) {
      str += key + ', ';
      index++;
    }
  }
  return '<b> conses :</b>(' + 
         index + ') [ ' + str.substring(0,str.length-2) + ' ]<br /> ';
};

dict['arrays'] = function () { // {arrays} -> list the arrays in g_array
  var str = '', index = 0;
  for (var key in g_array) {
    if(g_array.hasOwnProperty(key)) {
      str += key + ', ';
      index++;
    }
  }
  return '<b> arrays :</b>(' + 
         index + ') [ ' + str.substring(0,str.length-2) + ' ]<br /> ';
};

//---------------------------------------------------------------------------------//
// SENTENCES first, rest, nth, length
dict['first'] = function () { // {first a b c d}
  var args = arguments[0].split(' '); // [a,b,c,d]
  return args[0];
}
dict['rest'] = function () { // {rest a b c d}
  var args = arguments[0].split(' '); // [a,b,c,d]
  return args.slice(1).join(' ');
}
dict['nth'] = function () { // {nth n a b c d}
  var args = arguments[0].split(' '); // [a,b,c,d]
  return args[args.shift()];
}
dict['length'] = function () { // {length a b c d}
  var args = arguments[0].split(' '); // [a,b,c,d]
  return args.length;
}

// STRINGS equal?, empty?, chars, charAt, substring
dict['equal?'] = function() { // {equal? word1 word2}
  var terms = arguments[0].split(' '); 
  return terms[0] === terms[1]; 
};
dict['empty?'] = function() { // {empty? string}
  return arguments[0] === ''; 
};
dict['chars'] = function() { // {chars some text}
  return arguments[0].length; 
};
dict['charAt'] = function() { // {charAt i some text}
  var args = arguments[0].split(' '), // ["i","some","text"]
      i = args.shift(),
      s = args.join(' ');
  return s.charAt(parseInt(i)); 
};
dict['substring'] = function() { // {substring i0 i1 some text}
  var args = arguments[0].split(' '), // ["i0","i1","some","text"]
      i0 = parseInt(args.shift()),
      i1 = parseInt(args.shift()),
      s  = args.join(' ');
  return s.substring(i0,i1); 
};

//---------------------------------------------------------------------------------//
// CONS CAR CDR (2015/03/14)
// cons, cons?, car, cdr, cons_disp 
// list.new, list.disp
dict['cons'] = function () { // {cons 12 34} -> cons_123
  var args = supertrim(arguments[0]).split(' ');
  var name = 'cons_' + g_cons_num++; // see eval_special_forms()
  g_cons[name] = function(w) { return (w === 'true')? args[0] : args[1] };
  return name;
};
dict['cons?'] = function () { // {cons? z}
  var z = arguments[0];
  return ( z.substring(0,5) === 'cons_' )? 'true' : 'false';
};
dict['car'] = function () { // {car z}
  var z = arguments[0];
  return ( z.substring(0,5) === 'cons_' )? g_cons[z]('true') : z;
};
dict['cdr'] = function () { // {cdr z}
  var z = arguments[0];
  return ( z.substring(0,5) === 'cons_' )? g_cons[z]('false') : z;
};
dict['cons_disp'] = 
dict['cons.disp'] = function () { // {cons.disp {cons a b}} 
  var args = supertrim(arguments[0]);
  var r_cons_disp = function (z) {
    if ( z.substring(0,5) === 'cons_' )
      return '(' + r_cons_disp( g_cons[z]('true') ) + ' ' 
                 + r_cons_disp( g_cons[z]('false') ) + ')';
    else
      return z;
  };
  return r_cons_disp( args );
};
/* could be a user function
{def cons_disp {lambda {:p} 
 {if {cons? :p}
  then ({cons_disp {car :p}} {cons_disp {cdr :p}}) 
  else :p}}}
*/
dict['list_new'] = 
dict['list.new'] = function () { 
// {list.new 12 34 56 78} -> cons_123
  var args = supertrim(arguments[0]).split(' '); // [12,34,56,78]
  var r_list_new = function (arr) {
    if (arr.length === 0)
      return 'nil';
    else
      return '{cons ' + arr.shift() + ' ' + r_list_new( arr ) + '}';
  };
  return r_list_new( args );
};
/* could be a user function
{def list_disp {lambda {:l}
  {if {equal? :l nil}
   then nil 
   else {car :l} {list_disp {cdr :l}}}}}
*/
dict['->'] =
dict['list_disp'] = 
dict['list.disp'] = function () { 
// {list.disp {list.new 12 34 56 78}}
  var r_list_disp = function (z) {
    if (z === 'nil')
      return '';
    else
      return g_cons[z]('true') + ' ' + r_list_disp( g_cons[z]('false') );
  };
  var args = supertrim(arguments[0]);
  if ( args.substring(0,5) !== 'cons_' )
    return args
  else 
    return '(' + supertrim( r_list_disp( args.split(' ') ) ) + ')';
};

dict['list.length'] = function () {
  var args = supertrim(arguments[0]);
  var foo = function (z,n) {
    return (z === 'nil')? n : foo(g_cons[z]('false'), n+1);
  };
  return foo(args,0);
};

// testing user functions replaced by primitives

dict['list.first'] = function () {
  var z = arguments[0]; // cons_123
  return ( z.substring(0,5) === 'cons_' )? g_cons[z]('true') : z;
};
dict['list.butfirst'] = function () {
  var z = arguments[0]; // cons_123
  return ( z.substring(0,5) === 'cons_' )? g_cons[z]('false') : z;
};
dict['list.last'] = function () {
  var r_list_last = function (z) {
    if (g_cons[z]('false') === 'nil')
      return g_cons[z]('true');
    else
      return r_list_last( g_cons[z]('false') );
  };
  var args = arguments[0]; // cons_123
  if ( args.substring(0,5) !== 'cons_' )
    return args
  else 
    return r_list_last( args.split(' ') );
};
dict['list.butlast'] = function () {
  return 'not yet!';
};
dict['list.2array'] = function () {
  var args = arguments[0]; // cons_123
  args = dict['list.disp'](args);
  return args.substring(1,args.length-1).split(' ');
};

//---------------------------------------------------------------------------------//
// ARRAYS (2015/06/15)
// array.new, array?, array.disp, array.length, array.nth
dict['array.new'] = function () { // {array.new 12 34 56 78} -> array_123
  var args = supertrim(arguments[0]);
  var name = 'array_' + g_array_num++;
  g_array[name] = (args != '')? args.split(' ') : [];
  return name;
};
dict['array?'] = function () { // {array? z}
  var args = arguments[0].trim(); // z
  return Array.isArray(g_array[args]);
};
dict['array.disp'] = function () { // {array.disp z}
  var args = arguments[0].trim(); // z
  return (Array.isArray(g_array[args]))? '['+g_array[args].join(',')+']' : args;
};
dict['array.length'] = function () { // {array.length z}
  var args = arguments[0].trim(); // z
  return (Array.isArray(g_array[args]))? g_array[args].length : 0;
};
dict['array.nth'] = function () { // {array.nth z i}
  var args = supertrim(arguments[0]).split(' '); // [z,i]
  return (Array.isArray(g_array[args[0]]))? g_array[args[0]][args[1]] : args[0];
};
dict['array.last'] = function () { // {array.last z} added 2016|01|30
  var args = arguments[0].trim(); // z
  return g_array[args][g_array[args].length-1];
};
dict['array.push'] = function () { // {array.push z val}
  var args = supertrim(arguments[0]).split(' '); // [z,val]
  g_array[args[0]].push( args[1] );
  return args[0];
};
dict['array.pop'] = function () { // {array.pop z} added 2016|01|30
  var args = arguments[0].trim(); // z
  return g_array[args].pop();
};

//---------------------------------------------------------------------------------//
dict['_if_'] = 
dict['when'] = function () { // twinned with eval_ifs()
  var pif = parse_if( arguments[0] );
  return (eval_forms(pif[0]) === "true")? 
    eval_forms(show_braces(pif[1])) : eval_forms(show_braces(pif[2]));
};

dict['serie'] = function () { // {serie start end step}
  var args = supertrim(arguments[0]).split(' ');
  var start = parseFloat( args[0] ),
      end = parseFloat( args[1] ),
      step = parseFloat( args[2] || 1 );  
  for (var str='', i=start; i<=end; i+= step)
    str += i + ' ';
  return str.substring(0, str.length-1);
};
dict['map'] = function () { // {map func serie}
  var args = supertrim(arguments[0]).split(' ');
  var func = args.shift();
  dict['map_temp'] = dict[func]; // if it's a lambda it's saved in map_temp
  for (var str='', i=0; i< args.length; i++)
    str += dict['map_temp'].call( null, args[i] ) + ' ';
  delete dict['map_temp'];       // clean map_temp
  return str.substring(0, str.length-1);
};
dict['reduce'] = function () { // {reduce *userfunc* serie}
  var args = supertrim(arguments[0]).split(' ');
  var func = args.shift();
  var res = '{{' + func + ' ' + args[0] + '}';
  for (var i=1; i< args.length-1; i++)
    res = '{' + func + ' ' + res + ' ' + args[i] + '}';
  res += ' ' + args[args.length-1] + '}';
  return eval_forms(res);
};

// experimenting: {set! foo 1}, {foo} -> 1 {set! foo 2}, {foo} -> 2
dict['set!'] = function() {  
  var args = supertrim(arguments[0]).split(' ');
  var one = args.shift();
  args = args.join(' ');
  dict[one] = function() { return args };
  return args; // one;
};

// BOOLEANS
dict['gt'] =
dict['>'] = function() {
  var terms = arguments[0].split(' '); 
  return parseFloat(terms[0]) > parseFloat(terms[1]) 
};
dict['lt'] =
dict['<'] = function() { 
  var terms = arguments[0].split(' '); 
  return parseFloat(terms[0]) < parseFloat(terms[1]) 
};
dict['>='] = function() {
  var terms = arguments[0].split(' '); 
  return parseFloat(terms[0]) >= parseFloat(terms[1]) 
};
dict['<='] = function() { // see pre-processing
  var terms = arguments[0].split(' '); 
  return parseFloat(terms[0]) <= parseFloat(terms[1]) 
};
dict['='] = function() { 
  var terms = arguments[0].split(' '); 
  var a = parseFloat(terms[0]), b = parseFloat(terms[1]); 
  return !(a < b) && !(b < a) 
};
dict['not'] = function () { 
  return (arguments[0] === 'true') ? 'false' : 'true';
};
dict['or'] = function () {
  var terms = arguments[0].split(' '); 
  for (var ret='false', i=0; i< terms.length; i++)
    if (terms[i] == 'true')
      return 'true';
  return ret;
};
dict['and'] = function () { // (and (= 1 1) (= 1 2)) -> false 
  var terms = arguments[0].split(' '); 
  for (var ret='true', i=0; i< terms.length; i++)
    if (terms[i] == 'false')
      return 'false';
  return ret;
};

// BASIC ARITHMETIC OPERATORS made variadic, ie. {* 1 2 3 4 5 6} -> 720
dict['+'] = function() { 
  var args = arguments[0].split(' ');
  //if (args.length == 2) return Number(args[0]) + Number(args[1]);
  for (var r=0, i=0; i< args.length; i++) 
    r += Number(args[i]); 
  return r; 
};
dict['*'] = function() { 
  var args = arguments[0].split(' ');
  //if (args.length == 2) return args[0] * args[1];
  for (var r=1, i=0; i< args.length; i++)
    if (args[i] !== '') 
      r *= args[i]; 
  return r; 
};
dict['-'] = function () { // (- 1 2 3 4) -> 1-2-3-4
  var args = arguments[0].split(' ');
  //if (args.length == 2) return args[0] - args[1];
  var r = args[0];
  if (args.length == 1) 
    r = -r;  // case (- 1) -> -1
  else
    for (var i=1; i< args.length; i++) 
      r -= args[i]; 
  return r; 
};
dict['/'] = function () { // (/ 1 2 3 4) -> 1/2/3/4
  var args = arguments[0].split(' ');
  //if (args.length == 2) return args[0] / args[1];
  var r = args[0];
  if (args.length == 1) 
    r = 1/r;  // case (/ 2) -> 1/2
  else
    for (var i=1; i< args.length; i++)
      if (args[i] !== '') 
        r /= args[i]; 
  return r; 
};
dict['%']  = function() { 
  var args = arguments[0].split(' '); 
  return parseFloat(args[0]) % parseFloat(args[1]) 
};

// JS MATH OBJECT FUNCTIONS
var mathfns = // one argument
['abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor',
'log', 'random', 'round', 'sin', 'sqrt', 'tan'];
for (var i=0; i< mathfns.length; i++) {
  dict[mathfns[i]] = Math[mathfns[i]]
}
// two or more arguments
dict['pow'] = function () { 
  var args = arguments[0].split(' ');
  return Math.pow(parseFloat(args[0]),parseFloat(args[1])) 
};
dict['min'] = function () { 
  var args = arguments[0].split(' ');
  return Math.min.apply(Math, args);
};    
dict['max'] = function () { 
  var args = arguments[0].split(' ');
  return Math.max.apply(Math, args);
};    
dict['PI'] = function () { return Math.PI };
dict['E'] = function ()  { return Math.E };
dict['date'] = function () { return ALPHAWIKI.getTime() };  

//---------------------------------------------------------------------------------//
// A SET OF HTML and MATHML TAGS
dict['@'] = function () {    // catch HTML attributes (and CSS rules)
  return '@@' + arguments[0] + '@@' 
};
var attribute_extract = function ( attr, key ) {
  var rex = new RegExp( key + '=\"[^\"]*?\"', 'g' );  // catch key="value"
  var id = attr.match( rex );
  if (id == null) return 'null';
  var rex = new RegExp( key + '=\"', 'g' );
  return id[0].replace( rex, '' ).replace( '\"', ''); // return value
};
var htmltags = 
['div','span','a','ul','ol','li','dl','dt','dd','table','tr','td',
'h1','h2','h3','h4','h5','h6','p','b','i','u','pre','center','blockquote',
'sup','sub','del','code','img','textarea','embed','canvas','audio','video','source',
/*
'math','mrow','mfrac','mo','mi','mn','msup',
'msub','msubsup','msqrt','munder','mover','munderover',
*/
'svg','line','rect','circle','polyline','path','text','g',
'animateMotion','mpath','use','textPath', 'image', 'clipPath'];

for (var i=0; i< htmltags.length; i++) {
  dict[htmltags[i]] = function(tag) {
    return function() {
      var attr = arguments[0].match( /@@[\s\S]*?@@/ ); 
      if (attr == null) 
        return '<'+tag+'>'+arguments[0]+'</'+tag+'>';
      arguments[0] = arguments[0].replace( attr[0], '' ).trim();
      attr = attr[0].replace(/^@@/, '').replace(/@@$/, '');
      return '<'+tag+' '+attr+'>'+arguments[0]+'</'+tag+'>';
    }
  }(htmltags[i]); 
}
dict['br'] = function () { return '<br />' };
dict['hr'] = function () { return '<hr />' };
// _ulxx|_olxx as alternatives to {ul {li ...}...} and {ol {li ...}...}
// they are handled in pre-processing and post-processing phases
dict['_ul'] = function () {
  var args = supertrim(arguments[0]).split(' ');
  return '<ul><li>' + args.join(' ') + '</li></ul>';
};
dict['__ul'] = function () {
  var args = supertrim(arguments[0]).split(' ');
  var delta = 'style="margin-left:' +args.shift() + 'px;"';
  return '<ul><li '+ delta + '>' + args.join(' ') + '</li></ul>';
};
// _olxx can't be nested, use the standard syntax instead
dict['_ol'] = function () {
  var args = supertrim(arguments[0]).split(' ');
  return '<ol><li>' + args.join(' ') + '</li></ol>';
};
dict['__ol'] = function () {
  var args = supertrim(arguments[0]).split(' ');
  var delta = 'style="margin-left:' +args.shift() + 'px;"';
  return '<ol><li '+ delta + '>' + args.join(' ') + '</li></ol>';
};

// CONTROLLED (mas o meno) and EXTENDED HTML TAGS
dict['iframe'] = function() {
  // {iframe {@ src=".." height=".." width=".."}}
  var args = arguments[0]; 
//  !!!!! uncomment the 2 following lines for a better security !!!!
//  if (args.match( 'http://' )) // try to prevent cross_scripting
//    return 'Sorry, external sources are not authorized in iframes!';
  var attr = args.match( /@@[\s\S]*?@@/ ); 
  if (attr == null)  return 'oops';
  attr = attr[0].replace(/^@@/, '').replace(/@@$/, ''); // clean attributes
  return '<iframe ' + attr + ' ></iframe>';
}; 
dict['input'] = function () {
  // {input {@ type="a_type" value="val" onevent="°° JS exprs °°"}}
  var args = arguments[0]; 
  if (args.match( 'http://' )) // try to prevent cross_scripting
    return 'Sorry, external sources are not authorized in inputs!';
  if (args.match( /type\s*=\s*("|')\s*file\s*("|')/ ))
    return 'Sorry, type="file" is not allowed';
  var attr = args.match( /@@[\s\S]*?@@/ ); // any whitespace or not -> all
  if (attr == null) return 'oops';
  attr = attr[0].replace(/^@@/, '').replace(/@@$/, ''); // clean attributes
  return '<input ' + attr + ' />';
};
dict['script'] = function (){ // {script °° code °°} 
  var args = arguments[0];
  if (args.match( 'http://' )) // try to prevent cross_scripting
    return 'Sorry, external sources are not authorized in scripts!';
  var script = show_braces(args); 
  var code = (function () {
    var js = document.createElement('script');
    js.innerHTML = script;
    document.head.appendChild( js );
    document.head.removeChild( js );
  })();
  return '';
};
dict['style'] = function (){ // {style °° code °°} 
  var args = arguments[0];
  if (args.match( 'http://' )) // try to prevent cross_scripting
    return 'Sorry, external sources are not authorized in styles!';
  var style = show_braces(args); 
  var code = (function () {
    var cs = document.createElement('style');
    cs.innerHTML = style;
    document.head.appendChild( cs );
    // document.head.removeChild( cs ); don't do that !
  })();
  return '';
};
dict['mailto'] = function () { // {mailto john•martin_at_free•fr}
  var args = arguments[0];
  var mail = args.replace(/•/g, '.').replace(/_at_/, '@');
  return '<a href="mailto:'+mail+'">'+args+'</a>';
};
var note_number = 0; // global number for notes
dict['note'] = function () { // {note a_word and any text}
  var args = arguments[0].split(' ');
  var note = args.shift();
  var rd = '_' + note_number++;
  return '<a href="javascript:ALPHAWIKI.toggle_display(\'' 
    + rd + '\');">' + note + '</a>' 
    + '<span class="note" id="' + rd + '" >' 
    + args.join( ' ' ) + '</span>';
};
dict['note_start'] = function () { // {note_start an_ID any text}
  var args = arguments[0].split(' ');
  var note_id = args.shift();
  return '<a href="javascript:ALPHAWIKI.toggle_display(\'' 
    + note_id + '\');">' + args.join( ' ') + '</a>';
};
dict['note_end'] = function () { // {note_end {@ id="ID" style="style"} text}
  var args = arguments[0];
  var attr = args.match( /@@[\s\S]*?@@/ ); // any whitespace or not -> all
  if (attr == null) return 'oops';
  args = args.replace( attr[0], '' ).trim(); // extract attributes
  attr = attr[0].replace(/^@@/, '').replace(/@@$/, ''); // clean attributes
  return '<div class="note" ' + attr + '>' + args + '</div>';
};
dict['back'] = function () { // {back texte }
  var args = arguments[0];
  return '<a href="javascript:history.go(-1);">' + args + '</a>';
};
dict['post'] = function () { // obsolete, only for retro-compatibility
  var args = arguments[0];
  return '<div class="post"> post from : ' + args + '</div>';
};
dict['drag'] = function () {  // {drag}
  // CAUTION : div parent must have a defined position, top and left
  return '<div style="cursor:move;background:red; '
    + 'width:10px; height:10px; line-height:20px; border:1px solid black;"'
    + 'onmousedown="ALPHAWIKI.beginDrag( this.parentNode, event );">&nbsp;</div>';
};
dict['listing'] = function () { // {picots left top width angle opacity pre} 
  var args = arguments[0].split(' ');
  var str = "position:absolute;"  
     + "box-shadow:0 0 8px black;padding:5px 5px 5px 10px;"   
     + "color:#800; line-height:1.0em;"
     + " background:url('skins/dot.jpg') repeat-y,"
     + "            url('skins/dot.jpg') repeat-y 100% white;"
     + "left:"+args[0]+"px; top:"+args[1]+"px; width:"+args[2]+"px;"
     + "-webkit-transform:rotate("+args[3]+"deg);"
     + "   -moz-transform:rotate("+args[3]+"deg);"
     + "        transform:rotate("+args[3]+"deg);";
  if (args[4] !== undefined) str += "opacity:"+args[4]+";";
  if (args[5] !== undefined) str += "white-space:pre-wrap;";
  return '{@ style="' + str + '"}{drag}';
};

// works with moduli in this file: SHOW, LIGHTBOX, FORUM, SECTIONEDIT 

dict['show'] = function () { // use the lightbox.js and lightbox.css files
  // {show {@ src="s" height="h" width="w" title="some text"}}
  var args = arguments[0];
  var attr = args.match( /@@[\s\S]*?@@/ );
  if (attr == null) return 'oops';
  attr = attr[0].replace(/^@@/, '').replace(/@@$/, ''); // clean attributes
  var s = attribute_extract( attr, 'src' );
  var h = attribute_extract( attr, 'height' );
  var w = attribute_extract( attr, 'width' );
  var t = attribute_extract( attr, 'title' );          
  return SHOW.build( s, t, h, w );
};
dict['lightbox'] = function () {
  // {lightbox (@ height="h_start" width="w_end") (img txt) .. (img txt) }
  var h1 = 30, h2 = 30; // thumb_preview_height, thumb_display_height
  var args = arguments[0];
  var attr = args.match( /@@[\s\S]*?@@/ );
  if (attr == null) return 'oops';
  args = args.replace( attr[0], '' ).trim(); // extract attributes
  attr = attr[0].replace(/^@@/, '').replace(/@@$/, ''); // clean attributes
  var h_start = attribute_extract( attr, 'height' );
  var w_end = attribute_extract( attr, 'width' );
  var picts = [];
  var m = args.match( /\(([^\)]*?)\)/g ); // [ (adresse un texte) ]
  if (m == null) return 'waiting for some (pict text) ... (pict text) ';
  for (var i=0; i<m.length; i++) { // m[i] = "( adresse un texte )"
    m[i] = m[i].replace( /^\(/, '' ).replace( /\)$/, '' );
    var tab = m[i].split( ' ' );   // tab  = [adresse, un, texte]
    var img = tab.shift().replace( /^\(/, '' ); // adresse
    var txt = tab.join( ' ' ).replace( /\)$/, '' ); // "un texte"
    picts[i] = [img, txt];
  }
  return LIGHTBOX.build( picts, h1, h_start, h2, w_end ); 
};
// added 2015/12/19
dict['minibox'] = function() {
  return MINIBOX.build( supertrim(arguments[0]) )
};

dict['forum'] = function () {  // {forum name}, see FORUM
  var nom = arguments[0] || '#forum#';
  return FORUM.create( nom );
};
dict['editable'] = function () { // {editable num ..}, see SECTIONEDIT
  return SECTIONEDIT.create( arguments[0] );
};
// works with modulus LAMBDALISP in the plugins folder
dict['lisp'] = function () { // {lisp lambdalisp expression}, see LAMBDALISP
  return LAMBDALISP.parser( arguments[0] ).evaluation;
};
// works with modulus LAMBDASHEET in the plugins folder
dict['lc'] = function () { // {lc row column}, see LAMBDASHEET
  var args = arguments[0].split(' ');
  return LAMBDASHEET.get_val( parseInt(args[0]), parseInt(args[1]) ) 
};
dict['sheet'] = function () { // {lc rowMax, colMax}, see LAMBDASHEET
  var args = arguments[0].split(' ');
  var jmax = args[0]; // || 12;
  var imax = args[1]; // || 4;
  return LAMBDASHEET.build( jmax ,imax );
};
dict['require'] = function() { // {include wikipage}, NEW 20140824
  var page = arguments[0], xmlHttp;
  if (window.XMLHttpRequest)
    var xmlHttp = new XMLHttpRequest();
  else if (window.ActiveXObject)
    var xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');	
  xmlHttp.open('GET', 'pages/'+page+'.txt', true);
  xmlHttp.send(null);
  xmlHttp.onreadystatechange = function() {	
    if (xmlHttp.readyState == 4) {
      var outer_code = show_braces( xmlHttp.responseText ); // if hidden
      LAMBDATALK.evaluate( outer_code ); // extend the dict, unused return value
      var page_code = getId('page_textarea').value;
  page_code = page_code.replace( /\{require /g, '{div {@ style="display:none"} ' );
      getId('page_view').innerHTML = LAMBDATALK.evaluate( page_code ).val;
    }
  }
  return '';
};
/*
// An alternative version of require using a module.
dict['require'] = function() { // {require someCode}
  return REQUIRE.require( arguments[0] ); // it's better to use include
};

var REQUIRE = (function() {
var once = true; 
var require = function (mylib) {
  var mystyle = "display:none; width:0; height:0";
  return '<iframe id ="' + mylib + '" src="?view=' + mylib
  + '" style="'+mystyle+'" onload="REQUIRE.do_stuff(\''+mylib+'\')"></iframe>'
};
var do_stuff = function(mylib) {
  if (!once) return;
  var mylib_content = getId(mylib).contentWindow.document.body.innerHTML;
  LAMBDATALK.evaluate( mylib_content );
  var input = getId('page_textarea').value;
  var _input = input.replace( '{require ', '{div {@ style="display:none"} ' );
  var output = LAMBDATALK.evaluate( _input );
  getId('page_view').innerHTML = output.val;
  once = false;
};
return {require:require, do_stuff:do_stuff}
}()); // end of REQUIRE modulus
*/

// minimum turtle drawing (added 2016/02/10)
// T.init, T.move and T.turn are sugar syntax for "x0 y0 a0", "Md", "Ta"
// T.draw returns "x0 y0 a0 M100 T90 ..." to the SVG polyline points attribute 
dict['T.init'] = function() { // {T.init x0 y0 a0} -> "x0 y0 a0 "
  return arguments[0] + ' '
};
dict['T.move'] = function() { // {T.move d} -> Md
  return 'M' + arguments[0] 
};
dict['T.turn'] = function() { // {T.turn a} -> Ta
  return 'T' + arguments[0] 
};
dict['T.draw'] = function() { // {T.draw x0 y0 a0 M100 T90 ...}
  var args = supertrim(arguments[0]).split(' ');
  var poly = [];
  poly.push( [parseFloat(args[0]),
              parseFloat(args[1]),
              parseFloat(args[2])] );
  for (var i=3; i < args.length; i++) {
    var act = args[i].charAt(0),
        val = parseFloat(args[i].substring(1));
    if (act === 'M') {
      var p = poly[poly.length-1],
          a = p[2] * Math.PI / 180.0,
          x = p[0] + val * Math.sin(a),
          y = p[1] + val * Math.cos(a);
      poly.push( [x,y,p[2]] )
    } else {
      var p = poly.pop();
      poly.push( [p[0],p[1],p[2]+val] ) 
    }
  }
  for (var pol = '', i=0; i < poly.length; i++)
    pol += Math.round(poly[i][0]) + ' '
        +  Math.round(poly[i][1]) + ' ';
  return pol
};

//---------------------------------------------------------------------------------//
return { // public functions
  evaluate:evaluate,                   // called by ALPHAWIKI
  eval_forms:eval_forms,             // called by ALPHAWIKI.createTOC()
  catch_sexpression:catch_sexpression  // called by SECTIONEDIT
}; 

}()); // end of LAMBDATALK modulus

//---------------------------------------------------------------------------------//
var ALPHAWIKI = (function() {

// HTML interface ALPHAWIKI <-> LAMBDATALK

var myDelayId = null, myDelayValue = 100; // 10, 100, 500, 1000

var do_update = function ( from_onload ) { // !!!! PUBLIC function !!!!
  if (from_onload) {         // body.onload='STRINGLISP.do_update( true )
    do_evaluate();           // don't wait
  } else {                   // textarea.onkeyup='STRINGLISP.do_update( false )
    if (myDelayId == null)   // wait only if no one is pending
      myDelayId = window.setTimeout( do_evaluate, myDelayValue );
  }  
};
var do_evaluate = function() {       // called by do_update()
  if (getId('page_textarea') == null)
    return; // content comes from doList, doSkin, doBack, ...
  var input = getId('page_textarea').value;
  var output = LAMBDATALK.evaluate( input );    // {val:v, bal:b, time:t}
  if (output.val != 'none')          // else don't waste time
    getId('page_view').innerHTML = output.val;
  window.clearTimeout( myDelayId );  // end of TimeOut
  myDelayId = null;                  // no pending update, OK for a new one
  getId('infos').innerHTML = '[' + output.time + 'ms] | ' 
  + '{' + output.bal.left + '|' + output.bal.right + '} | ['
  + input.length + '->' + output.val.length + ']';
};

// functions USED in PHP.php

var toggle_display = function ( id ) {
  var OK = (getId(id).style.display == "block");
  getId(id).style.display = (OK)? "none" : "block";
}; // toggle_display
var toggle_visibility = function ( id ) {
  var OK = (getId(id).style.visibility == "visible");
  getId(id).style.visibility = (OK)? "hidden" : "visible";
}; // toggle_visibility
var doSave = function () {
  return confirm( "Save and publish changes ?" );
};
var doCancel = function () {
  if ( confirm( "Exit editor without saving changes ?" ) ) {
    document.location.reload(true); // reload saved initial content
    return true;
  } else {
    return false;
  }
};
var getTime = function () {  
  var now = new Date();
  var year    = now.getFullYear(), 
      month   = now.getMonth() + 1, 
      day     = now.getDate(),
      hours   = now.getHours(), 
      minutes = now.getMinutes(), 
      seconds = now.getSeconds();
  if (month<10) month = '0' + month;
  if (day<10) day = '0' + day;
  if (hours<10) hours = '0' + hours;
  if (minutes<10) minutes = '0' + minutes;
  if (seconds<10) seconds = '0' + seconds;
  //return year+'/'+month+'/'+day+'_'+hours+':'+minutes+':'+seconds;
  return year+' '+month+' '+day+' '+hours+' '+minutes+' '+seconds;
};  
var beginDrag = function ( elementToDrag, event ) {
  var x, y, ymin = 20;
  if( window.getComputedStyle ) { 
    x = parseInt( window.getComputedStyle(elementToDrag,null).left ); 
    y = parseInt( window.getComputedStyle(elementToDrag,null).top );
  } else if( elementToDrag.currentStyle ) { 
    x = parseInt( elementToDrag.currentStyle.left );
    y = parseInt( elementToDrag.currentStyle.top );
  }  
  var deltaX = event.clientX - x;
  var deltaY = event.clientY - y;
  document.addEventListener( "mousemove", moveHandler, true );
  document.addEventListener( "mouseup", upHandler, true );
  event.stopPropagation();
  event.preventDefault();
  
  function moveHandler ( event ) {
    x = event.clientX;
    y = event.clientY; if (y < ymin) y = ymin;  // top window < ymin  
    elementToDrag.style.left = (x - deltaX) + "px";
    elementToDrag.style.top  = (y - deltaY) + "px";
    event.stopPropagation();
  }
  function upHandler ( event ) {
    document.removeEventListener( "mouseup", upHandler, true );
    document.removeEventListener( "mousemove", moveHandler, true );
    event.stopPropagation();
  }
};  // beginDrag

var createTOC = function ( tocDiv, content ) {
  // 1) {div {@ id="CONTENT"} ... the content with h1/h2/h3/h4/h5/h6 ... }
  // 2) {div {@ id="TOC"}}
  // 3) {input {@ id="startTOC" type="submit" value="TOC" onclick="°°
  //    ALPHAWIKI.createTOC( getId('TOC'), getId('CONTENT') );
  //    getId('startTOC').disabled = 'disabled'; °°"}}

  // A) find the nodes to be added to the TOC
  var tocTargets = new Array();
  var nodes = content.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    var nn = nodes[i].nodeName.toLowerCase();
    if (nn == 'h1' || nn == 'h2' || nn == 'h3' || 
        nn == 'h4' || nn == 'h5' || nn == 'h6') {
      tocTargets.push(nodes[i]); // <hi>
    }
  }
  if (tocTargets.length < 2) { // Remove toc if none or one heading
    tocDiv.parentNode.removeChild(tocDiv);
    return;
  }
  // B) Add the toc contents
  tocDiv.innerHTML= LAMBDATALK.eval_forms('{drag}');
  var tocList = document.createElement('ul');
  tocList.className = 'tocDiv'; // old : tocDiv without quotes
  tocDiv.appendChild(tocList);
  // Insert elements into our table of contents
  for (var i = 0; i < tocTargets.length; i++) { // for all <hi>
    var tocTarget = tocTargets[i];
    if (tocTarget.id == '') tocTarget.id = i; // add id="i" to the <hi>
    var newItem = document.createElement('li');
    newItem.className = tocTarget.nodeName;   // hi
    var newLink = document.createElement('a');
    newLink.href = '#' + tocTarget.id;        // href="#i"
    newLink.innerHTML = tocTarget.innerHTML;
    newItem.appendChild(newLink);
    tocList.appendChild(newItem);
  }  
};

var decode_html_entities = function ( str ) {
  return str.replace( /&lt;/g, '<' )
            .replace( /&gt;/g, '>' )
            .replace( /&amp;/g, '&' );
};
var protected = function ( two, one, page ) { 
  var time = getId(one).innerHTML;  // yyyy mm dd hh mn ss -> mn+ss
  var calc = parseInt(time.substring(14,16)) + parseInt(time.substring(17,19));
  if (two.value == calc)
    document.location.href = '?view=_' + page;
  else
    alert( 'Sorry :(' );
}; // protected

return {
  do_update:do_update,   // called by body.onload, textarea.onkeyup, REQUIRE
  toggle_display:toggle_display,
  toggle_visibility:toggle_visibility,
  doSave:doSave,
  doCancel:doCancel,
  protected:protected,
  getTime:getTime,
  beginDrag:beginDrag,
  createTOC:createTOC,
  decode_html_entities:decode_html_entities
}
})();	// end ALPHAWIKI

//---------------------------------------------------------------------------------//
// A LITTLE GLOBAL SUGAR FUNCTION
function getId (id) { return document.getElementById(id) }

//---------------------------------------------------------------------------------//
var FORUM = (function() { // call by dict['forum']

var create = function ( nom ) {
  return '{div {@ style="padding:0 10px;"}'
  + '{textarea {@ id="blog_' + nom 
  + '" placeHolder="Tell me something" '
  + 'style="width:100%; height:50px; box-shadow:0 0 8px; "}}'
  + '{br}{input {@ id="name_' + nom + '" type="text" '
  + 'placeHolder="Tell me your name" style="width:110px; margin-left:20px;"}}'
  + '{input {@ type="submit" value="... then add your message" '
  + 'onclick="FORUM.add_message(\'' + nom + '\')"}}}';
};

var add_message = function ( nom ) { // associated with dict['forum']
  var mess = getId('blog_' + nom).value;
  if (!mess) return;
  var code = getId('page_textarea').value;
  var name = getId('name_' + nom).value || 'anonymous';
  var time = ALPHAWIKI.getTime();
  mess = '{br}{b From ' + name + '} [{i ' + time + '}]\n{blockquote ' + mess + '}\n';
  var temp = '{forum ' + nom + '}';
  getId('page_textarea').value = code.replace( temp, temp + '\n' + mess );
  getId('save_button').click(); 
};

return {create:create, add_message:add_message}
})();	// end FORUM

//---------------------------------------------------------------------------------//
var SECTIONEDIT = (function() {
// associated with "editable" in the LAMBDATALK dict :
// dict['editable'] = function () { // {editable num any text }
//   return SECTIONEDIT.create( arguments[0].split(' ') ) 
// };
// CAUTION : due to a LAMBDATALK.catch_sexpression() limit
// num must be followed by at least one "true" space, not a line return
var code = '', content = '', oldval = '';

var create = function ( args ) {
  args = args.split(' ');
  var num = args.shift();
  var content = args.join(' ').trim();
  return '{input {@ id="' 
  + num + '" class="sectionedit" type="submit" value="edit" '
  + 'style="float:left; margin-left:-45px;"'
  + 'onclick="SECTIONEDIT.section_open(this.id)"}}'
  + '{div {@ style="border:1px dashed #ccc;"}' + content + '}';
};
var section_open = function ( id ) {
  code = getId('page_textarea').value;
  oldval =  LAMBDATALK.catch_sexpression( 'editable ' + id, code );
  content = getId(id).nextSibling.innerHTML;
  getId(id).nextSibling.innerHTML =
    '<div style="opacity:0.5;">' + content + '</div>'
    + '<textarea id="temp_' + id 
    + '" style="width:100%; height:200px;">' + oldval + '</textarea>'
    + '<input type="submit" value="save" onclick="SECTIONEDIT.section_save(' + id + ')" />'
    + '<input type="submit" value="cancel" onclick="SECTIONEDIT.section_cancel(' + id + ')" />';
  button_edit_disable( true );
};
var section_save = function ( id ) {
  var newval = getId('temp_'+id).value;
  getId('page_textarea').value = code.replace( oldval, newval );
  getId('save_button').click(); 
};
var section_cancel = function ( id ) {
  getId(id).nextSibling.innerHTML = content;
  button_edit_disable( false );
};
var button_edit_disable = function ( flag ) {
  var butt = document.getElementsByClassName( 'sectionedit' );
  for (var i=0; i < butt.length; i++)
    butt[i].disabled = flag;
};
return { 
  create:create, 
  section_open:section_open, 
  section_save:section_save,
  section_cancel:section_cancel 
}
}()); // end of SECTIONEDIT modulus

//---------------------------------------------------------------------------------//
var SHOW = (function() {
  //var show_number = 0;
  var build = function ( pict, txt, h, w ) {
    var img_id = 'show_' + Math.floor(Math.random()*1000000);
    //var img_id = 'show_' + show_number++;
    var content = '<img  class="showbox" id="' + img_id  
      + '" src="' + pict + '" title="' + txt + '" height="' + h
      + '" onclick="SHOW.display_open(\'' + img_id + '\', ' + w + ')" />';
    return content;
  };
  var display_open = function ( img_id, w ) {
    var pict = getId( img_id );
    var content = '<div id="grey_background"></div>'
      + '<div id="showbox_display" style="width:' 
      + w + 'px; margin-left:-' + (w/2) + 'px;">'
      + '<img id="light_image" src="' + pict.src + '" width="' + w 
      + '" title="Click to close." onclick="SHOW.display_close()" />'
      + '<div id="light_text">' + pict.title + '</div>'
      + '</div>';
    var div = document.createElement('div');
    div.id = 'show_display';
    div.innerHTML = content;
    document.body.appendChild( div );
  };
  var display_close = function ( ) {
    document.body.removeChild( getId( 'show_display' ) );
  };
  return {	// public functions 
    build:build,	// show.build( "image","text", h, w );
    display_open:display_open,
    display_close:display_close
  };
})();	// end SHOW

//---------------------------------------------------------------------------------//
var LIGHTBOX = (function() {
  var HEIGHT = '';
  var build = function (picts, thumbs_prev_dim, preview_height, 
	                      thumbs_disp_dim, display_width) {
    LIGHTBOX.HEIGHT = preview_height;
    var alea = Math.floor(Math.random()*1000000);
    var light_name = 'light_' + alea;
    var light_image_preview = 'light_image_preview' + alea;
    var thumbs = '';
    var n = picts.length;
    for (var i=0; i<n; i++) {
	  	var img_id = light_name + i; 
	  	thumbs 	+= '<img class="light_content" id="' + img_id 
	  	+ '" src="' + picts[i][0] + '" title="' + picts[i][1]
	  	+ '" onmouseover="LIGHTBOX.flyOnPreview(this, \''+ light_image_preview 
	  	+'\')" height="' + thumbs_prev_dim + '" width="' + thumbs_prev_dim
		+ '" onclick="LIGHTBOX.display_open(\'' + light_name + '\', ' + i + ',' 
		+ n + ', ' + thumbs_disp_dim + ', ' + display_width + ')" />';
    }
    var content = '<img id="' + light_image_preview 
	  	+ '" src="' + picts[0][0] + '" title="' + picts[0][1]
	  	+ '" height="' + preview_height + '" style="padding-top:2px;" />';	
		return '<span class="lightbox">' + thumbs + '<br />' + content + '</span>';
  };

  var display_open = function (light_name, index, n, thumbs_dim, display_width) {
	var img_id = light_name + index;
	var thumbs = '';
	for (var i=0; i<n; i++) {
	  var name = light_name + i;
	  var pict = getId( name ).src;
	  var txt  = getId( name ).title;
	  thumbs += '<img class="light_content" src="' + pict 
        + '" title="' + txt + '" onmouseover="LIGHTBOX.flyOnDisplay(this)" height="' 
	 	+ thumbs_dim + '" width="' + thumbs_dim + '" />';
	 }
	 var pict = getId(img_id);
	 var content = '<div id="grey_background"></div>'
	  	+ '<div id="lightbox_display" style="text-align:center; width:' 
	  	+ display_width + 'px; margin-left:-' + (display_width/2 + 10) 
        + 'px; background:#444;">'
	  	+ '<div id="lightbox_thumbs">' + thumbs + '</div>'
	  	+ '<img id="light_image" src="' + pict.src + '" height="' + LIGHTBOX.HEIGHT 
	  	+ '" title="Click to close." onclick="LIGHTBOX.display_close()" />'
	  	+ '<div id="light_text" style="color:white;">' + pict.title + '</div>'
	  	+ '</div>';
	  var div = document.createElement('div');
	  div.id = 'light_display';
	  div.innerHTML = content;
	  document.body.appendChild( div );
  };
  var display_close = function ( ) {
    document.body.removeChild( getId( 'light_display' ) );
  };
  var flyOnPreview = function  ( obj, light_image_preview ) {
    getId( light_image_preview ).src = obj.src;
  };
  var flyOnDisplay = function ( obj ) {
    getId( 'light_image' ).src = obj.src;
    getId( 'light_text' ).innerHTML = obj.title;
  };
	
  return {	// public functions 
    build:build,	// lightbox.build( [ ["image","text"] ... ], th,h,th,w );
    display_open:display_open,
    display_close:display_close,
    flyOnPreview:flyOnPreview,
    flyOnDisplay:flyOnDisplay
  };
})();	// end LIGHTBOX

var MINIBOX = (function() {

  var url=[], txt=[];

  var build = function(a) {
    var args = a.match( /@@[\s\S]*?@@/ );
    var body = a.replace( args[0], '' );
    args = args[0].replace( /@@/g, '' );
    var h = args.match( /height="([\d]+)"/ );
    var w = args.match( /width="([\d]+)"/ );
    var t = args.match( /thumb="([\d]+)"/ );
    h = (h !== null)? h[1] : 400; 
    w = (w !== null)? w[1] : 600;
    t = (t !== null)? t[1] : 30;
    var thumbs = ''; 
    var rex = /\(([^\s()]*)(?:[\s]*)([^()]*)\)/g;
    var picts = body.match(rex);
    for (var i=0; i< picts.length; i++) {
      var p = picts[i], index = p.indexOf( ' ' );
      url[i] = p.substring(1, index);
      txt[i] = p.substring(index, p.length-1);
      thumbs += '{img {@ height="'+t+'" src="' + url[i] 
             + '" title="' + txt[i] 
             + '" onmouseover="MINIBOX.flyover('+i+')"'
             + '  onclick="MINIBOX.doclick(true)"}}'; 
    }
    var pict = '{img {@ id="pict" height="'+h+'" src="'+url[0]+'" title="Click me to close."}}';
    var caption = '{div {@ id="text"}' + txt[0] + '}';
    var display = '{div {@ id="display_frame" style="display: none; position: relative; top: 0px; left: 50%; text-align: center; padding: 25px; background : #222; color: white; box-shadow: 0 0 500px black; border: 1px solid white; width: ' + w + 'px; margin-left: ' + (-w/2) + 'px;" onclick="MINIBOX.doclick(false)"}' + pict + caption + '}';
    return thumbs + display
  };

  var doclick = function(flag) {
    document.getElementById('display_frame').style.display = 
   (flag)?  'block' : 'none';
  };

  var flyover = function(i) {
    document.getElementById('pict').src = url[i];
    document.getElementById('text').innerHTML = txt[i];
  };

  return { build:build, doclick:doclick, flyover:flyover }
})(); // end of MINIBOX

// START TESTING OTHER STRUCTURES

/*
// GONS GAR GDR (2015/05/15)
var g_arr = [];
var g_i = 0;

dict['gons'] = function () {
  g_i++;
  g_arr[g_i] = supertrim(arguments[0]).split(' ');
  return g_i;
};

dict['gar'] = function () {
  return g_arr[arguments[0]][0];
};

dict['gdr'] = function () {
  return g_arr[arguments[0]][1];
};

dict['gons_disp'] = function () {
  var n = arguments[0];
  var r_gons_disp = function (n) {
    if ( typeof g_arr[n] === 'array' )
      return '(' + r_gons_disp( g_arr[n][0] ) + ' ' 
                 + r_gons_disp( g_arr[n][1] ) + ')';
    else
      return n;
  };
  return r_gons_disp( n );
};

dict['gonses'] = function () {
  g_i = 0;
  var i = 1, gonses = 'gonses: ';
  while (g_arr[i] != undefined) {
    gonses += ' | ' + i + ': ' + g_arr[i];
    i++;
  }
  return (i-1) + ' ' + gonses;
};

//---------------------------------------------------------------------------------//
// KONS KAR KDR (2015/05/14)

dict['kons'] = function () {
  var args = supertrim(arguments[0]).split(' ');
  return JSON.stringify( args );
};
dict['kar'] = function () {
  var z = JSON.parse(arguments[0]);
  return ( Array.isArray(z) )? z[0] : z;
};
dict['kdr'] = function () {
  var z = JSON.parse(arguments[0]);
  return ( Array.isArray(z) )? z[1] : z;
};
dict['kons?'] = function () {
  var z = arguments[0];
  try {
    z = JSON.parse(z);
    return ( Array.isArray(z) && (z.length == 2) );
  } catch (e) {
    return false;
  }
};
dict['kons_disp'] = function () { 
  var args = supertrim(arguments[0]);
  if (!dict['kons?'](args))
    return args;
  args = '['+JSON.parse(args)+']';
  return args.replace(/"|\\/g,'')
             .replace(/\[/g,'(')
             .replace(/\]/g,')')
             .replace(/,/g,' ');
};

dict['klist_new'] = function() {
  var args = supertrim(arguments[0]).split(' ');
  var k = [args[args.length-1],'nil'];
  for (var i=args.length-2; i>=0; i--) {
    k = [args[i],JSON.stringify( k )];
  }
  return JSON.stringify( k );
};

*/
