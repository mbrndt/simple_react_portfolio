import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; 2022 Mareike Brandt</p>
    </div>
  );
}

export default Footer;
