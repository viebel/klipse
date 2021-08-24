// from https://github.com/jweinst1/Oblivion/blob/master/lib/Oblivion.js on March 20, 2017
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Oblivion = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/**
 * Created by Josh on 3/2/17.
 * File to keep track of Iterator objct
 */
var Iter;
(function (Iter) {
    var Iterator = (function () {
        function Iterator(lst) {
            this.items = lst;
            this.index = 0;
            this.done = false;
        }
        Iterator.prototype.next = function () {
            if (this.index < this.items.length) {
                var item = this.items[this.index];
                this.index++;
                if (this.index === this.items.length)
                    this.done = true;
                return item;
            }
        };
        return Iterator;
    }());
    Iter.Iterator = Iterator;
    Iter.makeIter = function (obj) {
        if (typeof obj !== 'object')
            throw new Error('IterError: Argument does not conform to Iter Format');
        return new Iterator(obj.arrayValue());
    };
})(Iter = exports.Iter || (exports.Iter = {}));

},{}],2:[function(require,module,exports){
"use strict";
var Errors_1 = require("../Errors");
/**
 * Created by Josh on 2/17/17.
 * Implements the primitive List Type in Oblivion
 */
var Lists;
(function (Lists) {
    var List = (function () {
        function List(lst) {
            if (lst === void 0) { lst = []; }
            this.items = lst;
        }
        //used for iterators
        List.prototype.arrayValue = function () {
            return this.items;
        };
        List.prototype.strFormat = function () {
            var str = "[";
            for (var i = 0; i < this.items.length - 1; i++) {
                if (this.items[i].constructor.name === 'List')
                    str += this.items[i].strFormat() + ",";
                else if (typeof this.items[i] === 'function')
                    str += "{func},";
                else
                    str += this.items[i] + ",";
            }
            if (this.items[this.items.length - 1].constructor.name === 'List')
                str += this.items[this.items.length - 1].strFormat();
            else if (typeof this.items[this.items.length - 1] === 'function')
                str += "{func}";
            else
                str += this.items[this.items.length - 1];
            return str + "]";
        };
        List.prototype.innerValue = function () {
            return this.items;
        };
        List.prototype.getItem = function (index) {
            if (typeof index !== 'number')
                throw new Errors_1.Errors.TypeError('number', typeof index);
            if (index < 0 || index >= this.items.length)
                throw new Errors_1.Errors.IndexError(index + "");
            if (this.items[index].constructor.name === 'List')
                return this.items[index].copy();
            return this.items[index];
        };
        List.prototype.setItem = function (index, value) {
            if (typeof index !== 'number')
                throw new Errors_1.Errors.TypeError('number', typeof index);
            if (index < 0 || index >= this.items.length)
                throw new Errors_1.Errors.IndexError(index + "");
            this.items[index] = value;
            return this.copy();
        };
        List.prototype.hasItem = function (item) {
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var val = _a[_i];
                if (JSON.stringify(val) === JSON.stringify(item))
                    return true;
            }
            return false;
        };
        List.prototype.size = function () {
            return this.items.length;
        };
        List.prototype.append = function (item) {
            this.items.push(item);
        };
        List.prototype.appendLeft = function (item) {
            this.items.unshift(item);
        };
        List.prototype.pop = function () {
            if (this.items.length === 0)
                throw new Error("Pop Error: Pop method requires list not have length 0");
            var size = this.items.length - 1;
            if (this.items[size].constructor.name === 'List')
                return this.items[size].copy();
            return this.items[size];
        };
        //wont do anything if item not in list
        List.prototype.remove = function (item) {
            for (var i = 0; i < this.items.length; i++) {
                if (item === this.items[i]) {
                    this.items.splice(i, 1);
                }
            }
        };
        List.prototype.insert = function (index, item) {
            if (typeof index !== 'number')
                throw new Errors_1.Errors.TypeError('number', typeof index);
            if (index < 0 || index >= this.items.length)
                throw new Errors_1.Errors.IndexError(index + "");
            this.items.splice(index, 0, item);
            return this.copy();
        };
        List.prototype.extend = function (other) {
            if (other.constructor.name === 'List') {
                for (var i = 0; i < other.size(); i++)
                    this.items.push(other.items[i]);
                return this.copy();
            }
            else {
                this.items.push(other);
                return this.copy();
            }
        };
        List.prototype.find = function (item) {
            var result = this.items.indexOf(item);
            return result !== -1 ? result : false;
        };
        //function that implements copying
        //also supports slicing
        List.prototype.copy = function (start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = this.items.length; }
            //may need error to prevent faulty copying
            var newArr = [];
            for (var i = start; i < end; i++) {
                if (this.items[i].constructor.name === 'List') {
                    newArr.push(this.items[i].copy());
                }
                else
                    newArr.push(this.items[i]);
            }
            return new List(newArr);
        };
        return List;
    }());
    Lists.List = List;
})(Lists = exports.Lists || (exports.Lists = {}));

},{"../Errors":6}],3:[function(require,module,exports){
"use strict";
var Errors_1 = require("../Errors");
/**
 * Created by Josh on 2/27/17.
 * File that stores the Maps namespace
 */
var Maps;
(function (Maps) {
    var OblMap = (function () {
        function OblMap(dict) {
            if (dict === void 0) { dict = {}; }
            this.pairs = dict;
        }
        //used for iterators
        OblMap.prototype.arrayValue = function () {
            var arr = [];
            for (var key in this.pairs) {
                arr.push(key);
            }
            return arr;
        };
        OblMap.prototype.getItem = function (index) {
            if (typeof index !== 'object') {
                if (index in this.pairs)
                    return this.pairs[index];
                else
                    throw new Errors_1.Errors.IndexError(index);
            }
            else {
                //uses string format for object wrapped valus.
                var str = index.strFormat();
                if (str in this.pairs)
                    return this.pairs[str];
                else
                    throw new Errors_1.Errors.IndexError(str);
            }
        };
        OblMap.prototype.setItem = function (index, value) {
            if (typeof index !== 'object')
                this.pairs[index] = value;
            else
                this.pairs[index.strFormat()] = value;
        };
        OblMap.prototype.hasItem = function (item) {
            if (typeof item !== 'object')
                return item in this.pairs;
            else
                return item.strFormat() in this.pairs;
        };
        OblMap.prototype.size = function () {
            var total = 0;
            for (var key in this.pairs)
                total++;
            return total;
        };
        OblMap.prototype.strFormat = function () {
            return JSON.stringify(this.pairs);
        };
        OblMap.prototype.innerValue = function () {
            return this.pairs;
        };
        return OblMap;
    }());
    Maps.OblMap = OblMap;
})(Maps = exports.Maps || (exports.Maps = {}));

},{"../Errors":6}],4:[function(require,module,exports){
"use strict";
var IO_1 = require("../IO");
var Errors_1 = require("../Errors");
var List_1 = require("./List");
var Maps_1 = require("./Maps");
var Iter_1 = require("./Iter");
/**
 * Created by Josh on 2/13/17.
 */
//AST functions that implement standard library
var STD;
(function (STD) {
    //produces a callable Oblivion function
    STD.func = function (env, args) {
        var paramList = env.callLib(env, args[0].node, args[0].args);
        var funcBody = args[1].args;
        return function (env, args) {
            //functionally scoped environment
            var funcEnv = env.createChild();
            if (args.length !== paramList.length)
                throw "Argument Error, expected " + paramList.length + " args but got " + args.length;
            for (var i = 0; i < paramList.length; i++) {
                //binds called arguments to new Env
                funcEnv.set(paramList[i], funcEnv.callLib(funcEnv, args[i].node, args[i].args));
            }
            //calls all statements in body
            for (var j = 0; j < funcBody.length; j++) {
                funcEnv.callLib(funcEnv, funcBody[j].node, funcBody[j].args);
            }
            return funcEnv.getReturnValue();
        };
    };
    //creates a generator object
    STD.generator = function (env, args) {
        var defBody = args[0].args;
        var genBody = args[1].args;
        var genEnv = env.createChild();
        //runs the def body only once, to set up generator
        for (var i = 0; i < defBody.length; i++) {
            genEnv.callLib(genEnv, defBody[i].node, defBody[i].args);
        }
        return function (env, args) {
            if (args.length !== 0)
                throw new Errors_1.Errors.ArgumentError(args.length, 0);
            //calls all statements in the generator body
            for (var j = 0; j < genBody.length; j++) {
                genEnv.callLib(genEnv, genBody[j].node, genBody[j].args);
            }
            //This is preserved between generator calls, but functions the same as a return
            return genEnv.getReturnValue();
        };
    };
    //handles a process, no parameter bodies of statemnts evaluated in child scope
    STD.process = function (env, args) {
        var procBody = args[0].args;
        return function (env, args) {
            var procEnv = env.createChild();
            if (args.length !== 0)
                throw new Errors_1.Errors.ArgumentError(args.length, 0);
            //calls all statements in the procBody
            for (var j = 0; j < procBody.length; j++) {
                procEnv.callLib(procEnv, procBody[j].node, procBody[j].args);
            }
            //returns localized return value
            return procEnv.getReturnValue();
        };
    };
    //handles variable assignment
    STD.assign = function (env, args) {
        env.set(env.callLib(env, args[0].node, args[0].args), env.callLib(env, args[1].node, args[1].args));
    };
    //handles Word rule, which retrieves variables
    STD.wordVar = function (env, args) {
        var varr = env.safeGet(args[0]);
        if (varr !== undefined)
            return varr;
        else
            return args[0];
    };
    //facilitates return function
    STD._return = function (env, args) {
        if (args.length === 1)
            env.setReturnValue(env.callLib(env, args[0].node, args[0].args));
    };
    //handles parameters for a function
    STD.params = function (env, args) {
        for (var i = 0; i < args.length; i++) {
            args[i] = env.callLib(env, args[i].node, args[i].args);
        }
        return args;
    };
    //processes name nodes
    STD.name = function (env, args) {
        return args[0];
    };
    STD.print = function (env, args) {
        for (var i = 0; i < args.length; i++) {
            var printed = env.callLib(env, args[i].node, args[i].args);
            if (typeof printed === 'object')
                IO_1.IO.pushOut(printed.strFormat());
            else if (typeof printed === 'function')
                IO_1.IO.pushOut("{func}");
            else
                IO_1.IO.pushOut(printed);
        }
    };
    //need to be changed to operator
    STD.add = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Error("+ only supports number type.");
        return left + right;
    };
    STD.sub = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Error("- only supports number type.");
        return left - right;
    };
    STD.mul = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Error("* only supports number type.");
        return left * right;
    };
    STD.div = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Error("/ only supports number type.");
        return left / right;
    };
    STD.rem = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Error("% only supports number type.");
        return left % right;
    };
    STD.c_number = function (env, args) {
        return Number(args[0]);
    };
    //handles bool nodes
    STD.c_bool = function (env, args) {
        return args[0];
    };
    STD.c_null = function (env, args) {
        return null;
    };
    //eq logical op functions -------------
    STD.eq = function (env, args) {
        return env.callLib(env, args[0].node, args[0].args) === env.callLib(env, args[1].node, args[1].args);
    };
    STD.ne = function (env, args) {
        return env.callLib(env, args[0].node, args[0].args) !== env.callLib(env, args[1].node, args[1].args);
    };
    //only numbers can be compared with <, <=, >=, and >
    STD.lt = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Errors_1.Errors.TypeError('number', typeof left + " and " + typeof right);
        return left < right;
    };
    STD.gt = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Errors_1.Errors.TypeError('number', typeof left + " and " + typeof right);
        return left > right;
    };
    STD.le = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Errors_1.Errors.TypeError('number', typeof left + " and " + typeof right);
        return left <= right;
    };
    STD.ge = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Errors_1.Errors.TypeError('number', typeof left + " and " + typeof right);
        return left >= right;
    };
    //comparison that works on lists and maps
    STD.same = function (env, args) {
        return JSON.stringify(env.callLib(env, args[0].node, args[0].args)) === JSON.stringify(env.callLib(env, args[1].node, args[1].args));
    };
    //logical or operator
    STD._or = function (env, args) {
        return Boolean(env.callLib(env, args[0].node, args[0].args) || env.callLib(env, args[1].node, args[1].args));
    };
    //logical and operator
    STD._and = function (env, args) {
        return Boolean(env.callLib(env, args[0].node, args[0].args) && env.callLib(env, args[1].node, args[1].args));
    };
    /*Conditional StdLib funcs*/
    STD._if = function (env, args) {
        if (args.length < 2)
            throw new Errors_1.Errors.ArgumentError(args.length, 2);
        var cond = env.callLib(env, args[0].node, args[0].args);
        var trueBody = args[1].args;
        var falseBody = args[2].args;
        //if condition is true, executes statements in the true body
        if (cond) {
            for (var i = 0; i < trueBody.length; i++) {
                var statement = env.callLib(env, trueBody[i].node, trueBody[i].args);
                if (typeof statement === 'function')
                    statement(env, []);
            }
        }
        else {
            for (var j = 0; j < falseBody.length; j++) {
                var state = env.callLib(env, falseBody[j].node, falseBody[j].args);
                if (typeof state === 'function')
                    state(env, []);
            }
        }
    };
    STD.loop = function (env, args) {
        //must have at least a condition and statement/argument
        var loopBody = args[1].args;
        while (env.callLib(env, args[0].node, args[0].args)) {
            for (var i = 0; i < loopBody.length; i++) {
                //treats function types genrated from AST as callable blocks
                var state = env.callLib(env, loopBody[i].node, loopBody[i].args);
                if (typeof state === 'function')
                    state(env, []);
            }
        }
    };
    //repeat function useful for drawing and looping
    //only accepts 2 arguments
    STD.repeat = function (env, args) {
        if (args.length !== 2)
            throw new Error("ArgumentError: Expected 2 arguments but got " + args.length);
        var times = env.callLib(env, args[0].node, args[0].args);
        var proc = env.callLib(env, args[1].node, args[1].args);
        if (typeof proc !== 'function' || typeof times !== 'number')
            throw new Error("repeat() must take one number and one process or function.");
        if (times < 1)
            throw new Error("Cannot call repeat less than 1 times, in valid argument: " + times);
        while (times--) {
            proc(env, []);
        }
    };
    STD.attribute = function (env, args) {
        if (args.length !== 2)
            throw new Errors_1.Errors.ArgumentError(args.length, 2);
        var obj = env.get(env.callLib(env, args[0].node, args[0].args));
        var index = env.callLib(env, args[1].node, args[1].args);
        if (typeof obj === 'object' && obj !== null) {
            return obj.getItem(index); //collection interface
        }
        else
            throw new Errors_1.Errors.TypeError('Collection', typeof obj);
    };
    //handles any forms of a.b()
    STD.methodCall = function (env, args) {
        var method = env.callLib(env, args[0].node, args[0].args);
        if (typeof method !== 'function')
            throw new Errors_1.Errors.TypeError('callable', typeof args[0]);
        return method(env, args.slice(1));
    };
    //function for => operator
    STD.attrAssign = function (env, args) {
        var obj = env.get(args[0].args[0].args[0]);
        if (obj.constructor.name !== 'List')
            throw new Error('=> Operator can only be used on lists');
        var key = env.callLib(env, args[0].args[1].node, args[0].args[1].args);
        return obj.setItem(key, env.callLib(env, args[1].node, args[1].args));
    };
    //creates new list object
    STD.c_list = function (env, args) {
        var newlst = [];
        for (var i = 0; i < args.length; i++) {
            newlst.push(env.callLib(env, args[i].node, args[i].args));
        }
        return new List_1.Lists.List(newlst);
    };
    //creates new map object
    STD.c_map = function (env, args) {
        var map = new Maps_1.Maps.OblMap();
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var pair = args_1[_i];
            map.setItem(env.callLib(env, pair.args[0].node, pair.args[0].args), env.callLib(env, pair.args[1].node, pair.args[1].args));
        }
        return map;
    };
    //produces lists in a range
    STD.range = function (env, args) {
        switch (args.length) {
            case 0:
                return new List_1.Lists.List();
            case 1:
                var lst = [];
                var limit = env.callLib(env, args[0].node, args[0].args);
                if (typeof limit !== 'number')
                    throw new Error("TypeError: Got type " + typeof limit + " but needs number.");
                for (var i = 0; i < limit; i++)
                    lst.push(i);
                return new List_1.Lists.List(lst);
            case 2:
                var lst = [];
                var start = env.callLib(env, args[0].node, args[0].args);
                var end = env.callLib(env, args[1].node, args[1].args);
                if (typeof start !== 'number' || typeof end !== 'number')
                    throw new Error("TypeError: Needs type number.");
                for (var i = start; i < end; i++)
                    lst.push(i);
                return new List_1.Lists.List(lst);
        }
    };
    STD._for = function (env, args) {
        var varName = env.callLib(env, args[0].node, args[0].args);
        var iterable = Iter_1.Iter.makeIter(env.callLib(env, args[1].node, args[1].args));
        var forBody = args[2].args;
        //calls for body continously for each in the iterator
        while (!iterable.done) {
            env.set(varName, iterable.next());
            for (var i = 0; i < forBody.length; i++)
                env.callLib(env, forBody[i].node, forBody[i].args);
        }
    };
    /*Generic get and set functions*/
    /*Generic Collection functions*/
    STD.len = function (env, args) {
        var obj = env.callLib(env, args[0].node, args[0].args);
        switch (typeof obj) {
            case 'number': return obj;
            case 'object': return obj.size();
            default: return 1;
        }
    };
    STD._in = function (env, args) {
        if (args.length !== 2)
            throw new Errors_1.Errors.ArgumentError(args.length, 2);
        var obj = env.callLib(env, args[0].node, args[0].args);
        if (typeof obj !== 'object' || obj === null)
            throw new Error('TypeError: Argument not of collection type');
        return obj.hasItem(env.callLib(env, args[1].node, args[1].args));
    };
    STD.pop = function (env, args) {
        if (args.length !== 1)
            throw new Errors_1.Errors.ArgumentError(args.length, 1);
        var obj = env.callLib(env, args[0].node, args[0].args);
        if (obj.constructor.name !== 'List')
            throw new Error("Cannot call pop on type " + typeof obj);
        return obj.pop();
    };
    STD.insert = function (env, args) {
        if (args.length < 3)
            throw new Errors_1.Errors.ArgumentError(args.length, 3);
        var obj = env.callLib(env, args[0].node, args[0].args);
        if (obj.constructor.name !== 'List')
            throw new Error('TypeError: Argument not of List type');
        return obj.insert(env.callLib(env, args[1].node, args[1].args), env.callLib(env, args[2].node, args[2].args));
    };
    //operator implementation of &
    STD.extend = function (env, args) {
        var obj = env.callLib(env, args[0].node, args[0].args);
        if (obj.constructor.name !== 'List')
            throw new Error('TypeError: Argument not of collection type');
        return obj.extend(env.callLib(env, args[1].node, args[1].args));
    };
    STD.find = function (env, args) {
        if (args.length !== 2)
            throw new Errors_1.Errors.ArgumentError(args.length, 2);
        var obj = env.callLib(env, args[0].node, args[0].args);
        if (obj.constructor.name !== 'List')
            throw new Error('TypeError: Argument not of List type');
        return obj.find(env.callLib(env, args[1].node, args[1].args));
    };
    STD.slice = function (env, args) {
        if (args.length < 2 || args.length > 3)
            throw new Error("slice() takes either 2 or 3 arguments only");
        var lst = env.callLib(env, args[0].node, args[0].args);
        switch (args.length) {
            case 2:
                var start = env.callLib(env, args[1].node, args[1].args);
                if (typeof start !== 'number')
                    throw new Error("slice() indexes must be a number");
                return lst.copy(start);
            case 3:
                var start = env.callLib(env, args[1].node, args[1].args);
                var end = env.callLib(env, args[2].node, args[2].args);
                if (typeof start !== 'number' || typeof end !== 'number')
                    throw new Error("slice() indexes must be a number");
                return lst.copy(start, end);
        }
    };
    //can call a function or process arbitrarily
    STD.call = function (env, args) {
        if (args.length === 0)
            throw new Error("call() must take 1 or more arguments");
        var fnc = env.callLib(env, args[0].node, args[0].args);
        if (typeof fnc !== 'function')
            throw new Error("Cannot call non-function type");
        return fnc(env, args.slice(1));
    };
    //random number operator
    STD.rand = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (typeof left !== 'number' || typeof right !== 'number')
            throw new Errors_1.Errors.TypeError('number', typeof left + " and " + typeof right);
        return Math.floor((Math.random() * right) + left);
    };
})(STD = exports.STD || (exports.STD = {}));

},{"../Errors":6,"../IO":8,"./Iter":1,"./List":2,"./Maps":3}],5:[function(require,module,exports){
"use strict";
var Lib_1 = require("./Lib");
/**
 * Created by Josh on 2/13/17.
 * File that implements the environment class
 */
var Environment;
(function (Environment) {
    var Env = (function () {
        function Env(parent) {
            if (parent === void 0) { parent = null; }
            this.variables = {};
            this.parent = parent;
            this.lib = Lib_1.Lib.defs;
            this.returnValue = void 0;
        }
        Env.prototype.get = function (key) {
            if (this.contains(key))
                return this.variables[key];
            else if (this.parent) {
                //Checks if variable defined in parent environment
                return this.parent.get(key);
            }
            else
                throw "Key Error, variable " + key + " not defined.";
        };
        //safe version of get which does not throw and returns default value
        //used for recursive calls
        Env.prototype.safeGet = function (key) {
            if (this.contains(key))
                return this.variables[key];
            else if (this.parent) {
                //Checks if variable defined in parent environment
                return this.parent.get(key);
            }
            else
                return undefined;
        };
        //unnests from lib
        Env.prototype.callLib = function (env, ASTkey, args) {
            if (ASTkey in this.lib)
                return this.lib[ASTkey](env, args);
            else
                return this.get(ASTkey)(env, args);
        };
        ;
        Env.prototype.set = function (key, val) {
            if (val.constructor.name === 'List')
                this.variables[key] = val.copy();
            else
                this.variables[key] = val;
        };
        Env.prototype.contains = function (key) {
            return key in this.variables;
        };
        Env.prototype.del = function (key) {
            delete this.variables[key];
        };
        //creates child Env
        Env.prototype.createChild = function () {
            return new Env(this);
        };
        Env.prototype.setReturnValue = function (value) {
            this.returnValue = value;
        };
        Env.prototype.getReturnValue = function () {
            return this.returnValue;
        };
        return Env;
    }());
    Environment.Env = Env;
})(Environment = exports.Environment || (exports.Environment = {}));

},{"./Lib":9}],6:[function(require,module,exports){
/**
 * Created by Josh on 2/17/17.
 * File which implements Errors
 * All Errors follow an interface
 */
"use strict";
var Errors;
(function (Errors) {
    var NameError = (function () {
        function NameError(name) {
            this.name = name;
        }
        NameError.prototype.type = function () {
            return "NameError";
        };
        NameError.prototype.message = function () {
            return "Name " + this.name + " not defined";
        };
        return NameError;
    }());
    Errors.NameError = NameError;
    var IndexError = (function () {
        function IndexError(index) {
            this.index = index;
        }
        IndexError.prototype.type = function () {
            return "IndexError";
        };
        IndexError.prototype.message = function () {
            return "Index " + this.index + " not defined on list.";
        };
        return IndexError;
    }());
    Errors.IndexError = IndexError;
    var ArgumentError = (function () {
        function ArgumentError(got, expected) {
            this.got = got;
            this.expected = expected;
        }
        ArgumentError.prototype.type = function () {
            return "ArgumentError";
        };
        ArgumentError.prototype.message = function () {
            return "Got " + this.got + " arguments but expected: " + this.expected;
        };
        return ArgumentError;
    }());
    Errors.ArgumentError = ArgumentError;
    var CssAttributeError = (function () {
        function CssAttributeError(classname, key) {
            this.name = classname;
            this.key = key;
        }
        CssAttributeError.prototype.type = function () {
            return "CssAttributeError";
        };
        CssAttributeError.prototype.message = function () {
            return "Attribute " + this.key + " not defined on style " + this.name;
        };
        return CssAttributeError;
    }());
    Errors.CssAttributeError = CssAttributeError;
    //possibly not needed due to writing SVG/CSS components
    var CssClassError = (function () {
        function CssClassError(name) {
            this.name = name;
        }
        ;
        CssClassError.prototype.type = function () {
            return "CssClassError";
        };
        CssClassError.prototype.message = function () {
            return "CSS Class " + this.name + " is not defined.";
        };
        return CssClassError;
    }());
    Errors.CssClassError = CssClassError;
    var TypeError = (function () {
        function TypeError(required, got) {
            this.required = required;
            this.got = got;
        }
        ;
        TypeError.prototype.type = function () {
            return "TypeError";
        };
        TypeError.prototype.message = function () {
            return "Call requires type " + this.required + " but got " + this.got;
        };
        return TypeError;
    }());
    Errors.TypeError = TypeError;
})(Errors = exports.Errors || (exports.Errors = {}));

},{}],7:[function(require,module,exports){
"use strict";
var Env_1 = require("./Env");
/**
 * Created by Josh on 2/15/17.
 * File that handles the main generator function
 */
var Gen;
(function (Gen) {
    //main processing function that generates SVG and processes statements
    Gen.gen = function (AST) {
        var env = new Env_1.Environment.Env();
        if (AST["node"] === '?program') {
            for (var i = 0; i < AST['args'].length; i++) {
                env.callLib(env, AST['args'][i].node, AST['args'][i].args);
            }
        }
        //needs SVG output infrastructure
    };
})(Gen = exports.Gen || (exports.Gen = {}));

},{"./Env":5}],8:[function(require,module,exports){
"use strict";
var SVGSize_1 = require("./svg/SVGSize");
/**
 * Created by Josh on 2/18/17.
 * Small file that handles StdOut
 */
//statically encapsulated IO
var IO;
(function (IO) {
    var Out = "";
    var In = "";
    var svg = "";
    var css = "";
    var xmldat = 'version="1.1" xmlns="http://www.w3.org/2000/svg"';
    var size = SVGSize_1.SVGSize.init();
    /*SVG/CSS methods*/
    IO.pushSVG = function (input) {
        svg += input + "\n";
    };
    IO.pushCSS = function (input) {
        css += input + "\n";
    };
    //returns format string of svg + css
    IO.getSVGDoc = function (input) {
        return "<svg " + size.strFormat() + " " + xmldat + ">\n<style>" + css + "</style>\n" + svg + "</svg>";
    };
    IO.getflushSVGDoc = function (input) {
        var str = "<svg " + size.strFormat() + " " + xmldat + ">\n<style>" + css + "</style>\n" + svg + "</svg>";
        IO.flushSVG();
        IO.flushCSS();
        return str;
    };
    IO.flushSVG = function () {
        svg = "";
    };
    IO.flushCSS = function () {
        css = "";
    };
    /*StdIn-OUT methods*/
    IO.pushOut = function (input) {
        Out += input + '\n';
    };
    IO.pushIn = function (input) {
        In += input + '\n';
    };
    IO.getOut = function () {
        return Out;
    };
    IO.getIn = function () {
        return In;
    };
    IO.flushOut = function () {
        Out = "";
    };
    IO.flushIn = function () {
        In = "";
    };
    //gets and flushes stdout
    IO.getFlushOut = function () {
        var result = Out;
        Out = "";
        return result;
    };
})(IO = exports.IO || (exports.IO = {}));

},{"./svg/SVGSize":16}],9:[function(require,module,exports){
"use strict";
var STD_1 = require("./Comp/STD");
var Color_1 = require("./svg/Color");
var Point_1 = require("./svg/Point");
var draw_1 = require("./svg/draw");
/**
 * Created by Josh on 2/13/17.
 * File that holds the standard library
 */
//processes AST nodes
var Lib;
(function (Lib) {
    //retrieves a library function
    Lib.get = function (AST) {
        if (Lib.contains(AST))
            return Lib.defs[AST["node"]];
    };
    Lib.contains = function (AST) {
        return AST["node"] in Lib.defs;
    };
    //optimized function for calling AST against the active library
    Lib.defs = {
        "?=": STD_1.STD.assign,
        "?func": STD_1.STD.func,
        "?params": STD_1.STD.params,
        "?name": STD_1.STD.name,
        "?process": STD_1.STD.process,
        "?method": STD_1.STD.methodCall,
        "?.": STD_1.STD.attribute,
        "+": STD_1.STD.add,
        "-": STD_1.STD.sub,
        "*": STD_1.STD.mul,
        "/": STD_1.STD.div,
        "%": STD_1.STD.rem,
        "==": STD_1.STD.eq,
        "~=": STD_1.STD.same,
        "!=": STD_1.STD.ne,
        "<": STD_1.STD.lt,
        ">": STD_1.STD.gt,
        "<=": STD_1.STD.le,
        ">=": STD_1.STD.ge,
        "||": STD_1.STD._or,
        "&&": STD_1.STD._and,
        "!!": STD_1.STD.rand,
        "?if": STD_1.STD._if,
        "?loop": STD_1.STD.loop,
        "print": STD_1.STD.print,
        "?number": STD_1.STD.c_number,
        "?list": STD_1.STD.c_list,
        "?bool": STD_1.STD.c_bool,
        "?null": STD_1.STD.c_null,
        "?word": STD_1.STD.wordVar,
        "?return": STD_1.STD._return,
        /*Lib functons with !*/
        "range": STD_1.STD.range,
        "repeat": STD_1.STD.repeat,
        "pop": STD_1.STD.pop,
        "len": STD_1.STD.len,
        "in": STD_1.STD._in,
        "insert": STD_1.STD.insert,
        "slice": STD_1.STD.slice,
        "&": STD_1.STD.extend,
        "=>": STD_1.STD.attrAssign,
        "find": STD_1.STD.find,
        "call": STD_1.STD.call,
        /*SVG*/
        "?point": Point_1.Points.makePoint,
        "->": draw_1.Draw.lineConnect,
        "*>": draw_1.Draw.shapeConnect,
        "?draw": draw_1.Draw.draw,
        "?color": Color_1.Colors.makeColor,
        "|=": Color_1.Colors.colorfFunc
    };
})(Lib = exports.Lib || (exports.Lib = {}));

},{"./Comp/STD":4,"./svg/Color":12,"./svg/Point":14,"./svg/draw":18}],10:[function(require,module,exports){
/**
 * Created by Josh on 2/12/17.
 * Main file for Compiler
 */
var prs = require('./parse/parser');
var gen = require('./Gen');
var io = require('./IO');

//option determines output
var Compile = function(code, option){
    if (option === void 0) { option = 1; }
    try {
        var ast = prs.parse(code);
        gen.Gen.gen(ast);
    } catch(err){
        switch(option){
            case 2:
                return [err, err];
            default:
                throw err;
        }
    }
    switch(option){
        case 0:
            return io.IO.getFlushOut();
        case 1:
            return io.IO.getflushSVGDoc();
        case 2:
            return [io.IO.getFlushOut(), io.IO.getflushSVGDoc()];
    }
};

exports.Compile = Compile;



},{"./Gen":7,"./IO":8,"./parse/parser":11}],11:[function(require,module,exports){
module.exports = /*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
    (function() {
        "use strict";

        function peg$subclass(child, parent) {
            function ctor() { this.constructor = child; }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
        }

        function peg$SyntaxError(message, expected, found, location) {
            this.message  = message;
            this.expected = expected;
            this.found    = found;
            this.location = location;
            this.name     = "SyntaxError";

            if (typeof Error.captureStackTrace === "function") {
                Error.captureStackTrace(this, peg$SyntaxError);
            }
        }

        peg$subclass(peg$SyntaxError, Error);

        peg$SyntaxError.buildMessage = function(expected, found) {
            var DESCRIBE_EXPECTATION_FNS = {
                literal: function(expectation) {
                    return "\"" + literalEscape(expectation.text) + "\"";
                },

                "class": function(expectation) {
                    var escapedParts = "",
                        i;

                    for (i = 0; i < expectation.parts.length; i++) {
                        escapedParts += expectation.parts[i] instanceof Array
                            ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                            : classEscape(expectation.parts[i]);
                    }

                    return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
                },

                any: function(expectation) {
                    return "any character";
                },

                end: function(expectation) {
                    return "end of input";
                },

                other: function(expectation) {
                    return expectation.description;
                }
            };

            function hex(ch) {
                return ch.charCodeAt(0).toString(16).toUpperCase();
            }

            function literalEscape(s) {
                return s
                    .replace(/\\/g, '\\\\')
                    .replace(/"/g,  '\\"')
                    .replace(/\0/g, '\\0')
                    .replace(/\t/g, '\\t')
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '\\r')
                    .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
                    .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
            }

            function classEscape(s) {
                return s
                    .replace(/\\/g, '\\\\')
                    .replace(/\]/g, '\\]')
                    .replace(/\^/g, '\\^')
                    .replace(/-/g,  '\\-')
                    .replace(/\0/g, '\\0')
                    .replace(/\t/g, '\\t')
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '\\r')
                    .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
                    .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
            }

            function describeExpectation(expectation) {
                return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
            }

            function describeExpected(expected) {
                var descriptions = new Array(expected.length),
                    i, j;

                for (i = 0; i < expected.length; i++) {
                    descriptions[i] = describeExpectation(expected[i]);
                }

                descriptions.sort();

                if (descriptions.length > 0) {
                    for (i = 1, j = 1; i < descriptions.length; i++) {
                        if (descriptions[i - 1] !== descriptions[i]) {
                            descriptions[j] = descriptions[i];
                            j++;
                        }
                    }
                    descriptions.length = j;
                }

                switch (descriptions.length) {
                    case 1:
                        return descriptions[0];

                    case 2:
                        return descriptions[0] + " or " + descriptions[1];

                    default:
                        return descriptions.slice(0, -1).join(", ")
                            + ", or "
                            + descriptions[descriptions.length - 1];
                }
            }

            function describeFound(found) {
                return found ? "\"" + literalEscape(found) + "\"" : "end of input";
            }

            return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
        };

        function peg$parse(input, options) {
            options = options !== void 0 ? options : {};

            var peg$FAILED = {},

                peg$startRuleFunctions = { Program: peg$parseProgram },
                peg$startRuleFunction  = peg$parseProgram,

                peg$c0 = function(c) {return {node:"?program", args:c};},
                peg$c1 = function(a) {return a;},
                peg$c2 = function(d) {return d;},
                peg$c3 = function(i) {return i;},
                peg$c4 = function(c) {return c;},
                peg$c5 = function(r) {return r;},
                peg$c6 = /^[a-zA-Z_@$]/,
                peg$c7 = peg$classExpectation([["a", "z"], ["A", "Z"], "_", "@", "$"], false, false),
                peg$c8 = "(",
                peg$c9 = peg$literalExpectation("(", false),
                peg$c10 = ")",
                peg$c11 = peg$literalExpectation(")", false),
                peg$c12 = function(node, args) {
                    return {node:node.join(""), args:args};
                },
                peg$c13 = function(method, args) {
                    return {node:"?method", args:[method].concat(args)};
                },
                peg$c14 = "def",
                peg$c15 = peg$literalExpectation("def", false),
                peg$c16 = "_",
                peg$c17 = peg$literalExpectation("_", false),
                peg$c18 = function(n, params, b) {
                    return {node:"?=", args:[n, {node:"?func", args:[params, b]}]};
                },
                peg$c19 = "return",
                peg$c20 = peg$literalExpectation("return", false),
                peg$c21 = function(a) {
                    return {node:"?return", args:[a]};
                },
                peg$c22 = "draw",
                peg$c23 = peg$literalExpectation("draw", false),
                peg$c24 = function(a) {
                    return {node:"?draw", args:[a]};
                },
                peg$c25 = "if",
                peg$c26 = peg$literalExpectation("if", false),
                peg$c27 = "else",
                peg$c28 = peg$literalExpectation("else", false),
                peg$c29 = function(c, b, d) {
                    return {node:"?if", args:[c, b, d]};
                },
                peg$c30 = "=",
                peg$c31 = peg$literalExpectation("=", false),
                peg$c32 = function(v, val) {return {node:"?=", args:[v, val]};},
                peg$c33 = "[",
                peg$c34 = peg$literalExpectation("[", false),
                peg$c35 = "]",
                peg$c36 = peg$literalExpectation("]", false),
                peg$c37 = function(args) {
                    return {node:"?list", args:args};
                },
                peg$c38 = function(a, b) {
                    return {node:"?point", args:[a, b]};
                },
                peg$c39 = ".",
                peg$c40 = peg$literalExpectation(".", false),
                peg$c41 = function(obj, attr) {return {node:"?.", args:[obj, attr]};},
                peg$c42 = function(a, inf, b) {return {node:inf, args:[a, b]};},
                peg$c43 = function(p) {return p;},
                peg$c44 = function(l) {return l;},
                peg$c45 = function(p) {return {node:"?params", args:p};},
                peg$c46 = function(s) {return {node:"?body", args:s};},
                peg$c47 = "{",
                peg$c48 = peg$literalExpectation("{", false),
                peg$c49 = "}",
                peg$c50 = peg$literalExpectation("}", false),
                peg$c51 = function(proc) {return {node:"?process", args:[proc]}},
                peg$c52 = peg$otherExpectation("whitespace"),
                peg$c53 = /^[ \t\n\r,]/,
                peg$c54 = peg$classExpectation([" ", "\t", "\n", "\r", ","], false, false),
                peg$c55 = function(n) {return {node:"?name", args:[n.join("")]};},
                peg$c56 = /^[~&|!><=\/+%*\-]/,
                peg$c57 = peg$classExpectation(["~", "&", "|", "!", ">", "<", "=", "/", "+", "%", "*", "-"], false, false),
                peg$c58 = function(op) {return op.join("")},
                peg$c59 = "#",
                peg$c60 = peg$literalExpectation("#", false),
                peg$c61 = /^[a-zA-Z]/,
                peg$c62 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
                peg$c63 = function(c) {return {node:"?color", args:["#" + c.join("")]};},
                peg$c64 = /^[a-z0-9A-Z_$@]/,
                peg$c65 = peg$classExpectation([["a", "z"], ["0", "9"], ["A", "Z"], "_", "$", "@"], false, false),
                peg$c66 = function(w) {
                    var result = w.join("");
                    var imdict = {'true':['?bool', true], 'false':['?bool', false], 'null':['?null', null]};
                    if(result in imdict) {return {node:imdict[result][0], args:[imdict[result][1]]}}
                    else if(isNaN(result)) {return {node:"?word", args:[result]};}
                    else return {node:"?number", args:[result]};
                },

                peg$currPos          = 0,
                peg$savedPos         = 0,
                peg$posDetailsCache  = [{ line: 1, column: 1 }],
                peg$maxFailPos       = 0,
                peg$maxFailExpected  = [],
                peg$silentFails      = 0,

                peg$result;

            if ("startRule" in options) {
                if (!(options.startRule in peg$startRuleFunctions)) {
                    throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
                }

                peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
            }

            function text() {
                return input.substring(peg$savedPos, peg$currPos);
            }

            function location() {
                return peg$computeLocation(peg$savedPos, peg$currPos);
            }

            function expected(description, location) {
                location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

                throw peg$buildStructuredError(
                    [peg$otherExpectation(description)],
                    input.substring(peg$savedPos, peg$currPos),
                    location
                );
            }

            function error(message, location) {
                location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

                throw peg$buildSimpleError(message, location);
            }

            function peg$literalExpectation(text, ignoreCase) {
                return { type: "literal", text: text, ignoreCase: ignoreCase };
            }

            function peg$classExpectation(parts, inverted, ignoreCase) {
                return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
            }

            function peg$anyExpectation() {
                return { type: "any" };
            }

            function peg$endExpectation() {
                return { type: "end" };
            }

            function peg$otherExpectation(description) {
                return { type: "other", description: description };
            }

            function peg$computePosDetails(pos) {
                var details = peg$posDetailsCache[pos], p;

                if (details) {
                    return details;
                } else {
                    p = pos - 1;
                    while (!peg$posDetailsCache[p]) {
                        p--;
                    }

                    details = peg$posDetailsCache[p];
                    details = {
                        line:   details.line,
                        column: details.column
                    };

                    while (p < pos) {
                        if (input.charCodeAt(p) === 10) {
                            details.line++;
                            details.column = 1;
                        } else {
                            details.column++;
                        }

                        p++;
                    }

                    peg$posDetailsCache[pos] = details;
                    return details;
                }
            }

            function peg$computeLocation(startPos, endPos) {
                var startPosDetails = peg$computePosDetails(startPos),
                    endPosDetails   = peg$computePosDetails(endPos);

                return {
                    start: {
                        offset: startPos,
                        line:   startPosDetails.line,
                        column: startPosDetails.column
                    },
                    end: {
                        offset: endPos,
                        line:   endPosDetails.line,
                        column: endPosDetails.column
                    }
                };
            }

            function peg$fail(expected) {
                if (peg$currPos < peg$maxFailPos) { return; }

                if (peg$currPos > peg$maxFailPos) {
                    peg$maxFailPos = peg$currPos;
                    peg$maxFailExpected = [];
                }

                peg$maxFailExpected.push(expected);
            }

            function peg$buildSimpleError(message, location) {
                return new peg$SyntaxError(message, null, null, location);
            }

            function peg$buildStructuredError(expected, found, location) {
                return new peg$SyntaxError(
                    peg$SyntaxError.buildMessage(expected, found),
                    expected,
                    found,
                    location
                );
            }

            function peg$parseProgram() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parseStatement();
                while (s2 !== peg$FAILED) {
                    s1.push(s2);
                    s2 = peg$parseStatement();
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 === peg$FAILED) {
                        s2 = null;
                    }
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c0(s1);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseStatement() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = peg$parse_();
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseAssign();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c1(s2);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parse_();
                    if (s1 === peg$FAILED) {
                        s1 = null;
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseDef();
                        if (s2 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c2(s2);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parse_();
                        if (s1 === peg$FAILED) {
                            s1 = null;
                        }
                        if (s1 !== peg$FAILED) {
                            s2 = peg$parseIf();
                            if (s2 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c3(s2);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            s1 = peg$parse_();
                            if (s1 === peg$FAILED) {
                                s1 = null;
                            }
                            if (s1 !== peg$FAILED) {
                                s2 = peg$parseCall();
                                if (s2 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c4(s2);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                            if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                s1 = peg$parse_();
                                if (s1 === peg$FAILED) {
                                    s1 = null;
                                }
                                if (s1 !== peg$FAILED) {
                                    s2 = peg$parseReturn();
                                    if (s2 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c5(s2);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                                if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    s1 = peg$parse_();
                                    if (s1 === peg$FAILED) {
                                        s1 = null;
                                    }
                                    if (s1 !== peg$FAILED) {
                                        s2 = peg$parseDraw();
                                        if (s2 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c2(s2);
                                            s0 = s1;
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                            }
                        }
                    }
                }

                return s0;
            }

            function peg$parseCall() {
                var s0, s1, s2, s3, s4, s5, s6;

                s0 = peg$currPos;
                s1 = [];
                if (peg$c6.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c7); }
                }
                if (s2 !== peg$FAILED) {
                    while (s2 !== peg$FAILED) {
                        s1.push(s2);
                        if (peg$c6.test(input.charAt(peg$currPos))) {
                            s2 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c7); }
                        }
                    }
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 40) {
                        s2 = peg$c8;
                        peg$currPos++;
                    } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parse_();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parseOperands();
                            if (s4 !== peg$FAILED) {
                                s5 = peg$parse_();
                                if (s5 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 41) {
                                        s6 = peg$c10;
                                        peg$currPos++;
                                    } else {
                                        s6 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                    }
                                    if (s6 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c12(s1, s4);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parseAttribute();
                    if (s1 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 40) {
                            s2 = peg$c8;
                            peg$currPos++;
                        } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c9); }
                        }
                        if (s2 !== peg$FAILED) {
                            s3 = peg$parse_();
                            if (s3 !== peg$FAILED) {
                                s4 = peg$parseOperands();
                                if (s4 !== peg$FAILED) {
                                    s5 = peg$parse_();
                                    if (s5 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 41) {
                                            s6 = peg$c10;
                                            peg$currPos++;
                                        } else {
                                            s6 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                        }
                                        if (s6 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c13(s1, s4);
                                            s0 = s1;
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }

                return s0;
            }

            function peg$parseDef() {
                var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

                s0 = peg$currPos;
                if (input.substr(peg$currPos, 3) === peg$c14) {
                    s1 = peg$c14;
                    peg$currPos += 3;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c15); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseName();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 40) {
                                    s5 = peg$c8;
                                    peg$currPos++;
                                } else {
                                    s5 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c9); }
                                }
                                if (s5 !== peg$FAILED) {
                                    s6 = peg$parse_();
                                    if (s6 !== peg$FAILED) {
                                        s7 = peg$parseParams();
                                        if (s7 !== peg$FAILED) {
                                            s8 = peg$parse_();
                                            if (s8 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 41) {
                                                    s9 = peg$c10;
                                                    peg$currPos++;
                                                } else {
                                                    s9 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                                }
                                                if (s9 !== peg$FAILED) {
                                                    s10 = peg$parse_();
                                                    if (s10 !== peg$FAILED) {
                                                        s11 = peg$parseBody();
                                                        if (s11 !== peg$FAILED) {
                                                            s12 = peg$parse_();
                                                            if (s12 !== peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 95) {
                                                                    s13 = peg$c16;
                                                                    peg$currPos++;
                                                                } else {
                                                                    s13 = peg$FAILED;
                                                                    if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                                                }
                                                                if (s13 !== peg$FAILED) {
                                                                    peg$savedPos = s0;
                                                                    s1 = peg$c18(s3, s7, s11);
                                                                    s0 = s1;
                                                                } else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            } else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        } else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    } else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseReturn() {
                var s0, s1, s2, s3, s4;

                s0 = peg$currPos;
                if (input.substr(peg$currPos, 6) === peg$c19) {
                    s1 = peg$c19;
                    peg$currPos += 6;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseArgument();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c21(s3);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseDraw() {
                var s0, s1, s2, s3, s4;

                s0 = peg$currPos;
                if (input.substr(peg$currPos, 4) === peg$c22) {
                    s1 = peg$c22;
                    peg$currPos += 4;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c23); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseArgument();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c24(s3);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseIf() {
                var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c25) {
                    s1 = peg$c25;
                    peg$currPos += 2;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c26); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseArgument();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                s5 = peg$parseBody();
                                if (s5 !== peg$FAILED) {
                                    s6 = peg$parse_();
                                    if (s6 !== peg$FAILED) {
                                        if (input.substr(peg$currPos, 4) === peg$c27) {
                                            s7 = peg$c27;
                                            peg$currPos += 4;
                                        } else {
                                            s7 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c28); }
                                        }
                                        if (s7 === peg$FAILED) {
                                            s7 = null;
                                        }
                                        if (s7 !== peg$FAILED) {
                                            s8 = peg$parse_();
                                            if (s8 !== peg$FAILED) {
                                                s9 = peg$parseBody();
                                                if (s9 === peg$FAILED) {
                                                    s9 = null;
                                                }
                                                if (s9 !== peg$FAILED) {
                                                    s10 = peg$parse_();
                                                    if (s10 === peg$FAILED) {
                                                        s10 = null;
                                                    }
                                                    if (s10 !== peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 95) {
                                                            s11 = peg$c16;
                                                            peg$currPos++;
                                                        } else {
                                                            s11 = peg$FAILED;
                                                            if (peg$silentFails === 0) { peg$fail(peg$c17); }
                                                        }
                                                        if (s11 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c29(s3, s5, s9);
                                                            s0 = s1;
                                                        } else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    } else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseAssign() {
                var s0, s1, s2, s3, s4, s5, s6;

                s0 = peg$currPos;
                s1 = peg$parse_();
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseName();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parse_();
                        if (s3 === peg$FAILED) {
                            s3 = null;
                        }
                        if (s3 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 61) {
                                s4 = peg$c30;
                                peg$currPos++;
                            } else {
                                s4 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c31); }
                            }
                            if (s4 !== peg$FAILED) {
                                s5 = peg$parse_();
                                if (s5 === peg$FAILED) {
                                    s5 = null;
                                }
                                if (s5 !== peg$FAILED) {
                                    s6 = peg$parseArgument();
                                    if (s6 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c32(s2, s6);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseList() {
                var s0, s1, s2, s3, s4, s5;

                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 91) {
                    s1 = peg$c33;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c34); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseOperands();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 93) {
                                    s5 = peg$c35;
                                    peg$currPos++;
                                } else {
                                    s5 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c36); }
                                }
                                if (s5 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c37(s3);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parsePoint() {
                var s0, s1, s2, s3, s4, s5, s6, s7;

                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 40) {
                    s1 = peg$c8;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c9); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseArgument();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                s5 = peg$parseArgument();
                                if (s5 !== peg$FAILED) {
                                    s6 = peg$parse_();
                                    if (s6 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 41) {
                                            s7 = peg$c10;
                                            peg$currPos++;
                                        } else {
                                            s7 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c11); }
                                        }
                                        if (s7 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c38(s3, s5);
                                            s0 = s1;
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseAttribute() {
                var s0, s1, s2, s3;

                s0 = peg$currPos;
                s1 = peg$parseName();
                if (s1 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s2 = peg$c39;
                        peg$currPos++;
                    } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c40); }
                    }
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseWord();
                        if (s3 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c41(s1, s3);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseInfix() {
                var s0, s1, s2, s3, s4, s5;

                s0 = peg$currPos;
                s1 = peg$parseInfixArgument();
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseOperator();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                s5 = peg$parseInfix();
                                if (s5 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c42(s1, s3, s5);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parseInfixArgument();
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parse_();
                        if (s2 !== peg$FAILED) {
                            s3 = peg$parseOperator();
                            if (s3 !== peg$FAILED) {
                                s4 = peg$parse_();
                                if (s4 !== peg$FAILED) {
                                    s5 = peg$parseInfixArgument();
                                    if (s5 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c42(s1, s3, s5);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }

                return s0;
            }

            function peg$parseInfixArgument() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = peg$parse_();
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseCall();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c4(s2);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parse_();
                    if (s1 === peg$FAILED) {
                        s1 = null;
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseProcess();
                        if (s2 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c43(s2);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parse_();
                        if (s1 === peg$FAILED) {
                            s1 = null;
                        }
                        if (s1 !== peg$FAILED) {
                            s2 = peg$parseList();
                            if (s2 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c44(s2);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            s1 = peg$parse_();
                            if (s1 === peg$FAILED) {
                                s1 = null;
                            }
                            if (s1 !== peg$FAILED) {
                                s2 = peg$parsePoint();
                                if (s2 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c43(s2);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                            if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                s1 = peg$parse_();
                                if (s1 === peg$FAILED) {
                                    s1 = null;
                                }
                                if (s1 !== peg$FAILED) {
                                    s2 = peg$parseColor();
                                    if (s2 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c4(s2);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                                if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    s1 = peg$parse_();
                                    if (s1 === peg$FAILED) {
                                        s1 = null;
                                    }
                                    if (s1 !== peg$FAILED) {
                                        s2 = peg$parseAttribute();
                                        if (s2 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c1(s2);
                                            s0 = s1;
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$currPos;
                                        s1 = peg$parse_();
                                        if (s1 === peg$FAILED) {
                                            s1 = null;
                                        }
                                        if (s1 !== peg$FAILED) {
                                            s2 = peg$parseWord();
                                            if (s2 !== peg$FAILED) {
                                                peg$savedPos = s0;
                                                s1 = peg$c1(s2);
                                                s0 = s1;
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                return s0;
            }

            function peg$parseOperands() {
                var s0, s1;

                s0 = [];
                s1 = peg$parseArgument();
                while (s1 !== peg$FAILED) {
                    s0.push(s1);
                    s1 = peg$parseArgument();
                }

                return s0;
            }

            function peg$parseParams() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parseName();
                while (s2 !== peg$FAILED) {
                    s1.push(s2);
                    s2 = peg$parseName();
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c45(s1);
                }
                s0 = s1;

                return s0;
            }

            function peg$parseBody() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parseStatement();
                while (s2 !== peg$FAILED) {
                    s1.push(s2);
                    s2 = peg$parseStatement();
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c46(s1);
                }
                s0 = s1;

                return s0;
            }

            function peg$parseProcess() {
                var s0, s1, s2, s3, s4, s5;

                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 123) {
                    s1 = peg$c47;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c48); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parse_();
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseBody();
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parse_();
                            if (s4 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                    s5 = peg$c49;
                                    peg$currPos++;
                                } else {
                                    s5 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c50); }
                                }
                                if (s5 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c51(s3);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseArgument() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = peg$parse_();
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseCall();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c4(s2);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parse_();
                    if (s1 === peg$FAILED) {
                        s1 = null;
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseProcess();
                        if (s2 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c43(s2);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parse_();
                        if (s1 === peg$FAILED) {
                            s1 = null;
                        }
                        if (s1 !== peg$FAILED) {
                            s2 = peg$parseInfix();
                            if (s2 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c3(s2);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            s1 = peg$parse_();
                            if (s1 === peg$FAILED) {
                                s1 = null;
                            }
                            if (s1 !== peg$FAILED) {
                                s2 = peg$parseList();
                                if (s2 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c44(s2);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                            if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                s1 = peg$parse_();
                                if (s1 === peg$FAILED) {
                                    s1 = null;
                                }
                                if (s1 !== peg$FAILED) {
                                    s2 = peg$parsePoint();
                                    if (s2 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c43(s2);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                                if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    s1 = peg$parse_();
                                    if (s1 === peg$FAILED) {
                                        s1 = null;
                                    }
                                    if (s1 !== peg$FAILED) {
                                        s2 = peg$parseColor();
                                        if (s2 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c4(s2);
                                            s0 = s1;
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$currPos;
                                        s1 = peg$parse_();
                                        if (s1 === peg$FAILED) {
                                            s1 = null;
                                        }
                                        if (s1 !== peg$FAILED) {
                                            s2 = peg$parseAttribute();
                                            if (s2 !== peg$FAILED) {
                                                peg$savedPos = s0;
                                                s1 = peg$c1(s2);
                                                s0 = s1;
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        } else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                        if (s0 === peg$FAILED) {
                                            s0 = peg$currPos;
                                            s1 = peg$parse_();
                                            if (s1 === peg$FAILED) {
                                                s1 = null;
                                            }
                                            if (s1 !== peg$FAILED) {
                                                s2 = peg$parseWord();
                                                if (s2 !== peg$FAILED) {
                                                    peg$savedPos = s0;
                                                    s1 = peg$c1(s2);
                                                    s0 = s1;
                                                } else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            } else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                return s0;
            }

            function peg$parse_() {
                var s0, s1;

                peg$silentFails++;
                s0 = [];
                if (peg$c53.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c54); }
                }
                while (s1 !== peg$FAILED) {
                    s0.push(s1);
                    if (peg$c53.test(input.charAt(peg$currPos))) {
                        s1 = input.charAt(peg$currPos);
                        peg$currPos++;
                    } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c54); }
                    }
                }
                peg$silentFails--;
                if (s0 === peg$FAILED) {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c52); }
                }

                return s0;
            }

            function peg$parseName() {
                var s0, s1, s2, s3;

                s0 = peg$currPos;
                s1 = peg$parse_();
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    if (peg$c6.test(input.charAt(peg$currPos))) {
                        s3 = input.charAt(peg$currPos);
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c7); }
                    }
                    if (s3 !== peg$FAILED) {
                        while (s3 !== peg$FAILED) {
                            s2.push(s3);
                            if (peg$c6.test(input.charAt(peg$currPos))) {
                                s3 = input.charAt(peg$currPos);
                                peg$currPos++;
                            } else {
                                s3 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c7); }
                            }
                        }
                    } else {
                        s2 = peg$FAILED;
                    }
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c55(s2);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseOperator() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = [];
                if (peg$c56.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c57); }
                }
                if (s2 !== peg$FAILED) {
                    while (s2 !== peg$FAILED) {
                        s1.push(s2);
                        if (peg$c56.test(input.charAt(peg$currPos))) {
                            s2 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c57); }
                        }
                    }
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c58(s1);
                }
                s0 = s1;

                return s0;
            }

            function peg$parseColor() {
                var s0, s1, s2, s3;

                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 35) {
                    s1 = peg$c59;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c60); }
                }
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    if (peg$c61.test(input.charAt(peg$currPos))) {
                        s3 = input.charAt(peg$currPos);
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c62); }
                    }
                    if (s3 !== peg$FAILED) {
                        while (s3 !== peg$FAILED) {
                            s2.push(s3);
                            if (peg$c61.test(input.charAt(peg$currPos))) {
                                s3 = input.charAt(peg$currPos);
                                peg$currPos++;
                            } else {
                                s3 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c62); }
                            }
                        }
                    } else {
                        s2 = peg$FAILED;
                    }
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c63(s2);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }

                return s0;
            }

            function peg$parseWord() {
                var s0, s1, s2;

                s0 = peg$currPos;
                s1 = [];
                if (peg$c64.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c65); }
                }
                if (s2 !== peg$FAILED) {
                    while (s2 !== peg$FAILED) {
                        s1.push(s2);
                        if (peg$c64.test(input.charAt(peg$currPos))) {
                            s2 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c65); }
                        }
                    }
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c66(s1);
                }
                s0 = s1;

                return s0;
            }

            peg$result = peg$startRuleFunction();

            if (peg$result !== peg$FAILED && peg$currPos === input.length) {
                return peg$result;
            } else {
                if (peg$result !== peg$FAILED && peg$currPos < input.length) {
                    peg$fail(peg$endExpectation());
                }

                throw peg$buildStructuredError(
                    peg$maxFailExpected,
                    peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
                    peg$maxFailPos < input.length
                        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
                        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
                );
            }
        }

        return {
            SyntaxError: peg$SyntaxError,
            parse:       peg$parse
        };
    })();

},{}],12:[function(require,module,exports){
"use strict";
var Maps_1 = require("../Comp/Maps");
var Colors;
(function (Colors) {
    //custom swatch maker for oblivion language
    Colors.swatchSet = {
        black: true, white: true, gray: true,
        cyan: true, blue: true, red: true,
        yellow: true, turquoise: true, indigo: true,
        green: true, brown: true, lightpink: true,
        violet: true, tan: true, orange: true
    };
    Colors.colorfFunc = function (env, args) {
        var item = env.callLib(env, args[1].node, args[1].args);
        var col = env.callLib(env, args[0].node, args[0].args);
        if (!item.type)
            throw new Error("Coloring Operator must be used on line or shape");
        var curr = item;
        while (curr !== null) {
            curr.color = col;
            curr = curr.next;
        }
        return item;
    };
    //embedded into lib and makes color from #<> syntax
    Colors.makeColor = function (env, args) {
        var color = args[0];
        if (/^#[0-9a-f]{6}|[0-9a-f]{3}$/i.test(color))
            return color;
        else if (color.slice(1) in Colors.swatchSet)
            return color.slice(1);
    };
    //converts a color function arg set to map
    Colors.colorToMap = function (env, args) {
        if (args.length !== 3)
            throw new Error("ArgumentError: Expected 3 argument but got " + args.length);
        return new Maps_1.Maps.OblMap({ r: env.callLib(env, args[0].node, args[0].args),
            g: env.callLib(env, args[1].node, args[1].args),
            b: env.callLib(env, args[2].node, args[2].args) });
    };
    //main color class for Oblivion
    var Color = (function () {
        function Color(r, g, b) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            this.values = {
                r: r,
                g: g,
                b: b
            };
        }
        Color.prototype.strFormat = function () {
            return "rgb(" + this.values["r"] + "," + this.values["g"] + "," + this.values["b"] + ")";
        };
        Color.prototype.innerValue = function () {
            return this.values;
        };
        Color.prototype.getItem = function (index) {
            if (index in Color.altRGBNames)
                index = Color.altRGBNames[index];
            return this.values[index];
        };
        Color.prototype.setItem = function (index, value) {
            if (index in Color.altRGBNames)
                index = Color.altRGBNames[index];
            this.values[index] = value;
        };
        Color.prototype.hasItem = function (item) {
            if (item in Color.altRGBNames)
                item = Color.altRGBNames[item];
            return item in this.values;
        };
        Color.prototype.arrayValue = function () {
            return [this.values["r"], this.values["g"], this.values["b"]];
        };
        Color.prototype.size = function () {
            return 0;
        };
        Color.altRGBNames = { "red": "r", "green": "g", "blue": "b" };
        return Color;
    }());
    Colors.Color = Color;
    //old RGB class
    /*Saved for future version*/
    var RGB = (function () {
        function RGB(r, g, b) {
            if (r === void 0) { r = 0; }
            if (g === void 0) { g = 0; }
            if (b === void 0) { b = 0; }
            this.red = r;
            this.green = g;
            this.blue = b;
        }
        RGB.prototype.strValue = function () {
            return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
        };
        return RGB;
    }());
    Colors.RGB = RGB;
    var HEX = (function () {
        function HEX(digits) {
            if (digits === void 0) { digits = '#FFFFFF'; }
            if (!(HEX.isHex(digits))) {
                throw "Error Hex Color invalid";
            }
            this.digits = digits;
        }
        HEX.prototype.strValue = function () {
            return "#" + this.digits;
        };
        //checks if a color is a valid 3 or 6 digit HEX color.
        HEX.isHex = function (input) {
            return HEX.hexRegex.test(input);
        };
        HEX.hexRegex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
        return HEX;
    }());
    Colors.HEX = HEX;
    var Swatch = (function () {
        function Swatch(name) {
            if (name === void 0) { name = "black"; }
            this.name = name;
        }
        Swatch.prototype.strValue = function () {
            return this.name;
        };
        //checks if a color is a named SVG color.
        Swatch.isSwatch = function (input) {
            return input in Swatch.swatchSet;
        };
        Swatch.swatchSet = {
            black: true, white: true, gray: true,
            cyan: true, blue: true, red: true,
            yellow: true, turquoise: true, indigo: true,
            green: true, brown: true, lightpink: true,
            violet: true, tan: true, orange: true
        };
        Swatch.swatchList = [
            'black', 'white', 'gray', 'cyan', 'blue', 'red', 'yellow',
            'turquoise', 'indigo', 'green', 'brown', 'lightpink', 'violet',
            'tan', 'orange'
        ];
        return Swatch;
    }());
    Colors.Swatch = Swatch;
    //gets random swatch color
    Colors.randSwatch = function () {
        return new Swatch(Swatch.swatchList[Math.floor((Math.random() * Swatch.swatchList.length))]);
    };
})(Colors = exports.Colors || (exports.Colors = {}));

},{"../Comp/Maps":3}],13:[function(require,module,exports){
"use strict";
var Lines;
(function (Lines) {
    var Line = (function () {
        function Line(point, next) {
            if (next === void 0) { next = null; }
            this.point = point;
            this.next = next;
            this.color = "black";
        }
        Line.prototype.getPoint = function () {
            return this.point;
        };
        Line.prototype.getNext = function () {
            return this.next;
        };
        Line.prototype.hasNext = function () {
            return this.next !== null;
        };
        Line.prototype.setNext = function (other) {
            this.next = other;
        };
        //for interconnecting lines, gets last point in the chain
        Line.prototype.getLast = function () {
            if (this.hasNext()) {
                return this.next.getLast();
            }
            else
                return this;
        };
        Line.prototype.strFormat = function () {
            if (this.hasNext())
                return this.point.strFormat() + " -> " + this.next.strFormat();
            else
                return "" + this.point.strFormat();
        };
        Line.prototype.type = function () {
            return "line";
        };
        return Line;
    }());
    Lines.Line = Line;
})(Lines = exports.Lines || (exports.Lines = {}));

},{}],14:[function(require,module,exports){
"use strict";
/**
 * Created by Josh on 3/12/17.
 */
var Points;
(function (Points) {
    Points.makePoint = function (env, args) {
        var x = env.callLib(env, args[0].node, args[0].args);
        var y = env.callLib(env, args[1].node, args[1].args);
        if (typeof x !== 'number' || typeof y !== 'number')
            throw new Error("Points must have numbers as coordinates");
        return new Point(x, y);
    };
    var Point = (function () {
        function Point(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Point.prototype.type = function () {
            return "point";
        };
        Point.prototype.strFormat = function () {
            return this.x + "," + this.y;
        };
        Point.prototype.innerValue = function () {
            return [this.x, this.y];
        };
        Point.prototype.setItem = function (index, value) {
            if (index in this) {
                if (typeof value !== 'number')
                    throw new Error("Points can only hold numbers.");
                this[index] = value;
                return new Point(this.x, this.y);
            }
            else
                throw new Error("Index " + index + " not supported by Point.");
        };
        Point.prototype.hasItem = function (item) {
            return false;
        };
        Point.prototype.getItem = function (index) {
            if (index in this)
                return this[index];
            else
                throw new Error("Index " + index + " not supported by Point.");
        };
        Point.prototype.arrayValue = function () {
            return [this.x, this.y];
        };
        Point.prototype.size = function () {
            return 2;
        };
        return Point;
    }());
    Points.Point = Point;
})(Points = exports.Points || (exports.Points = {}));

},{}],15:[function(require,module,exports){
"use strict";
var Polygons;
(function (Polygons) {
    var Polygon = (function () {
        function Polygon(point, next) {
            if (next === void 0) { next = null; }
            this.point = point;
            this.next = next;
            this.color = "black";
        }
        Polygon.prototype.getLast = function () {
            if (this.hasNext()) {
                return this.next.getLast();
            }
            else
                return this;
        };
        Polygon.prototype.getPoint = function () {
            return this.point;
        };
        Polygon.prototype.getNext = function () {
            return this.next;
        };
        Polygon.prototype.hasNext = function () {
            return this.next !== null;
        };
        Polygon.prototype.setNext = function (other) {
            this.next = other;
        };
        Polygon.prototype.strFormat = function () {
            if (this.hasNext())
                return this.point.strFormat() + " *> " + this.next.strFormat();
            else
                return "" + this.point.strFormat();
        };
        Polygon.prototype.type = function () {
            return "polygon";
        };
        return Polygon;
    }());
    Polygons.Polygon = Polygon;
})(Polygons = exports.Polygons || (exports.Polygons = {}));

},{}],16:[function(require,module,exports){
"use strict";
/**
 * Created by Josh on 3/14/17.
 */
var SVGSize;
(function (SVGSize_1) {
    var SVGSize = (function () {
        function SVGSize(width, height) {
            if (width === void 0) { width = "100%"; }
            if (height === void 0) { height = "100%"; }
            this.width = width;
            this.height = height;
        }
        ;
        SVGSize.prototype.setWidth = function (newWidth) {
            this.width = newWidth;
        };
        SVGSize.prototype.setHeight = function (newHeight) {
            this.height = newHeight;
        };
        SVGSize.prototype.strFormat = function () {
            return "width =\"" + this.width + "\" height=\"" + this.height + "\"";
        };
        return SVGSize;
    }());
    SVGSize_1.SVGSize = SVGSize;
    SVGSize_1.init = function () {
        return new SVGSize();
    };
})(SVGSize = exports.SVGSize || (exports.SVGSize = {}));

},{}],17:[function(require,module,exports){
"use strict";
var IO_1 = require("../IO");
/**
 * Created by Josh on 3/14/17.
 * SVG Synthesizer
 */
var Synthesizer = (function () {
    function Synthesizer() {
        this.mode = "start";
        this.currentPoints = [];
        this.currentStyle = { fill: "transparent", stroke: "black", "stroke-width": 1 };
    }
    Synthesizer.prototype.put = function (item) {
        if (this.mode === "start") {
            this.mode = item.type();
            this.currentStyle = this.startStyle(item.type());
            this.put(item);
        }
        else if (item.type() === this.mode) {
            this.currentPoints.push(item.getPoint().strFormat());
            this.colorCheck(item);
        }
        else {
            this.currentPoints.push(item.getPoint().strFormat());
            this.releaseSVG();
            this.mode = item.type();
            if (this.mode === 'polygon')
                this.currentStyle = { fill: "black", stroke: "transparent", "stroke-width": 1 };
            this.colorCheck(item);
            this.currentPoints.push(item.getPoint().strFormat());
        }
    };
    Synthesizer.prototype.makestyleString = function () {
        var str = "";
        for (var key in this.currentStyle) {
            str += key + "=\"" + this.currentStyle[key] + "\" ";
        }
        return str;
    };
    Synthesizer.prototype.makePointString = function () {
        return "points=\"" + this.currentPoints.join(" ") + "\"";
    };
    //resets the synthesizer to it's base state.
    Synthesizer.prototype.reset = function () {
        this.currentStyle = { fill: "transparent", stroke: "black", "stroke-width": 1 };
        this.currentPoints = [];
    };
    Synthesizer.prototype.releaseSVG = function () {
        IO_1.IO.pushSVG("<" + this.prepMode() + " " + this.makePointString() + " " + this.makestyleString() + "/>");
        this.reset();
    };
    Synthesizer.prototype.prepMode = function () {
        if (this.mode === 'line')
            return 'polyline';
        else
            return this.mode;
    };
    Synthesizer.prototype.colorCheck = function (item) {
        switch (this.mode) {
            case "line":
                if (item.color !== this.currentStyle["stroke"])
                    this.currentStyle["stroke"] = item.color;
                break;
            case "polygon":
                if (item.color !== this.currentStyle["fill"])
                    this.currentStyle["fill"] = item.color;
                break;
        }
    };
    Synthesizer.prototype.startStyle = function (mode) {
        if (mode === 'line')
            return { fill: "transparent", stroke: "black", "stroke-width": 1 };
        else if (mode === 'polygon')
            return { fill: "black", stroke: "transparent", "stroke-width": 1 };
    };
    return Synthesizer;
}());
exports.Synthesizer = Synthesizer;

},{"../IO":8}],18:[function(require,module,exports){
"use strict";
var Line_1 = require("./Line");
var Synthesizer_1 = require("./Synthesizer");
var Polygon_1 = require("./Polygon");
/**
 * Created by Josh on 2/23/17.
 * Contains implementation for the draw: keyword and underlying function
 */
//namespace to contain drawing operators and functions
var Draw;
(function (Draw) {
    //name dictionary to check if an SVG type is connectable
    Draw.connects = { "line": true, "polygon": true };
    Draw.draw = function (env, args) {
        var root = env.callLib(env, args[0].node, args[0].args);
        var syn = new Synthesizer_1.Synthesizer();
        while (root !== null) {
            syn.put(root);
            root = root.next;
        }
        syn.releaseSVG();
    };
    //connects SVG objects via a line
    Draw.lineConnect = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (left.type() === 'point') {
            if (right.type() === 'point') {
                return new Line_1.Lines.Line(left, new Line_1.Lines.Line(right));
            }
            else if (right.type() in Draw.connects) {
                return new Line_1.Lines.Line(left, right);
            }
            else
                throw new Error("-> Operator received wrong arguments");
        }
        else if (left.type() in Draw.connects) {
            if (right.type() === 'point') {
                left.getLast().next = new Line_1.Lines.Line(right);
                return left;
            }
            else if (right.type() in Draw.connects) {
                left.getLast().next = right;
            }
            else
                throw new Error("-> Operator received wrong arguments");
        }
        else
            throw new Error("-> Operator received wrong arguments");
    };
    //connects two points via a filled
    Draw.shapeConnect = function (env, args) {
        var left = env.callLib(env, args[0].node, args[0].args);
        var right = env.callLib(env, args[1].node, args[1].args);
        if (left.type() === 'point') {
            if (right.type() === 'point') {
                return new Polygon_1.Polygons.Polygon(left, new Polygon_1.Polygons.Polygon(right));
            }
            else if (right.type() in Draw.connects) {
                return new Polygon_1.Polygons.Polygon(left, right);
            }
            else
                throw new Error("*> Operator received wrong arguments");
        }
        else if (left.type() in Draw.connects) {
            if (right.type() === 'point') {
                left.getLast().next = new Polygon_1.Polygons.Polygon(right);
                return left;
            }
            else if (right.type() in Draw.connects) {
                left.getLast().next = right;
            }
            else
                throw new Error("*> Operator received wrong arguments");
        }
        else
            throw new Error("*> Operator received wrong arguments");
    };
})(Draw = exports.Draw || (exports.Draw = {}));

},{"./Line":13,"./Polygon":15,"./Synthesizer":17}]},{},[10])(10)
});
