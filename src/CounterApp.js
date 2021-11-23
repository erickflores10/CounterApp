import React, { useState } from "react";
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

    // useState Hooks
    const[counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    return(
        <div className="container">
            <h2>CounterApp</h2>
            <span>Count the number of times you click</span>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;