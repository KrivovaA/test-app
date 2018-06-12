import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Menu = (props) => {
  return (
    <div>
      {props.categories.map((item) => {
        return (
          <Button key={`menu-${item}`} component={Link} to={`/${item}`}>
            {item}
          </Button>);
      })}
    </div>
  );
};

export default Menu;
