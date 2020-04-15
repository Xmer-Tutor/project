import React from 'react';
import Topics from './Topics';
import LoginPage from './LoginPage1';
import SignUp from './SignUp';
import SearchTopics from './SearchTopics';

const HomePagePanel = () => {
    return (
        <nav className="homepage-panel">
          <ul className="nav-links">

              <Topics />
              <SearchTopics />
              <LoginPage/>
              <SignUp/>
          </ul>
         
        </nav>
        );
      };
   
  export default HomePagePanel;
