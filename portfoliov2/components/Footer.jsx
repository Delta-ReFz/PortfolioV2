import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.un} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center mx-auto gap-2'>
            <Image src={assets.mail_icon} alt='' className='w-6' />
            mehdioukid001@gmail.com
            </div>
        </div>
        <div className='tetx-center mt-12 sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6'>
            <p>© 2025 El Mehdi Oukid. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                {/* Blank sert a ouvrire un nouvel onglet*/}
                <li><a target='_blank' href="https://github.com/delta-refz">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/oukidelmehdi">LinkedIn</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer