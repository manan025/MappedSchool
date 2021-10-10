import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home.js';
import Campusmap from './views/Campusmap.js';
import Class from './views/Class.js';

function App() {
  return (
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
            <Route path={'/campus'} exact component={Campusmap} />
            <Route path={'/online-class'} exact component={Class} />
        </Switch>
      </Router>
  );
}

export default App;
