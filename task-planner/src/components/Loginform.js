import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './Loginform.css';


export default function Loginform()
{

return(

    <div className="login-container">
    <form className="login-form">
      <h2>Login</h2>
      <div className="social-login">
        <button className="google-button">
          <FaGoogle className="social-icon" />
          Login with Google
        </button>
        <button className="facebook-button">
          <FaFacebook className="social-icon" />
          Login with Facebook
        </button>
      </div>
      <div className="divider">or</div>
      <label>
        Email:
        <input type="email" placeholder="Enter your email" />
      </label>
      <label>
        Password:
        <input type="password" placeholder="Enter your password" />
      </label>
      <button type="submit">Login</button>
    </form>

    </div>

)

}

