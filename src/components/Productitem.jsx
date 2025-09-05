import React, { useContext } from 'react';
import { ShopContaxt } from './shopcontaxt';
import { Link } from 'react-router-dom';
const Productitem = ({id,image,name,price}) => {
    const {currency} = useContext (ShopContaxt)
  return (
    
     <Link className='text-gary-700 cursor-pointer hover:shadow-lg hover:transition-shadow hover:scale-90 hover:ease-in-out  ' to={`/Product/${id}`}>
     <div className='overflow-hidden  '>
        <img className='hover:scale-110 transition ease-in-out' src={image && image[0]} alt="" />
     </div>
     <p className='pt-3 pb-1 text-sm'>{name}</p>
     <p className='text-sm font-medium'>{currency}{price}</p>
     </Link>
  );
}

export default Productitem;
