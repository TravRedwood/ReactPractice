import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">React</h1>
      <div className="menu-icon">
        <i>icon</i>
      </div>
      <ul>
        {MenuItems.map(item => {
          return (
            <li key={item.index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
