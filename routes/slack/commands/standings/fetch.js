const request  = require('request');
const BASE_URL = 'https://statsapi.mlb.com/';

function options(league) {
    return {
        baseUrl : BASE_URL,
        url     : '/api/v1/standings',
        qs      : { 'leagueId' : league || '103,104', 'season' : '2018' },
        json    : true
    };
};

function fetchAll(callback) {
    return fetchLeague('103,104', callback);
};

function fetchLeague(league, callback) {
    let opt = options(league);
    request.get(opt, (err, res, body) => err ? callback(err, null) : callback(null, body));
};

module.exports = (league, callback) => league ? fetchLeague(league, callback) : fetchAll(callback);

