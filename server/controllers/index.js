const express = require('express');

const TestController = require('./testController');


function generateRoutes(controllers) {
    const router = express.Router();

    controllers.forEach((controller) => {
        router.use(controller.getRoutes());
    });

    return router;
}

module.exports = generateRoutes([
    new TestController(),
]);
