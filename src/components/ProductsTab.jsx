import React, { useState, useCallback } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useProductsListData } from "../redux/hooks";
import ProductsCard from './ProductsCard';
import ProductForm from './ProductForm';

const ProductTab = () => {
  const { productsList } = useProductsListData();
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEditProduct = useCallback((product) => {
    setCurrentProduct(product);
  }, []);

  const handleResetProduct = useCallback(() => {
    setCurrentProduct(null);
  }, []);

  return (
    <Row>
      <Col md={8} lg={9}>
        <ProductsCard products={productsList} onEditProduct={handleEditProduct} />
      </Col>
      <Col md={4} lg={3}>
        <ProductForm 
          currentProduct={currentProduct} 
          onResetProduct={handleResetProduct} 
        />
      </Col>
    </Row>
  )
}

export default ProductTab;
