
import React from "react";
import { hot } from 'react-hot-loader/root';

import classes from './styles.less';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <h1 className={classes.a}>Hello {name}</h1>;
  }
}

export default hot(App);
