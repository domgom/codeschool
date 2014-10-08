/**
 * Created by gomezgarciad on 02/10/2014.
 */

var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));
var joi = require('joi');

var routeConfig = {
    path: '/chickens/{breed}',
    method: 'GET',
    config: {
        handler: handler,
        validate: {
            params: {
                breed: joi.string().required()
            }
        }
    }

}

server.route(routeConfig);

function handler(request, reply) {
    reply('Hello');
}


server.start();