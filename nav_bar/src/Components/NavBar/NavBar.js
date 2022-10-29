import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" />
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
}

export default NavBar;
