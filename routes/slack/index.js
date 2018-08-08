var express  = require('express');
var bParser  = require('body-parser');
var middles  = require('./middleware');
var commands = require('./commands');

var slackApp = express();

slackApp.use(bParser.urlencoded({ extended: false }));
slackApp.use(middles.validateToken);

slackApp.post('/test', commands.test);
slackApp.post('/roll', commands.roll);

module.exports = slackApp;
