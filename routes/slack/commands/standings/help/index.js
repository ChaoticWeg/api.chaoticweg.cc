const path = require('path');
const fs   = require('fs');

function read(callback) {
    let helpfile = path.join(__dirname, 'help.md');
    fs.readFile(helpfile, 'utf8', (err, data) => err ? callback(err, null) : callback(null, data));
};

module.exports = (req, res) => {

    read((err, text) => {
        if (err) {
            res.status(500);
            return res.send("Unable to read help text from file. ~I'm literally useless rn.~");
        }

        res.send(text);
    });

};
