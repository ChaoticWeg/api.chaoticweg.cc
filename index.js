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
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});
