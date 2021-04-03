import React from "react";
import "./NavigationItems.css";
import Button from "../../UI/Button/Button";

export default function NavigationItems() {
  return (
    <ul className="navUl">
      <li>
        <a href='#/'>SERVICE</a>
      </li>
      <li>
        <a href='#/'>COMPANY</a>
      </li>
      <li>
        <Button content='CONTACT' />
      </li>
    </ul>
  );
}
