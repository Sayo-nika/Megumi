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
const handler = new Terra(config);

if (!fs.existsSync("./config.json")) config = {token: process.env.TERRA_TOKEN};
else config = require("./config.json");

console.log("Beginning tests for Terra.");
console.log(`It worked if it ends with exit 0 \n\n`);

(async () => {
    console.log("Testing Terra#getUser");
    let user = handler.getUser("");
    console.log(user);
    console.log(`\n\n`);

    console.log("Testing Terra#getMod");
    let mod = handler.getMod("");
    console.log(mod);
    console.log(`\n\n`);
})().then(() => {
    console.log("All tests completed.");
    process.exit(0);
}).catch(err => {
    console.log(`Tests failed. Backlog: \n\n ${err.stack}`);
    process.exit(1);
});