const path = require('path');

module.exports = {
	entry: './public/javascripts/vue_plugins.js',
	output: {
		path: path.resolve(__dirname, 'public/javascripts'),
		filename: 'vue_plugins.js'
	}
}
