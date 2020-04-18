import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Header from './Header';
import Dashboard from './Dashboard';
import MyLearning from './MyLearning';
import CourseList from './CourseList';

import {
    fetchIsLoggedIn,
    fetchLogin,
    fetchLogout,

    fetchCourses,

    fetchAddToCart,
    fetchRemoveFromCart,
    fetchCheckout
} from './services';
import Cart from './Cart';

const App = () => {
    const [ username, setUsername ] = useState('');
    const [ isLoggedIn, login ] = useState(false);
    const [ courses, setCourses ] = useState([]);
    const [ cart, setCart ] = useState([]);
    const [ purchased, setPurchased ] = useState([]);
    
    const user = {
        username,
        cart,
        purchased
    };

    useEffect(() => {
        fetchIsLoggedIn()
            .then(onLoginSuccess);

        fetchCourses()
            .then(onCourseFetchSuccess);
    }, [])

    const onLoginSuccess = ({ data }) => {
        setUsername(data.username);
        login(true);
        setCart(data.cart);
        setPurchased(data.purchased);

        return '/';
    }

    const onCourseFetchSuccess = ({ data }) => setCourses(data);

    const loginUser = username => fetchLogin(username).then(onLoginSuccess);
    
    const logout = () => fetchLogout().then(() => {
        setUsername('');
        login(false);
        setCart([]);
    });

    const addToCart = id => {
        setCart([...cart, id]);
        fetchAddToCart(id);
    };

    const removeFromCart = id => {
        setCart(cart.filter(item => item !== id));
        fetchRemoveFromCart(id);
    }

    const checkout = () => {
        fetchCheckout()
            .then(onLoginSuccess);
    }

    const routes = [(
        <Route
            exact
            key='login'
            path='/login'
        >
            <Login
                loginUser={loginUser}
                user={user}
            />
        </Route>
    )]

    if(isLoggedIn) {
        routes.push(
            (
                <Route
                    exact
                    key='courseType'
                    path='/courseType/:typeIndex'
                    render={({ match }) => {
                        const typeIndex = match.params.typeIndex;
                        const courseType = courses[typeIndex];
                        if(!courseType) {
                            return;
                        }

                        return (
                            <CourseList
                                addToCart={addToCart}
                                courseType={courseType}
                                disabled={[
                                    ...cart,
                                    ...purchased
                                ]}
                            />
                        )
                    }}
                />
            ),
            (
                <Route
                    exact
                    key='myLearning'
                    path='/myLearning'
                >
                    <MyLearning
                        courses={courses}
                        items={purchased}
                    />
                </Route>
            ),
            (
                <Route
                    exact
                    key='cart'
                    path='/cart'
                >
                    <Cart
                        cartItems={cart}
                        checkout={checkout}
                        courses={courses}
                        removeFromCart={removeFromCart}
                    />
                </Route>
            ),
            (
                <Route
                    key='dashboard'
                    path='/'
                >
                    <Dashboard courses={ courses } />
                </Route>
            ),
        )
    }

    routes.push(
        <Route
            path='/'
            key='catchall'
        >
            <Login
                loginUser={loginUser}
                user={user}
            />
        </Route>
    )

    return (
        <Router>
            <Header user={user} logout={logout} />
            <Switch>
                {routes}
            </Switch>
        </Router>
    )
}

export default App;