const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'production',
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib',
      filename: 'remoteLibEntry.js',
      exposes: {
        './utils': './src/utils.js',
        './Button': './src/Button.js',
      },
      shared: {
        react: { requiredVersion: '^18.2.0', singleton: true },
      },
    }),
  ],
};
