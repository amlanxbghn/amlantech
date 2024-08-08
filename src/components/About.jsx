import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen p-24">
      <div className="h-[60vh] flex justify-center items-center p-14">
        <div className="flex w-[75%] justify-between">
          <div className="w-[40%]">
            Hi
          </div>
          <div className="w-[50%]">
            <p className='font-medium text-black text-[26px] leading-[38px]'>Born in <a href="https://www.google.com/search?q=Assam" target="_blank" rel="noopener noreferrer">Assam</a>, and currently thriving in <a href="https://www.google.com/search?q=Bengaluru" target="_blank" rel="noopener noreferrer" className='underline'>Bengaluru</a>, I am a sophomore at <a href="https://www.scaler.com/school-of-technology/" target="_blank" rel="noopener noreferrer" className='underline'>Scaler School of Technology</a>, with 1+ years of experience as a <span className='underline'>developer</span>.</p>
            <p className='font-medium text-black text-[26px] leading-[38px] mt-6'>I enjoy creating impactful digital experiences and incorporating <span className='underline'>design</span> into my work. My focus is on making digital experiences that resonate with users and create lasting impressions.</p>  
          </div>
        </div>
      </div>
      <div>
        <p className="h-[20vh] text-center text-[20px] font-medium text-[#767676] leading-[28px]">
            Technical Skills & Frameworks
        </p>
      </div>
    </div>
  );
};

export default About;
