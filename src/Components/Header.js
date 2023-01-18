import React, {useContext} from 'react';
import '../Styles/Header.css';
import {ThemeContext} from '../Context/ThemeContext'
import {Link} from 'react-router-dom'

function Header() {

    const {darkMode, setDarkMode} = useContext(ThemeContext)

    return ( 
        <div className={darkMode ? "header-container header-dark" : "header-container"} >
            <a href='/'>Home</a>
            <Link to='/about'>About</Link>
            <button onClick={()=> setDarkMode(!darkMode)}>{darkMode ? "LightMode" : "Dark Mode"} </button>
        </div> 
     );
}

export default Header;