var a = require("./6filter.js")

a(process.argv[2],process.argv[3], function(err,list){
	if(err)
		return console.log(err)
	
	for(i in list){	
		console.log(list[i])
	}
	
});
