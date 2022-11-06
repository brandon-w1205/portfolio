import React from 'react'
import Image from 'next/image'
import typing from '../public/assets/typing.webp'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-emerald-400'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left-side */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
                        <div className='lg:p-4 h-full rounded-xl'>
                            <div className='hover:scale-105 ease-in duration-300'>
                                <Image className='rounded-xl' src={typing} alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2'>Brandon Wu</h2>
                                <p>Full-Stack Developer</p>
                                <p className='py-4'>Looking for a full-time position, send me a message and I&apos;ll respond asap!</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right-side */}
                    <div className='col-span-3 w-full h-auto shadow-md shadow-slate-500 bg-zinc-700 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='text-black border-2 rounded-lg p-2 flex border-gray-300' type='text' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-2 flex border-gray-300' type='text' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type='email' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type='text' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4 shadow-md shadow-slate-500'>Send Message</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact