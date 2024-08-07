// src/Components/Login/LoginPage.js

import React, { Component } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/LoginPage.css';
import Navigation from '../Navigation/NavigationPage';
import Footer from '../Footer/FooterPage';

function withNavigate(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  // Handle change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Submit handle
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { navigate } = this.props;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Login successful:', responseData);
        localStorage.setItem('username', username); // Store username in local storage
        this.setState({ error: 'Login successful' });
        alert('Login successful');
        navigate('/home'); // Redirect to the home page
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        this.setState({ error: 'Login failed' });
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.setState({ error: 'Error during login' });
      alert('Error during login');
    }
  };

  render() {
    return (
      <div>
      <Navigation />
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <p>New user? <Link to="/">Register here</Link></p>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default withNavigate(Login);
