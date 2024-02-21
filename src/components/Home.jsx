import React from 'react';
import { CartState } from './context/Context';
import '../styles/styles.css';
import { Card } from 'react-bootstrap';
import SideFilter from './SideFilter';

const Home = () => {
  const { state } = CartState();
  const { products } = state;

  if (!Array.isArray(products?.products) || products.products.length === 0) {
    return <div>Loading...</div>;
  }

  const productList = products.products;

  console.log(productList);

  return (
    <div className="product-display">
      <SideFilter />
      <div className="product-container">
        {productList.map((product) => (
          <Card key={product.id} className="card">
            <Card.Img
              variant="top"
              className="card-img"
              src={product.thumbnail}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title className="card-title">{product.title}</Card.Title>
              <Card.Subtitle className="card-subtitle">
                <span>
                  {product.price}, {product.rating}
                </span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
