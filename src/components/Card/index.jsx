import styles from "./Card.module.css"

export default function Card(props) {
   
   return (
      <div className={styles.container}>
         <img className={styles.imagen}src={props.image} alt='' />
         <h1 className={styles.nombre} >{props.name}</h1>
         <h2>{props.status}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <button className={styles.boton} onClick={props.onClose}>X</button>
      
      </div>
   );
   
}

