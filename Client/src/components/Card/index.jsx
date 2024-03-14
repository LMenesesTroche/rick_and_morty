import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
//ESTAS SE VUELVE VARIABLES
const {div, nameStyle, imageStyle, btn, data } = styles;


export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();
   const myFavorites =  useSelector((state)=>state.myFavorites);

   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image,
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id)) //mandar id de personaje como argumento
      }else{
         setIsFav(true);
          dispatch(addFav(myChar)) //mandar personaje como arg
      }
   }

   return (
      <div className={styles.container}>
         <button className={styles.buttonX} onClick={()=>(onClose(id))}>X</button>
         {/* BTN DE FAV */}
         {
            isFav ? (
               <button className={styles.favButton} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
            )
         }
         <img className={styles.img} src={image} alt='' />
         <Link to={`/detail/${id}`}>
            <h2 className={styles.detail}>{name}</h2>
         </Link>
         <h2 className={styles.data}>{status}</h2>
         <h2 className={styles.data}>{species}</h2>
         <h2 className={styles.data}>{gender}</h2>
         <h2 className={styles.data}>{origin}</h2>
      </div>
   );
}
