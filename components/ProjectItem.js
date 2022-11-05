import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, techStack, projectUrl}) => {
    return (
        // <div className='relative flex place-content-between p-4 hover:p-0 hover: h-auto w-full shadow-md hover:shadow-xl hover:shadow-slate-500 shadow-slate-500 bg-zinc-700 rounded-xl group hover:bg-gradient-to-r duration-300 from-emerald-900 to-emerald-500 ' >
        <div className='relative flex place-content-between p-4 h-auto w-full shadow-md hover:shadow-xl hover:shadow-slate-500 shadow-slate-500 bg-zinc-700 rounded-xl group hover:bg-gradient-to-r duration-300 from-emerald-900 to-emerald-500 ' >
            <div className='group-hover:scale-105 duration-300'>
            <Image className='rounded-xl group-hover:opacity-20 ' src={backgroundImg} alt='/' />
            </div>
            
            <div className='hidden group-hover:block select-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{techStack}</p>
                <a href={projectUrl} target='blank' rel="noreferrer noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem