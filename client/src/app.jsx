
import React from 'react';
import { hot } from 'react-hot-loader/root';

import Button from './components/button';

import './app.less';


class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>
                    Hello World!
                </h1>
                <div>
                    API url- {API_URL}
                </div>
                <Button onClick={() => alert('Hello World')}>
                    Example Button
                </Button>
            </div>
        );
    }
}

export default hot(App);
