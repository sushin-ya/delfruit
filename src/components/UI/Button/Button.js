import React from "react";
import "./Button.css";

export default function NavigationItems({ content }) {
  return (
    <a href='#/' className='btn'>
      {content}
    </a>
  );
}
