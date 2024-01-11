import styles from './about.css'
import yo from './yo.jpg'
const About = () =>{
    
    
    return(
        <div className='contenedor'>
            <h1 className='titulo'>Hola me llamo Lucas, tengo 18 años y estoy creando este nuevo proyecto llamado Rick and Morty.</h1>
            <img src={yo} alt="Yo" height={200} width={200}/>
        </div>
    )
}
export default About;