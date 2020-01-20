
import React from "react";
import { hot } from 'react-hot-loader/root';

import classes from './styles.less';

class App extends React.Component {
  render() {
    const { name } = this.props;
    let env = "";

    if (API_URL === "http://localhost:8080/") {
      env = "PROD";
    } else if (API_URL === "http://localhost:5000/") {
      env = "DEV";
    }


    return <h1 className={classes.a}>Hello {name} {env}</h1>;
  }
}

export default hot(App);
