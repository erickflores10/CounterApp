import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';


const container = document.getElementById('root');

ReactDOM.render(<CounterApp value={5} />, container);