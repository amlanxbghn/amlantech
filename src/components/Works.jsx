import React from 'react';

const Works = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">

            <h1 className='font-medium text-black text-[44px] text-center'>
                Projects
            </h1>

            <div className="flex h-[50vh] w-[50vw] p-8 mt-12 border border-[#E5E5E5] rounded-3xl shadow-lg">
                <div className="flex-1 flex flex-col">
                    <div>
                        <h1 className='text-[26px]'>broiscooked.com</h1>
                        <p className='text-[#767676]'>August, 2024</p>
                    </div>
                    <div className="flex-1 mt-10 w-[75%] overflow-auto">
                        <p className='text-[#767676] text-[20px]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nisi molestiae sed, aliquid, architecto hic expedita reiciendis voluptate ea consequatur repellendus commodi error.
                        </p>
                    </div>
                    <div>
                        <button className='border rounded-full border-zinc-400 p-2'>
                            Visit website ↗
                        </button>
                        <button className='ml-5'>
                            Github ↗
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="" alt="image" />
                </div>
            </div>

            <div className="flex h-[50vh] w-[50vw] p-8 mt-12 border border-[#E5E5E5] rounded-3xl shadow-lg">
                <div className="flex-1 flex flex-col">
                    <div>
                        <h1 className='text-[26px]'>Coming soon</h1>
                        <p className='text-[#767676]'>Coming soon...</p>
                    </div>
                    <div className="flex-1 mt-10 w-[75%] overflow-auto">
                        <p className='text-[#767676] text-[20px]'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi laudantium molestias laboriosam dicta non distinctio deserunt vero repellat iusto! Debitis optio accusantium magnam?
                        </p>
                    </div>
                    <div>
                        <button className='border rounded-full border-zinc-400 p-2'>
                            Visit website ↗
                        </button>
                        <button className='ml-5'>
                            Github ↗
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="" alt="image" />
                </div>
            </div>

            <div className="flex h-[50vh] w-[50vw] p-8 mt-12 border border-[#E5E5E5] rounded-3xl shadow-lg">
                <div className="flex-1 flex flex-col">
                    <div>
                        <h1 className='text-[26px]'>Coming soon</h1>
                        <p className='text-[#767676]'>Coming soon...</p>
                    </div>
                    <div className="flex-1 mt-10 w-[75%] overflow-auto">
                        <p className='text-[#767676] text-[20px]'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet autem atque sit adipisci libero praesentium provident distinctio dolorum. Incidunt totam accusantium non.
                        </p>
                    </div>
                    <div>
                        <button className='border rounded-full border-zinc-400 p-2'>
                            Visit website ↗
                        </button>
                        <button className='ml-5'>
                            Github ↗
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="" alt="image" />
                </div>
            </div>
            <a href='' className='flex font-medium text-black text-[26px] m-12'>
                <h2 className='underline'>View Practice Projects</h2>
                <h2>&nbsp;↗</h2>
            </a>
        </div>
    );
};

export default Works;
