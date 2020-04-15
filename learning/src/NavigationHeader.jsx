import React from 'react';
import LogoutButton from './LogoutButton';
import ShoppingCartButton from './ShoppingCartButton';
import Topics from './Topics';
import LoginPage1 from './LoginPage1';
import SignUp from './SignUp';
import SearchTopics from './SearchTopics';

const NavigationHeader = ({ userName, logoutUser, goToHomePage, goToOrdersPage }) => {
    return (
            <div className="navigation-header">
              
              <ul className="nav-links">
                <Topics />
                <SearchTopics /> 
                {/* <LoginPage1/> */}
                

                <ShoppingCartButton userName={ userName } goToOrdersPage={ goToOrdersPage } />
                <LogoutButton logoutUser={ logoutUser } />
              </ul>
            </div>  
  );
};

export default NavigationHeader;