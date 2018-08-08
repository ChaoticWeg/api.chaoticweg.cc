var express  = require('express');
var bParser  = require('body-parser');
var middles  = require('./middleware');
var commands = require('./commands');

var slackApp = express();

slackApp.use(bParser.urlencoded({ extended: false }));
slackApp.use(middles.validateToken);

slackApp.post('/test', commands.load('test'));
slackApp.post('/roll', commands.load('roll'));

module.exports = slackApp;
