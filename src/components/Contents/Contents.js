import React from "react";
import "./Contents.css";
import Hero from "./Hero/Hero";
import Houses from "./Houses/Houses";
import Popular from "./Popular/Popular";
import Travel from "./Travel/Travel";

export default function Contents({ inView }) {
  return (
    <>
      <Hero />
      <div className='mainContents'>
        <aside className={inView ? "side left inview" : "side left"}>
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
      <aside className={inView ? "side right inview" : "side right"}>
        <div className='sideInner'>
          <span>&copy;Code Mafia</span>
        </div>
      </aside>
    </>
  );
}
