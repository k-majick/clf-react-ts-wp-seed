import './scss/main.scss';

//import * as $ from "jquery";
//import * as visible from 'jquery-visible';
//import './js/main.js';
//import './js/es6.js';
//import { createBrowserHistory, Location } from 'history';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';

const root = document.getElementById('app');

const renderApp = (Root: any) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    root
  )
}

renderApp(App);

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./', () => {
    renderApp(App)
  })
}
