import styles from './about.modules.css'
import yo from './yo.jpg'
const About = () =>{
    
    
    return(
        <div className='containerOfAbout'>
            <div className='infoAbout'>
                <h2 className='aboutData' >Hola me llamo Lucas, tengo 18 años y estoy creando este nuevo proyecto llamado Rick and Morty.</h2>
                <p></p>
            </div>
            <div className='image'>
                <img src={yo} alt="Yo" height={350} width={350}/>
            </div>
        </div>
    )
}
export default About;