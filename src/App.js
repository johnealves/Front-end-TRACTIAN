import React, { useContext } from 'react';
import Home from './Pages/Home';
import { Route, Switch } from 'react-router';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact to="/" component={ Home } />
    </Switch>
  );
}

export default App;
