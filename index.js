require('dotenv').config();

var express = require('express');
var routes  = require('./routes');

var app     = express();

app.use('/slack', routes.slack);

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
