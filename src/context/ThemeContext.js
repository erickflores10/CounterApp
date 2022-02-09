import { createContext } from "react";

const options = {
    lightMode: {
        background: "#004aad",
        foreground: "000000"
    },
    darkMode: {
        background: "#000000",
        foreground: "#004aad"
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



