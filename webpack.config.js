module.exports = {
	context: __dirname + '/app',
	entry: './index.js',
	output: {
		path: __dirname + '/',
		filename: 'production.js'
	},
	module: {
		loaders: [
			{	test: /\.js$/,
				loader: 'babel',
				exclude: './node_modules',
				query:{ presets: ['react', 'es2015'] }
			}/*,
			{
            	// I want to uglify with mangling only app files, not thirdparty libs
            	test: /\.js$/,
            	exclude: /.*\/app\/.*\.js$/, // excluding .spec files
            	loader: "uglify"
        	}*/
		]
	},
	watch: true,
	//devtool: "sourse-map"
};