import React from "react";
import Product from "./Product";
import "./Products.css";

export default function Products() {
  return (
    <div className="container my-4 " id="Products">
      <h2 className="d-flex big-title justify-content-center mb-5">
        Our Products
      </h2>
      <div className="row ">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
