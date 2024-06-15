import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Icon from '../../Images/melon.jpg';
import './NavigationPage.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/home" className="nav-link">
          <img src={Icon} alt="Crop Delight Logo" className="logo" />
          <span className="brand-name">CROP DELIGHT</span>
        </NavLink>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            {!location.pathname.includes('/add-product') && (
              <NavLink to="/add-product" className="nav-link">
                Add Product
              </NavLink>
            )}
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
