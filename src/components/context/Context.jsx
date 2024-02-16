import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import axios from 'axios';
import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';

const Cart = createContext();
const [state, dispatch] = useReducer(cartReducer, {
  products: [],
  cart: [],
});

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch({ type: 'SET_PRODUCT', payload: response.data });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
