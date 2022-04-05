import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navigation">
        <div>
          <h1>FASHION HOUSE</h1>
        </div>
        <div className=" mr-2 link grid grid-cols-6 gap-2 ">
          <Link to="/home">Home</Link>
          <Link to="/review">Review</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
