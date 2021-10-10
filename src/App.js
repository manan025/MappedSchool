import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './views/Home.js';
import Class from './views/Class.js';
import Checkin from "./views/Checkin";
import Register from "./views/register";
import Maps from "./views/maps";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
            <Route path='/map' component={() => {
                window.location.href = 'https://mappedschool-maps.herokuapp.com/';
                return null;
            }}/>
            <Route path={'/class'} exact component={Class} />
            <Route path={'/checkin'} exact component={Checkin} />
            <Route path={'/register/'} exact component={Register} />
        </Switch>
      </Router>
  );
}

export default App;
