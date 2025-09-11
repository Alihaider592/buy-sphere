import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Order from './pages/Order';
import Placeorder from './pages/Placeorder';
import Product from './pages/Product';
import Footer from './components/Footer';
 import { ToastContainer, toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    [
      { path: '/', element: <><Navbar/><Home/><Footer/></> },
      { path: '/about', element: <><Navbar/><About/><Footer/></> },
      { path: '/cart', element: <><Navbar/><Cart/><Footer/></> },
      { path: '/collections', element: <><Navbar/><Collections/><Footer/></> },
      { path: '/contact', element: <><Navbar/><Contact/><Footer/></> },
      { path: '/login', element: <><Navbar/><Login/><Footer/></> },
      { path: '/order', element: <><Navbar/><Order/><Footer/></> },
      { path: '/placeorder', element: <><Navbar/><Placeorder/><Footer/></> },
      { path: '/product/:id', element: <><Navbar/><Product/><Footer/></> },
      {
        path: "/product/:id",
        element: <><Navbar/><Product /><Footer/></>,
}
]);

  return (
    <>
      <RouterProvider router={router} />
      {/* console.log('ToastContainero is mounted'); */}
      
<ToastContainer position='top-right' autoClose={3000}/>
    </>
  );
};

export default App;
