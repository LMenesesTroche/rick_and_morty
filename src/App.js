import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import characters, { Rick } from './data.js';
import Nav from './components/Nav'
function App() {
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
