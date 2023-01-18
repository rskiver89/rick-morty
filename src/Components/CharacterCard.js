import React from 'react';
import "../Styles/Characters.css"
import { Link } from 'react-router-dom';


function CharacterCard({character}) {
    return ( 
        <div className="character-card">
        <img src={character.image} />
        <p>{character.name}</p>
        <Link to={`/details/${character.id}`}><button>See Details</button></Link>
        
        </div>
     );
}

export default CharacterCard;