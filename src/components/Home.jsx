import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="ram w-[80vw] mx-auto">
        <h1 className='text-[70px] leading-[84px] w-[75%]'>
            Currently working on scaling my Agency&nbsp;
            <a href="/" target="_blank" rel="noopener noreferrer" className='underline'>
                <span className='text-[#767676]'>
                    ComingSoon
                </span>
            </a>
            , and growing my&nbsp;
            <a href="/" target="_blank" rel="noopener noreferrer" className='underline'>
                Saas&nbsp;
                <span className='text-[#767676]'>
                    ComingSoon.io
                </span>
            </a>
            .
        </h1>
      </div>
    </div>
  );
};

export default Home;
