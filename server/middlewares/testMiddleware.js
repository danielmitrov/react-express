const Middleware = require('./middleware');


class TestMiddleware extends Middleware {
    static getMiddleware() {
        return (req, res, next) => {
            console.log('Got a new request'); // eslint-disable-line no-console
            next();
        };
    }


    static signMiddleware(app) {
        app.use(TestMiddleware.getMiddleware());
    }
}

module.exports = TestMiddleware;
