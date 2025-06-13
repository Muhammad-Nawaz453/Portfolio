import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <h1  className='w-36 cursor-pointer mx-auto mb-2 font-extrabold'>Nawaz Ibrahim</h1>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/>
                nawazibrahim453@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-12'>
            <p>© 2025 Nawaz Ibrahim. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Muhammad-Nawaz453">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/nawaz-ibrahim-905404282/">Linked In</a></li>
                <li><a target='_blank' href="https://x.com/nawazibrahim453">X.com</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer