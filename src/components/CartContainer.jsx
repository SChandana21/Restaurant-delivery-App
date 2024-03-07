import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { motion} from 'framer-motion';
import {RiRefreshFill} from 'react-icons/ri';
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import EmptyCart from '../img/emptyCart.svg'



const CartContainer = () => {


  const [{user, cartShow, cartItems}, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type : actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })

  }

  return (
    <div className='fixed top-0  right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]'>
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
       <motion.div whileTap={{scale: 0.75}} onClick={showCart}> 
        <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Cart</p>
        <p className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base'>Clear  <RiRefreshFill/></p>
       
      </div>
      {/* bottom section */}
      <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
        <div key={cartItems.id} className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
          {/* cart item */}
          {cartItems && cartItems.map(item => (
            <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
            <img src={item?.imageURL} alt='rice'className='w-20 h-20 max-w-[60px] rounded-full object-contain' />
            {/* Name */}
            <div className='flex flex-col gap-2'>
              <p className='text-base text-gray-50'>{item?.title}</p>
              <p className='text-sm block text-gray-300 font-semibold'>{item?.price}</p>
            </div>
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
              <motion.div whileTap={{scale: 0.75}}>
                <BiMinus className='text-gray-50'/>
              </motion.div>
              <p className='w-5 h-5 rounded-sm bg-cartBg  text-gray-50 flex items-center justify-center'>
                {item.qty}
              </p>
              <motion.div whileTap={{scale: 0.75}}>
              <BiPlus className='text-gray-50'/>
                
              </motion.div>
            </div>

          </div>
          ))}
        </div>

      {/* cart total section */}
      {cartItems && cartItems.length > 0 ? (
        <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-gray-400 text-lg'>Sub Total</p>
          <p className='text-gray-400 text-lg'>$8.5</p>
        </div>
        <div className='w-full flex items-center justify-between'>
          <p className='text-gray-400 text-lg'>Sub Total</p>
          <p className='text-gray-400 text-lg'>$8.5</p>
        </div>
        <div className='w-full border-b border-gray-600 my-2'></div>
        <div className='w-full flex items-center justify-between'>
          <p className='text-gray-200 text-xl font-semibold'>Total</p>
          <p className='text-gray-200 text-xl font-semibold'>$11.5</p>
        </div>

        <motion.button whileTap={{scale: 0.8}}
        type='button' className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out'>
          Check Out
        </motion.button>
        
      </div>
      ): (
        <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
  <img src={EmptyCart} className='w-300' alt='' />
  <p className='text-xl text-textColor font-semibold'>
    Add some items into the cart
  </p>

</div>
        
      )}
      
      </div>
    </div>
  )
} 


export default CartContainer