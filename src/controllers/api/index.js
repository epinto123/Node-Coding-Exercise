"use strict";

var include = require('include')(__dirname);
var joi = require('joi');
var models = include('src/models')

function post(request, reply) {
	var person = new models().schema;

	joi.validate(request.payload, person, function (err, value) { 
		if (err) {
			console.log(value);
			console.log(err);
			reply('Person validation failed').code(400);
		} else {
			console.log(request.payload);
			reply('Persons added successfully').code(201);
		}
	});
};

module.exports = {
	post: post
};
