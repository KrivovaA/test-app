import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Category from './Category';
import { saveDataImage } from '../../actions/categoriesActions';

class CategoryContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    category: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    effect: PropTypes.string
  };

  handleChange = (event) => {
    const target = event.target;
    this.props.dispatch(saveDataImage(target.value, target.name));
  };

  handleClick = (event) => {
    const target = event.target;
    this.props.dispatch(saveDataImage(target.value, 'effect'));
  };

  render() {
    const { width, height, effect, category } = this.props;
    return (
      <Category
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        width={width}
        height={height}
        effect={effect}
        category={category}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    width: state.main.width,
    height: state.main.height,
    effect: state.main.effect
  }
};

export default connect(mapStateToProps)(CategoryContainer);

