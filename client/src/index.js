import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';


const mountNode = document.getElementById('app');
const app = React.createElement(App);
ReactDOM.render(app, mountNode);
