import React from 'react'
import {IoFastFood} from 'react-icons/io5';

const MenuContainer = () => {
  return <section className='w-full my-6' id='menu'>
    <div className='w-full flex flex-col items-center justify-center'>
    <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600  transition ease-in-out duration-100 mr-auto'>Chef's Special 
        </p>

        <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none py-6'>
          <div className='group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-orange-600 duration-150 transition-all ease-in-out'>
          <div className='w-10 h-10 rounded-full bg-orange-600 group-hover:bg-card flex items-center justify-center'>
            <IoFastFood className='text-card group-hover:text-textColor ' />
          </div>
          <p className='text-sm text-textColor group-hover:text-white'>Category</p>
          </div>
        </div>
    </div>
  </section>
  
}

export default MenuContainer