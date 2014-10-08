/**
 * Created by gomezgarciad on 02/10/2014.
 */

var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));
var Joi = require('joi');

var routeConfig = {
    path: '/login',
    method: 'POST',
    config: {
        handler: handler,
        validate: {
            payload: Joi.object({
                username: Joi.when('isGuest', { is: false, then: Joi.required() }),
                password: Joi.string().alphanum(),
                isGuest: Joi.boolean(),
                accessToken: Joi.string().alphanum()
            }).options({allowUnknown: true}).without('password', 'accessToken')
        }
    }
}

server.route(routeConfig);

function handler(request, reply) {
    reply('login successful');
}


server.start();