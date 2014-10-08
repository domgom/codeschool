/**
 * Created by gomezgarciad on 02/10/2014.
 */

 var options = {
    state: {
        cookies: {
            parse: true ,
            failAction: 'log'
        }
    }
};

var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.state('session', {
    path: '/{path*}',
    encoding : 'base64json',
    ttl: 10,
    domain: 'localhost'

});

server.route({path: '/set-cookie', method:'GET', handler: function (request, reply) {
    reply('success').state('session', {"key":"makemehapi"});
}});

server.route({path: '/check-cookie', method:'GET', handler: function (request, reply) {
    var session = request.state.session;
    if(session){
        reply(JSON.stringify({user : 'hapi'}));
    }else{
        reply("unauthorized");
    }
}});


server.start();