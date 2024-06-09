import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ProductForm = () => {
  const [currentProduct, setCurrentProduct] = useState({
    id: 0,
    name: "",
    description: "",
    price: "",
  });
  const [validate, setValidate] = useState(false);

  const handleEdit = (e) => {
  };

  const handleFormSubmit = () => {
   
  };

  return (
    <div className="sticky-top pt-md-3 pt-xl-4">
      <Form.Group className="my-3">
        <Form.Label className="fw-bold">Name: </Form.Label>
        <InputGroup className="my-1 flex-nowrap">
          <Form.Control
            name="name"
            type="text"
            value={currentProduct.name}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="Enter name"
            isInvalid={validate && currentProduct.name === ""}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label className="fw-bold">Description:</Form.Label>
        <InputGroup className="my-1 flex-nowrap">
          <Form.Control
            name="description"
            type="text"
            value={currentProduct.description}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="Enter description"
            isInvalid={validate && currentProduct.description === ""}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label className="fw-bold">Price:</Form.Label>
        <InputGroup className="my-1 flex-nowrap">
          <InputGroup.Text className="bg-light fw-bold text-secondary small">
            $
          </InputGroup.Text>
          <Form.Control
            name="price"
            type="number"
            value={currentProduct.price}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="0.0"
            min="0.00"
            step="0.01"
            isInvalid={validate && currentProduct.price === ""}
          />
        </InputGroup>
      </Form.Group>
      <Button variant="primary" className="d-block" onClick={handleFormSubmit}>
        Add Product
      </Button>
    </div>
  );
};

export default ProductForm;
