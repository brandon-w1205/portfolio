import React, { useState } from 'react'
import Image from 'next/image'
import typing from '../public/assets/typing.webp'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    const [message, setMessage] = useState('Send Message')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    return (
        <div id='contact' className='w-full lg:h-screen'>
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

                                {/* add links for icons */}
                                <div className='flex gap-x-5 justify-start py-4'>
                                    <a href='https://www.linkedin.com/in/brandonjwu/' target='blank'>
                                        <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href='https://github.com/brandon-w1205' target='blank'>
                                        <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right-side */}
                    {/* use mailTo form to redirect person to their email app w/ prepopulated info */}
                    <div className='col-span-3 w-full h-auto shadow-md shadow-slate-500 bg-zinc-700 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action={`mailto:bwu1205@gmail.com?subject=Contact Form Submission`} method='post' encType='text/plain'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='name' className='uppercase text-sm py-2'>Name</label>
                                        <input required name='Name' id='name' className='text-black border-2 rounded-lg p-2 flex border-gray-300' type='text' value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor='phone number' className='uppercase text-sm py-2'>Phone Number</label>
                                        <input name='Phone Number' id='phone number' className='text-black border-2 rounded-lg p-2 flex border-gray-300' type='text' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor='Email Address' className='uppercase text-sm py-2'>Email Address</label>
                                    <input name='Email Address' id='email address' className='text-black border-2 rounded-lg p-2 flex border-gray-300' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor='subject' className='uppercase text-sm py-2'>Subject</label>
                                    <input required name='Subject' id='subject' className='text-black border-2 rounded-lg p-2 flex border-gray-300' type='text' value={subject} onChange={e => setSubject(e.target.value)} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label htmlFor='Message' className='uppercase text-sm py-2'>Message</label>
                                    <textarea required name='Body' id='body' className='text-black border-2 rounded-lg p-3 border-gray-300' rows='10' value={body} onChange={e => setBody(e.target.value)}></textarea>
                                </div>
                                {/* Uses regex to simple check for an email */}
                                <button onClick={name && /^\S+@\S+$/.test(email) && subject && body ? () => setMessage('Redirecting to Email...') : () => setMessage('Form Missing Input')} className='w-full p-4 text-white mt-4 shadow-md shadow-slate-500'>{message}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full outline shadow-gray-400 hover:shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-200'>
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact