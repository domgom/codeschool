/**
 * Created by gomezgarciad on 27/08/2014.
**/

var combine = require("stream-combiner");
var split = require ("split");
var through = require ("through");
var gzip = require("zlib").createGzip();

module.exports = function () {

    //Stream to read JSON
    var readJson = through(function(line){
        if(line!= "") {
            var obj = JSON.parse(line);
            this.queue(obj);
        }
    });

    //Stream to classify books by genres
    var current;
    var groupInGenres = through(function write(obj){
        if (obj.type === 'genre') {
            if (current) {
                this.queue(JSON.stringify(current) + '\n');
            }
            current = { name: obj.name, books: [] };
        }
        else if (obj.type === 'book') {
            current.books.push(obj.name);
        }
    },function end () {
        if (current) {
            this.queue(JSON.stringify(current) + '\n');
        }
        this.queue(null);
    });


    return combine(
        // read newline-separated json,
        split(),
        readJson,
        // group books into genres,
        groupInGenres,
        // then gzip the output
        gzip
    );
}

