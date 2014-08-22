var http = require("http");
var url = require("url");

http.createServer(function(rq,rs){

    var urlData = url.parse(rq.url,true);
    var date = new Date(urlData.query.iso);
    var result;

    if(rq.method === "GET" && urlData.pathname === "/api/parsetime"){
        result = formatFullTime(date);
    }else if(rq.method === "GET" && urlData.pathname === "/api/unixtime"){
        result = formatUnixTime(date);
    }else{
        rs.writeHead(404)
        rs.end();
    }

    rs.writeHead(200, { 'Content-Type': 'application/json' })
    rs.end(JSON.stringify(result));
}).listen(process.argv[2]);


function formatFullTime(date) {
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };
}

function formatUnixTime(date) {
    return {
        "unixtime": date.getTime()
    };
}