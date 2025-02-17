import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const
    Work
        = () => {
            return (
                <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
                     <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
                     <h2 className='text-center text-5xl font-Ovo'>My work experience</h2>
                     <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Currently looking for an internship 
                        to apply my skills and gain experience in software development (Summer 2025)</p>

                    <div className='w-full flex justify-center'>
                        <div className='grid grid-cols-auto gap-6 my-10'>
                            {serviceData.map(({icon, title, description, link}, index) => (
                                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                                    <Image src={icon} alt='' className='w-10 mx-auto'/>
                                    <h3 className='text-lg my-4 text-gray-700 text-center'>{title}</h3>
                                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                                    

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            )
        }

export default Work
