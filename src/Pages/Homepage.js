import React from 'react'
import Search from '../Components/Search'
import CharacterCard from '../Components/CharacterCard';
import "../Styles/Home.css"


function Homepage({characters}) {
    return ( 
        <div>
            <Search />
            <h1>Main Characters</h1>
            <div className="characters-container">

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