import React from "react";
import product from "../images/Product1.jpg";
import "./Product.css";
export default function Product() {
  return (
    <div className="col-md-4 hvrbox">
      <img className=" my-4 hvrbox-layer_bottom " src={product} alt="" />
      <div className="hvrbox-layer_top ">
        <div className="hvrbox-text">
          Découvrez notre étole en soie, rayée, confectionnée à la main avec
          amour et passion <br /> 200cm / 80cm
        </div>
      </div>
    </div>
  );
}
