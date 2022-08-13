const { ModuleFederationPlugin } = require('webpack').container;

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    plugins: [
      new ModuleFederationPlugin({
        remotes: {
          lib: 'lib@http://localhost:3001/remoteLibEntry.js',
        },
      }),
    ],
  });
};
