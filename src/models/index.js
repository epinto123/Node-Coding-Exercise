"use strict";

var joi = require('joi');

function PersonModel(){
	this.schema = {
		firstName: joi.string().required(),
		lastName: joi.string().required(),
        email: joi.string().email()
	};
};

module.exports = PersonModel;
