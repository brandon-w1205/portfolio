import React from 'react'
import wag from '../public/assets/projects/WAG.png'
import ProjectItem from './ProjectItem'
import blend from '../public/assets/projects/the-perfect-blend.png'
import piggy from '../public/assets/projects/that-little-piggy.png'
import cheapEgames from '../public/assets/projects/cheapEgames.png'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-emerald-400'>Projects</p>
        <h2 className='py-4'>Websites I&apos;ve Made</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Working Algorithm Games'
            backgroundImg={wag}
            techStack='Next, MongoDB, TypeScript, Ant Design'
            projectUrl='https://waggroup.vercel.app/'
          />
          <ProjectItem
            title='cheapEgames'
            backgroundImg={cheapEgames}
            techStack='Express, PostgresQL, BootStrap'
            projectUrl='https://cheapegames-brandon-w1205.koyeb.app/'
          />
          <ProjectItem
            title='The Perfect Blend'
            backgroundImg={blend}
            techStack='React, MongoDB, Bulma'
            projectUrl='https://the-perfect-blend.netlify.app/'
          />
          <ProjectItem
            title='That Little Piggy'
            backgroundImg={piggy}
            techStack='Javascript (Canvas), HTML, Vanilla CSS'
            projectUrl='https://brandon-w1205.github.io/That-Little-Piggy/'
          />

        </div>
      </div>
    </div>
  )
}

export default Projects