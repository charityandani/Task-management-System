
import React from 'react';
import { Link } from 'react-router-dom';

export default function GetStarted() {
  return (
    <Link to="/Signup">
      <button className="getstartedbtn">Get Started</button>
    </Link>
  );
}
