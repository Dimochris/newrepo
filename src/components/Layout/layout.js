import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

import classes from './layout.css';

const layout = props => {
  return (
    <Auxiliary>
      <div>Toolbar, SideBrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default layout;
