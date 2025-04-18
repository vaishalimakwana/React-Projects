// src/Context/ShopContextProvider.jsx
import React from 'react';
import all_products from '../Utils/allproducts';
import clothing_collection from '../Utils/clothingcollection';
import grooming_products from '../Utils/groomingproducts';
import Shopcontext from './ShopContext';

const ShopContextProvider = ({ children }) => {
  const contextValue = { all_products, clothing_collection, grooming_products };

  return (
    <Shopcontext.Provider value={contextValue}>{children}</Shopcontext.Provider>
  );
};

export default ShopContextProvider; // Wraps your App (or part of it) with a provider to supply data.
