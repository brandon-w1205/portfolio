import React from 'react'
import Image from 'next/image'
import typing from '../public/assets/typing.webp'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-emerald-400'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left-side */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-slate-500 bg-zinc-700 rounded-xl p-4'>
                    <div className='lg:p-4 h-full rounded-xl'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://i.imgur.com/bBfsTeB.png' alt='/' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact