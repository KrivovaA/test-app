import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from './main/Main';
import CategoryContainer from './categories/CategoryContainer';
import Menu from './menu/Menu';

import Grid from '@material-ui/core/Grid';


const Routes = (props) => (
  <Router>
    <div>
      <Grid container >
        <Grid item md={1}>
          <Menu categories={props.categories} />
        </Grid>
        <Grid item md={7}>
          <Route exact path="/" component={Main} />
          {props.categories.map((category) => {
            return (
              <Route
                key={`route-${category}`}
                path={`/${category}`}
                render={props => {
                  return <CategoryContainer category={category} />
                }}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  </Router>
);

const mapStateToProps = state => {
  return {
    categories: state.main.categories
  }
};

export default connect(mapStateToProps)(Routes);

