import React from 'react'
import page from '../assets/page.avif'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const About = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div>
                    <img src={page} alt="image" className='w-full max-w-[400px] h-[350px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover ' />
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0 ml-4'>
                    <h1 className='text-3xl sm:text-4xl font-bold'>Why Us?
                    </h1>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, atque?</p>
                    <div className='flex flex-col gap-4 ml-4'>
                        <div className='flex items-center gap-4'>
                            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 '/>
                            <p>Quality Product</p>
                            
                        </div>
                        <div className='flex items-center gap-4'>
                        <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100'/>
                            <p>Delivery On Time</p>
                        </div>
                        <div className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 '/>
                            <p>Easy Payment Method</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About