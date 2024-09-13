import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Child() {
    const{theme, toggleTheme} = useContext(ThemeContext);

    return ( 
        <div style={{backgroundColor: theme ? "white" : "black", width: "20rem"}}>
            <h3 style={{color: theme ? "darkmagenta" : "lightskyblue"}}>Child</h3>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
     );
}

export default Child;