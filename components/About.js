import React from 'react'
import Image from 'next/image'
import myself from '../public/assets/picOfMyself.jpg'
import Link from 'next/link'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-emerald-400'>About</p>
                    <h2 className='py-4'>Me!</h2>
                    <p className='py-2'>
                        After graduating from the California State University of Fullerton with a bachelor&apos;s in Accounting, I quickly realized that the field was not for me when I found myself partaking in programming tutorials during my off-time from work! This enjoyment for programming led me to researching software engineering bootcamps, particularly General Assembly.
                    </p>
                    <p className='py-2'>
                        At General Assembly, I was able to meet an amazing cohort of bright individuals that I was able to grow and develop with. During this three-month period, I not only learned the basics of front-end and back-end tech stacks, but I also created fun projects that reflect my growth.
                    </p>
                    <p className='py-2'>
                        The Western Governors University Bachelors of Science in Computer Science program accelerated my learning and understanding of computer science concepts. I was able to create a capstone project, a full-stack application that uses machine learning to determine the success of a game based on its features.
                    </p>
                    <Link href='/#projects'>
                            <p className='py-2 underline cursor-pointer'>Check out the projects here!</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={myself} className='rounded-full' alt='picture of myself' width='300' height='300' />
                </div>
            </div>
        </div>
    )
}

export default About