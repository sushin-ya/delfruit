import React from "react";
import "./Logo.css";
import logo from "./images/logo.svg";

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt='' className='logoImg' />
      <span>Stay</span>
      <span className='World'>World</span>
    </div>
  );
}
