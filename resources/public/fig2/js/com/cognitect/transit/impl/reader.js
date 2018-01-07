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

goog.provide("com.cognitect.transit.impl.reader");
goog.require("com.cognitect.transit.impl.decoder");
goog.require("com.cognitect.transit.caching");

goog.scope(function () {

    var reader  = com.cognitect.transit.impl.reader,
        decoder = com.cognitect.transit.impl.decoder,
        caching = com.cognitect.transit.caching;

    /**
     * A JSON unmarshaller
     * @constructor
     */
    reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {
        this.decoder = new decoder.Decoder(opts);
    };

    /**
     * @param {string} str a JSON string
     * @param {caching.ReadCache} cache a read cache
     * @returns {*}
     */
    reader.JSONUnmarshaller.prototype.unmarshal = function (str, cache) {
        return this.decoder.decode(JSON.parse(str), cache);
    };

    /**
     * A transit reader
     * @constructor
     * @param {reader.JSONUnmarshaller} unmarshaller
     * @param {Object=} options
     */
    reader.Reader = function Transit$Reader(unmarshaller, options) {
        this.unmarshaller = unmarshaller;
        this.options = options || {};
        this.cache = this.options["cache"] ? this.options["cache"] : new caching.ReadCache();
    };

    /**
     * @param {string} str a string to be read
     * @returns {*}
     */
    reader.Reader.prototype.read = function (str) {
        var ret = this.unmarshaller.unmarshal(str, this.cache)
        this.cache.clear();
        return ret;
    };
    reader.Reader.prototype["read"] = reader.Reader.prototype.read;

});
