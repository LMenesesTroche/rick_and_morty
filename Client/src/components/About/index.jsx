import styles from './about.module.css'
import yo from './yo.jpg'
const About = () =>{
    
    
    return(
        <div className={styles.container}>
            <div className={styles.leftAbout}>
                <h2 className={styles.text} >Hola me llamo Lucas, tengo 18 años 
                y estoy creando 
                este nuevo proyecto llamado Rick and Morty.</h2>
                <p></p>
            </div>
            <div className={styles.imageAbout}>
                <img src={yo} alt="Yo" height={350} width={350}/>
            </div>
        </div>
    )
}
export default About;