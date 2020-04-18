const uuid = require('uuid');
const userManager = require('./userManager');

const sessions = {};

const create = username => {
    const sid = uuid();
    const user = userManager.getUser(username);
    sessions[sid] = {
        ...user,
        sid,
        username
    }

    return sessions[sid];
}

const invalidSession = sid => !sid || !sessions[sid]
const getSession = sid => {
    const session = sessions[sid];
    const user = userManager.getUser(session.username);

    return {
        ...session,
        ...user
    }
}

const clear = sid => delete sessions[sid];

const addToCart = (sid, id) => {
    const session = getSession(sid, id)

    userManager.addToCart(session.username, id);
}

module.exports = {
    addToCart,
    clear,
    create,
    getSession,
    invalidSession,
}