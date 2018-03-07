import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AppState from '../AppState';

const appState = new AppState();

const Header = () => (
  <header>
    <Navigation appState={appState} />
    <nav>
      <NavLink to='/' exact={true} activeClassName="active">Home</NavLink>
      <NavLink to='/about' activeClassName="active">About</NavLink>
    </nav>
  </header>
);

export default Header;
