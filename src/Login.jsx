import React, { useState } from 'react';
import auth from './auth';
import { Redirect } from 'react-router-dom';
import './login.css';

const LoginPanel = ({ loginUser, user }) => {   
    const [ username, setUsername ]  = useState(user.username);
    const [ redirect, setRedirect ] = useState();
    const [ error, setError ] = useState('');

    const changeUsername = ({ target: { value }}) => setUsername(value);
    const login = () => {
        if(auth(username)) {
            return loginUser(username)
                .then(setRedirect)
                .catch(({ data }) => setError(data))
        }

        setError('Invalid Username');
    };

    if(redirect) {
        return (
            <Redirect to={redirect} push />
        )
    }

    return (
        <div className="login-panel"> 
            {error && (
                <div className='error'>
                    {error}
                </div>
            )}
            <div>
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
        </div>
    );
};

export default LoginPanel;