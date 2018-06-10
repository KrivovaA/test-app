import React from 'react';
import { hot } from 'react-hot-loader'

import Routes from './Routes';
import DevTools from './DevTools';

const App = () => (
  <div>
    <Routes/>
    <DevTools />
  </div>
);

export default hot(module)(App)
