import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
import { useGlobalContext } from "./Context";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
   const center = (tempBtn.left + tempBtn.right) / 2; 
   const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom})
  }
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="strip" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu} >Product</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu} >Developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu} >Company</button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
}
