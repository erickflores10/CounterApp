import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Card = () => {
    const value = useContext(ThemeContext);

    const [state, setState] = useState(value.lightMode);

    const [active, setActive] = useState(false); // Active darkMode: false

    const handlerThemeMode = () => {
        setActive(!active);
        setState(
            active ? value.darkMode : value.lightMode
        );
        console.log(state);
    }

    return(
        <div 
            style={{
                background: state.background,
                width: "100%",
                height: "100vh",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                flexDirection: "column" 
            }}>
            <h1 style={{color: state.foreground}}>Lightmode</h1>
            <button 
                onClick={handlerThemeMode}
                style={{
                    border: 0,
                    padding: 10,
                    border: `1px solid ${state.foreground}`,
                    color: state.foreground,
                    background: state.background
                }}
            >
                Cambiar modo
            </button>
        </div>
    );
}