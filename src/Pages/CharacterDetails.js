import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Characters.css'
import { ThemeContext } from '../Context/ThemeContext'

function CharacterDetails() {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    const {characterId} = useParams()
    const [character, setCharacter] = useState('')

    useEffect(() => {

        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(res =>{
            console.log(res.data)
            setCharacter(res.data)
        })
        .catch(err=>console.log(err))

    }, [])

  return (
    <div className={darkMode ? "details-background details-dark" : "details-background"}>
      <div className="details-container">
          <img src={character?.image} alt=""/>
          
          <div className="character-info">
            <p>Name: <span>{character?.name}</span></p>
            <p>Gender: <span>{character?.gender}</span></p>
            <p>Location: <span>{character?.location?.name}</span></p>
            <p>Species: <span>{character?.species}</span></p>
            <p>Status: <span>{character?.status}</span></p>
          
        </div>
        
      </div>
    </div>
  )
}

export default CharacterDetails
