/**
 * Created by gomezgarciad on 26/08/2014.
 */
var duplexer = require("duplexer");
var through = require("through");

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer(input, counter);

    function write (row) {
        counts[row.country] = (counts[row.country] || 0) + 1;
    }
    function end () { counter.setCounts(counts) }
};