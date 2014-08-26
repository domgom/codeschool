/**
 * Created by gomezgarciad on 26/08/2014.
 */

var split = require("split");
var through = require("through");
var i =0;

process.stdin.pipe(split()).pipe(
    through(function (line) {
        if (isEven()) {
            this.queue(line.toString().toLowerCase()+"\n");
        } else {
            this.queue(line.toString().toUpperCase()+"\n");
        }
    })
).pipe(process.stdout);

function isEven() {
   return i++ % 2===0;
}