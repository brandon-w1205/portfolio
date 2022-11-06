import React from 'react'
import Image from 'next/image'
import cheapEgamesImg from '../public/assets/projects/cheapEgames.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const cheapEgames = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={cheapEgamesImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2'>cheapEgames</h2>
          <h3>Express / PostgresQL / BootStrap</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>cheapEgames was created using Express, PostgresQL, and BootStrap. Users are able to find deals on games by entering a video-game genre into the search bar. This application was created by myself as a first attempt with a full-stack application. I wanted to build a website that I could personally use to benefit my purchases while learning the PERN stack. The application utilizes the RAWG and CheapShark API to gain data about the latest video-game deals and information. In the future, I plan to implement search-by-name functionality.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Link to Site</button>
          <button className='px-8 py-2 mt-4'>Github</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-4 md:grid-cols-1'>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Express</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PostgresQL</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>BootStrap</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>RAWG API</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CheapShark API</p>
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

export default cheapEgames