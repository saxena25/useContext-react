import {createContext, useState} from "react";

//1. create context 
export const ThemeContext = createContext();

// 2. provide context
export const ThemeProvider = ({children}) =>{
    let [theme, setTheme] = useState(false);

    const toggleTheme = () =>{
        setTheme(!theme)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}