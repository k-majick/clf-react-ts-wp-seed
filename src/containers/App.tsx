import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Form from './Form';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/form' component={Form} />
      </Switch>
    </main>
  </div>
);

export default App;
