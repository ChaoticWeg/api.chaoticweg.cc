var express  = require('express');
var bParser  = require('body-parser');
var middles  = require('./middleware');
var commands = require('./commands');

var slackApp = express();

slackApp.use(bParser.urlencoded({ extended: false }));
slackApp.use(middles.validateToken);

// load all commands
var cmds = commands.names();
for (var i = 0; i < cmds.length; i++) {
    let appPath = cmds[i].replace('.js', '');
    console.log('loading slack command: /' + appPath + ' --> ' + cmds[i]);
    slackApp.post('/' + appPath, commands.load(cmds[i]));
}

module.exports = slackApp;
