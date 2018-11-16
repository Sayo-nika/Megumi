/**
 * @file Handler.js
 * @description Main class file for the API.
 * @author Capuccino
 * @copyright 2018
 * @license Apache-2.0
 */

const request = require("./Request");

/**
 * Main class that handles Queries to Sayonika
 */
module.exports = class {
    /**
     * 
     * @param {String} token your API token.
     * @see {link} https://docs.sayonika.moe/developers 
     */
    constructor(token) {
        this.token = token;
    }

    /**
     * Gets a specific mod
     * @param {String} id the ID for the mod
     * @returns {Promise<Object>} the response from the REST. 
     */
    getMod(id) {
        return new Promise((resolve, reject) => {
            request("GET", `https://sayonika.moe/api/v1/mods/${id}`, {headers: {Token: this.token}}).then(res => {
                resolve(res.body);
            }).catch(reject);
        });
    }

    /**
     *  Gets a specific user using IDs
     * @param {String} id the user ID of the user.
     * @returns {Promise<Object>} the response from REST.
     */
    getUser(id) {
        return new Promise((resolve, reject) => {
            request("GET", `https://sayonika.moe/api/v1/users/${id}`, {headers: {Token: this.token}}).then(res => {
                resolve(res.body);
            }).catch(reject);
        });
    }
};