import {useState} from 'react';
import './App.css';
import React from 'react';
import Cards from './components/Cards';
import Nav from './components/Nav';
import useApp from './hooks/useApp'

const URL = 'https://rickandmortyapi.com/api/character/' // No tengo idea de que es esto

function App() {
// Esta es una variable de mis personajes y set characters es para modificar mis personajes, no funciona sin
// useState
   const [characters,setCharacters] = useState([]) 
// No se qu es esto
   const onSearch = async(id) =>{
      try{
         const response = await fetch(`${URL}${id}`);
         const data = await response.json();
         setCharacters([...characters,data]);
      }catch(error){
         console.log('error',error);
      }
   }

   const onClose = (id) => {
      const personajesFiltrados = characters.filter((characters)=> characters.id !== id);
      setCharacters(personajesFiltrados);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
