import React from 'react'
import wagImg from '../public/assets/projects/WAG.png'
import ProjectItem from './ProjectItem'
import blendImg from '../public/assets/projects/the-perfect-blend.png'
import piggyImg from '../public/assets/projects/that-little-piggy.png'
import cheapEgamesImg from '../public/assets/projects/cheapEgames.png'
import gameImg from '../public/assets/projects/GameSuccessPredictor.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-28'>
        <p className='text-xl tracking-widest uppercase text-emerald-400'>Projects</p>
        <h2 className='py-4'>Websites I&apos;ve Made</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Game Success Predictor'
            backgroundImg={gameImg}
            techStack='Next, PostgresQL, TailwindCSS, Python, Flask, Scikit-Learn'
            projectUrl='/game-success'
          />

          <ProjectItem
            title='cheapEgames'
            backgroundImg={cheapEgamesImg}
            techStack='Express, PostgresQL, BootStrap'
            projectUrl='/cheapEgames'
          />

          <ProjectItem
            title='Working Algorithm Games'
            backgroundImg={wagImg}
            techStack='Next, MongoDB, TypeScript, Ant Design'
            projectUrl='/working-algorithm-games'
          />

          <ProjectItem
            title='That Little Piggy'
            backgroundImg={piggyImg}
            techStack='Javascript (Canvas), HTML, Vanilla CSS'
            projectUrl='/that-little-piggy'
          />

        </div>
      </div>
    </div>
  )
}

export default Projects
