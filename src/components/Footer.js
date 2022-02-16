import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-5 py-5 footer">
      <h2 className="mt-2">Stay In Touch</h2>
      <div className="row footer-icon mt-3 mb-5">
        <FacebookIcon style={{ fontSize: "32px" }} />
        <InstagramIcon style={{ fontSize: "32px" }} />
        <LinkedInIcon style={{ fontSize: "32px" }} />
      </div>
      <p className="mt-5">&copy; 2022 - LOR. All Rights Reserved.</p>
    </footer>
  );
}
