import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {

   const [ characters, setCharacters] = useState([]);
   const [ access, setAccess ] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();

   //DB FALSA
   const EMAIL = 'lucasmenesestroche@gmail.com';
   const PASSWORD = '123';

   useEffect(() => {
      !access && navigate('/');
   }, [access])

   function login(userData) {
      if (userData.password === PASSWORD && userData.username === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const onClose = (id) => {
      //crea un nuevo arreglo sin el personaje
      const filteredSate = characters.filter((char)=> char.id !== id);
      setCharacters(filteredSate);
   };

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         (reponse) => {
            if (reponse.data.name) {
               setCharacters((oldChars) => [...oldChars, reponse.data]);
            } else {
               window.alert(`¡No hay personajes con ID: ${id}!`);
            }
         }
      );
   };

   //character = [characterSearched ] //memoria2
   

   return (
      <div className='App'>
         { 
            location.pathname !== '/' ?
            <Nav onSearch={onSearch} /> :
            undefined
         }
         <Routes>

            {/* LOGIN */}
            <Route path='/' element={
               <Form login={login} />
            }/>

            {/* HOME */}
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />
            } />

            {/* ABOUT */}
            <Route path='/about' element={
               <About />
            }/>

            {/* Detail */}
            <Route path='/detail/:id' element={
               <Detail />
            }/>

            {/* FAVORITES */}
            <Route path='/favorites' element={<Favorites />}/>

         </Routes>
         
      </div>
   );
}

export default App;