import React from "react";
import "./Header.css";
import Logo from "../UI/Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

export default function Header() {
  return (
    <header className='header'>
      <div className='headerInner'>
        <Logo />
        <NavigationItems />
      </div>
    </header>
  );
}
