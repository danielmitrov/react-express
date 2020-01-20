const webpack = require('webpack');
const path = require('path');

const API_URL = {
    prod: JSON.stringify('http://localhost:8080/'),
    dev: JSON.stringify('http://localhost:5000/'),
};

const getApiURL = () => {
    if (process.env.NODE_ENV === "dev") {
        return API_URL.dev;
    }

    return API_URL.prod;
};

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'API_URL': getApiURL(),
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[local]___[hash:base64:5]'
                            },
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        contentBase: './dist'
    }
};

module.exports = config;