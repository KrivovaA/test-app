import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { fetchCategories } from '../actions/categoriesActions';

import Routes from './Routes';
// import DevTools from './DevTools';

class AppContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func
  };

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div>
        <Routes/>
        {/*<DevTools />*/}
      </div>
    );
  }
}

const App = connect()(AppContainer);

export default hot(module)(App);
