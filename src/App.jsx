import React from 'react';
// import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <Link to="/" className="navLink">home</Link>
          <Link to="/about" className="navLink">about project</Link>
          <Link to="/join" className="navLink">join</Link>
        </nav>
      </header>

      <Outlet />

    </div>
  );
}

export default App;
