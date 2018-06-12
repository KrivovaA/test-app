import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  static propTypes = {
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
    this.setState({[event.target.name]: event.target.value});
  };

  handleClick = (event) => {
    this.setState({effect: event.target.value});
  };

  render() {
    const { category } = this.props;
    const { width, height, effect } = this.state;
    const image = effect === 'without effects' ?
      <img src={`http://placeimg.com/${width}/${height}/${category}`} /> :
      <img src={`http://placeimg.com/${width}/${height}/${category}/${effect}`} />;

    return (
      <div>
        <h1>{category}</h1>
        <input
          type='text'
          name='width'
          value={this.state.width}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <input
          type='button'
          name='without'
          value='without effects'
          onClick={this.handleClick}
        />
        <input
          type='button'
          name='sepia'
          value='sepia'
          onClick={this.handleClick}
        />
        <input
          type='button'
          name='grayscale'
          value='grayscale'
          onClick={this.handleClick}
        />
        {image}
      </div>
    );
  }
}

export default Category;
