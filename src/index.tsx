import './scss/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './containers/App';

const root = document.getElementById('app');

render(
  <AppContainer>
    <Provider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>, root
);

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./', () => {
    const NextApp = require('./containers/App').default;
    render(
      <AppContainer>
        <Provider >
          <BrowserRouter>
            <NextApp />
          </BrowserRouter>
        </Provider>
      </AppContainer>, root
    );
  })
}
