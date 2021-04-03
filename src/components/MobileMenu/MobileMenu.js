import React from "react";
import "./MobileMenu.css";

export default function MobileMenu({ mobileState }) {
  return (
    <nav className='mobileMenu'>
      <ul className='mobileMenuMain'>
        <li
          className={mobileState ? "mobileMenuItem menuOpen" : "mobileMenuItem"}
        >
          <a className='mobileMenuLink' href='#/'>
            <span className='mainTitle'>Our Service</span>
            <span className='subTitle'>サービスについて</span>
          </a>
        </li>
        <li
          className={mobileState ? "mobileMenuItem menuOpen" : "mobileMenuItem"}
        >
          <a className='mobileMenuLink' href='#/'>
            <span className='mainTitle'>About Us</span>
            <span className='subTitle'>私たちについて</span>
          </a>
        </li>
        <li
          className={mobileState ? "mobileMenuItem menuOpen" : "mobileMenuItem"}
        >
          <a className='mobileMenuLink' href='#/'>
            <span className='mainTitle'>Contact Us</span>
            <span className='subTitle'>コンタクト方法</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
