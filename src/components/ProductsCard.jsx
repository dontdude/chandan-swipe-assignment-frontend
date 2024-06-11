import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { BiSolidPencil } from "react-icons/bi";

const ProductsCard = ({ products }) => {
  const handleEditClick = () => {
    // set the selected product state in the parent component
  };

  return (
      <Card className="p-4 p-xl-5 my-3 my-xl-4">
        <h3 className="fw-bold pb-2 pb-md-4">Products</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price/Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="fw-normal">{product.name}</td>
                <td className="fw-normal">{product.description}</td>
                <td className="fw-normal">{product.rate}</td>
                <td>
                <Button variant="outline-primary" onClick={handleEditClick}>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <BiSolidPencil />
          </div>
        </Button>
                  </td>
              </tr>
            ))}
          </tbody>
          <tbody></tbody>
        </Table>
      </Card>
  );
};

export default React.memo(ProductsCard);
