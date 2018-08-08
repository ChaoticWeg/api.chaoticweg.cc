const DEFAULT_PORT = 3000;
const ALLOWED_METHODS = [ 'GET', 'POST' ];

require('dotenv').config();

var express = require('express');
var routes  = require('./routes');

var app     = express();

app.set('port', process.env.PORT || DEFAULT_PORT);

// middleware
app.use(require('./lib/logging.js'));
app.use(require('./lib/restrict-methods.js'));

// routes
app.get('*', (req, res) => { res.redirect(301, '//chaoticweg.cc'); });
app.use('/slack', routes.slack);

// hey! listen!
app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'));
});

