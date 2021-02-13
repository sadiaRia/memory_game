const path = require("path");
const entryFile = path.resolve(__dirname, "src", "client", "App.jsx");
// const outputDir = path.resolve(__dirname, 'public');
module.exports = {
  entry: ["babel-polyfill", entryFile],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public"),
    publicPath: "/public"
  },
  devServer: {
    inline: true,
    port: 4201,
    hot: true
  },
  module: {
    rules: [
      // Adds 'import .png/svg/jpg/gif' support
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // Adds 'import fontfile' support
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // Add ES2017 Support for JS Files
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Add React Support for JSX Files only
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env',
                      '@babel/react',{
                      'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
    }
    ]
  },
};
