import React from "react";
import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/Products";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
    </>
  );
}
