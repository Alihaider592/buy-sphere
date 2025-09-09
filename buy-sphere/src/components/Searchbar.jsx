import React, { useContext } from 'react';
import { ShopContaxt } from './shopcontaxt';
import { assets } from './assets';
const Searchbar = () => {
    const {search,showserach,setsearch,setshowsearch} = useContext(ShopContaxt);
  return showserach ? (
    <div className='border-b border-t bg-gray-500 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 w-3/4 sm:w-1/2'>
      <input value={search} onChange={(e)=>search(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
      <img src={assets.seachicon} className='w-4' />
      </div>
      <img onClick={()=>setshowsearch(false)} src={assets.Cross} alt="w-5" />
    </div>
  ):null
}

export default Searchbar;
