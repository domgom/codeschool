/**
 * Created by gomezgarciad on 27/08/2014.
 */
var crypto = require("crypto");
var decoder = crypto.createDecipher(process.argv[2], process.argv[3]);
var parser = require("tar").Parse();
var zlib = require("zlib");
var through = require("through");

parser.on("entry", function (e) {
    if (e.type !== "File") return;

    var md5 = crypto.createHash("md5", { encoding: "hex" });
    e.pipe(md5).pipe(through(null, end)).pipe(process.stdout);

    function end () { this.queue(' ' + e.path + '\n') }
});


process.stdin.pipe(decoder).pipe(zlib.createGunzip()).pipe(parser);
