// Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hometext from '../components/Hometext';
import Getstarted from '../components/Getstarted';
import Taskpic from '../components/Taskpic';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hometext/>
      <Getstarted/>
      <Taskpic/>
      
      
    </>
  );
}
