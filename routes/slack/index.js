var express  = require('express');
var bParser  = require('body-parser');
var slackApp = express();

slackApp.use(bParser.urlencoded({ extended: false }));

slackApp.post('/weg', (req, res) => {
    res.send('hi');
});

module.exports = slackApp;
