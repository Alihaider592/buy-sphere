import React, { useContext, useEffect, useState } from 'react'
import { products } from '../components/Products'
import { ShopContaxt } from '../components/shopcontaxt'
import { assets } from '../components/assets'
import Title from '../components/Title'
import Productitem from '../components/Productitem'

const Collections = () => {
  const { products } = useContext(ShopContaxt)
  const [showfillter, setshowfillter] = useState(false);
  const [fillterproducts, setfillterproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortType, setsortType] = useState('default');

  const togglecategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setcategory(prev => prev.filter(item => item !== value));
    } else {
      setcategory(prev => [...prev, value]);
    }
  };

  const togglesubcategory = (e) => {
    const value = e.target.value;
    if (subcategory.includes(value)) {
      setsubcategory(prev => prev.filter(item => item !== value));
    } else {
      setsubcategory(prev => [...prev, value]);
    }
  };

  const applyfiltter = () => {
    let productscopy = products.slice();

    if (category.length > 0) {
      productscopy = productscopy.filter(item =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      productscopy = productscopy.filter(item =>
        subcategory.includes(item.subcategory)
      );
    }

    setfillterproducts(productscopy);
  };
  const sortproduct = () => {
    let fpcopy = [...fillterproducts];
    switch (sortType) {
      case 'low-high':
        setfillterproducts(fpcopy.sort((a, b) => a._price - b._price));
        break;
      case 'high-low':
        setfillterproducts(fpcopy.sort((a, b) => b._price - a._price));
        break;
      default:
        applyfiltter();
        break;
    }
  };

  useEffect(() => {
    setfillterproducts(products)
  }, [products]);

  useEffect(() => {
    applyfiltter();
  }, [category, subcategory]);

  useEffect(() => {
    sortproduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row my-5 sm:gap-10 pt-10 gap-1 border border-t '>
      {/* filter option  */}
      <div className='min-w-60'>
        <p onClick={() => setshowfillter(!showfillter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTTERS
          <img src={assets.dropdown} className={`h-6   sm:hidden ${showfillter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* categoryfiltter */}
        <div className={`border border-gray-300 pl-6 py-3 mt-6 ${showfillter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className=' flex flex-col text-sm font-light gap-2 text-gray-700'>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="men" onChange={togglecategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={"women"} onChange={togglecategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={"kids"} onChange={togglecategory} /> Kids
            </p>
          </div>
        </div>

        {/* subcategory */}
        <div className={`border border-gray-300 pl-6 py-3 mt-6 my-5 ${showfillter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className=' flex flex-col text-sm font-light gap-2 text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={"Topwear"} onChange={togglesubcategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={"bottom wear"} onChange={togglesubcategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={"winter wear"} onChange={togglesubcategory} /> Winter wear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={' Collections'} />
          <select
            id='sort'
            value={sortType}
            onChange={(e) => setsortType(e.target.value)}
            className='border border-gray-300 text-sm  px-2'
          >
            <option value="default">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            fillterproducts.map((item, index) => (
              <Productitem
                key={index}
                name={item._name}
                id={item._id}
                price={item._price}
                image={item._image}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections
