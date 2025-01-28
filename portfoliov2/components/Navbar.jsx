import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center py-4 px-5 lg:px-8 xl:px-[8%] fixed w-full z-50 bg-white shadow-md'>
        <a href="#top">
            <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='Logo-name'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
            <li><a href="#top"></a>Home</li>
            <li><a href="#about"></a>About me</li>
            <li><a href="#services"></a>Services</li>
            <li><a href="#work"></a>My Work</li>
            <li><a href="#contact"></a>Contact me</li>
        </ul>

        <div>
            <a href="#contact">Contact <Image src={assets.arrow_icon} alt='contactimg' className='w-3'/></a>
        </div>
    </nav></>
  )
}

export default Navbar