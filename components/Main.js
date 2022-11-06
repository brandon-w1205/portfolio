import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white'>{'ONE STEP AT A TIME'}</p>
                <h1 className='py-4 text-white'>
                    Hi, I&apos;m <span className='text-emerald-400'>Brandon</span>
                </h1>
                <h1 className='py-4 text-white'>
                    A Full-Stack Developer
                </h1>
                <p className='py-4 text-white max-w-[70%] m-auto'>
                    I&apos;m a full-stack developer with an emphasis on front-end development and love working with javascript and apis. Looking forward to building foundations with you, check out my links below!
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    {/* add links for icons */}
                    <div className='rounded-full p-6 outline cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full p-6 outline cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full p-6 outline cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full p-6 outline cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsFillPersonLinesFill />
                    </div>

                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Main