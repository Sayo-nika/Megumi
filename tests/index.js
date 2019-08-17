/**
 * @file index.js
 * @description Unit Test for the Wrappers.
 * @author Capuccino
 * @copyright 2018
 * @license Apache-2.0
 */
const Terra = require("../");
const fs = require("fs");
let config;

if (!fs.existsSync("./config.json")) config = {token: process.env.TERRA_TOKEN, api_base_url: process.env.TERRA_URL};
else config = require("./config.json");

const handler = new Terra(config.token, config.api_base_url);

console.log("Beginning tests for Terra.");
console.log(`It worked if it ends with exit 0 \n\n`);

(async () => {
    console.log("Testing Terra#getUser");
    let user = await handler.getUser("");
    console.log(user);
    console.log(`\n\n`);

    console.log("Testing Terra#getMod");
    let mod = await handler.getMod("");
    console.log(mod);
    console.log(`\n\n`);
})().then(() => {
    console.log("All tests completed.");
    process.exit(0);
}).catch(err => {
    console.log(`Tests failed. Backlog: \n\n ${err.stack}`);
    process.exit(1);
});