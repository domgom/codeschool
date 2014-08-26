/**
 * Created by gomezgarciad on 26/08/2014.
 */
var concat = require('concat-stream');

process.stdin.pipe(concat(function (data){
   process.stdout.end(data.toString().split("").reverse().join(""));
}));