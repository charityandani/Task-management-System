
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Use Link instead of a regular anchor tag */}
      <Link to="/Home" className="site-title">
        Task Planner
      </Link>
      <ul>
        {/* Use Link for navigation instead of a regular anchor tag */}
        <li className="nav-item">
          <Link to="/LOGIN" className="login-link">
            Login
          </Link>
        </li>
        <li>
          {/* If this is a navigation button, you might want to wrap it with Link too */}
          <Link to="/Signup">
            <Button />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
