import './scss/main.scss';

//import * as $ from "jquery";
//import * as visible from 'jquery-visible';
//import './js/main.js';
//import './js/es6.js';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import { createBrowserHistory, Location } from 'history';
import App from './containers/App';

const root = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, root);
