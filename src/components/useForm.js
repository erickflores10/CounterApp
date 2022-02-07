import { useState } from "react";

export const useForm = (initialState = {}) => {
    /**
     * @initialState define el objeto que contiene datos
     * de registro del usuario.
     */
    const [values, setValues] = useState(initialState);

    /**
     * @reset function resetea los campos de envio del formulario.
     */
    const reset = () => {
        setValues(initialState);
    }

    /**
     * 
     * @handleInputChange actualiza y guarda el nuevo estado al
     * llenar los campos. 
     */
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
}