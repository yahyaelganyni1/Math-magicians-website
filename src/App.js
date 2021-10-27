import React from 'react';

// import { Switch, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className="App">
      <Calculator />
      <NavBar />
    </div>
  );
}
