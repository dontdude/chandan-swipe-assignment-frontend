import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";
import ProductsTab from "../components/ProductsTab";

const Invoice = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <BiArrowBack size={18} />
        <div className="fw-bold mt-1 mx-2 cursor-pointer">
          <Link to="/">
            <h5>Go Back</h5>
          </Link>
        </div>
      </div>
      <Tabs variant="pills"
        defaultActiveKey="invoice"
        className="my-2"
      >
        <Tab eventKey="invoice" title="Invoice">
          <InvoiceForm />
        </Tab>
        <Tab eventKey="profile" title="Products">
          <ProductsTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Invoice;
