import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// don't need right now >> import * as serviceWorker from './serviceWorker';

// we render to <div id='root'>
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// don't need right now >> serviceWorker.unregister();
