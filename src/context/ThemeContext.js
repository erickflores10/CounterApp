import { createContext } from "react";

const options = {
    lightMode: {
        active: null,
        background: "#ffffff",
        foreground: "000000"
    },
    darkMode: {
        active: null,
        background: "#000000",
        foreground: "#ffffff"
    }
}


export const ThemeContext = createContext(options);

const Theme = ({ children }) => {
    return(
        <ThemeContext.Provider value={options}>
            { children }
        </ThemeContext.Provider>
    );
}

export default Theme;



