require('dotenv').config();

var express = require('express');

var logging = require('./lib/logging.js');
var routes  = require('./routes');

var app     = express();

// middleware
app.use(logging);

// routes
app.use('/slack', routes.slack);

// hey! listen!
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
