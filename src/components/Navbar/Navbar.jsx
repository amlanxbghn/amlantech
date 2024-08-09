import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="sticky top-[2.5vh] z-[999] p-[0.5vw] w-[80vw] flex items-center justify-between backdrop-blur-[7.5px] mx-auto rounded-full border border-[#E5E5E5] shadow-lg">
      <div className="ml-8 text-lg">
        <a href='/' className='text-[26px]'>Amlan Buragohain</a>
      </div>
      <div className="links">
        <h4><a href="#about" className="link">About</a></h4>
        <h4><a href="#works" className="link">Works</a></h4>
        <h4><a href="#blog" className="link">Blog</a></h4>
        <button className="px-3 py-2 ml-12 border border-black bg-black rounded-full text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
          Connect &nbsp;↗
        </button>
      </div>
    </nav>
  );
}

export default Navbar;