import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Reset from '../components/Reset';
import AppState from '../AppState';

const appState = new AppState();

const Form = () => (
  <div className="container">
    <Reset appState={appState} />
  </div>
);

export default Form;
