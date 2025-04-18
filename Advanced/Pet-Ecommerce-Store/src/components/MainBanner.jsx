import React from 'react';
import BannerImage from '../assets/HomeBanner.jpg';
const MainBanner = () => {
  return (
    <div className="bg-white lg:pt-24 pt-16 pb-16">
      <div
        className="cursor-pointer relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover 
      bg-center h-[550px] md:h-[600px] hover:opacity-90"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundPosition: 'Top',
        }}
      ></div>
    </div>
  );
};

export default MainBanner;
