import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
   const linksRef = useRef(null);

   useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = "0px";
    }
    console.log(linksHeight);
   }, [showLinks])
  return (
    <nav>
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      <div className="links-container show-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef} >
          {links?.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* { showLinks && <div className="links-container show-container">
        <ul className="links">
          {links?.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>} */}

      {/* <div className={`${ showLinks ? "links-container show-container" : "links-container"}`} >
        <ul className="links">
          {links?.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div> */}
      <ul className="social-icons">
        {social?.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
