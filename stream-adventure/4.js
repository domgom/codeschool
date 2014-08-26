/**
 * Created by gomezgarciad on 26/08/2014.
 */
var through = require("through");

process.stdin.pipe(through(function write(buf){
    this.queue(buf.toString().toUpperCase());
})).pipe(process.stdout);


