import React, { useContext } from 'react'
import Hamburgercomponents from '../components/Hambuger.jsx/Hamburger'
import { Link,NavLink } from 'react-router-dom'
import { assets } from './assets'
import { ShopContaxt } from './shopcontaxt'
const Navbar = () => {
  const {getcartcount} = useContext(ShopContaxt);
  return (
    <div className='flex items-center justify-between font-medium mx-7'>
        <Link to={"/"}><img  src={assets.logo} className='w-24 ' alt="" /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
       <NavLink to="/" className='flex flex-col items-center  hover:text-indigo-600 gap-1'><li>Home</li><hr className='w-2/4 border-none h-[1.5px] hover:bg-indigo-600 bg-gray-700  hidden '/></NavLink>
       <NavLink to="/Collections" className='flex flex-col hover:text-indigo-600 items-center gap-1'><li>Collections</li><hr className='w-2/4 border-none hover:bg-indigo-600 h-[1.5px] bg-gray-700 hidden '/></NavLink>
       <NavLink to="/About" className='flex flex-col hover:text-indigo-600 items-center gap-1'><li>About</li><hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-indigo-600 hidden'/></NavLink> 
       <NavLink to="/Contact" className='flex flex-col hover:text-indigo-600 items-center gap-1'><li>Contact</li><hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hover:bg-indigo-600 hidden'/></NavLink> 
       </ul>
       <div className='flex items-center gap-6 max-sm:gap-3'>
    <img src={assets.seachicon} className='w-7 cursor-pointer' alt="" />
    <div className='group relative'>
    <img src={assets.profileicon} className=' w-7' alt="" />
    <div className='group-hover:block hidden absolute dropdown-manu right-0 pt-4'>
      <div className='flex flex-col p-5 gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>My Profile </p>
        <p className='cursor-pointer hover:text-black'>Orders</p>
        <p className='cursor-pointer hover:text-black'>Logout</p>
      </div>
    </div>
    </div> 
           <Link to="/Cart" className='relative'><img src={assets.heart} className='w-8 min-w-8 h-8' alt="" /><p className='absolute right-[-5px] top-[-4px] place-content-center text-center w-5 h-5 text-white font-bold   leading-4 bg-red-600 rounded-full text-[9px]'>12</p></Link>
       <Link to="/Cart" className='relative'><img src={assets.carticon} className='w-8 min-w-8 h-8' alt="" /><p className='absolute right-[-5px] top-[-4px] place-content-center text-center w-5 h-5 text-white font-bold   leading-4 bg-blue-600 rounded-full text-[9px]'>{getcartcount()}</p></Link>
       <div className='block sm:hidden'>
       <Hamburgercomponents/>
       </div>
       </div>
    </div>
  )
}

export default Navbar
