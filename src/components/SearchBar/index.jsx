import React from 'react';

import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;

   return (
      <div className={styles.SearchBar}>
         <input  className={styles.input}type='search' placeholder='id..' />
         <button className={styles.boton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
