import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <h1>KodNest Technologies</h1>
      <Navbar/>
      <Routes>
        <Route path="/home" element ={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}
