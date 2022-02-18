import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 500) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', setNavbar);
    };
  }, []);

  return (
    <nav
      className={
        navbar
          ? 'col-12 navbar navbar-expand-lg navbar-dark shadow-5-strong header active1 p-0'
          : 'col-12 navbar navbar-expand-lg navbar-dark shadow-5-strong header p-0'
      }
    >
      <a className="navbar-brand col-md-6 col-2 d-flex " href="#">
        LOR
      </a>

      <button
        className="navbar-toggler m-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item pr-2 pl-5 active">
            <a className="nav-link  a1" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link a1" href="#About">
              About
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link  a1" href="#Products">
              Products
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link  a1" href="#Cantact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
