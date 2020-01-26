const configs = require('./config');


const env = process.env.NODE_ENV || 'dev';

const config = configs.base;

if (env === 'dev' || env === 'test' || env === 'prod') {
    const envConfig = configs[env] || {};

    Object.keys(envConfig).forEach((key) => {
        config[key] = envConfig[key];
    });
}

module.exports = config;
