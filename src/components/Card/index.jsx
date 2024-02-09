import React, { useState, useEffect } from "react";
import styles from './card.module.css'
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions"; // Asegúrate de importar las acciones correctas
import { connect } from "react-redux";


const mapDispatchToProps = (dispatch) =>{
  return{
    addFav: (character) => {dispatch(addFav(character));},
    removeFav: (id) => {dispatch(removeFav(id));}
    
  };


}; 
function Card(props) {
  const { name, status, gender, species, origin, image, onClose , id, myFavorites} = props;
  const [isFav, setIsFav] = useState(false);


  useEffect(() => {
    if(myFavorites){
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
           setIsFav(true);
        }
     });
    }
   
 }, [myFavorites]);


  const handleFavorite = () =>{
    if(isFav === true ){
      setIsFav(false);
      props.removeFav(id);
    }else if (isFav ===  false){
      setIsFav(true);
      props.addFav(props);
    }
  };

  
  

  return (
    <div className={styles.container}>
      <div className={styles.favButton}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
          )
        }
      </div>
      
      <img
        src={image}
        alt='foto'
        height={200}
        width={200}
        className={styles.img}
      />
      <div className={styles.detail}>
        <Link  to={`/detail/${props.id}`}>
          <h1 >
            {name}
          </h1>
        </Link>
      </div>
     
      
      <div className={styles.data}>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin.name}</h2>
      </div>
      
      <button onClick={() => onClose(props.id)} className={styles.buttonX}>
        X
      </button>
    </div>
  );
}


export default connect(null, mapDispatchToProps)(Card);