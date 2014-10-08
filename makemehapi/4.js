/**
 * Created by gomezgarciad on 02/10/2014.
 */


var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));


server.route({path: '/foo/bar/baz/{param}', method: 'GET',
    handler: {
        directory: { path: './4/' }
    }
});


server.start();