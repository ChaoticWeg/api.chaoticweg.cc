var request = require('request');

module.exports = (url, data) => {
    let options = { url: url, json: true, body: data };
    return request.post(options);
};
