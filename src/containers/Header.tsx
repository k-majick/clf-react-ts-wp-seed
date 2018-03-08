import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AppState from '../AppState';

const appState = new AppState();

const Header = () => (
  <header>
    <Navigation appState={appState} />
  </header>
);

export default Header;
