
import React from 'react';
import { hot } from 'react-hot-loader/root';

import classes from './styles.less';

class App extends React.PureComponent {
    render() {
        let env = '';

        if (API_URL === 'http://localhost:8080/') {
            env = 'PROD';
        } else if (API_URL === 'http://localhost:5000/') {
            env = 'DEV';
        }


        return (
            <h1 className={classes.a}>
                Hello {env}
          </h1>
        );
    }
}

export default hot(App);
