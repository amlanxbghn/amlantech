import React from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaGitAlt, FaHtml5, FaJava, FaLinux, FaNode, FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiExpress, SiJavascript, SiMysql, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import myImage from '../../assets/profilepic.jpg';
import './About.css';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen p-24">
      <div className="h-[60vh] flex justify-center items-center p-14">
        <div className="flex w-[75%] justify-between">
          
          <div className="w-[40%]">
          <div className="emoji absolute text-5xl">&#128075;</div>
            <div className="h-[90%] w-[65%] mx-auto transform border border-[#E5E5E5] shadow-lg" style={{ transform: "rotate(-5deg)" }}>
                <div className="m-3 h-[75%] bg-zinc-600">
                    <img src={myImage} alt="description" className="h-full w-full object-cover" />
                </div>
                <p className='text-center text-xl text-[#767676] font-caveat'>December 2023, Pondicherry</p>
            </div>
          </div>

          <div className="w-[50%]">
            <p className='font-medium text-black text-[26px] leading-[38px]'>
                Born in <a href="https://www.google.com/search?q=Assam" target="_blank" rel="noopener noreferrer">Assam</a>, and currently thriving in <a href="https://www.google.com/search?q=Bengaluru" target="_blank" rel="noopener noreferrer" className='underline'>Bengaluru</a>. I'm a sophomore at <a href="https://www.scaler.com/school-of-technology/" target="_blank" rel="noopener noreferrer" className='underline'>Scaler School of Technology</a> with 1+ years of experience as a <span className='underline'>developer</span>.
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
            <FaJava className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <SiJavascript className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <FaLinux className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <BiLogoMongodb className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <SiExpress className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <FaReact className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <FaNode className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <SiTailwindcss className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <RiNextjsLine className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <FaGitAlt className='text-5xl transition-transform duration-300 hover:scale-125'/>
            <SiMysql className='text-5xl transition-transform duration-300 hover:scale-125'/>
        </div>
      </div>
    </div>
  );
};

export default About;
