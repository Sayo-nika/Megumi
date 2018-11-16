/**
 * @file Request.js
 * @description Homebrewn zero-dep Request helper.
 * @author Capuccino
 * @copyright 2018
 * @license Apache-2.0
 */
const https = require("https");
const ALLOWED_METHODS = ["POST", "GET", "PATCH", "DELETE"];

/**
 * Handles HTTP/S queries and returns a Promise.
 * @param {String} method the type of HTTP method to use. Valid options are POST, GET, PATCH, and DELETE.
 * @param {String} url the URL to use. Must be a valid URL.
 * @param {Object} options options to pass to the request. This is where your headers go as well.
 * @param {Object} payload the JSON payload.
 * @returns {Promise<Object>} the response from origin.
 */
module.exports = function(method, url, options={}, payload) {
    return new Promise((resolve, reject) => {
        // sanity check for HTTP/S queries
        if (!ALLOWED_METHODS.includes(method)) throw new Error("Method is not a valid HTTP/S Query.");

        let req = https.request(Object.assign(URL.parse(url), options, {method}), res => {
            let chunked = "";

            if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));

            res.setEncoding("utf8");
            res.on("data", chunk => chunked += chunk);
            res.on("error", reject);
            res.on("end", () => {
                let val;

                try {
                    val = JSON.parse(chunked);
                } catch(e) {
                    return resolve(chunked);
                }

                if (val.error) return reject(new Error(val.error));
                else return resolve(val);
            });
        });

        req.on("error", reject);
        if (payload) req.write(payload);
        req.end();
    });
};