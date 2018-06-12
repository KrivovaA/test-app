import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit,
  })
});

const Main = (props) => (
  <div>
    <Paper className={props.classes.root} elevation={2}>
      <Typography variant="headline" component="h3">
        Please, choose category
      </Typography>
    </Paper>
  </div>
);

export default withStyles(styles)(Main);
