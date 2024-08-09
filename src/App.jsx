import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Connect from './components/Connect';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Home /> */}
      <About />
      <Works />
      {/* <Connect /> */}
    </div>
  );
}

export default App;
