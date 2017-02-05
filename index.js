'use strict';

var include = require('include')(__dirname);
var hapi = require('hapi');
var hoek = require('hoek');
var routes = include('src/routes');

var server = new hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(require('vision'), (err) => {

    hoek.assert(!err, err);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'src/templates'
    });
});

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    // Add all the routes within the routes folder
    for (var route in routes) {
        server.route(routes[route]);
    }
    
    server.start((err) => {
        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });
});
