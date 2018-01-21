import * as React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <NavLink to='/' exact={true} activeClassName="active">Home</NavLink>
      <NavLink to='/about' activeClassName="active">About</NavLink>
    </nav>
  </header>
);

export default Header;
