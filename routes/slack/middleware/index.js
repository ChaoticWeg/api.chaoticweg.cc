var exports = module.exports = {};

exports.validateToken = (req, res, next) => {
    if (!process.env.SLACK_TOKEN) {
        return res.sendStatus(500);
    }

    if (!req.body || !req.body.token) {
        return res.sendStatus(400);
    }

    if (req.body.token !== process.env.SLACK_TOKEN) {
        return res.sendStatus(401);
    }

    // ok, maybe
    return next();
};

