const express = require('express');


class Controller {
    constructor() {
        this.router = express.Router();
    }

    getRoutes() {
        const baseControllerMethods = Object.getOwnPropertyNames(Controller.prototype);

        let methods = Object.getOwnPropertyNames(this.constructor.prototype);
        methods = methods.filter((x) => !baseControllerMethods.includes(x));

        methods.forEach((methodName) => {
            this[methodName]();
        });

        const router = new express.Router();
        router.use(`/${this.constructor.name}`, this.router);

        return router;
    }
}

module.exports = Controller;
