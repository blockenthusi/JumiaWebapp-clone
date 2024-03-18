import React from "react"
import { createContext,useState } from "react"

export const ThemeContext = createContext(null);
const Theme = ({children}) =>{

    const [Theme, setTheme]=useState("light");
    const lightMode = () =>{
         setTheme("light")
    }

    const darkMode = () =>{
            setTheme("dark")
    }
   
    return(

        <ThemeContext.Provider value={{darkMode,lightMode,Theme}}>
            {children}
        </ThemeContext.Provider>


        
    )
}


export default Theme