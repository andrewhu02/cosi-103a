// Header.js
import React from 'react';
import './Header.css'; // Import the stylesheet
// eslint-disable-next-line
import MainNavigation from '../navigation/MainNavigation';
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-text">A Simple Recipes App</h1>
    </div>
  );
};

export default Header;
