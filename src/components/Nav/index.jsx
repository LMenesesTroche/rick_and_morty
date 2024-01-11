import React from "react";
import SearchBar from "../SearchBar";
import {Link} from 'react-router-dom'
import './nav.css'
const Nav = ({onSearch}) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <button className="nav-button">About</button>
      </Link>
      <Link to="/home">
        <button className="nav-button">Home</button>
      </Link>
    </div>
  );
};

export default Nav;