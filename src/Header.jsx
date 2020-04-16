import React from 'react';
import './header.css';

const Header = ({ user, logout }) => {
    const isLoggedIn = user.username;

    return (
        <div className="Application-header">
            <div>
                <img className="company-logo" border="0" src={require('./images/logo.jpeg')} alt="logo" width="40" height="40"/>
                <h1 className="company-name">Tek Learning</h1>
            </div>

            {isLoggedIn && (
                <div>
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