import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import styles from "./styles.module.css"
import { removedChar } from '../../redux/actions'

export const Cards = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.allCharacters );
  console.log(characters);
  const onClose = (id) => {
    dispatch(removedChar(id))
    
  }
  return (
    <div className={styles.container}>
      {characters ? characters.map((item) => { 
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
      ):
      <></>
      }
    </div>
  );
};

export default Cards;