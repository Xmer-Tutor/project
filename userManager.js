const users = {};

const getUser = username => {
    const user = users[username];


    if(user) {
        return user;
    }

    const defaultUser = {
        cart: [],
        purchased: []
    }

    users[username] = {...defaultUser};

    return users[username];
};

const addToCart = (username, id) => {
    const cart = users[username].cart;
    cart.push(id);
    return cart;
};

const checkout = username => {
    const cart = users[username].cart;
    users[username].purchased = [
        ...users[username].purchased,
        ...cart
    ];
    users[username].cart = [];
    return users[username];
};

module.exports = {
    addToCart,
    checkout,
    getUser
}