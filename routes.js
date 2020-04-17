const sessionManager = require('./sessionManager');
const userManager = require('./userManager');
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

const cartRoutes = {
    addToCart: ( req, res ) => {
        const sid = req.cookies.sid;
        const id = req.params.id;
        const ses = sessionManager.getSession(sid);

        userManager.addToCart(ses.username, id)
        res.sendStatus(200);
    },
    
    checkout: ( req, res ) => {
        const sid = req.cookies.sid;
        const ses = sessionManager.getSession(sid);

        const user = userManager.checkout(ses.username)
        res.status(200)
            .json({ data: user });
    }
}

module.exports = {
    courses: courseRoutes,
    session: sessionRoutes,
    cart: cartRoutes
}