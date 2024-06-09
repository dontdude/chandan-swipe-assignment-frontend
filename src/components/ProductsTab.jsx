import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useProductsListData } from "../redux/hooks";
import ProductsCard from './ProductsCard';
import ProductForm from './ProductForm';

const ProductTab = () => {
  const { productsList } = useProductsListData();

  return (
    <Row>
      <Col md={8} lg={9}>
      <ProductsCard products={productsList} />
      </Col>
      <Col md={4} lg={3}>
        <ProductForm />
      </Col>
    </Row>
  )
}

export default ProductTab;