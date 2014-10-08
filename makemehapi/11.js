/**
 * Created by gomezgarciad on 02/10/2014.
 */

var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));

var routeConfig = {
    path: '/upload',
    method: 'POST',
    config: {
        handler: handler,
        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        }
    }
}

server.route(routeConfig);

function handler(request, reply) {

    var body = '';
    request.payload.file.on('data', function (data){

        body += data
    })
    request.payload.file.on('end', function (){

        var ret = {
            description: request.payload.description,
            file: {
                data: body,
                filename: request.payload.file.hapi.filename,
                headers: request.payload.file.hapi.headers
            }
        }
        reply(JSON.stringify(ret));
    })

}

server.start();