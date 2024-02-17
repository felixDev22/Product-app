import React from 'react';
import { CartState } from './context/Context';

const Home = () => {
  const { state } = CartState();
  const { products } = state;

  if (!Array.isArray(products?.products) || products.products.length === 0) {
    return <div>Loading...</div>;
  }

  const productList = products.products;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {productList.map((product) => (
          <li className="badge bg-primary text-wrap" key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
