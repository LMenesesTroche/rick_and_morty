import React from "react";
import SearchBar from "../SearchBar";
import {Link} from 'react-router-dom'
import styles from './nav.module.css'
import logo from '../logo2.png'

const Nav = ({onSearch}) => {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={logo} alt="logoDeRickyMorty" height={60} width={250}/>
          </div>
          <div className={styles.containerOffButtons}>
            <Link to="/home">
            <button className={styles.navbuttons}>Home</button>
            </Link>
            <Link to="/about">
            <button className={styles.navbuttons}>About</button>
            </Link>
            <Link to="/favorites">
            <button className={styles.navbuttons}>Favorites</button>
            </Link>
          </div>

          <div className={styles.containerOfSearchBar}>
            <SearchBar onSearch={onSearch} />
          </div>

        </div>
    </>
  );
};

export default Nav;