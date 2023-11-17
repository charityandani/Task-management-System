import React from 'react';
import { BrowserRouter,Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
       
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

