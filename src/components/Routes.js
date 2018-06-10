import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { hot } from 'react-hot-loader'

import Main from './main/Main';
import About from './about/About';
import Menu from './menu/Menu';

const Routes = () => (
  <Router>
    <div>
      <Menu />

      <hr />

      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default hot(module)(Routes)
