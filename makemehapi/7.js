/**
 * Created by gomezgarciad on 02/10/2014.
 */
var options = {
    views: {
        path: '7',
        engines: {
            html: require('handlebars')
        },
        helpersPath: '7/helpers'
    }
};

var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080), options);




server.route({path: "/", method: 'GET',
    handler: {
        view: "index.html"
    }
});


server.start();