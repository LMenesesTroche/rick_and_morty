import Card from '../Card';
import styles from './cards.module.css'
export default function Cards({characters}) {
   return (
      <div className={styles.container} key ={characters.id} >
         {characters.map((character,index)=>(
            
            <Card 
            
            name = {character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin.name}
            image = {character.image}
            onClose={()=>window.alert("Emulamos quese cierra la card")}
            />
         ))}
         
      </div>
   )  
}
