import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Secret from './revealSecret';
//import Lottery from './lotteryGame';
import * as serviceWorker from './serviceWorker';
import IndecisionApp from './compIndecision';
import Counter from './counterApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
