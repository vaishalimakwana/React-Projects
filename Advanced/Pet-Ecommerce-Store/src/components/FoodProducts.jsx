import React, { useContext } from 'react';
import Shopcontext from '../Context/ShopContext';

import Treats from './Treats';

const FoodProducts = () => {
  const { all_products } = useContext(Shopcontext);
  const foodproducts = all_products.filter(
    (product) => product.category === 'Food'
  );
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 text-center font-serif">
          Healthy Treats for your Pet
        </h2>
        <p className="text-xl text-center font-serif font-normal mx-auto mt-3 md:px-40">
          Indulge your furry friend with our range of healthy, natural treats
          made from high-quality ingredients. Packed with nutrients, they
          support strong immunity, healthy digestion, and shiny coats. Whether
          it's training rewards or daily snacks, our treats are delicious, safe,
          and crafted to keep your pet happy and thriving.
        </p>
        <div
          className="mt-10 grid grid-cols-1 gap-y-10 px-6 md:px-0
        sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {foodproducts.map((product) => {
            return <Treats key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodProducts;
