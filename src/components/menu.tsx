import React from "react";
import { Link } from "react-router-dom";
import { HeaderItems } from "./header";

export const Menu: React.VFC<{
  links: HeaderItems[];
  onSearch: (name: string) => void;
}> = ({ links, onSearch }) => (
  <div className="menu">
    <input
      className="header-search"
      type="search"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
    ></input>
    <nav className="header-nav">
      <ul>
        {links.map((item, idx) => (
          <Link to={item.path} onClick={() => window.scrollTo(0, 0)} key={idx}>
            {item.text}
          </Link>
        ))}
      </ul>
    </nav>
  </div>
);
