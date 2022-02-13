import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", setNavbar);
    };
  }, []);

  return (
    <nav
      className={
        navbar
          ? "col-12 navbar navbar-expand-lg navbar-light bg-light header active1"
          : "col-12 navbar navbar-expand-lg navbar-light bg-light header"
      }
    >
      <a className="navbar-brand col-md-7  " href="#">
        LOR
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link a1" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link a2" href="#">
              Formation
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  a3" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
