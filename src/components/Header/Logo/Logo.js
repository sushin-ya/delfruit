import React from "react";
import "./Logo.css";
import { FaAppleAlt } from "react-icons/fa";

export default function Logo() {
  return (
    <div className='logo'>
      <FaAppleAlt className="Apple"/>
      <span className="Del">Del</span>
      <span className="Fruit">Fruit</span>
    </div>
  );
}
