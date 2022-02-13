import React from "react";
import product from "../images/Product1.jpg";
import "./Product.css";
export default function Product() {
  return (
    <div className="row ">
      <img className=" my-4 col-md-4" src={product} alt="" />
      <img className=" my-4 col-md-4" src={product} alt="" />
      <img className=" my-4 col-md-4" src={product} alt="" />
      <img className=" my-4 col-md-4" src={product} alt="" />
      <img className=" my-4 col-md-4" src={product} alt="" />
      <img className=" my-4 col-md-4" src={product} alt="" />
    </div>
  );
}
