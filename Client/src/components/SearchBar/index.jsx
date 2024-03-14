import { useState } from "react";
import styles from './SearchBar.module.css'

const  SearchBar = (props) => {
   const { onSearch } = props;
   const [id, setId] = useState('')

   const handleClick = () => {
      console.log('props', onSearch);
      props.onSearch(id);
   }

   
   const hamdleChange = ({target}) => {
      setId(target.value)
   }


   return(
      <div className={styles.ContainerNav}>
         <input 
            className={styles.Input} 
            onChange={hamdleChange} 
            value={id} 
            type='search'
            placeholder='id..'>
         </input>
         <button onClick={handleClick} className={styles.Button}>Agregar</button>
      </div>
   )
   
}

export default SearchBar;