/**
 * Created by gomezgarciad on 26/08/2014.
 */


var split = require("split");
var through = require("through");

process.stdin.pipe(split()).pipe(
    through(function (line) {
        console.log(line.toString());
    })
);
