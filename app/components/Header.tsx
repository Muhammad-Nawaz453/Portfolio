import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt=''className='rounded-full w-32 '/>
          
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I am Nawaz Ibrahim <Image src={assets.hand_icon} alt=''className=' w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Fullstack developer</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
      I’m a Full Stack Web Developer, UI/UX Designer, Graphic Designer, and Python Programmer — and I help ambitious businesses like yours build high-converting websites that don’t just look good… they grow revenue.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black flex items-center gap-2 text-white'>contact me<Image src={assets.right_arrow_white} alt=''className='w-4'/></a>
            <a href="/Nawaz-Ibrahim-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume<Image src={assets.download_icon} alt=''className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header