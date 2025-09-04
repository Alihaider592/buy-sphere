import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Order from './pages/Order'
import Placeorder from './pages/Placeorder'
import Product from './pages/Product'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
    {
      path :'/',
      element :<><Navbar/><Home/></>,
    },
    {
      path :'/About',
      element :<><Navbar/><About/></>,
    },
    {
      path :'/Cart',
      element :<><Navbar/><Cart/></>,
    },
    {
      path :'/Collections',
      element :<><Navbar/><Collections/></>,
    },
    {
      path :'/Contact',
      element :<><Navbar/><Contact/></>,
    },
    {
      path :'/Login',
      element :<><Navbar/><Login/></>,
    },
    {
      path :'/Order',
      element :<><Navbar/><Order/></>,
    },
    {
      path :'/Placeorder',
      element :<><Navbar/><Placeorder/></>,
    },
    {
      path :'/Product',
      element :<><Navbar/><Product/></>,
    },
  ])
  return (
    <div>
      <><RouterProvider router= {router}/></>
    </div>
  )
}

export default App
