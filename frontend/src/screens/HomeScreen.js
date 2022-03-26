import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      // Destructing the res object to get data instead of writing res.data
      const { data } = await axios.get('api/products');
      setProducts(data);

      // try {
      //   // Destructing the res object to get data instead of writing res.data
      //   const { data } = await axios.get('api/products');
      //   setProducts(data);
      // } catch (error) {
      //   console.log(error);
      // }
    };

    fetchProducts();
  }, []);

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
