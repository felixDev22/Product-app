import React from 'react';
import { CartState } from './context/Context';

const Home = () => {
  const { state } = CartState();

  console.log('Type ofe state.prpducts:', typeof state.products);

  if (state.products.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(state.products);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
