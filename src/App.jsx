import React from 'react';
// import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player';
import { Outlet } from 'react-router-dom';
import './styles/App.css';
import NavigationBar from './components/NavigationBar';
import './TreeDataStructure';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>

      <Outlet />

    </div>
  );
}

export default App;
