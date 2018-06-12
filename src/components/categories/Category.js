import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit,
  }),
  input: {
    display: 'none',
  },
});

class Category extends React.Component {
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
    this.setState({[event.target.name]: event.target.value});
  };

  handleClick = (event) => {
    this.setState({ effect: event.target.value });
  };

  render() {
    const { category, classes } = this.props;
    const { width, height, effect } = this.state;
    const image = effect === 'without effects' ?
      <img src={`http://placeimg.com/${width}/${height}/${category}`} /> :
      <img src={`http://placeimg.com/${width}/${height}/${category}/${effect}`} />;

      // console.log(this.state);

    return (
      <Grid direction='column' container justify='center' alignItems='center'>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3">
            {category}
          </Typography>
        </Paper>
        <Grid>
          <TextField
            id="width"
            label="width"
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="height"
            label="height"
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
            margin="normal"
          />
          <input
            className={classes.input}
            type='button'
            name='without'
            value='without effects'
            id='without'
            onClick={this.handleClick}
          />
          <label htmlFor="without">
            <Button component="span" className={classes.button}>
              without effects
            </Button>
          </label>
          <input
            className={classes.input}
            type='button'
            name='sepia'
            value='sepia'
            id='sepia'
            onClick={this.handleClick}
          />
          <label htmlFor="sepia">
            <Button component="span" className={classes.button}>
              sepia
            </Button>
          </label>
          <input
            className={classes.input}
            type='button'
            name='grayscale'
            value='grayscale'
            id='grayscale'
            onClick={this.handleClick}
          />
          <label htmlFor="grayscale">
            <Button component="span" className={classes.button}>
              grayscale
            </Button>
          </label>
        </Grid>
        <Grid>
          {image}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Category);
// export default Category;
