import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="">
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
