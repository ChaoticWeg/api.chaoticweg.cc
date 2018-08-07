const DEFAULT_PORT = 3000;

require('dotenv').config();

var express = require('express');

var logging = require('./lib/logging.js');
var routes  = require('./routes');

var app     = express();

app.set('port', process.env.PORT || DEFAULT_PORT);

// middleware
app.use(logging);

// routes
app.get('*', (req, res) => { res.redirect(301, '//chaoticweg.cc'); });
app.use('/slack', routes.slack);

// hey! listen!
app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'));
});
