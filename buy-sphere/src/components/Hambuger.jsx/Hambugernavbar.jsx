import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets';
const Hamburgernavbar = ({onclose }) => {
  
  return (
    <div >
      
        <ul>   
        <div className='fixed  right-0 top w-64 h-full pt-14 bg-white z-[9999] text-black font-normal rounded-md 
       shadow-sm transform transition-transform duration-300 ease-in-out  '>    
   <div className='flex items-center absolute top-2 h-4 gap-4'><img onClick={onclose} src={assets.backicon} className='cursor-pointer h-4' alt="" /><p className='right-4 cursor-pointer relative' onClick={onclose}>Back</p></div>
       <NavLink to="/" onClick={onclose}  className={({ isActive }) =>
      ` flex-col block px-3 py-2 rounded gap-1 transition-colors duration-200
       ${isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-indigo-100 hover:text-indigo-600'}`
    }><li>Home</li></NavLink>
       <NavLink to="/Collections"onClick={onclose} className={({ isActive }) =>
      ` flex-col block px-3 py-2 rounded gap-1 transition-colors duration-200
       ${isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-indigo-100 hover:text-indigo-600'}`
    }><li>Collections</li></NavLink>
       <NavLink to="/About"onClick={onclose} className={({ isActive }) =>
      ` flex-col block px-3 py-2 rounded gap-1 transition-colors duration-200
       ${isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-indigo-100 hover:text-indigo-600'}`
    }><li>About</li></NavLink> 
       <NavLink to="/Contact"onClick={onclose} className={({ isActive }) =>
      ` flex-col block px-3 py-2 rounded gap-1 transition-colors duration-200
       ${isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-indigo-100 hover:text-indigo-600'}`
    }><li>Contact</li></NavLink> 
       </div>
       </ul>
    </div>
  )
}
export default Hamburgernavbar
