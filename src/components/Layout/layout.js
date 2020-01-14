import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from '../Navigation/Toolbar/ToolBar';
import classes from './layout.css';

const layout = props => {
  return (
    <Auxiliary>
      <Toolbar/>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default layout;
