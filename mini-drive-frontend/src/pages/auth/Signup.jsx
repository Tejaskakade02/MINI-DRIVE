import React, { useState } from 'react';
import './Signup.css'; // import the CSS file

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
  };

  return (
    <div className="signup-container">
      
      {/* Gradient Circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>

      {/* Left Section */}
      <div className="left-section">
        <h1 className="headline">Register Now...</h1>
        <p className="tagline">Store. Share. Organize.</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="signup-card">
          <h2>Signup</h2>
          <p className="subtitle">Just some details to get you in.!</p>

          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="text" name="emailOrPhone" placeholder="Email / Phone" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

            <button type="submit">Signup</button>
          </form>

          <div className="footer-links">
            <p>Already Registered? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
