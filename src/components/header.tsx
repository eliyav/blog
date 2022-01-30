import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import menuIcon from "../../public/menu-icon.png";
import { Menu } from "./menu";

export interface HeaderItems {
  path: string;
  text: string;
}

const Header: React.VFC<{
  links: HeaderItems[];
  onSearch: (name: string) => void;
}> = ({ links, onSearch }) => {
  const buttonRef = useRef<HTMLImageElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);
  const menuDisplay = showMenu ? (
    <Menu links={links} onSearch={onSearch} />
  ) : null;

  return (
    <header className="header">
      <div className="header-content display-width">
        <h2 className="header-title">
          <Link to="/">My Blog</Link>
        </h2>
        <button
          className="menu-button"
          onClick={(e) => {
            if (e.target == buttonRef.current)
              showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          <img ref={buttonRef} className="menu-img" src={menuIcon}></img>
          {menuDisplay}
        </button>
      </div>
    </header>
  );
};

export default Header;
