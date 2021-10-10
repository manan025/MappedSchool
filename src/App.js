import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home.js';
import Campusmap from './views/Campusmap.js';
import Class from './views/Class.js';
import Checkin from "./views/Checkin";
import Register from "./views/register";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
            <Route path={'/campus'} exact component={Campusmap} />
            <Route path={'/class'} exact component={Class} />
            <Route path={'/checkin'} exact component={Checkin} />
            <Route path={`/register/:event`} exact component={Register} />
        </Switch>
      </Router>
  );
}

export default App;
