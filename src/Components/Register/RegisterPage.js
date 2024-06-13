import React, { Component } from 'react';
import '../Register/RegisterPage.css';

//class for register page
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  // handle change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
// submit handle
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = this.state;
  
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        if (response.ok) {
          // Registration successful
          const responseData = await response.json();
          console.log('Registration successful:', responseData);
          this.setState({ error: 'Registration successful' });
        } else {
          // Registration failed
          const errorData = await response.json();
          console.error('Registration failed:', errorData);
          this.setState({ error: 'Registration failed' });
        }
      } catch (error) {
        console.error('Error during registration:', error);
        this.setState({ error: 'Error during registration' });
      }
    }
  };
  

  render() {
    return (
      <div className="Register">
        <h2>Register</h2>
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
