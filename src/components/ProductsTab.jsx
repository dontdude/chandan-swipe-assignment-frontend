import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductsCard from './ProductsCard';
import ProductForm from './ProductForm';

const ProductTab = () => {
  const product = [{
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 100
  }];

  return (
    <Row>
      <Col md={8} lg={9}>
      <ProductsCard products={product} />
      </Col>
      <Col md={4} lg={3}>
        <ProductForm />
      </Col>
    </Row>
  )
}

export default ProductTab;