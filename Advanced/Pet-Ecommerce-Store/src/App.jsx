import React from 'react';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import FoodAndTreats from './Pages/FoodAndTreats';
import HealthAndGrooming from './Pages/HealthAndGrooming';
import ToysAndAccessories from './Pages/ToysAndAccessories';
import DogClothing from './Pages/DogClothing';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/foodandtreats',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <FoodAndTreats />
        <Footer />
      </>
    ),
  },
  {
    path: '/toysandaccessories',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <ToysAndAccessories />
        <Footer />
      </>
    ),
  },
  {
    path: '/healthandgrooming',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <HealthAndGrooming />
        <Footer />
      </>
    ),
  },
  {
    path: '/dogclothing',
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <DogClothing />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <ScrollToTop />
        <Login />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <ScrollToTop />
        <Cart />
      </>
    ),
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
