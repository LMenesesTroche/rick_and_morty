import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail'
import useApp from './hooks/useApp';
import { Route, Routes } from 'react-router-dom';

const URL = 'https://rickandmortyapi.com/api/character/'

function App() {
   const [characters, setCharacters] = useState([]);
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

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters}onClose={onClose}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;