import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="d-flex mt-5 py-5 justify-content-center footer">
      <h2>Stay In Touch</h2>
      <div className="row">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </footer>
  );
}
