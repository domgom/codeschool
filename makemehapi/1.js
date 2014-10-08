/**
 * Created by gomezgarciad on 02/10/2014.
 */


var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));


server.route({path: '/', method:'GET', handler: handler});

function handler(request, reply) {

    //request has all information
    //reply handles client response

    reply("Hello Hapi");
}


server.start();