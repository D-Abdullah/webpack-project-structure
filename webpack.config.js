// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const PugPlugin = require('pug-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    // define your Pug files here
    index: 'src/index.pug' // output dist/index.html
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    open: true,
    compress: true,
    // enable HMR for files defined in paths
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true
      }
    }
  },
  plugins: [
    // enable processing of Pug files in Webpack entry
    new PugPlugin({
      js: {
        // output filename of extracted JS file from source script
        filename: 'js/[name].[contenthash:8].js'
      },
      css: {
        // output filename of extracted CSS file from source style
        filename: 'css/[name].[contenthash:8].css'
      }
    })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: PugPlugin.loader // Pug loader
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['css-loader', 'postcss-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname)],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.pug', '.sass', '.scss', '.css']
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};