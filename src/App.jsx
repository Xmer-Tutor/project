import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Header from './Header';
import Dashboard from './Dashboard';

import {
    fetchIsLoggedIn,
    fetchLogin,
    fetchLogout,

    fetchCourses
} from './api';

const App = () => {
		const [ username, setUsername ] = useState('');
        const [ isLoggedIn, login ] = useState(false);
        const [ courses, setCourses ] = useState([]);
        
        const user = {
            username
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

            return '/dashboard';
        }

        const onCourseFetchSuccess = ({ data }) => setCourses(data);

		const loginUser = username => fetchLogin(username).then(onLoginSuccess);
        
        const logout = () => fetchLogout().then(() => {
            setUsername('');
            login(false);
        });

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
                        key='dashboard'
                        path='/dashboard'
                    >
                        <Dashboard courses={ courses } />
                    </Route>
                ),
                (
                    <Route
                        exact
                        key='cart'
                        path='/cart'
                    >

                    </Route>
                )
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