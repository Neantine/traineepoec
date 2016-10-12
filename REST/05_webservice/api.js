var restify = require('restify');

var server = restify.createServer();

// load API resources
server.get('/health', require('./resources/health/get.health.js'));

module.exports = server;