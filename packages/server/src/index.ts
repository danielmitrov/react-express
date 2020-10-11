import http from 'http';

import {app, port} from './app';


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
