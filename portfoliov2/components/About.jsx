import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex flex-col lg:flex-row w-full justify-center items-center gap-20 my-20'>
            
            <div className='text-center'>
                <p className='mb-10 max-w-2xl font-Ovo'>I am a software engineering student at École de Technologie Supérieure (ÉTS). 
                    I have a deep passion for the field of computer science and consider myself a self-taught learner. I am constantly 
                    exploring new technologies and concepts that go beyond my current university curriculum. For example, 
                    I have been diving into machine learning and AI using Python, cybersecurity, and data analytics. 
                    As a second-year university student, I haven't had the opportunity to study these advanced topics formally 
                    in my program yet. However, I take the initiative to learn them independently through online resources, including 
                    free courses on YouTube and other platforms. Before joining ÉTS, I studied natural sciences and had 
                    no prior experience in computer science. However, I fell in love with programming and technology during 
                    my very first semester at university. Outside of coding and learning, I dedicate my time to training in 
                    MMA and Brazilian jiu-jitsu. These activities play a significant role in helping me maintain balance and 
                    stability in my life.</p>

                   <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                       
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                                                     hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>

                        ))}
                   </ul>
                   
                   <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                   <ul className='flex justify-center items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                   </ul>
            </div>
        </div>
    </div>
  )
}

export default About