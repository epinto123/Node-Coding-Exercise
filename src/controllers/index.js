"use strict";

function get(request, reply) {
	reply.view('index');
};

function post(request, reply) {
	reply.view('index');
};

module.exports = {
	get: get,
	post: post
};
