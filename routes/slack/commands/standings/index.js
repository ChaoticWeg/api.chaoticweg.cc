var fetch   = require('./fetch.js');
var render  = require('./render.js');
var respond = require('./respond.js');
var help    = require('./help');

module.exports = (req, res) => {
    if (!req.body.text || (
        req.body.text.toUpperCase() !== 'AL' &&
        req.body.text.toUpperCase() !== 'NL' &&
        req.body.text.toUpperCase() !== 'HELP'
    )) {
        res.send('Oops! Please specify whether you want AL or NL standings. Use `/standings help` if you need help.');
        return res.end();
    } else {
        if (req.body.text.toUpperCase() === 'HELP') {
            return help(req, res);
        }

        let league = req.body.text.toUpperCase() === 'AL' ? '103' : '104';
        fetch(league, (err, data) => {
            if (err) {
                res.status(500);
                return res.end();
            }

            let standings = render(data);

            if (req.body.response_url) {
                res.status(200);
                res.end();
                respond(req.body.response_url, standings);
            } else {
                res.send(standings);
            }
        });
    }
};
