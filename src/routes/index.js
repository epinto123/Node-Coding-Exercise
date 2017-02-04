"use strict";

var include = require('include')(__dirname);
var taskController = include('src/controllers');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/person',
			config : {
				handler: taskController.get
			}
		},
		{
			method: 'GET',
			path: '/css/{file*}',
			handler: {
				directory: {
					path: 'css'
				}
			}
		},
		{
			method: 'GET',
			path: '/js/{file*}',
			handler: {
				directory: {
					path: 'js'
				}
			}
		}
    ];
}();
