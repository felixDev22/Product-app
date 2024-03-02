import React from 'react';
import { CartState } from './context/Context';
import '../styles/styles.css';
import { Button, Card } from 'react-bootstrap';
import SideFilter from './SideFilter';
import Rating from './Rating';

const Home = () => {
  const { state, dispatch } = CartState();
  const { products, cart } = state;

  if (!Array.isArray(products?.products) || products.products.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(cart);

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
                <span>${product.price} </span>
                <Rating rating={product.rating} />
              </Card.Subtitle>
              {cart.some((p) => p.id === product.id) ? (
                <Button
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: product,
                    });
                  }}
                  variant="danger">
                  Delete from Cart
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: product,
                    });
                  }}>
                  Add to Cart
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
