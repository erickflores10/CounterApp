import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';


const container = document.getElementById('root');

ReactDOM.render(<CounterApp value={0} />, container);