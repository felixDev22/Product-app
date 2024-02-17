import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import axios from 'axios';
import { cartReducer } from './cartReducer';

const Cart = createContext();
const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch({ type: 'SET_PRODUCTS', payload: response.data }); // Corrected action type
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
