// import built in line from next
import Link from 'next/link'
import Image from 'next/image'
import bwu from '../public/assets/brandon-wu.png'
import bwu2 from '../public/assets/brandon-wu2.png'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function NavBar() {
    const [nav, setNav] = useState(true)
    const [navBg, setNavBg] = useState('#333333')
    const [linkColor, setLinkColor] = useState('white')
    const router = useRouter()

    useEffect(() => {
        if (
            router.asPath === '/working-algorithm-games' ||
            router.asPath === '/cheapEgames' ||
            router.asPath === '/the-perfect-blend' ||
            router.asPath === '/that-little-piggy'
        ) {
            setNavBg('transparent')
            setLinkColor('white')
        } else {
            setNavBg('#333333')
            setLinkColor('white')
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div style={{ backgroundColor: `${navBg}` }} className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/' passHref>
                    <a>
                        <Image src={bwu} alt='/' width='300' height='300' />
                    </a>
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:underline hover:underline-offset-4 hover:decoration-from-font'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:underline hover:underline-offset-4 hover:decoration-from-font'>About Me</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:underline hover:underline-offset-4 hover:decoration-from-font'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:underline hover:underline-offset-4 hover:decoration-from-font'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:underline hover:underline-offset-4 hover:decoration-from-font'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >
                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-700 p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/' passHref>
                                <a>
                                    <Image src={bwu2} alt='/' width='200' height='75' />
                                </a>
                            </Link>
                            <div onClick={handleNav} className='rounded-full outline p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-white-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something together</p>
                        </div>
                    </div>
                    {/* popup */}
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About Me</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#DFFF00]'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full p-3 outline cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full p-3 outline cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full p-3 outline cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full p-3 outline cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}