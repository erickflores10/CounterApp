import React from "react";
import { Card } from "./components/Card";
import ThemeContext from "./context/ThemeContext";


export const App = () => {

    return(
        <ThemeContext>
            <Card />
        </ThemeContext>
    );
}