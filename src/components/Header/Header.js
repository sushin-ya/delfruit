import React from "react";
import "./Header.css";
import Logo from "./Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

export default function Header() {
  return (
    <header className='Header'>
      <div className='HeaderInner'>
        <Logo />
        <NavigationItems />
      </div>
    </header>
  );
}
