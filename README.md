
# React-Express app

This is an example of react and express app. All the configurations have been made and all you have to do is clone and start developing.

## Installation

Clone the project and install it by using npm.

```bash
git clone https://github.com/danielmitrov/react-express.git
cd react-express
npm install
```

## Usage
To run the app on development mode, go to the root directory and run the following command:
```bash
npm run dev 
```
It will run the app on two different ports- 3000 for the client and 5000 for the express app.
___
To run it in production mode:
```bash
npm start
```
This will build the client and start the full app on port 8080.

## Controllers
Each controller should extend the base `Controller` class and exported inside `server/controllers/index.js`.
An example controller:
```javascript
const Controller = require('./controller');

class Products extends Controller {
    getAllProducts() {
        this.router.get('/all', (req, res) => {
            res.send([
                {
                    productName: 'Apple',
                    price: 7,
                },
            ]);
        });
    }
}

module.exports = Products;
```
And then export an instance of it in the `index.js`:
```javascript
module.exports = generateRoutes([
    new Products(),
]);
``` 
The function `generateRoutes` will run all the functions inside `Products`'s instance and will generate an Express Router instance which will automatically be bounded to `/api/Product`.

Each controller you export, has it's routes under `/api/ControllerName/`.
The methods in the controller can use 
```javascript
this.router
```
to bind new routes under it. 

## Middleware

Each middleware should extend the base `Middleware` class and implement a static `signMiddleware` method.
An example middleware:
```javascript
const Middleware = require('./middleware');


class RequestLogger extends Middleware {
    static getMiddleware() {
        return (req, res, next) => {
            console.log('Got a new request');
            next();
        };
    }


    static signMiddleware(app) {
        app.use(RequestLogger.getMiddleware());
    }
}

module.exports = RequestLogger;
```

Then in your `app.js` you can use the middleware by passing into it the app instance.
```javascript
RequestLogger.signMiddleware(app);
```
## Client Development
The client is [React.js](https://reactjs.org/). You can use styled components to style your app (See Button component for example) or using Less modules to style it. Both are already configured.

To use the API, just use the constant `API_URL`.
In production mode it will have the value: `http://localhost:8080/` and in development mode it will have the value: `http://localhost:5000/`. Both can be configured inside `client/webpack.config.js` .
