const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const PORT = 5000;

const routes = require('./routes');

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./build'));

app.get('/session', routes.session.status);
app.post('/session', routes.session.login);
app.delete('/session', routes.session.logout);

app.get('/courses', routes.courses.all);

app.put('/cartApi/:id', routes.cart.addToCart);
app.delete('/cartApi/:id', routes.cart.removeFromCart);
app.get('/cartApi/checkout', routes.cart.checkout);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );
