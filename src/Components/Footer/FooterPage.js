// Footer.js
import React from 'react';
import '../Footer/FooterPage.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-section">
          <h3>PAYMENT METHODS</h3>
          <ul>
            <li>Debit/Credit card</li>
            <li>Google pay</li>
            <li>Phone pay</li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li>Services</li>
            <li>Products</li>
            <li>FAQ's</li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>SOCIAL MEDIA</h3>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li>+1567-345-897</li>
            <li>conestogacollege,milton</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© Copyright , 2024 email: cropdelight@gmail.com</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;