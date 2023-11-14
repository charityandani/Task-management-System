// Sign.js

import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './SignupPage.css';

const Sign = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('First Name:', firstName);
    console.log('Surname:', surname);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>

        <div className="social-login">
          <p>Signup with:</p>
          <div className="social-icons">
            <FaGoogle className="google-icon" />
            <FaFacebook className="facebook-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
