import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './components/App.js';

ReactDOM.render(<App history={browserHistory}/>, document.getElementById('root'));
