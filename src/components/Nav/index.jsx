import React from "react";
import SearchBar from "../SearchBar";
import {Link} from 'react-router-dom'
import styles from './nav.modules.css'
const Nav = ({onSearch}) => {
  return (
    <>
        <div className="containerOffButtons">
          <div className="leftNav">
            <Link to="/home">
            <button className="navbuttons">Home</button>
            </Link>
            <Link to="/about">
            <button className="navbuttons">About</button>
            </Link>
          </div>
          <div className="rightNav">
            <SearchBar onSearch={onSearch} />
          </div>
        
        

        </div>
    </>
  );
};

export default Nav;