import React from 'react'
import Logo from '../assets/Logo1.png'
import { FaInstagram, FaTelegram } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-7 px-4 lg:grid-cols-3 '>
        <div className='px-20 flex gap-10'> 
        <img src= {Logo} alt="Logo" className='w-12' />
        <h1 className='font-bold text-2xl font-sans'>Contact Us</h1>
        
        </div>
        <div className='flex flex-col gap-4 p-3 px-10'>
           
              <a href="" className='flex gap-2'>
              <FaInstagram size={30}/>
              <p>Instagram/ Mety online shopping</p>
              </a>

              <a href="" className='flex gap-2'>
              <FaTelegram size={30}/>
              <p>Telegram/ Mety online shopping</p>
              </a>
      </div>
    </div>
  )
}

export default Contact