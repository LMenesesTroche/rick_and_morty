import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'; 
import Card from '../Card'; // Importa el componente Card
import style from './favorite.module.css';
import { filterCards, orderCards } from '../../redux/actions';

// Define la función mapStateToProps
const Favorites = (props) => {

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.myFavorites);

  const handleOrder = (e) =>{
    setAux(!aux);

    dispatch(orderCards(e.target.value));
  }

  const handleFilter = (e) =>{
    dispatch(filterCards(e.target.value));
  }

  return (
    <div className={style.container}>

      <select onChange={handleOrder}>
        <option value="a">Ascendente</option>
        <option value="d">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="All">All </option>
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>
        <option value="Genderless" >Genderless</option>
        <option value="unknown" >unknown</option>
      </select>
      <div className={style.titulo}>
          <h1>My favorites</h1>
      </div>

      <div className={style.cartas}>
        {favorites.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>      
      
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites // Recibe el estado global por props
  };
};

export default connect(mapStateToProps,{filterCards,orderCards})(Favorites); // Conecta el componente con mapStateToProps

