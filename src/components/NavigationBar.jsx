import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navigation">
      <Link to="/" className="navLink animated">home</Link>
      <Link to="/about" className="navLink animated">about project</Link>
      <Link to="/join" className="navLink animated">join</Link>
      <Link to="/account" className="navLink animated"> LOGO </Link>
    </nav>
  );
}

export default NavigationBar;
