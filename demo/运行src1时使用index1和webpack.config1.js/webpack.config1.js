var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
    	 	main:'./src1/script/main.js',
    	 	a:'./src1/script/a.js',
	    	b:'./src1/script/b.js',
	    	c:'./src1/script/c.js'
    	},
    output: {
        path: __dirname + "/dist", 
        filename: 'js/[name].bundle.js'
    },
    plugins: [
    	new htmlWebpackPlugin({
    		filename: 'index.html',
    		template: 'index.html',
    		inject: false,
    		title: 'webpack is good',
    		date: new Date(),
    		chunks: ['main','a','b'],
    		minify: {
    			removeComments: true,
                // collapseWhitespace: true
    		}
    	}),
    	new htmlWebpackPlugin({
    		filename: 'a.html',
    		template: 'index.html',
    		inject: false,
    		title: 'webpack aaaa is good',
            chunks: ['main','a'],
            date : new Date()
    	}),
    	new htmlWebpackPlugin({
    		filename: 'b.html',
    		template: 'index.html',
    		inject: 'body',
    		title: 'webpack bbbb is good',
            chunks: ['main','b'],
            date : new Date()
    	}),
    	new htmlWebpackPlugin({
    		filename: 'c.html',
    		template: 'index.html',
    		inject: false,
    		title: 'webpack cccc is good',
            chunks: ['main','c'],
            date : new Date()
    	})
    ]
}