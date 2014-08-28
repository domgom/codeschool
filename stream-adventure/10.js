/**
 * Created by gomezgarciad on 26/08/2014.
 */
var trumpet = require("trumpet");
var through = require("through");

var tr = trumpet();

tr.selectAll(".loud", function(elem){
  var st=  elem.createStream();
    st.pipe(through(function(data){
       this.queue((data+"").toUpperCase());
    })).pipe(st);
});

process.stdin.pipe(tr).pipe(process.stdout);
