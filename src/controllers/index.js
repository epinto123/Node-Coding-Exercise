"use strict";

function get(request, reply) {
	reply.view('index');
};

module.exports = {
	get: get
};
