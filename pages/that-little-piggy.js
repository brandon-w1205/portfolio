import React from 'react'
import Image from 'next/image'
import piggyImg from '../public/assets/projects/that-little-piggy.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const piggy = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={piggyImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                    <h2 className='py-2'>That Little Piggy</h2>
                    <h3>JavaScript / HTML / CSS</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>That Little Piggy was created using Canvas within Javascript, vanilla HTML with DOM manipulation, and vanilla CSS. Users are able to play as a pig that battles against a wolf due to the fictional events of the children&apos;s folk story, The Three Little Pigs. This is my first programming project, and it was created as a fun video-game project to practice DOM manipulation and game development. The game is heavily inspired by the popular action-platformer, Cuphead. The application utilizes velocity and gravity effects for movement along with hit detection to manage the health system. In the future, I plan to add hit effects to clearly show when an entity has been damaged.</p>
                    <a href='https://brandon-w1205.github.io/That-Little-Piggy/' target='blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>Link to Site</button>
                    </a>
                    <a href='https://github.com/brandon-w1205/That-Little-Piggy' target='blank'>
                        <button className='px-8 py-2 mt-4'>Github</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-md shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-4 md:grid-cols-1'>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript (Canvas)</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}

export default piggy