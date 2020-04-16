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
const getSession = sid => sessions[sid];

const clear = sid => delete sessions[sid];

module.exports = {
    clear,
    create,
    getSession,
    invalidSession
}