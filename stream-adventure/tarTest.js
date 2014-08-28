var tar = require("tar"),
    fs  = require("fs");

/* Pluck a file from a tarball and write to stdout. */
function cat(tarfile, filename) {
    var reader = tar.Parse();
    reader.on("entry", function (header, stream) {
        if (filename == header.name) {
            stream.pipe(process.stdout);
        }
    });
    readable = fs.createReadStream(tarfile);
    readable.pipe(reader);
}

cat("secretz.tar.gz", "secretz/METADATA.txt");