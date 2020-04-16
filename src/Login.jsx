import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';

const LoginPanel = ({ loginUser, user }) => {   
    const [ username, setUsername ]  = useState(user.username);
    const [ redirect, setRedirect ] = useState();

    const changeUsername = ({ target: { value }}) => setUsername(value);
    const login = () => loginUser(username).then(redirectPath => setRedirect(redirectPath));

    if(redirect) {
        return (
            <Redirect to={redirect} push />
        )
    }

    return (
        <div className="login-panel"> 
            <span>Login</span>
            <input
                value={username}
                type='text'
                onChange={changeUsername}
            />
            <button
                disabled={!username}
                onClick={login}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPanel;