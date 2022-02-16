import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-5 py-5 footer">
      <h2 className="mt-3">Stay In Touch</h2>
      <div className="row footer-icon mt-3 mb-5">
        <FacebookIcon className="mx-2" style={{ fontSize: "30px" }} />
        <InstagramIcon className="mx-2" style={{ fontSize: "30px" }} />
        <WhatsAppIcon className="mx-2" style={{ fontSize: "30px" }} />
      </div>
      <p className="mt-3 credits">&copy; 2022 - LOR. All Rights Reserved.</p>
    </footer>
  );
}
