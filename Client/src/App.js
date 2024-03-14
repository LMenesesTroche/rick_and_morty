import { useState , useEffect} from 'react';
import { Route, Routes, useLocation ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import Nav from './components/Nav';
import Form from './components/Form'
import { useDispatch } from 'react-redux';
import { addChar } from './redux/actions';

function App() {
   const dispatch = useDispatch();

   //Poner en false para activar el login
   const [ access, setAccess ] = useState(true);

   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
      access && navigate('/home');
   }, [access])

   function login(userData) {
            
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${userData.username}&password=${userData.password}`).then(({ data }) => {
         setAccess(data.access);
      });
   }

   const onSearch = (id) => {
      //recibimos el id que nos manda el searchBar y utilizamos axios para que nos mande 
      //los datos (response)
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         (response) => {
            console.log(response.data)
            //Si estamos recibiendo bien los datos
            if (response.data.name) {
               //hacemos dispatch y le mandamos la data a addChar
               dispatch(addChar(response.data));
            } else {
               //Si no estamos recibiendo los datos mandamos una alerta
               window.alert(`¡No hay personajes con ID: ${id}!`);
            }
         }
      );
   };

   

   const logout = ()=>{
         setAccess(false);
         // navigate('/home');
   }

   //character = [characterSearched ] //memoria2
   

   return (
      <div className='App'>
         { 
            location.pathname !== '/' ?
            <Nav onSearch={onSearch} logout={logout} /> :
            undefined
         }
         <Routes>

            {/* LOGIN */}
            <Route path='/' element={
               <Form login={login} />
            }/>

            {/* HOME */}
            <Route path='/home' element={
               <Cards />
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