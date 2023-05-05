import React, { useState, useEffect, createContext} from 'react'
export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [darkMode, setDarkMode] = useState(() => {
    const localDarkMode = localStorage.getItem('darkMode');
    return localDarkMode === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
