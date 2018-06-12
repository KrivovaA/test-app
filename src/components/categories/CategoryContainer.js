import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Category from './Category';

class CategoryContainer extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    category: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      width: 640,
      height: 480,
      effect: 'without effects'
    }
  }

  handleChange = (event) => {
    console.log(event.target);
  };

  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return (
      <Category handleChange={this.handleChange} handleClick={this.handleClick}/>
    );
  }
}

export default connect()(CategoryContainer);

// export default Category;
