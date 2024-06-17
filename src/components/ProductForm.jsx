import React, { useState, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/productsSlice";
import { selectCurrentCurrency } from "../redux/currencySlice";

const initialProductState = {
  id: 0,
  name: "",
  description: "",
  rate: 0,
  quantity: 1,
};

const ProductForm = ({ currentProduct, onResetProduct }) => {
  const selectedCurrentCurrency = useSelector(selectCurrentCurrency);

  const dispatch = useDispatch();
  const [product, setProduct] = useState(initialProductState);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      setProduct(initialProductState);
    }
  }, [currentProduct]);

  useEffect(() => {
  setProduct((prevProduct) => ({
    ...prevProduct,
    currency: selectedCurrentCurrency
  }));
}, [selectedCurrentCurrency]);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFormSubmit = () => {
    const isValid = Object.values(product).every((value) => value !== "");

    if (isValid) {
      if (product.id === 0) {
        dispatch(addProduct(product));
      } else {
        dispatch(updateProduct(product));
      }
      onResetProduct();
      setProduct(initialProductState);
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
            value={product.name}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="Enter name"
            isInvalid={validate && product.name === ""}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className="my-3">
        <Form.Label className="fw-bold">Description:</Form.Label>
        <InputGroup className="my-1 flex-nowrap">
          <Form.Control
            name="description"
            type="text"
            value={product.description}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="Enter description"
            isInvalid={validate && product.description === ""}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className="my-3">
        <Form.Label className="fw-bold">Price/Rate:</Form.Label>
        <InputGroup className="my-1 flex-nowrap">
          <InputGroup.Text className="bg-light fw-bold text-secondary small">
          {selectedCurrentCurrency}
          </InputGroup.Text>
          <Form.Control
            name="rate"
            type="number"
            value={product.rate}
            onChange={handleEdit}
            className="bg-white border"
            placeholder="0.0"
            min="0.00"
            step="0.01"
            isInvalid={validate && product.rate === ""}
          />
        </InputGroup>
      </Form.Group>

      <Button variant="primary" className="w-100" onClick={handleFormSubmit}>
        <div className="d-block w-100">
        {product.id === 0 ? "Add Product" : "Update Product"}
        </div>
      </Button>
    </div>
  );
};

export default ProductForm;
