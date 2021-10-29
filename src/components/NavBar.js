import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="nav-bar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
