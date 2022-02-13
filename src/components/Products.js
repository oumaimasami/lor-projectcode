import React from "react";
import Product from "./Product";
import "./Products.css";

export default function Products() {
  return (
    <div className="container my-4 ">
      <h2 className="d-flex justify-content-center my-4"> Our Products</h2>
      <Product />
    </div>
  );
}
