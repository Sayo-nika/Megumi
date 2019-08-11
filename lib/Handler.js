/**
 * @file Handler.js
 * @description Main class file for the API.
 * @author Capuccino
 * @copyright 2018
 * @license Apache-2.0
 */

const request = require("./Request");

const API_BASE_URL = "https://sayonika.maidcafe.cf/api/v1/";

/**
 * Main class that handles Queries to Sayonika
 */
module.exports = class {
    /**
     *
     * @param {String} token your API Authorization.
     * @param {String} api_base_url the base URL for api calls
     * @see {link} https://sayonika.maidcafe.cf/developers
     */
    constructor(token, api_base_url=API_BASE_URL) {
        this.token = token;
        this.api_base_url = api_base_url;
    }

    /**
     * Gets a specific mod
     * @param {String} id the ID for the mod
     * @returns {Promise<Object>} the response from the REST. 
     */
    getMod(id) {
        return new Promise((resolve, reject) => {
            request("GET", `${this.api_base_url}mods/${id}`, {headers: {Authorization: this.token}}).then(res => {
                resolve(res.body);
            }).catch(reject);
        });
    }

    /**
     * Gets a paginated view of all the mods stored in the database.
     * @param {Number} page the page you need to open.
     * @returns {Promise<Object>} the verified mods listed on the page. 
     */
    getAllMods(page) {
        return new Promise((resolve, reject) => {
            request("GET", `${this.api_base_url}mods?page=${page}`, {headers: {Authorization: this.token}}).then(res => {
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
            request("GET", `${this.api_base_url}users/${id}`, {headers: {Authorization: this.token}}).then(res => {
                resolve(res.body);
            }).catch(reject);
        });
    }

    /**
     * Gets a paginated view of all the users registered.
     * @param {Number} page the page you need to open.
     * @returns {Promise<Object>} the registered users listed on the page. 
     */
    getAllUsers(page) {
        return new Promise((resolve, reject) => {
            request("GET", `${this.api_base_url}users?page=${page}`, {headers: {Authorization: this.token}}).then(res => {
                resolve(res.body);
            }).catch(reject);
        });
    }
};