import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const ProductsCard = ({ products }) => {
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
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td className="fw-normal">{product.name}</td>
                <td className="fw-normal">{product.description}</td>
                <td className="fw-normal">{product.rate}</td>
              </tr>
            ))}
          </tbody>
          <tbody></tbody>
        </Table>
      </Card>
  );
};

export default React.memo(ProductsCard);
