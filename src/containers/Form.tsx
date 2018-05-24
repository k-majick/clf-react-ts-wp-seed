import * as React from 'react';
import { NavLink } from 'react-router-dom';

import AppState from '../stores/AppState';
import Reset from '../components/Reset';

import FormInput from '../components/FormInput';

const appState = new AppState();

const Form = () => (
  <div className="container">
    <Reset appState={appState} />
  </div>
);

export default Form;
