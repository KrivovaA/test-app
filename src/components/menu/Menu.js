import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul>
      {props.categories.map((item) => {
        return (<li key={`menu-${item}`}>
          <Link to={`/${item}`}>{item}</Link>
        </li>);
      })}
    </ul>
  );
};

export default Menu;
