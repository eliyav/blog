import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export interface HeaderItems {
  path: string;
  text: string;
}

const Header: React.VFC<{
  list: HeaderItems[];
}> = ({ list }) => {
  return (
    <header className="header">
      <div className="header-content display-width">
        <h2 className="header-title">
          <Link to="/">Eliya's Blog</Link>
        </h2>
        <nav className="header-nav">
          <ul>
            {list.map((item, idx) => (
              <Link to={item.path} key={idx}>
                {item.text}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
