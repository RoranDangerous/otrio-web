const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  webpack: {
    plugins: [
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /src/,
        failOnError: false,
        allowAsyncCycles: false,
        cwd: process.cwd()
      })
    ]
  },
};
