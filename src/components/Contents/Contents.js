import React from "react";
import "./Contents.css";
import Hero from "./Hero/Hero";
import Houses from "./Houses/Houses";
import Popular from "./Popular/Popular";
import Travel from "./Travel/Travel";

export default function Contents() {
  return (
    <div>
      <Hero />
      <Travel />
      <Houses />
      <Popular />
    </div>
  );
}
