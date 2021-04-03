import React, { useState } from "react";
import "./Header.css";
import Logo from "../UI/Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import { HamburgerSpin } from "react-animated-burgers";

export default function Header({ inview, mobileToggle }) {
  const [isActive, setIsActive] = useState(false);

  function toggleButton() {
    setIsActive(!isActive);
    mobileToggle();
  }

  return (
    <header className={inview ? "header triggered" : "header"}>
      <div className='headerInner'>
        <Logo />
        <div className='headerNav'>
          <NavigationItems />
        </div>
        <HamburgerSpin
          className='humberger'
          isActive={isActive}
          toggleButton={toggleButton}
        />
      </div>
    </header>
  );
}
