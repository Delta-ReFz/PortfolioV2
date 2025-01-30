import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
<>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

    <nav className='flex justify-between items-center py-4 px-5 lg:px-8 xl:px-[8%] fixed w-full z-50 bg-white shadow-md'>
        <a href="#top">
            <Image src={assets.un} className='w-28 cursor-pointer mr-14' alt='Logo-name'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-slate-200 shadow-sm bg-opacity-50'>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt='' className='w-6' />
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
                Contact 
                <Image src={assets.arrow_icon} alt='contactimg' className='w-3'/>
            </a>

            <button className='block md:hidden ml-3'>
                <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile menu */}
        <ul className='flex md:hidden flex-col gap-4 px-10 py-20 bg-rose-50 transition duration-500 fixed top-0 -right-0 bottom-0 w-64 z-50 h-screen'>

            <div>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>

            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>
    </nav>
</>
  )
}

export default Navbar