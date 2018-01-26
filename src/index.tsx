import './scss/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './containers/App';

const root = document.getElementById('app');

const renderMain = (Root: any) => {
ReactDOM.render(
  <AppContainer>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>, root);
}

renderMain(App);

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./', () => {
    renderMain(App)
  })
}
