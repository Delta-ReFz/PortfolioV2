import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>

            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>I am a software engineering student at École de Technologie Supérieure (ÉTS). 
                   I have a deep passion for the field of computer science and consider myself a 
                   self-taught learner. I am constantly exploring new technologies and concepts 
                   that go beyond my current university curriculum. For example, I have been diving 
                   into machine learning, cybersecurity and data analytics. 
                   As a second-year university student, I haven't had the opportunity to study these 
                   advanced topics formally in my program yet. However, I take the initiative to learn 
                   them independently through online resources, including free courses on YouTube and 
                   other platforms. Before joining ÉTS, I studied natural sciences and had no prior 
                   experience in computer science. However, I fell in love with programming and 
                   technology during my very first semester at university. Outside of coding and 
                   learning, I dedicate my time to training MMA and Brazilian jiu-jitsu. 
                   These activities play a significant role in helping me maintain balance and stability in my life.</p>

                   <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                   </ul>
            </div>
        </div>
    </div>
  )
}

export default About