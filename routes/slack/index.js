var express  = require('express');
var bParser  = require('body-parser');
var middles  = require('./middleware');

var slackApp = express();

slackApp.use(bParser.urlencoded({ extended: false }));
slackApp.use(middles.validateToken);

slackApp.post('/test', (req, res) => {
    res.sendStatus(200);
});

module.exports = slackApp;
