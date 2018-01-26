import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import About from './About';

const Main = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  </div>
);

export default Main;
