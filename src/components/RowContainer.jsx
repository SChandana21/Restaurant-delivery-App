import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion} from 'framer-motion';

const RowContainer = ({flag, data }) => {
  console.log(data);
  return (
    <div
     className={`w-full my-8 flex items-center gap-3   ${
      flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden'}
      `}
        >
      
       {data && data.map(item =>(
         <div className='w-full min-w-[300px] md:min-w-[340px] md:w-340 h-auto bg-cardOverlay rounded-lg p-4  backdrop-blur-lg hover:drop-shadow-lg mb-2 '>
         <div className='w-full flex items-center justify-between '>
           <motion.img whileHover={{scale: 1.2 }}src= "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c4f0e.appspot.com/o/Images%2F1709628932720-i3.png?alt=media&token=d103b7f0-3028-4760-888f-3d9807bf15f3" alt='icecream' className='w-20 flex' />
           <motion.div onTap={{scale: 0.75}} className='w-8 h-8 rounded-full mb-16 bg-orange-400 flex items-center justify-center cursor-pointer hover:shadow-md'>
             < MdShoppingBasket className='text-white ' />
           </motion.div>
         </div>
         <div className='w-full flex items-start justify-start gap-2'>
           <p className='text-textColor font-semibold text-base md:text-lg mr-10 '>Vanilla Cone</p>
           <p className='text-lg text-headingColor font-semibold flex justify-start'> 
           <p className='mt-16 mr-24 text-sm text-gray-500 absolute top-2 right-4'></p>
           <span className=' text-imagecolor ml-16'>$</span> 5.25
           </p>
         </div>
             </div>
       ))}
        
            
    </div>
  ); 
};

export default RowContainer;