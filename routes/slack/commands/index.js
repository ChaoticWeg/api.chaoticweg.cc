const path = require('path');
const glob = require('glob');

function searchAll() {
    let files = glob.sync('*.js', { cwd: __dirname });
    let dirs  = glob.sync('**/index.js', { cwd: __dirname }).map(x => path.dirname(x));

    dirs.splice(dirs.indexOf('.'), 1);

    // remove index.js
    while (files.indexOf('index.js') > -1)
        files.splice(files.indexOf('index.js'), 1);

    return files.concat(dirs);
};

function searchOne(name) {
    let results = glob.sync(name, { cwd: __dirname });
    return results.length > 0 ? results[0] : null;
};

exports.globAll = () => {
    return searchAll();
};

exports.names = () => {
    let names = searchAll();
    console.log(names);
    return names;
};

exports.load = (name) => {
    let found = searchOne(name);
    return found ? require('./' + found) : null;
};

