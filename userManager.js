const users = {};

const getUser = username => users[username];

module.exports = {
    getUser
}