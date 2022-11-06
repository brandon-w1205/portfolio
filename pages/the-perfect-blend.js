import React from 'react'
import Image from 'next/image'
import blendImg from '../public/assets/projects/the-perfect-blend.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const blend = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={blendImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2'>The Perfect Blend</h2>
          <h3>React / MongoDB / Bulma</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>The Perfect Blend was created using React JS, MongoDB, and Bulma CSS. Users are able to find cafes based on location and/or name, create a user login to save cafes under their account, and create comments about cafes. This application was created by a team of General Assembly students including myself to gain experience in working on a group project. As the git manager, I was able to assist our team in resolving merge conflicts and helped guide the direction of the project to our vision. In doing so, we were able to create a project that people can utilize on their travels, and we were able to learn MongoDB along with a new CSS framework, Bulma. The application utilizes the Yelp Fusion API to gain data about locations across the world. In the future, we plan to style the pages further, optimize the routings, and enhance the user/comment functionality.</p>
          <a href='https://the-perfect-blend.netlify.app/' target='blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Link to Site</button>
          </a>
          <a href='https://github.com/brandon-w1205/cafe-finder' target='blank'>
            <button className='px-8 py-2 mt-4'>Github</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-4 md:grid-cols-1'>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React JS</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MongoDB</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Bulma CSS</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Yelp Fusion API</p>
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

export default blend