import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import { Provider } from 'mobx-react';
import Home from './Home';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);

export default Main;
