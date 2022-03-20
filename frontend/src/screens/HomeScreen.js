import React from 'react';
// temp js file mock data
import products from '../products';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
