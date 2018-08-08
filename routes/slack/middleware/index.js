var exports = module.exports = {};

exports.validateToken = (req, res, next) => {
    if (!process.env.SLACK_TOKEN) {
        res.status(500);
        return next("Unknown token");
    }

    if (!req.body || !req.body.token) {
        res.status(400);
        return next("Missing token");
    }

    if (req.body.token !== process.env.SLACK_TOKEN) {
        res.status(401);
        return next("Bad token");
    }

    // ok, maybe
    return next();
};

