/**
 * Created by gomezgarciad on 26/08/2014.
 */
var http = require("http");
var through = require("through");

http.createServer(function (req, res) {
    if (req.method === "POST") {
        req.pipe(through(function (data) {
            this.queue(data.toString().toUpperCase());
        })).pipe(res);
    } else res.end("send me a POST\n");
}).listen(process.argv[2]);