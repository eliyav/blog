import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import menuIcon from "../icons/menu.png";
import { Menu } from "./menu";

export interface HeaderItems {
  path: string;
  text: string;
}

const Header: React.VFC<{
  links: HeaderItems[];
  onSearch: (name: string) => void;
  searchedValue: string;
}> = ({ links, onSearch, searchedValue }) => {
  const buttonRef = useRef<HTMLImageElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-content display-width">
        <h2 className="header-title">
          <Link to="/">My Blog</Link>
        </h2>
        <div
          className="menu-button"
          onClick={(e) => {
            if (e.target == buttonRef.current)
              showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          <img ref={buttonRef} className="menu-img" src={menuIcon}></img>
          {showMenu ? (
            <Menu
              links={links}
              onSearch={onSearch}
              searchedValue={searchedValue}
              showMenu={setShowMenu}
            />
          ) : null}
        </div>
      </div>
      {searchedValue && !showMenu ? (
        <div className="searched">
          <span className="searched-value">"{searchedValue}"</span>
          <span className="searched-close" onClick={() => onSearch("")}>
            X
          </span>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
