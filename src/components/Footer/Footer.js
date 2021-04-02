import React from "react";
import "./Footer.css";
import Logo from "../UI/Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

export default function Footer() {
  return (
    <footer className='footer'>
      <Logo />
      <div className='footerNav'>
        <NavigationItems />
        <div className='footerCopyright'>&copy; Code Mafia</div>
      </div>
    </footer>
  );
}
