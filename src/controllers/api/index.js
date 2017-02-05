"use strict";

function post(request, reply) {
    console.log(request.payload);
	return reply('Persons added successfully');
};

module.exports = {
	post: post
};
