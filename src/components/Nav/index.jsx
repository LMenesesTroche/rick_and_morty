import React from 'react';
import SearchBar from '../SearchBar'
import styles from './nav.css'

export default function Nav({onSearch}) {

   return (
    <div className={styles.container}>
        <SearchBar onSearch={onSearch} />
    </div>
    
   );
}
