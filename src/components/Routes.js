import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from './main/Main';
import Category from './categories/Category';
import Menu from './menu/Menu';
import {connect} from 'react-redux';

const Routes = (props) => (
  <Router>
    <div>
      <Menu categories={props.categories} />

      <hr />

      <Route exact path="/" component={Main} />
      {props.categories.map((category) => {
        return (
          <Route
            key={`route-${category}`}
            path={`/${category}`}
            render={props => {
              return <Category category={category} />
            }}
          />
        );
      })}
    </div>
  </Router>
);

const mapStateToProps = state => {
  return {
    categories: state.main.categories
  }
};

export default connect(mapStateToProps)(Routes);

