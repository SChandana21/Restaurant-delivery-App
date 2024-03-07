import React, { useEffect } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion} from 'framer-motion';
import { useRef } from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { json } from 'react-router-dom';

const RowContainer = ({flag, data, scrollValue }) => {
  console.log(data);
  const rowContainer = useRef();


  const [{cartItems}, dispatch] = useStateValue();

  const addtocart = (item) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems : [...cartItems, item]
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  };
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])
  return (
    <div
    ref={rowContainer}
     className={`w-full my-8 flex items-center gap-3 scroll-smooth   ${
      flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden'}
      `}
        >
      
       {data && data.map(item =>(
         <div className='w-full min-w-[300px] md:min-w-[340px] md:w-340 h-auto bg-cardOverlay rounded-lg p-4  backdrop-blur-lg hover:drop-shadow-lg mb-2 '>
         <div className='w-full flex items-center justify-between '>
           <motion.img whileHover={{scale: 1.2 }}src= {item?.imageURL} alt='icecream' className='w-20 flex' />
           <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full mb-16 bg-orange-400 flex items-center justify-center cursor-pointer   hover:shadow-md' onClick={() => addtocart(item)}>
             < MdShoppingBasket className='text-white ' /> 
           </motion.div>
         </div>
         <div className='w-full flex items-start justify-start gap-2'>
           <p className='text-textColor font-semibold text-base md:text-lg mr-10 '>{item?.title}</p>
           <p className='text-lg text-headingColor font-semibold flex justify-start'> 
           <p className='mt-16 mr-24 text-sm text-gray-500 absolute top-2 right-4'></p>
           <span className=' text-imagecolor ml-16'>$</span> {item?.price}
           </p>
         </div>
             </div>
       ))}
        
            
    </div>
  ); 
};

export default RowContainer;