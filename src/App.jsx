import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

/* import { BrowserRouter as Router, Route } from 'react-router-dom' */

//components
import Navbar from './components/Navbar'
import Contents from './components/Contents'



//page
import Home from './Home'
import User from './User'
import Admin from './Admin';
import Owner from './Owner'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="owner" element={<Owner />} />  
      </Routes>
    </div>
  );
}

export default App
