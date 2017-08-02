var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: [/\.jsx?$/, /\.js?$/],
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'url-loader?limit=10000',
                  'img-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader: "file-loader?name=/src/icons/[name].[ext]"
            }

        ]
    }
};
