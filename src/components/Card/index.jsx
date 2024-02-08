import React, { useState } from "react";
import "./styles.css";
import {stylesLine} from './stylesLine'
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions"; // Asegúrate de importar las acciones correctas
import { connect } from "react-redux";


const mapDispatchToProps = (dispatch) =>{
  return{
    addFav: (character) => {dispatch(addFav(character));},
    removeFav: (id) => {dispatch(removeFav(id));}
    
  };
const mapStateToProps = () =>{

}

}; 
function Card(props) {
  const { name, status, gender, species, origin, image, onClose , id} = props;
  const [isFav, setIsFav] = useState(false);

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
    <div className='container'>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
          ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }
      <img
        src={image}
        alt='foto'
        height={200}
        width={200}
        style={stylesLine.img}
      />
      <Link  to={`/detail/${props.id}`}>
        <h1
         style={{
           backgroundColor: "#08B2C9",
           fontSize: 16,
          }}
        >
          {name}
        </h1>
      </Link>
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin.name}</h2>
      </div>
      
      <button
        onClick={() => onClose(props.id)}
        style={{
          position: "absolute",
          top: 8,
          right: 6,
        }}
      >
        X
      </button>
    </div>
  );
}


export default connect(null, mapDispatchToProps)(Card);