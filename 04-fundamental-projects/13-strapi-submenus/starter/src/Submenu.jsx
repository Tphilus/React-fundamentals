import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

export default function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();


  const container = useRef(null);
  const [columns, setColumns] = useEffect('');
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if(links.length === 3) {
      setColumns('col-3');
    }
    if(links.length > 3) {
      setColumns('col-4');
    }
  }, [location, links]);
  

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center  ${columns}`} >
        {links?.map((link, index) => {
          const {label, icon, url} = link;
          return <a href={url} key={index} >
            {label}
          </a>
        })}
      </div>
    </aside>
  );
}
