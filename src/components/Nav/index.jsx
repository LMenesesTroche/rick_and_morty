import React from "react";
import SearchBar from "../SearchBar";
import {Link} from 'react-router-dom'
import styles from './nav.modules.css'
const Nav = ({onSearch}) => {
  return (
    <>
        <div className="containerOffButtons">
          <Link to="/home">
          <button className="nav-button">Home</button>
          </Link>
          <Link to="/about">
          <button className="nav-button">About</button>
            
          </Link>
        
        

        <SearchBar onSearch={onSearch} />
        </div>
    </>
  );
};

export default Nav;