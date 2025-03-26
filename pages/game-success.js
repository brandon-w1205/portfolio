import React from 'react'
import Image from 'next/image'
import gameImg from '../public/assets/projects/GameSuccessPredictor.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const gameSuccess = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={gameImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                    <h2 className='py-2'>Game Success Predictor</h2>
                    <h3>Python / Sci-kit Learn / Flask / TailwindCSS / Next / PostgresQL</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>Game Success Predictor was created with a backend using Sci-Kit Learn, Flask, and Python; a frontend using Next.js and TailwindCSS; and a PostgreSQL database. Users are able to input a title of a game they plan on creating, select features of said game, and see the results of the machine learning algorithm that predicts the game&apos;s chances of success. In the future, I plan on adding the ability to input a custom dataset so that the project maintains updated with the latest game sale information.</p>
                    <a href='https://gamesuccess.vercel.app/' target='blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>Link to Site</button>
                    </a>
                    <a href='https://github.com/brandon-w1205/gameSuccessML' target='blank'>
                        <button className='px-8 py-2 mt-4'>Github</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-md shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-4 md:grid-cols-1'>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Sci-Kit Learn</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />PostgresQL</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />TailwindCSS</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Anaconda</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Next</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Flask</p>
                            <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Vercel</p>
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

export default gameSuccess