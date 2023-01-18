import React, {useContext} from 'react'
import Search from '../Components/Search'
import CharacterCard from '../Components/CharacterCard';
import "../Styles/Home.css"
import { ThemeContext } from '../Context/ThemeContext';


function Homepage({characters, setCharacters}) {
    const {darkMode, setDarkMode}=useContext(ThemeContext)
    return ( 
        <div className={darkMode ? "home-container home-dark" : "home-container"} >
            <Search setCharacters={setCharacters} />
            <h1>Main Characters</h1>
            <div className={darkMode ? "characters-container characters-dark" : "characters-container"} >

            {
                characters.map((item) => {
                    return <CharacterCard key={item.id} character={item} />
                })
            }
            </div>
        </div>
     );
}

export default Homepage;