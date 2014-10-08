/**
 * Created by gomezgarciad on 02/10/2014.
 */


var hapi = require('hapi');
var server = hapi.createServer('localhost',  Number(process.argv[2] || 8080));


server.route({path: '/proxy', method: 'GET',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});


server.start();