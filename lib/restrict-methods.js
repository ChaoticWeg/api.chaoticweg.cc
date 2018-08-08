const ALLOWED_METHODS = [ 'GET', 'HEAD', 'POST' ];

module.exports = (req, res, next) => {
    return ALLOWED_METHODS.includes(req.method) ? next() : res.sendStatus(405);
};
