import React, { useContext } from 'react';
import Shopcontext from '../Context/ShopContext';

import Toys from './Toys';

const ToysProducts = () => {
  const { all_products } = useContext(Shopcontext);
  const toys = all_products.filter((product) => product.category === 'Toys');
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 text-center font-serif">
          Toys for your Pet
        </h2>
        <p className="text-xl text-center font-serif font-normal mx-auto mt-3 md:px-40">
          Keep your pet active and entertained with our fun and durable toys.
          Designed to stimulate their mind and body, our collection includes
          chew toys, interactive puzzles, and fetch favorites. Perfect for
          reducing boredom and encouraging healthy play, these toys are safe,
          engaging, and tailored for pets of all sizes.
        </p>
        <div
          className="mt-10 grid grid-cols-1 gap-y-10 px-6 md:px-0
        sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {toys.map((product) => {
            return <Toys key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ToysProducts;
