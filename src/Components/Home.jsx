import React from 'react'
import Front from '../assets/Front.png'

const Home = () => {
  return (
   
    <div className='w-full h-screen bg-[#FFD5B0] flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <p className='md:text-4xl font-bold font-serif text-2xl item-center'>METY ONLINE  <br /> SHOPPING STORE</p>
        <p className='py-3 md:mb-20 items-center m'>“For every minute you are angry, you lose sixty seconds of happiness.” — ...<br/>
                “Doubt is a killer. ... <br/>
                “Whether you think you can or you think you can't, you're right.”</p>
               
        </div>
        <div>
          <img src={Front} alt="Picture" className='h-60 md:h-96 md:ml-20 ml-7'/>
        </div>
        
      
      </div>
        
        
        
        
    </div>
  )
}

export default Home