import React from "react";
import "./Contents.css";
import Hero from "./Hero/Hero";
import Houses from "./Houses/Houses";
import Popular from "./Popular/Popular";
import Travel from "./Travel/Travel";

export default function Contents() {
  return (
    <>
      <Hero />
      <div className='mainContents'>
        <aside className='side left'>
          <div className='sideInner'>
            <a href='#/' className='twitter icon'>
              Twitter
            </a>
            <a href='#/' className='facebook icon'>
              Facebook
            </a>
          </div>
        </aside>
        <main>
          <Travel />
          <Houses />
          <Popular />
        </main>
      </div>
      <aside className='side right'>
        <div className='sideInner'>
          <span>&copy;Code Mafia</span>
        </div>
      </aside>
    </>
  );
}
