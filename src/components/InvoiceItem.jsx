import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemRow from "./ItemRow";
import ProductsModal from "./ProductsModal";

const InvoiceItem = (props) => {
  const { onProductSelect, onItemizedItemEdit, currency, onRowDel, items, onRowAdd, products, isDisabled } = props;
  
  const [showModal, setShowModal] = useState(false);

  const itemTable = items.map((item) => (
    <ItemRow
      key={item.id}
      item={item}
      onDelEvent={onRowDel}
      onItemizedItemEdit={onItemizedItemEdit}
      currency={currency}
      products={products}
      onProductSelect={onProductSelect}
    />
  ));

  const handleProductSelect = (selected) => {
    props.onProductSelect(selected);
    setShowModal(false); 
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button className="me-2" variant="primary" onClick={() => setShowModal(true)}>
        Select Product Item
      </Button>
      <Button className={`fw-bold ${isDisabled ? "disabled" : ""}`} onClick={onRowAdd}>
        Add Item
      </Button>
      <ProductsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
};

export default InvoiceItem;
