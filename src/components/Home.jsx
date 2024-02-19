import React from 'react';
import { CartState } from './context/Context';
import '../styles/styles.css';
import { Card } from 'react-bootstrap';

const Home = () => {
  const { state } = CartState();
  const { products } = state;

  if (!Array.isArray(products?.products) || products.products.length === 0) {
    return <div>Loading...</div>;
  }

  const productList = products.products;

  console.log(productList);

  return (
    <div className="product-diplay">
      <h2>Products</h2>
      <div className="product-container">
        {productList.map((product) => (
          <Card key={product.id} className="Card">
            <Card.Img
              variant="top"
              className="card-img"
              src={product.thumbnail}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle>
                <span>
                  {product.price},{product.rating}
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
