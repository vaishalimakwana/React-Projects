import React, { useContext } from 'react';
import Shopcontext from '../Context/ShopContext';
import Grooming from '../components/Grooming.jsx';
import GroomingBanner from '../assets/GroomingBanner.jpg';
const HealthAndGrooming = () => {
  const { grooming_products } = useContext(Shopcontext);

  return (
    <div>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl md:text-4xl font-bold pt-10  tracking-tight text-gray-800 text-left font-serif">
            Bubble Baths equals Wagging Tails
          </h2>
          <div className="bg-white pt-10 h-96 overflow-hidden">
            <img src={GroomingBanner} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 pt-0 pb-16 lg:max-w-7xl lg:px-8">
        <h3 className="text-xl md:text-4xl font-bold py-0  md:py-5  tracking-tight text-gray-800 text-center font-serif">
          All Grooming Products
        </h3>
        <div
          className="mt-5 md:mt-10 grid grid-cols-1 gap-y-10 px-6 md:px-0
        sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {grooming_products.map((product) => {
            return <Grooming key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HealthAndGrooming;
