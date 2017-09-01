module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        //query 传入loader内的字符串
        query: {
            presets: ['es2015', 'react']
        }
      },
    ]
  }
};




