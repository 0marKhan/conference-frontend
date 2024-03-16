import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <h3>Conference</h3>
        </li>
        <li className="right-side">
          <div className="search-box">
            <input type="text" placeholder="search article" />
            <button style={{ width: "2.5rem", height: "2.2rem" }}>
              <FontAwesomeIcon icon={faSearch} />{" "}
            </button>
          </div>
          <div className="dropdown-body">
            <DropDown />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
