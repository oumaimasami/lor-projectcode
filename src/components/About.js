import React from 'react';
import './About.css';
export default function About() {
  return (
    <div className=" backimg my-5 row " id="About">
      <div className="col-7"></div>
      <div className="about-text col-md-4 col-12 my-5 text-center ">
        <div className="second-line">
          <h1 className="about-title mt-5 d-flex justify-content-center">
            <strong> About Us</strong>
          </h1>
        </div>
        <br />
        <p className="d-flex text-center mt-3 p-2">
          LOR is the result of a collaboration between two young Tunisian
          designers and craftsmen from the Medina. All LOR Creations are
          handmade, combining tradition and modernity.
        </p>
      </div>
    </div>
  );
}
