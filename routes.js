const sessionManager = require('./sessionManager');
const courses = require('./courses');

const sessionRoutes = {
    status: ( req, res ) => {
        const sid = req.cookies.sid;
        const invalidSession = sessionManager.invalidSession(sid);

        if(invalidSession) {
            res.clearCookie('sid');
            res.sendStatus(401);
            return;
        }

        res.status(200)
            .json({ data: sessionManager.getSession(sid) });
    },
    
    login: ( req, res ) => {
        const username = req.body.username;
        const session = sessionManager.create(username);
        res.cookie('sid', session.sid);

        res.status(200)
            .json({ data: session });
    },

    logout: ( req, res ) => {
        const sid = req.cookies.sid;
        sessionManager.clear(sid);

        res.clearCookie('sid');
        res.sendStatus(200);
    }
}

const courseRoutes = {
    all: ( req, res ) => {
        res.status(200)
            .json({ data: courses });
    }
}

module.exports = {
    courses: courseRoutes,
    session: sessionRoutes
}