var http = require("http");

var results = [];
var amount = 0;

function sendRequest (i,url) {
    http.get(url,function(response){
        var totalData ="";
        response.on("data",function(data){
            totalData += data.toString();
        });
        response.on("end",function(){
            results[i] = totalData;
            amount++;
            if(amount === 3){
                print();
            }
        });
    });
}

for(var i= 0; i < 3; i++){
    sendRequest(i, process.argv[i + 2]);
}

function print(){
    for(var i in results){
        console.log(results[i]);
    }
}