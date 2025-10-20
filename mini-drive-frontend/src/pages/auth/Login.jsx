import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css'; // separate file for color tweaks

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // TODO: integrate with backend /auth/login
  };

  return (
    <div className="login-container">
      {/* Gradient Circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>

      {/* Left Section */}
      <div className="left-section">
        <h1 className="headline">Welcome Back .!</h1>
        <p className="tagline">Continue Your Work.</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-card">
          <h2>Login</h2>
          <p className="subtitle">Glad you're back.!</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="remember-section">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="footer-links">
            <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
