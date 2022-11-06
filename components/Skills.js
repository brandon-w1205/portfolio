import React from 'react'
import Image from 'next/image'
import postgres from '../public/assets/skills/postgres.png'
import sequelize from '../public/assets/skills/sequelize.png'
import python from '../public/assets/skills/python.png'
import react from '../public/assets/skills/react.png'
import node from '../public/assets/skills/node.png'
import tailwind from '../public/assets/skills/tailwind.png'
import expressjs from '../public/assets/skills/express.png'
import nextjs from '../public/assets/skills/nextjs.png'
import javascript from '../public/assets/skills/javascript.png'
import typescript from '../public/assets/skills/typescript.png'
import mongo from '../public/assets/skills/mongo.png'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import github1 from '../public/assets/skills/github1.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-emerald-400'>Skills</p>
        <h2 className='py-2 pb-3'>Tools Used Around The World... (and by me!)</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={postgres} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgresQL</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={sequelize} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sequelize</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={react} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>



          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={node} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={expressjs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express</h3>
              </div>
            </div>
          </div>



          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nextjs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>



          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={typescript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Typescript</h3>
              </div>
            </div>
          </div>



          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={mongo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          
          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-slate-500 rounded-xl bg-zinc-700 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={github1} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skills