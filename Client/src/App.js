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

   async function login(userData) {
      try{
         const URL = 'http://localhost:3001/rickandmorty/login/';
         let response = await  axios(URL + `?email=${userData.username}&password=${userData.password}`);
         let { access } = response.data;
         setAccess(access);
      }catch(error){
         console.log(error);
      }
      
   }

   const onSearch = async (id) => {
      //recibimos el id que nos manda el searchBar y utilizamos axios para que nos mande 
      //los datos (response)
      try{
         let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if(response.data.name){
            dispatch(addChar(response.data));
         }else{
            window.alert(`¡No hay personajes con ID: ${id}!`);
         }
      }catch(error){
         console.log(error.message);
      }
      
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