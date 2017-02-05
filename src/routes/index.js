"use strict";

var include = require('include')(__dirname);
var viewControllers = include('src/controllers');
var apiControllers = include('src/controllers/api');
var models = include('src/models')

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/',
			config : {
				handler: viewControllers.get
			}
		},
		{
			method: 'POST',
			path: '/api/person',
			config : {
				handler: apiControllers.post,
				validate: {
					payload: new models().schema
				}
			}
		},
		{
			method: 'GET',
			path: '/css/{file*}',
			handler: {
				directory: {
					path: 'node_modules/bootstrap/dist/css'
				}
			}
		},
		{
			method: 'GET',
			path: '/js/{file*}',
			handler: {
				directory: {
					path: 'node_modules/bootstrap/dist/js'
				}
			}
		},
		{
			method: 'GET',
			path: '/jquery/{file*}',
			handler: {
				directory: {
					path: 'node_modules/jquery/dist'
				}
			}
		}
    ];
}();
