import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/Calculator" exact component={Calculator} />

        <Route path="/quote" exact component={Quote} />
      </Switch>
    </div>
  );
}
