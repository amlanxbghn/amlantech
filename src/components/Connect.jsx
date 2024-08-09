import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Connect = () => {
    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            <div className='w-[80vw] p-4'>
                <p className='text-[#767676] text-left'>Connect</p>
                <a href="mailto:amlanxconnect@gmail.com" className='text-xl hover:underline'>
                    amlanxconnect@gmail.com
                </a>
            </div>

            <div className='text-xl border-t border-[#E5E5E5] w-[80vw] p-4 flex justify-between transition-transform hover:scale-101 duration-300'>
                <a href="https://github.com/amlanxbghn" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <FaGithub />&nbsp;Github ( X )
                </a>
                <a href="https://github.com/amlanxbghn" target="_blank" rel="noopener noreferrer" className='text-[#767676] text-xl my-auto'>@amlanxbghn</a>
            </div>

            <div className='text-xl border-t border-[#E5E5E5] w-[80vw] p-4 flex justify-between transition-transform hover:scale-101 duration-300'>
                <a href="https://x.com/amlanxbghn" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <FaXTwitter />&nbsp;Twitter ( X )
                </a>
                <a href="https://x.com/amlanxbghn" target="_blank" rel="noopener noreferrer" className='text-[#767676] text-xl my-auto'>@amlanxbghn</a>
            </div>

            <div className='text-xl border-t border-[#E5E5E5] w-[80vw] p-4 flex justify-between transition-transform hover:scale-101 duration-300'>
                <a href="https://www.linkedin.com/in/amlan-buragohain-758557271/" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <FaLinkedinIn />&nbsp;Linkedin
                </a>
                <a href="https://www.linkedin.com/in/amlan-buragohain-758557271/" target="_blank" rel="noopener noreferrer" className='text-[#767676] text-xl my-auto'>@amlan-buragohain</a>
            </div>

            <div className='text-xl border-y border-[#E5E5E5] w-[80vw] p-4 flex justify-between transition-transform hover:scale-101 duration-300'>
                <a href="https://www.instagram.com/amlan.bghn/" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <FaInstagram />&nbsp;Instagram
                </a>
                <a href="https://www.instagram.com/amlan.bghn/" target="_blank" rel="noopener noreferrer" className='text-[#767676] text-xl my-auto'>@amlan.bghn</a>
            </div>

        </div>
    );
};

export default Connect;
