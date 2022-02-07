import React from "react";
import { useForm } from "./components/useForm";

//Logica App principal
export const App = () => {
    const [initialValues, handleInputChange] = useForm({
        email: "",
        password: null
    });

    const {email, password} = initialValues;

    const getFormData = (e) => {
        e.preventDefault();
        console.log({email, password});
    }

    return(
        <form onSubmit={ getFormData }>
            <input type="email" placeholder="Email" onChange={ handleInputChange } name={ email } />
            <br />
            <input type="password" placeholder="Contraseña" onChange={ handleInputChange } name={ password }/>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );

}