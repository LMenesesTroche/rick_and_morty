import { useState , useEffect} from 'react';
import './App.css';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail'
import Nav from './components/Nav';
import { Route, Routes, useLocation ,useNavigate} from 'react-router-dom';
import Form from './components/Form'

const URL = 'https://rickandmortyapi.com/api/character/'

function App() {
   const [characters, setCharacters] = useState([]);

   const [ access, setAccess ] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();


   // Falso
   const EMAIL = 'batman@gmail.com';
   const PASSWORD = 'robin1234';

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [userData, setUserData] = useState({email:'',password:''});
   function login(userData) {
      
      if (userData.password === PASSWORD && userData.username === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   const onSearch = async (id) => {
      try {
         const response = await fetch(`${URL}${id}`);
         const data = await response.json();
         setCharacters([...characters, data]);
      } catch (error) {
         console.log('error', error);
      }
   }
   const onClose = (id) => {
      const personajesFiltrados = characters.filter((character) => character.id !== id);
      setCharacters(personajesFiltrados);
   }
   const handleChange = (e) =>{
      const {name, value} = e.target;
      setUserData({
         ...userData,
         [name]:value,

      });
   };
   return (
      <div className='App'>
         { 
            location.pathname !== '/' ?
            <Nav onSearch={onSearch} /> :
            undefined
         }
         <Routes>
            {/* Login */}
            <Route path='/' element={
               <Form login={login} />
            }/>
            
            <Route path='/home' element={<Cards characters={characters}onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}></Route>
           <Route
               path='/detail/:id'
               element={<Detail />}
            />
         </Routes>
      </div>
   );
}

export default App;