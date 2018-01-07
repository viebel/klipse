// Copyright 2014 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

goog.provide("com.cognitect.transit");
goog.require("com.cognitect.transit.util");
goog.require("com.cognitect.transit.impl.reader");
goog.require("com.cognitect.transit.impl.writer");
goog.require("com.cognitect.transit.types");
goog.require("com.cognitect.transit.eq");
goog.require("com.cognitect.transit.impl.decoder");
goog.require("com.cognitect.transit.caching");

/** @define {boolean} */
var TRANSIT_DEV = true;

/** @define {boolean} */
var TRANSIT_NODE_TARGET = false;

/** @define {boolean} */
var TRANSIT_BROWSER_TARGET = false;

/** @define {boolean} */
var TRANSIT_BROWSER_AMD_TARGET = false;

goog.scope(function() {

    /**
     * @class transit
     */
    var transit = com.cognitect.transit;

    var util    = com.cognitect.transit.util,
        reader  = com.cognitect.transit.impl.reader,
        writer  = com.cognitect.transit.impl.writer,
        decoder = com.cognitect.transit.impl.decoder,
        types   = com.cognitect.transit.types,
        eq      = com.cognitect.transit.eq,
        caching = com.cognitect.transit.caching;

    /**
     * @typedef {Map|com.cognitect.transit.types.TransitArrayMap|com.cognitect.transit.types.TransitMap}
     */
    transit.MapLike;

    /**
     * @typedef {Set|com.cognitect.transit.types.TransitSet}
     */
    transit.SetLike;

    /**
     * Create a transit reader instance.
     * @method transit.reader
     * @param {string=} type
     *     type of reader to construct.  Default to "json". For verbose mode
     *     supply "json-verbose".
     * @param {Object=} opts
     *     reader options. A JavaScript object to customize the writer Valid
     *     entries include "defaultHandler", and "handler". "defaultHandler"
     *     should be JavaScript function taking two arguments, the first is the
     *     tag, the second the value. "handlers" should be an object of tags to
     *     handle. The values are functions that will receive the value of matched
     *     tag. "preferBuffers" may be supplied to customize binary
     *     decoding. If available binary data will read as Node.js Buffers,
     *     If Buffer is not available or "prefersBuffers" is set to false
     *     data will be read as Uint8Array. If neither Buffer nor Uint8Array is
     *     available - defaults to tagged value that simply wraps the
     *     base64 encoded string.
     * @return {com.cognitect.transit.impl.reader.Reader} A transit reader.
     * @example
     *     var r = transit.reader("json", {
     *         handlers: {
     *            "point": function(v) { return new Point(v[0], v[1]); }
     *         }
     *     });
     */
    transit.reader = function(type, opts) {
        if(type === "json" || type === "json-verbose" || type == null) {
            type = "json";
            var unmarshaller = new reader.JSONUnmarshaller(opts);
            return new reader.Reader(unmarshaller, opts);
        } else {
            throw new Error("Cannot create reader of type " + type);
        }
    };

    /**
     * Create a transit writer instance.
     * @method transit.writer
     * @param {string=} type
     *     type of writer to construct. Defaults to "json". For verbose mode
     *     supply "json-verbose".
     * @param {Object=} opts
     *     writer options. A JavaScript object to customize the writer.
     *     "handlers" options, a transit.map of JavaScript constructor and
     *     transit writer handler instance entries. "handlerForForeign" option,
     *     for dealing with values from other JavaScript contexts. This function
     *     will be passed the unmatchable value and the installed handlers. The
     *     function should return the correct handler. Note if this function is
     *     provided, special handling for Objects will also be
     *     auto-installed to catch plain Objects from the foreign context.
     * @return {com.cognitect.transit.impl.writer.Writer} A transit writer.
     * @example
     *     var r = transit.writer("json", {
     *         handlers: transit.map([
     *            Point, PointHandler
     *         ])
     *     });
     */
    transit.writer = function(type, opts) {
        if(type === "json" || type === "json-verbose" || type == null) {
            if(type === "json-verbose") {
                if(opts == null) opts = {};
                opts["verbose"] = true;
            }
            var marshaller = new writer.JSONMarshaller(opts);
            return new writer.Writer(marshaller, opts);
        } else {
            var err = new Error("Type must be \"json\"");
            err.data = {type: type};
            throw err;
        }
    };

    /**
     * Create a transit writer handler.
     * @method transit.makeWriteHandler
     * @param {Object} obj
     *    An object containing 3 functions, tag, rep and stringRep. "tag" should
     *    return a string representing the tag to be written on the wire. "rep"
     *    should return the representation on the wire. "stringRep" is should
     *    return the string representation of the value. Optional
     *    "getVerboseHandler" should return a handler for writing verbose output.
     * @return {Object} A transit write handler.
     * @example
     *     var PointHandler = transit.makeWriteHandler({
     *          tag: function(p) { return "point"; },
     *          rep: function(p) { return [p.x, p.y]; },
     *          stringRep: function(p) { return null; }
     *     });
     */
    transit.makeWriteHandler = function(obj) {
        /** @constructor */
        var Handler = function(){};
        Handler.prototype.tag = obj["tag"];
        Handler.prototype.rep = obj["rep"];
        Handler.prototype.stringRep = obj["stringRep"];
        Handler.prototype.getVerboseHandler = obj["getVerboseHandler"];
        return new Handler();
    };

    transit.makeBuilder = function(obj) {
        /** @constructor */
        var Builder = function(){};
        Builder.prototype.init = obj["init"];
        Builder.prototype.add = obj["add"];
        Builder.prototype.finalize = obj["finalize"];
        Builder.prototype.fromArray = obj["fromArray"];
        return new Builder();
    };

    /**
     * Create a transit date.
     * @method transit.date
     * @param {number|string} x
     *     A number or string representing milliseconds since epoch.
     * @return {Date} A JavaScript Date.
     */
    transit.date = types.date;

    /**
     * Create an integer. If given a transit integer or a JavaScript
     *     number will simply return that value. Given a string will
     *     return a JavaScript number if the string represents an integer
     *     value in the 53bit range and a transit integer otherwise.
     * @method transit.integer
     * @param {number|string} s
     *     A value representing an integer.
     * @return {number|goog.math.Long} A JavaScript number or transit integer.
     */
    transit.integer = types.intValue;

    /**
     * Test if an object is a transit integer. Will return true if argument
     * is a 64 bit integer or a JavaScript number that has an interpretation as
     * an integer value, i.e. parseFloat(n) === parseInt(n)
     * @method transit.isInteger
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if the value is a transit integer, false otherwise.
     */
    transit.isInteger = types.isInteger;

    /**
     * Create transit UUID from a string
     * @method transit.uuid
     * @param {string} s
     *     A string.
     * @return {com.cognitect.transit.types.UUID} A transit UUID.
     */
    transit.uuid = types.uuid;

    /**
     * Test if an object is a transit UUID.
     * @method transit.isUUID
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if the vlaue is a transit UUID instance, false otherwise.
     */
    transit.isUUID = types.isUUID;

    /**
     * Create a transit big integer.
     * @method transit.bigInt
     * @param {string} s
     *     A string representing an arbitrary size integer value.
     * @return {com.cognitect.transit.types.TaggedValue} A transit big integer.
     */
    transit.bigInt =  types.bigInteger;

    /**
     * Test if an object is a transit big integer.
     * @method transit.isBigInt
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit big integer, false otherwise.
     */
    transit.isBigInt = types.isBigInteger;

    /**
     * Create a transit big decimal.
     * @method transit.bigDec
     * @param {string} s
     *     A string representing an arbitrary precisions decimal value.
     * @return {com.cognitect.transit.types.TaggedValue} A transit big decimal.
     */
    transit.bigDec =  types.bigDecimalValue;

    /**
     * Test if an object is a transit big decimal.
     * @method transit.isBigDec
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit big decimal, false otherwise.
     */
    transit.isBigDec = types.isBigDecimal;

    /**
     * Create transit keyword.
     * @method transit.keyword
     * @param {string} name A string.
     * @return {com.cognitect.transit.types.Keyword} A transit keyword.
     * @example
     *     transit.keyword("foo");
     */
    transit.keyword = types.keyword;

    /**
     * Test if an object is a transit keyword.
     * @method transit.isKeyword
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit keyword, false otherwise.
     */
    transit.isKeyword = types.isKeyword;

    /**
     * Create a transit symbol.
     * @method transit.symbol
     * @param {string} name
     *     A string.
     * @return {com.cognitect.transit.types.Symbol} A transit symbol instance.
     * @example
     *     transit.symbol("foo");
     */
    transit.symbol = types.symbol;

    /**
     * Test if an object is a transit symbol
     * @method transit.isSymbol
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit symbol, false otherwise.
     */
    transit.isSymbol = types.isSymbol;

    /**
     * Create transit binary blob.
     * @method transit.binary
     * @param {string} s
     *     A base64 encoded string.
     * @param {*=} decoder
     *     A Transit compliant decoder
     * @return {com.cognitect.transit.types.TaggedValue|Uint8Array} A transit binary blob instance.
     */
    transit.binary = types.binary;

    /**
     * Test if an object is a transit binary blob.
     * @method transit.isBinary
     * @param {*} x
     *     Any JavaScript value.
     * @return {Boolean} true if x is a binary value, false otheriwse.
     */
    transit.isBinary = types.isBinary;

    /**
     * Create a transit URI.
     * @method transit.uri
     * @param {string} s
     *     A string representing a valid URI.
     * @return {com.cognitect.transit.types.TaggedValue} A transit URI.
     */
    transit.uri = types.uri;

    /**
     * Test if an object is a transit URI.
     * @method transit.isURI
     * @param {*} x
     *     Any JavaScript value.
     * @return {Boolean} true if x is a transit symbol, false otherwise.
     */
    transit.isURI = types.isURI;

    /**
     * Create a transit hash map. Transit maps satisfy the current version
     *     of the ECMAScript 6 Map specification.
     * @method transit.map
     * @param {Array=} xs
     *     A JavaScript array of alternating key value pairs.
     * @return {com.cognitect.transit.MapLike} A transit map.
     * @example
     *     transit.map([new Date(), "foo", [1,2], 3]);
     */
    transit.map = types.map;

    /**
     * Test if an object is a transit map.
     * @method transit.isMap
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit map, false otherwise.
     */
    transit.isMap = types.isMap;

    /**
     * Create a transit set. Transit sets satisfy the current version of the
     *     of the ECMAScript 6 Set specification.
     * @method transit.set
     * @param {Array=} xs
     *     A JavaScript array of values.
     * @return {com.cognitect.transit.SetLike} A transit set.
     * @example
     *     transit.set(["foo", [1,2], 3, {bar: "baz"}]);
     */
    transit.set = types.set;

    /**
     * Test if an object is a transit set.
     * @method transit.isSet
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit set, false otherwise.
     */
    transit.isSet = types.isSet;

    /**
     * Create a transit list.
     * @method transit.list
     * @param {Array} xs
     *     A JavaScript array.
     * @return {com.cognitect.transit.types.TaggedValue} A transit list.
     */
    transit.list = types.list;

    /**
     * Test if an object is a transit list.
     * @method transit.isList
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit list, false otherwise.
     */
    transit.isList = types.isList;

    /**
     * Create a transit quoted value.
     * @method transit.quoted
     * @param {*} x
     *     Any JavaScript value.
     * @return {com.cognitect.transit.types.TaggedValue} A transit quoted value.
     */
    transit.quoted = types.quoted;

    /**
     * Test if an object is a transit quoted value.
     * @method transit.isQuoted
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit value, false otherwise.
     */
    transit.isQuoted = types.isQuoted;

    /**
     * Create a transit tagged value.
     * @method transit.tagged
     * @param {string} tag A tag.
     * @param {*} value
     *     A JavaScrpt array, object, or string.
     * @return {com.cognitect.transit.types.TaggedValue} A transit tagged value.
     * @example
     *     transit.tagged("point", new Point(1,2));
     */
    transit.tagged = types.taggedValue;

    /**
     * Test if an object is a transit tagged value.
     * @method transit.isTaggedValue
     * @param {*} x
     *     Any JavaScript value.
     * @return {boolean} true if x is a transit value, false otherwise.
     */
    transit.isTaggedValue =  types.isTaggedValue;

    /**
     * Create a transit link.
     * @method transit.link
     * @param {com.cognitect.transit.MapLike} m
     *     A transit map which must contain at a minimum the following keys:
     *     href, rel. It may optionally include name, render, and prompt. href
     *     must be a transit.uri, all other values are strings, and render must
     *     be either "image" or "link".
     * @return {Object} A transit link.
     */
    transit.link = types.link;

    /**
     * Test if an object is a transit link.
     * @method transit.isLink
     * @param {*} x
     *     Any JavaScript object.
     * @return {boolean} true if x is a transit link, false otherwise.
     */
    transit.isLink = types.isLink;

    /**
     * Compute the hashCode for any JavaScript object that has been
     *    extend to transit's equality and hashing protocol. JavaScript
     *    primitives and transit value are already extended to this protocol.
     *    Custom types may be extended to the protocol via transit.extenToEQ.
     * @method transit.hash
     * @param {*} x
     *    Any JavaScript object that has been extended to transit's equality
     *    and hashing protocol.
     * @return {number} Returns JavaScript number - semantically a 32bit integer.
     */
    transit.hash = eq.hashCode;

    /**
     * Compute the hashCode for JavaScript map-like types - either a JavaScript
     *    object or a JavaScript object that implements ES6 Map forEach.
     * @method transit.hashMapLike
     * @param {Object|com.cognitect.transit.MapLike} x
     *    A plain JavaScript Object or Object that implements ES6 Map forEach.
     * @return {number} Returns JavaScript number - semantically a 32bit integer.
     */
    transit.hashMapLike = eq.hashMapLike;

    /**
     * Compute the hashCode for JavaScript array-like types - either a JavaScript
     *    array or a JavaScript object that implements Array forEach.
     * @method transit.hashArrayLike
     * @param {Object} x
     *    A JavaScript Array or Object that implements Array forEach.
     * @return {number} Returns JavaScript number - semantically a 32bit integer.
     */
    transit.hashArrayLike = eq.hashArrayLike;

    /**
     * Test whether two JavaScript objects represent equal values. The
     *    objects to be tested should be extended to transit's equality
     *    and hasing protocol. JavaScript natives and transit value have
     *    already been extended to the protocol, including objects and
     *    arrays.  Also transit maps and JavaScript objects may be
     *    compared for equality. Custom types may be extended via
     *    transit.extendToEQ.
     * @param {*} x
     *     A JavaScript object
     * @param {*} y
     *     A JavaScript object
     * @return {Boolean} true if the x and y are equal, false otherwise.
     */
    transit.equals = eq.equals;

    /**
     * Extend an object to hashing and equality required by
     *     transit maps and sets. Only required for custom
     *     types, JavaScript primitive types and transit
     *     types are handled.
     * @method transit.extendToEQ
     * @param {*} x
     *     A JavaScript object, will be mutated.
     * @param {{hashCode: function(), equals: function(*,*):boolean}}
     *     A JavaScript object supplying `hashCode` and `equals`
     *     implementations
     * @return {*} x
     * @example
     *     transit.extendToEq(Point.protototype, {
     *         hashCode: function() {
     *             var bits = (this.x | 0) ^ ((this.y | 0) * 31);
     *             return bits ^ (bits >>> 32);
     *         },
     *         equals: function(other) {
     *             return this.x == other.x && this.y == other.y;
     *         }
     *     });
     */
    transit.extendToEQ = eq.extendToEQ;

    /**
     * Convert a transit map instance into a JavaScript Object.
     * Throws if the map has keys which have no string representation.
     * @method transit.mapToObject
     * @param {com.cognitect.transit.MapLike} m
     *     a transit map
     * @return {Object} a JavaScript Object
     */
    transit.mapToObject = function(m) {
        var ret = {};
        m.forEach(function(v, k) {
            if(typeof k !== "string") {
                throw Error("Cannot convert map with non-string keys");
            } else {
                ret[k] = v;
            }
        });
        return ret;
    };

    /**
     * Convert a POJO into a transit map.
     * @method transit.objectToMap
     * @param {Object} obj
     *     a JavaScript Object
     * @return {com.cognitect.transit.MapLike} a transit map
     */
    transit.objectToMap = function(obj) {
        var ret = transit.map();
        for(var p in obj) {
            if(obj.hasOwnProperty(p)) {
                ret.set(p, obj[p]);
            }
        }
        return ret;
    };

    /**
     * Construct a Transit JSON decoder.
     * @method transit.decoder
     * @param {Object} opts
     *     options to the decoder. Can include map of
     *     handlers.
     * @return {com.cognitect.transit.impl.decoder.Decoder} a Transit JSON decoder
     * @example
     *     var decoder = transit.decoder();
     *     var x = decoder.decode(json, transit.readCache());
     */
    transit.decoder = decoder.decoder;

    /**
     * Construct a Transit read cache
     * @method transit.readCache
     * @return {com.cognitect.transit.caching.ReadCache} a Transit read cache
     */
    transit.readCache = caching.readCache;

    /**
     * Construct a Transit write cache
     * @method transit.writeCache
     * @return {com.cognitect.transit.caching.WriteCache} a Transit write cache
     */
    transit.writeCache = caching.writeCache;

    transit.UUIDfromString = types.UUIDfromString;
    transit.randomUUID = util.randomUUID;
    transit.stringableKeys = writer.stringableKeys;

    if(TRANSIT_BROWSER_TARGET) {
        goog.exportSymbol("transit.reader",         transit.reader);
        goog.exportSymbol("transit.writer",         transit.writer);
        goog.exportSymbol("transit.makeBuilder",    transit.makeBuilder);
        goog.exportSymbol("transit.makeWriteHandler", transit.makeWriteHandler);
        goog.exportSymbol("transit.date",           types.date);
        goog.exportSymbol("transit.integer",        types.intValue);
        goog.exportSymbol("transit.isInteger",      types.isInteger);
        goog.exportSymbol("transit.uuid",           types.uuid);
        goog.exportSymbol("transit.isUUID",         types.isUUID);
        goog.exportSymbol("transit.bigInt",         types.bigInteger);
        goog.exportSymbol("transit.isBigInt",       types.isBigInteger);
        goog.exportSymbol("transit.bigDec",         types.bigDecimalValue);
        goog.exportSymbol("transit.isBigDec",       types.isBigDecimal);
        goog.exportSymbol("transit.keyword",        types.keyword);
        goog.exportSymbol("transit.isKeyword",      types.isKeyword);
        goog.exportSymbol("transit.symbol",         types.symbol);
        goog.exportSymbol("transit.isSymbol",       types.isSymbol);
        goog.exportSymbol("transit.binary",         types.binary);
        goog.exportSymbol("transit.isBinary",       types.isBinary);
        goog.exportSymbol("transit.uri",            types.uri);
        goog.exportSymbol("transit.isURI",          types.isURI);
        goog.exportSymbol("transit.map",            types.map);
        goog.exportSymbol("transit.isMap",          types.isMap);
        goog.exportSymbol("transit.set",            types.set);
        goog.exportSymbol("transit.isSet",          types.isSet);
        goog.exportSymbol("transit.list",           types.list);
        goog.exportSymbol("transit.isList",         types.isList);
        goog.exportSymbol("transit.quoted",         types.quoted);
        goog.exportSymbol("transit.isQuoted",       types.isQuoted);
        goog.exportSymbol("transit.tagged",         types.taggedValue);
        goog.exportSymbol("transit.isTaggedValue",  types.isTaggedValue);
        goog.exportSymbol("transit.link",           types.link);
        goog.exportSymbol("transit.isLink",         types.isLink);
        goog.exportSymbol("transit.hash",           eq.hashCode);
        goog.exportSymbol("transit.hashMapLike",    eq.hashMapLike);
        goog.exportSymbol("transit.hashArrayLike",  eq.hashArrayLike);
        goog.exportSymbol("transit.equals",         eq.equals);
        goog.exportSymbol("transit.extendToEQ",     eq.extendToEQ);
        goog.exportSymbol("transit.mapToObject",    transit.mapToObject);
        goog.exportSymbol("transit.objectToMap",    transit.objectToMap);
        goog.exportSymbol("transit.decoder",        decoder.decoder);
        goog.exportSymbol("transit.UUIDfromString", types.UUIDfromString);
        goog.exportSymbol("transit.randomUUID",     util.randomUUID);
        goog.exportSymbol("transit.stringableKeys", writer.stringableKeys);
        goog.exportSymbol("transit.readCache",      caching.readCache);
        goog.exportSymbol("transit.writeCache",     caching.writeCache);
    }

    if(TRANSIT_NODE_TARGET) {
        module.exports = {
            reader:         transit.reader,
            writer:         transit.writer,
            makeBuilder:    transit.makeBuilder,
            makeWriteHandler: transit.makeWriteHandler,
            date:           types.date,
            integer:        types.intValue,
            isInteger:      types.isInteger,
            uuid:           types.uuid,
            isUUID:         types.isUUID,
            bigInt:         types.bigInteger,
            isBigInt:       types.isBigInteger,
            bigDec:         types.bigDecimalValue,
            isBigDec:       types.isBigDecimal,
            keyword:        types.keyword,
            isKeyword:      types.isKeyword,
            symbol:         types.symbol,
            isSymbol:       types.isSymbol,
            binary:         types.binary,
            isBinary:       types.isBinary,
            uri:            types.uri,
            isURI:          types.isURI,
            map:            types.map,
            isMap:          types.isMap,
            set:            types.set,
            isSet:          types.isSet,
            list:           types.list,
            isList:         types.isList,
            quoted:         types.quoted,
            isQuoted:       types.isQuoted,
            tagged:         types.taggedValue,
            isTaggedValue:  types.isTaggedValue,
            link:           types.link,
            isLink:         types.isLink,
            hash:           eq.hashCode,
            hashArrayLike:  eq.hashArrayLike,
            hashMapLike:    eq.hashMapLike,
            equals:         eq.equals,
            extendToEQ:     eq.extendToEQ,
            mapToObject:    transit.mapToObject,
            objectToMap:    transit.objectToMap,
            decoder:        decoder.decoder,
            UUIDfromString: types.UUIDfromString,
            randomUUID:     util.randomUUID,
            stringableKeys: writer.stringableKeys,
            readCache:      caching.readCache,
            writeCache:     caching.writeCache
        };
    }
});
