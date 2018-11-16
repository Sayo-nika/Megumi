const Handler = require("./lib/Handler");
const Request = require("./lib/Request");
const Terra = Handler;

Terra.Handler = Handler;
Terra.Request = Request;

module.exports = Terra;