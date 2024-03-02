import React from 'react'
import delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import d4 from '../img/d4.png'




const HomeContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
      <div className='py-2  flex-1 flex flex-col items-start  justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
        <p className='text-base text-orange-500 font-semifold'> 
         Bike Delivery  
        </p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-window-xl'>
          <img src= {delivery} className='w-full h-full object-contain' alt='delivery'/>
        </div>
        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem] '>The Tastiest Food <span className='text-orange-700'> at your Doorstep. </span> </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto, quo accusantium dolores sapiente non autem ab laudantium? Praesentium ut laboriosam aliquam, nulla velit eum esse laudantium adipisci incidunt a!</p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order now</button>
        </div>
      <div className='py-2  flex-1 flex items-center relative '>
        <img src={HeroBg} className='h-420 ml-auto w-full lg:w-auto lg:h-650'alt='hero-bg' />
        <div className='w-full h-full absolute  top-0 left-0 flex  items-center justify-center px-32 py-4 '>
        <div className='w-190 p-2 bg-cardOverlay backdrop-blur-md'>
          <img src='' />
  
        </div>
        </div>
 
        
      </div>
    </div>
  )
}

export default HomeContainer