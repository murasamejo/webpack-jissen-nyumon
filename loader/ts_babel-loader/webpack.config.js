const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ts/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src/ts'),
        use: 'ts-loader'
      }
    ]
  }
};
