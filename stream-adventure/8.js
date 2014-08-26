/**
 * Created by gomezgarciad on 26/08/2014.
 */
var request = require("request");

process.stdin.pipe(request.post("http://beep.boop:80/")).pipe(process.stdout);