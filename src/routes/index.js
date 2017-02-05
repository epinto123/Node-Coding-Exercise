"use strict";

var include = require('include')(__dirname);
var viewControllers = include('src/controllers');
var apiControllers = include('src/controllers/api');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/person',
			config : {
				handler: viewControllers.get
			}
		},
		{
			method: 'POST',
			path: '/api/person',
			config : {
				handler: apiControllers.post
			}
		},
		{
			method: 'GET',
			path: '/css/{file*}',
			handler: {
				directory: {
					path: 'src/css'
				}
			}
		},
		{
			method: 'GET',
			path: '/js/{file*}',
			handler: {
				directory: {
					path: 'src/js'
				}
			}
		},
		{
			method: 'GET',
			path: '/bower_components/angular/{file*}',
			handler: {
				directory: {
					path: 'bower_components/angular'
				}
			}
		},
		{
			method: 'GET',
			path: '/bower_components/jquery/{file*}',
			handler: {
				directory: {
					path: 'bower_components/jquery/dist'
				}
			}
		}
    ];
}();
