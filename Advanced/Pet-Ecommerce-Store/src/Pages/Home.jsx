import React from 'react';
import Navbar from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import MidBanner from '../components/MidBanner';
import ExclusiveClothing from '../components/ExclusiveClothing';
import SpotlightBanner from '../components/SpotlightBanner';
import FoodProducts from '../components/FoodProducts';
import ToysProducts from '../components/ToysProducts';
const Home = () => {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <MidBanner />
      <ExclusiveClothing />
      <SpotlightBanner />
      <FoodProducts />
      <ToysProducts />
    </div>
  );
};

export default Home;
