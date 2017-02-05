"use strict";

var include = require('include')(__dirname);
var joi = require('joi');
var models = include('src/models')

function post(request, reply) {
	console.log(request.payload);
	reply('Persons added successfully').code(201);
};

module.exports = {
	post: post
};
