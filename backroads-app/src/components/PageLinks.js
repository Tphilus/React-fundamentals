import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks?.map((link) => (
        <PageLink key={link.id} link={link} itemClass={itemClass} />
      ))}
    </ul>
  );
}

export default PageLinks;
