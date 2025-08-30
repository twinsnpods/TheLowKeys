import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';
import MyMusic from './components/MyMusic';
import Videos from './components/Videos';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Hero/>
        <LocationInfo/>
        <MyMusic/>
        <Videos/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
