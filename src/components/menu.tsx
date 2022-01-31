import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header";

export const Menu: React.VFC<{
  links: HeaderItems[];
  onSearch: (name: string) => void;
  searchedValue: string;
  showMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ links, onSearch, searchedValue, showMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const menuToggle = useCallback(
    (e: globalThis.MouseEvent) => {
      menuRef.current?.contains(e.target as Node) ? null : showMenu(false);
    },
    [menuRef.current]
  );

  useEffect(() => {
    document.body.addEventListener("click", menuToggle);

    return () => document.body.removeEventListener("click", menuToggle);
  }, []);

  return (
    <div className="menu" ref={menuRef}>
      <input
        className="header-search"
        type="search"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        value={searchedValue}
      ></input>
      <nav className="header-nav">
        <ul>
          {links.map((item, idx) => (
            <Link
              to={item.path}
              onClick={() => window.scrollTo(0, 0)}
              key={idx}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
