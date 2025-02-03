import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My latest projects</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my e-Portfolio! Here are some of the projects I have worked on recently,
                you can find the rest on my GitHub profile.
            </p>

            {/* Centrage des blocs */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto'>
                    {workData.map((project, index) => (
                        <Link href={project.link} target="_blank" key={index} className='group'>
                            <div
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                                className='w-[350px] md:w-[400px] aspect-[16/9] bg-no-repeat bg-cover bg-center relative border rounded-lg cursor-pointer group shadow-md'
                            >
                                <div className='bg-white bg-opacity-90 w-full absolute bottom-0 py-4 px-6 flex justify-between items-center duration-500 group-hover:bottom-2 shadow-lg'>
                                    <div className='w-10/12'>
                                        <h2 className='font-semibold text-lg'>{project.title}</h2>
                                        <p className='text-sm text-gray-700'>{project.description}</p>
                                    </div>

                                    <div className='border rounded-full border-black w-10 h-10 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-pink-500 transition'>
                                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <a className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500' href="">
                Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
            </a>
        </div>
    )
}

export default Projects;
