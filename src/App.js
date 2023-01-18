
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header'
import About from './Pages/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import axios from 'axios'
import CharacterDetails from './Pages/CharacterDetails'
import ThemeContextProvider from './Context/ThemeContext'

function App() {

  const[characters, setCharacters] = useState([])

useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/character`)
  .then(res=>{
    console.log(res.data.results)
    setCharacters(res.data.results)
  })
  .catch(err=>console.log(err))

}, [])


  return (
    <div>
      <BrowserRouter>

      <ThemeContextProvider>

        <Header />

        <Routes>
          <Route path='/About' element={<About/>} />
          <Route path='/' element={<Homepage characters={characters} setCharacters={setCharacters} />} />
          <Route path='/details/:characterId' element={<CharacterDetails/>} />
        </Routes>

      </ThemeContextProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
