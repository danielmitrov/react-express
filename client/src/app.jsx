
import React from 'react';
import { hot } from 'react-hot-loader/root';

import Button from './components/button';


class App extends React.PureComponent {
    render() {
        let env = '';

        if (API_URL === 'http://localhost:8080/') {
            env = 'PROD';
        } else if (API_URL === 'http://localhost:5000/') {
            env = 'DEV';
        }


        return (
            <div>
                <h1>
                    Hello {env}
                </h1>
                <Button onClick={() => alert()}>
                    Click Me!
                </Button>
            </div>
        );
    }
}

export default hot(App);
