import React, {useState} from 'react'
import '../Styles/Search.css'
import axios from 'axios'


function Search({setCharacters}) {

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res=>{
            setCharacters(res.data.results)
        })
        .catch(err=>{
            if(err.response.status === 404) {
                alert("This character does not exist")
            } else {
                console.log(err)
            }
        })
    }


    return ( 
        <form onSubmit={handleSubmit} className="search-container">
            <input onChange={handleChange} placeholder="Search all characters" />
            
        </form>
     );
}

export default Search;