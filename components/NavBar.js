// import built in line from next
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            {/* <Image src='' alt='/' /> */} {/* placeholder for a navbar logo */}
                <nav>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/about'>About Me</Link>

                </nav>
            </div>

        </div>

    )
}