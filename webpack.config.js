module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
  	path: __dirname + '/',
  	filename: 'production.js'
  },
  module: {
  	loaders: [
  	  {	
  	  	test: /\.js$/,
  	  	loader: 'babel',
  	  	exclude: './node_modules',
  	  	query:{ presets: ['react', 'es2015'] }
  	  }
  	]
  },
  watch: true,
  //devtool: "sourse-map"
};