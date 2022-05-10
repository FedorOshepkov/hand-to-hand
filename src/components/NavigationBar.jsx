import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navigation animated">
      <Link to="/" className="navLink">home</Link>
      <Link to="/about" className="navLink">about project</Link>
      <Link to="/join" className="navLink">join</Link>
    </nav>
  );
}

export default NavigationBar;
