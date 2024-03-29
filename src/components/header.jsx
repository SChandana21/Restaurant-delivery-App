import React from 'react'
import Logo from './img/logo.png'
import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md';
import Avatar from './img/avatar.png'
import {motion} from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { Link, json } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';
import HomeContainer from './HomeContainer';
import Logo2 from './img/logo2.jpg';


const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user, cartItems, cartShow}, dispatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false)

  const login =  async() => {
    if (!user) {
      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type : actionType.SET_USER,
      user: providerData[0],
    })
    localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else{
      setisMenu(!isMenu);
    }
  };

  const logout = () => {
    setisMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  }

  const showCart = () => {
    dispatch({
      type : actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })

  }
  return (
    <header className='fixed z-50 w-screen  p-3 px-4 md: p-6 md: px-16 bg-header'>
      {/* Desktop and tablet  */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
      <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo2} className='w-8 object-cover' alt='logo'></img>
          <p className='text-HeadingColor text-xl font-bold'>Tasty City</p>
      </Link>

      <div className='flex items-center gap-8'>
      <motion.ul initial={{opacity:0, x : 200}} animate={{opacity:1, x : 0}} exit={{opacity:0, x : 200}} className='flex items-center gap-8'>
        <li  className='text-base text-textColor hover:textheadingColor duration-100  transition-all ease-in-out
         cursor-pointer'>Home</li>
        <li className='text-base text-textColor hover:textheadingColor duration-100  transition-all ease-in-out
        cursor-pointer'>Menu</li>
        <li className='text-base text-textColor hover:textheadingColor duration-100  transition-all ease-in-out
        cursor-pointer'>About Us</li>
        <li className='text-base text-textColor hover:textheadingColor duration-100  transition-all ease-in-out
        cursor-pointer'>Service</li>
      </motion.ul>

      <div className='relative flex items-center justify-center' onClick={showCart}>
      <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
      {cartItems && cartItems.length > 0 && (
        <div className=' absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
        <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
        </div>
      )}
        </div>
        <div className='relative'>
        <motion.img whileTap={{scale : 0.6}} 
        src={user ? user.photoURL: Avatar} className='w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer' alt="userprofile" onClick={login} />
        {
          isMenu && (
            <motion.div initial = {{opacity:0, scale:0.6}} animate = {{opacity: 1, scale: 1}} exit = {{opacity:0, scale:0.6}}    className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'>
            {
              user && user.email === "chanduvalluri22@gmail.com" && (
                <Link to={"/createItem"}>
                <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                </Link>
            )}
            <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout/></p>
        </motion.div>
          )
        }
        </div>
      </div>
      </div> 
      


      {/* Mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>

      <div className='relative flex items-center justify-center' onClick={showCart} >
      <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
      {cartItems && cartItems.length > 0 && (
        <div className=' absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
        <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
        </div>
      )}
        </div>


      <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo'></img>
          <p className='text-HeadingColor text-xl font-bold'>City</p>
      </Link>
      <div className='relative'>
        <motion.img whileTap={{scale : 0.6}} 
        src={user ? user.photoURL: Avatar} className='w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-xl cursor-pointer' alt="userprofile" onClick={login} />
        {
          isMenu && (
            <motion.div initial = {{opacity:0, scale:0.6}} animate = {{opacity: 1, scale: 1}} exit = {{opacity:0, scale:0.6}}    className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'>
            {
              user && user.email === "chanduvalluri22@gmail.com" && (
                <Link to={"/createItem"}>
                <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                </Link>
            )}
            <ul  className='flex flex-col '>
        <li className='text-base text-textColor hover:text-headingColor duration-100  transition-all ease-in-out hover:bg-slate-100 px-4 py-2 
         cursor-pointer' onClick={() => setisMenu(false)}>Home</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100  transition-all ease-in-out hover:bg-slate-100 px-4 py-2 
        cursor-pointer' onClick={() => setisMenu(false)}>Menu</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100  transition-all ease-in-out hover:bg-slate-100 px-4 py-2 
        cursor-pointer' onClick={() => setisMenu(false)}>About Us</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100  transition-all ease-in-out hover:bg-slate-100 px-4 py-2 
        cursor-pointer' onClick={() => setisMenu(false)}>Service</li>
      </ul>

            
            <p className=' m-2 p-2 flex items-center gap-3 cursor-pointer rounded-md shadow-md hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base justify-center bg-gray-200' onClick={logout}>Logout <MdLogout/></p>
        </motion.div>
          )
        }
        </div>
      </div>
    </header>
  )
}

export default Header