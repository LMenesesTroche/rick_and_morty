import React from 'react';
import { connect } from 'react-redux'; // Importa connect
import Card from '../Card'; // Importa el componente Card
import style from './favorite.module.css';
// Define la función mapStateToProps
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites // Recibe el estado global por props
  };
};

const Favorites = ({ myFavorites }) => {
  return (
    <div className={style.container}>

      <div className={style.titulo}>
          <h1>My favorites</h1>
      </div>

      <div className={style.cartas}>
        {myFavorites.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>      
      
    </div>
  );
};

export default connect(mapStateToProps)(Favorites); // Conecta el componente con mapStateToProps

