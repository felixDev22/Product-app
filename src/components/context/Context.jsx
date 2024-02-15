import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return <Cart.Provider value={products}>{children}</Cart.Provider>;
};

export default Context;
