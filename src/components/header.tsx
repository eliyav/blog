import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export interface HeaderItems {
  path: string;
  text: string;
}

const Header: React.VFC<{
  links: HeaderItems[];
  onSearch: (name: string) => void;
}> = ({ links, onSearch }) => {
  return (
    <header className="header">
      <div className="header-content display-width">
        <h2 className="header-title">
          <Link to="/">My Blog</Link>
        </h2>
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
        <input
          className="header-search"
          type="search"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
        ></input>
      </div>
    </header>
  );
};

export default Header;
