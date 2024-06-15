//Write code for navigation

import React from 'react';
import '../Navigation/NavigationPage.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src="src\Components\Navigation\logo.jpeg" alt="Crop Delight Logo" className="logo" />
          <span className="brand-name">CROP DELIGHT</span>
        </div>
        <div className="navbar-right">
          
          <a href="/login" className="login">Login</a>
          
        </div>
      </nav>
    );
  }
}

export default Navigation;


