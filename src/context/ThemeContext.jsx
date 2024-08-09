'use client'
import {createContext, useEffect, useState} from 'react'

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
  return 'light'; 
};

export const ThemeContextProvider =({children})=>{
    const [theme, setTheme] = useState(()=>{return getFromLocalStorage()})

    useEffect(()=>{
      if (theme === 'dark'){
        document.documentElement.classList.add('dark');
      }
      else{
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme',theme)
    },[theme])
  
    const toggleTheme = ()=>{
       setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'))
    }
    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}