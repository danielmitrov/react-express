const Controller = require('./controller');

class Test extends Controller {
    testRoute() {
        this.router.get('/test', (req, res) => {
            res.send('Hello World');
        });
    }
}

module.exports = Test;
