import React, { useState, useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../redux/productsSlice";

const initialProductState = {
  id: 0,
  name: "",
  description: "",
  rate: "",
};

const ProductForm = () => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [validate, setValidate] = useState(false);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const resetFormData = useCallback(() => {
    setCurrentProduct(initialProductState);
  }, []);

  const handleFormSubmit = () => {
    const isValid = Object.values(currentProduct).every((value) => value !== "");

    if (isValid) {
      if (currentProduct.id === 0) {
        dispatch(addProduct(currentProduct));
        resetFormData();
      } else {
        dispatch(updateProduct(currentProduct));
      }
    }
    setValidate(!isValid);
  };

  return (
    <div className="sticky-top pt-md-3 pt-xl-4">
      <Form.Group className="my-3">
        <Form.Label className="fw-bold">Name:</Form.Label>
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
        <Form.Label className="fw-bold">Price/Rate:</Form.Label>
        <InputGroup className="my-1 flex-nowrap">
          <InputGroup.Text className="bg-light fw-bold text-secondary small">
            $
          </InputGroup.Text>
          <Form.Control
            name="rate"
            type="number"
            value={currentProduct.rate}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="0.0"
            min="0.00"
            step="0.01"
            isInvalid={validate && currentProduct.rate === ""}
          />
        </InputGroup>
      </Form.Group>

      <Button variant="primary" className="d-block w-100" onClick={handleFormSubmit}>
        {currentProduct.id === 0 ? "Add Product" : "Update Product"}
      </Button>
    </div>
  );
};

export default ProductForm;
