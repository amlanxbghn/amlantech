import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaGitAlt, FaHtml5, FaJava, FaLinux, FaNode, FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiExpress, SiJavascript, SiMysql, SiSpringboot, SiTailwindcss } from 'react-icons/si';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen p-24">
      <div className="h-[60vh] flex justify-center items-center p-14">
        <div className="flex w-[75%] justify-between">
          <div className="w-[40%]">
            Hi
          </div>
          <div className="w-[50%]">
            <p className='font-medium text-black text-[26px] leading-[38px]'>
                Born in <a href="https://www.google.com/search?q=Assam" target="_blank" rel="noopener noreferrer">Assam</a>, and currently thriving in <a href="https://www.google.com/search?q=Bengaluru" target="_blank" rel="noopener noreferrer" className='underline'>Bengaluru</a>. I'm a sophomore at <a href="https://www.scaler.com/school-of-technology/" target="_blank" rel="noopener noreferrer" className='underline'>Scaler School of Technology</a>, with 1+ years of experience as a <span className='underline'>developer</span>.
            </p>
            <p className='font-medium text-black text-[26px] leading-[38px] mt-6'>
                I enjoy creating impactful digital experiences and incorporating <span className='underline'>design</span> into my work. My focus is on making digital experiences that resonate with users and create lasting impressions.
            </p>  
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow items-center">
        <p className="text-center text-[20px] font-medium text-[#767676] leading-[28px]">
            Technical Skills & Frameworks:
        </p>
        <div className='flex-grow flex items-center justify-between w-[70%]'>
            <FaJava className='text-5xl'/>
            <SiJavascript className='text-5xl'/>
            <FaLinux className='text-5xl'/>
            <BiLogoMongodb className='text-5xl'/>
            <SiExpress className='text-5xl'/>
            <FaReact className='text-5xl'/>
            <FaNode className='text-5xl'/>
            <SiTailwindcss className='text-5xl'/>
            <RiNextjsLine className='text-5xl'/>
            <FaGitAlt className='text-5xl'/>
            <SiMysql className='text-5xl'/>
        </div>
      </div>
    </div>
  );
};

export default About;
