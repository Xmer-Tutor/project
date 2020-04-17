const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const PORT = 5000;

const routes = require('./routes');

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./build'));

app.get('/_api/session', routes.session.status);
app.post('/_api/session', routes.session.login);
app.delete('/_api/session', routes.session.logout);

app.get('/_api/courses', routes.courses.all);

app.put('/_api/cart/:id', routes.cart.addToCart);
app.get('/_api/cart/checkout', routes.cart.checkout);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );
