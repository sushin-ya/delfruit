import React from "react";
import "./NavigationItems.css";

export default function NavigationItems() {
  return (
    <ul>
      <li>
        <a href='#/'>SERVICE</a>
      </li>
      <li>
        <a href='#/'>COMPANY</a>
      </li>
      <li>
        <a href='#/' className='btn'>
          CONTACT
        </a>
      </li>
    </ul>
  );
}
