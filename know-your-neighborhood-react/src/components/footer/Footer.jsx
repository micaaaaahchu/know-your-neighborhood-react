import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center">
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        &copy; 2023 | All Rights Reserved |
        <Link to="/terms" className="text-white hover:decoration-solid hover:underline hover:text-red-400">Terms and Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
