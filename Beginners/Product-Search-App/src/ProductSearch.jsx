import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductSearch = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  //   const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.carts);
        setProduct(data.carts);
        setFilter(data.carts);
      })
      .catch((err) => {
        `Error Fetching Data ${err}`;
      });
  }, [setProduct, setFilter]);
  const showContent = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    if (inputValue.trim() === '') {
      setProduct(product);
      setFilter(product);
      //setMessage('Enter product name');
    } else {
      const filterData = product
        .map((getProducts) => ({
          ...getProducts,
          products: getProducts.products.filter((titleblock) =>
            titleblock.title.toLowerCase().includes(inputValue.toLowerCase())
          ),
        }))
        .filter((getProducts) => getProducts.products.length > 0);
      setFilter(filterData);
    }
  };
  return (
    <div>
      <h2>SearchProduct</h2>
      <input
        className="input-box sticky-bar"
        type="text"
        value={search}
        onChange={showContent}
      />
      {/* {message && <p>{message}</p>} */}
      {product.length > 0 ? (
        <ul className="align-center padding-cl default-font">
          {filter.map((data, index) => (
            <li key={index}>
              {/* {data.id} */}
              {data.products.title}
              <ul className="product-inner align-center">
                {data.products.map((allproducts, t) => (
                  <li key={t}>
                    <h2 className="product-name">
                      Product name: {allproducts.title}
                    </h2>
                    <div className="align-center">
                      <div className="img-box box-inner">
                        <img
                          src={allproducts.thumbnail}
                          alt={allproducts.title}
                        />
                      </div>
                      <div>
                        <p className="product-info align-left">
                          {' '}
                          Price: ${allproducts.price}
                        </p>
                        <p className="product-info align-left">
                          In Stock:{allproducts.quantity}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}{' '}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div> Data Not Found</div>
      )}
    </div>
  );
};

export default ProductSearch;
