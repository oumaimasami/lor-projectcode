import React from "react";
import About from "../components/About";
import Cantact from "../components/Cantact";
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
      <About />
      <Cantact />
    </>
  );
}
