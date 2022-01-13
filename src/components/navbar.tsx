import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export interface NavbarItems {
  path: string;
  text: string;
}

const Navbar: React.VFC<{
  list: NavbarItems[];
}> = ({ list }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h2 onClick={() => navigate("/")}>Eliya's Blog</h2>
      <div className="list">
        <ul>
          {list.map((item, idx) => (
            <Link to={item.path} key={idx}>
              {item.text}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
