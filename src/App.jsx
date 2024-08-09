import React from 'react';
import Home from './components/Home';
import About from './components/About/About';
import Works from './components/Works';
import Connect from './components/Connect';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Works />
      <Connect />
      <Footer/>
    </div>
  );
}

export default App;
