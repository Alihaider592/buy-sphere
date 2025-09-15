import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../components/shopcontaxt'
import { assets } from '../components/assets'
import Title from '../components/Title'
import Pagination from '../components/Pagination'   

const Collections = () => {
  const { products } = useContext(ShopContaxt)

  const [showfillter, setshowfillter] = useState(false)
  const [fillterproducts, setfillterproducts] = useState([])
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [sortType, setsortType] = useState('default')

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  const togglecategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setcategory(prev => prev.filter(item => item !== value))
    } else {
      setcategory(prev => [...prev, value])
    }

  }

  const togglesubcategory = (e) => {
    const value = e.target.value
    if (subcategory.includes(value)) {
      setsubcategory(prev => prev.filter(item => item !== value))
    } else {
      setsubcategory(prev => [...prev, value])
    }

  }

  const applyfiltter = () => {
    let productscopy = products.slice()

    if (category.length > 0) {
      productscopy = productscopy.filter(item =>
        category.includes(item.category)
      )

    }

    if (subcategory.length > 0) {
      productscopy = productscopy.filter(item =>
        subcategory.includes(item.subcategory)
      )
    }

    return productscopy
  }

  const sortproduct = (items) => {
    let fpcopy = [...items]
    switch (sortType) {
      case 'low-high':
        return fpcopy.sort((a, b) => a._price - b._price)
      case 'high-low':
        return fpcopy.sort((a, b) => b._price - a._price)
      default:
        return fpcopy
    }
  }

  useEffect(() => {
    let filtered = applyfiltter()
    filtered = sortproduct(filtered)
    setfillterproducts(filtered)
    setCurrentPage(1) 
  }, [products, category, subcategory, sortType])
  const indexOfLast = currentPage * productsPerPage
  const indexOfFirst = indexOfLast - productsPerPage
  const currentProducts = fillterproducts.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(fillterproducts.length / productsPerPage)

  return (
    <div className='flex flex-col sm:flex-row my-5 sm:gap-10 pt-10 gap-1 border border-t'>
      
      <div className='min-w-60'>
        <p onClick={() => setshowfillter(!showfillter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTTERS
          <img src={assets.dropdown} className={`h-6 sm:hidden ${showfillter ? 'rotate-90' : ''}`} alt="" />
        </p>

        
        <div className={`border border-gray-300 pl-6 py-3 mt-6 ${showfillter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col text-sm font-light gap-2 text-gray-700'>
            {['men', 'women', 'kids'].map(cat => (
              <p key={cat} className='flex gap-2'>
                <input className='w-3' type='checkbox' value={cat} onChange={togglecategory} /> {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </p>
            ))}
          </div>
        </div>

        
        <div className={`border border-gray-300 pl-6 py-3 mt-6 my-5 ${showfillter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col text-sm font-light gap-2 text-gray-700'>
            {['Topwear', 'bottom wear', 'winter wear'].map(sub => (
              <p key={sub} className='flex gap-2'>
                <input className='w-3' type='checkbox' value={sub} onChange={togglesubcategory} /> {sub}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={' Collections'} />
          <select
            id='sort'
            value={sortType}
            onChange={(e) => setsortType(e.target.value)}
            className='border border-gray-300 text-sm px-2'
          >
            <option value='default'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low-High</option>
            <option value='high-low'>Sort by: High-Low</option>
          </select>
        </div>

        <Pagination
  products={fillterproducts}  
  currentPage={currentPage}
  totalPages={totalPages}
  setCurrentPage={setCurrentPage}
/>

      </div>
    </div>
  )
}

export default Collections
