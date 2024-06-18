import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const ProductsModal = ({ show, onHide, products, onProductSelect }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedProductId(id);
  };

  const handleSelectClick = () => {
    if (selectedProductId !== null) {
      onProductSelect(selectedProductId);
    }
    setSelectedProductId(null);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Select a Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="p-2 p-xl-4 my-xl-2">
          <h6 className="my-2">Please select a product from the list below and click 'Select' to confirm.</h6>
          <Table responsive>
            <thead>
              <tr>
                <th>Action</th>
                <th>Product ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price/Rate</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Form.Check
                      type="radio"
                      className="ms-3"
                      name="productSelect"
                      onChange={() => handleCheckboxChange(product.id)}
                      checked={selectedProductId === product.id}
                    />
                  </td>
                  <td>{product.id}</td>
                  <td className="fw-normal">{product.name}</td>
                  <td className="fw-normal">{product.description}</td>
                  <td className="fw-normal">{product.rate}</td>
                </tr>
              )) : 'Add a product from products page or a new custom product.'}
            </tbody>
          </Table>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button className="px-4 py-2" variant="secondary" onClick={onHide}>
          Close
        </Button> */}
        <Button className={`px-4 py-2 ${!selectedProductId ? "disabled" : ""}`} variant="primary" onClick={handleSelectClick}>
          Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductsModal;
