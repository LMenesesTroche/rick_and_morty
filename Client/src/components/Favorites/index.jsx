import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import styles from './favorite.module.css';
import { filterCards, orderCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import Card from "../Card";
import { removedChar } from '../../redux/actions'


//ESTAS SE VUELVE VARIABLES
const {container, btn} = styles;

export default function Nav() {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites );

   const onClose = (id) => {
      dispatch(removedChar(id))
    }
   const handleFilter = (e)=>{
      dispatch(filterCards(e.target.value))
   }

   const handleOrder = (e)=>{
      dispatch(orderCards(e.target.value))
   }
   return (
      <div className={container}>
         <div>
                <select name="order" onChange={handleOrder} >
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>

                <select name="gender" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="todos">todos</option>
                </select>
         </div>
         {myFavorites?.map((item) => { 
          return (
            <div key={item.id} > 
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                gender={item.gender}
                origin={item.origin.name}
                image={item.image}
                onClose={onClose}
                // {...item}
              />
            </div>
          );
        }
      )
      
      }
      </div>
   );
}