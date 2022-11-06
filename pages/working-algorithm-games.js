import React from 'react'
import Image from 'next/image'
import wagImg from '../public/assets/projects/WAG.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const wag = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={wagImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2'>Working Algorithm Games</h2>
          <h3>Next JS / MongoDB / Ant Design</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Working Algorithm Games was created using Next JS, MongoDB, Ant Design, and TypeScript. Users are able to select between the current games of Minesweeper, Sudoku, and Tetris and play each of these classic games. This application was created by a team of General Assembly students including myself as a capstone project to learn a new skill on our own. We decided to learn Next JS, Ant Design CSS, and TypeScript to challenge ourselves and the result was a fun application that can be played by people of all ages. We hope to add user-scores so that a user may save their scores upon completion of a game.</p>
          <a href='https://waggroup.vercel.app/' target='blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Link to Site</button>
          </a>
          <a href='https://github.com/brandon-w1205/waggroup' target='blank'>
            <button className='px-8 py-2 mt-4'>Github</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-4 md:grid-cols-1'>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Next JS</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />MongoDB</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Ant Design</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' />TypeScript</p>
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

export default wag