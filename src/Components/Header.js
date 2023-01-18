import React from 'react';
import '../Styles/Header.css';

function Header() {
    return ( 
        <div className="header-container">
            <a href='/'>Home</a>
            <a href='/about'>About</a>
        </div> 
     );
}

export default Header;