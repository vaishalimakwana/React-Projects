import React from 'react';
import SpotLightBanner from '../assets/SpotLightBanner.jpg';
const SpotlightBanner = () => {
  return (
    <div className="bg-brandcolor lg:pt-24 pt-16 pb-16">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover 
        bg-center h-[550px] md:h-[600px] "
        style={{
          backgroundImage: `url(${SpotLightBanner})`,
          backgroundPosition: 'Top',
        }}
      >
        <div
          className="group absolute inset-0 hover:bg-slate-600 rounded-lg hover:bg-opacity-50
      flex flex-col items-center justify-center cursor-pointer"
        >
          <button
            className="hidden w-60 h-20 mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow
        group-hover:block text-2xl"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotlightBanner;
