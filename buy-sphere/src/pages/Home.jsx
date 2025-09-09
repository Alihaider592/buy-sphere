import React from 'react'
import ShopBy from '../components/ShopBy'
import Bestseller from '../components/Bestseller'
import Hero from '../components/Hambuger.jsx/Hero'
import Overpolicy from '../components/Overpolicy'
import Newsletter from '../components/Newsletter'
import Shopbyproducts from '../components/shopbyproducts'
const Home = () => {
  return (
    <div>
      <Hero/>
      <ShopBy/>
      <Bestseller/>
      <Overpolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home
