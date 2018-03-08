import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import About from './About';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/start' component={Home}/>
        <Route path='/o-nas' component={About} />
      </Switch>
    </main>
  </div>
);

export default App;
