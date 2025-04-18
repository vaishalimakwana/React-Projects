import React, { useContext } from 'react';
import Shopcontext from '../Context/ShopContext';

import Items from './Items';

const ExclusiveClothing = () => {
  const { clothing_collection } = useContext(Shopcontext);
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 text-center font-serif">
          Exclusive Collection
        </h2>
        <p className="text-xl text-center font-serif font-normal mx-auto mt-3 md:px-40">
          Discover our exclusive range of dog clothing including cozy sweaters,
          stylish jackets, breathable tees, raincoats, and festive outfits —
          designed for comfort, fashion, and every season's adventure.
        </p>
        <div
          className="mt-10 grid grid-cols-1 gap-y-10 px-6 md:px-0
        sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {clothing_collection.map((product) => {
            return <Items key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveClothing;
