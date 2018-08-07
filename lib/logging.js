const morgan = require('morgan');

module.exports = (() => {
    if (process.env.NODE_ENV == 'production') {
        return morgan('common');
    } else {
        return morgan('dev');
    }
})();
