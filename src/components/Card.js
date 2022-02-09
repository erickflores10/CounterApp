import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Card = () => {
    const value = useContext(ThemeContext);

    const [state, setState] = useState(value.lightMode.active = true);
    console.log(state, value);

    return(
        <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1>Lightmode</h1>
            <button>Cambiar modo</button>
        </div>
    );
}