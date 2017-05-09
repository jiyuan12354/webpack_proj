var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].bundle.js'
    },
	module:{
    	loaders: [
			{
				test: '/\.js$/',
				loader: 'babel',
                exclude:path.resolve(__dirname,'node_modules'),
                include:[
                    path.resolve(__dirname,'src')
                ]
			},
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.sass$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loaders: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loaders: 'ejs-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loaders: [
                        'url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]',
                        'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                    ]
            }
		]
	},
    plugins: [
    	new htmlWebpackPlugin({
    		filename: 'index.html',
    		template: 'index.html',
    		inject: 'body'
    	})
    ]
}