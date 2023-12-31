import React from 'react';
import { BrowserRouter,Link,   Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';
import TableEmp from './pages/TableEmp';
import Project from './pages/Project';
import Task from './pages/Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
       
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/TableEmp" element={<TableEmp />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Task" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

