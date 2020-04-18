import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ user, logout }) => {
    const isLoggedIn = user.username;

    return (
        <div className="Application-header">
            <div>
                <Link
                    to='/'
                >
                    <img className="company-logo" border="0" src={require('./images/logo.jpeg')} alt="logo" width="40" height="40"/>
                </Link>
                <h1 className="company-name">Tek Learning</h1>
            </div>

            {isLoggedIn && (
                <div>
                    <Link
                        to='/myLearning'
                    >
                        <h2>
                            My Learning
                        </h2>
                    </Link>
                    <Link
                        to='/cart'
                    >
                        <h2>
                            Cart
                        </h2>
                    </Link>
                    <h2>
                        {user.username}
                    </h2>
                    <button onClick={logout}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;