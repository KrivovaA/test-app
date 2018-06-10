import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { doSomething } from '../../actions/mainActions';

class Main extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func
  };

  handleClick = () => {
    this.props.dispatch(doSomething('text'));
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <button onClick={this.handleClick}>okqq</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    something: state.main
  }
};

export default connect(mapStateToProps)(Main);
