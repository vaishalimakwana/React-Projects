// import { createContext } from 'react';
// import all_products from '../Utils/allproducts';
// import clothing_collection from '../Utils/clothingcollection';
// export const Shopcontext = createContext(null);

// const ShopContextProvider = (props) => {
//   const contextValue = { all_products, clothing_collection };

//   return (
//     <Shopcontext.Provider value={contextValue}>
//       {props.children}
//     </Shopcontext.Provider>
//   );
// };
// export default ShopContextProvider;
// src/Context/ShopContext.jsx
import { createContext } from 'react';

const Shopcontext = createContext(null);

export default Shopcontext; // 	✅ Creates and exports the context object via createContext.
