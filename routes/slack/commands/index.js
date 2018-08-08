const path = require('path');
const glob = require('glob');

function search(name) {
    let results  = glob.sync(name + '.js', { cwd: __dirname });
    return results.length > 0 ? results[0] : null;
};

exports.load = (name) => {
    let found = search(name);
    return found ? require('./' + found) : null;
};
