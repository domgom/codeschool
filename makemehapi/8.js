/**
 * Created by gomezgarciad on 02/10/2014.
 */
var fs = require('fs');
var rotate = require('rot13-stream')(); //<- this does not make me hapi
var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));


server.route({path: '/', method:'GET', handler: handler});

function handler(request, reply) {
    reply(fs.createReadStream('./8/message.txt').pipe(rotate));

}


server.start();