import styles from "./Card.module.css"

export default function Card(props) {
   
   return (
      <div className={styles.card}>
         <button onClick={props.onClose}>X</button>
         <h1 >{props.name}</h1>
         <h2>{props.status}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <h2></h2>
         <img className={styles.imagen}src={props.image} alt='' />

      </div>
   );
   
}

