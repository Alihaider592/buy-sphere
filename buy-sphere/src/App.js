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
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Productitem from './components/Productitem';
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
    {
    path: "/product",   
    element: <Productitem />,
  },
],
);
  return (
    <div>
      <><RouterProvider router= {router}/></>
      <Searchbar/>
      <Footer/>
    </div>
  )
}

export default App
