import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';
import MyMusic from './components/MyMusic';
import Videos from './components/Videos';
import Apparel from './components/Apperal';
import GigGuide from './components/GigGuide';
import Booking from './components/Booking';
import SocialFeed from './components/SocialFeed';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Hero/>
        <LocationInfo/>
        <MyMusic/>
        <Videos/>
        <Apparel/>
        <GigGuide/>
        <Booking/>
        <SocialFeed/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
