import React from "react";
import "./Footer.css";
import Logo from "../UI/Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <footer className={inView ? "footer inveiw" : "footer"} ref={ref}>
      <Logo />
      <div className='footerNav'>
        <NavigationItems />
        <div className='footerCopyright'>&copy; Code Mafia</div>
      </div>
    </footer>
  );
}
