import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
    <h2 className='text-center text-5xl font-Ovo'>My latest Work</h2>

    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development</p>

    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
        {workData.map((project, index)=>(
            <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-red-400 transition'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Image src={assets.send_icon} alt='' className='w-5'/>
                    </a>
                </div>
                </div>
              
                
            </div>
        ))}
    </div>
    </div>
  )
}
