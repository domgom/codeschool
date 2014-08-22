var fs = require("fs")
var path = require("path")

module.exports =
	function(dir,ext,callback){
		fs.readdir(dir, function(err,list){ 
			if(err)
				return callback(err)
				
			var filtered = new Array();
			for(i in list){	
				if(path.extname(list[i]) === "." + ext){
					filtered.push(list[i]);
				}
			}
			callback(null, filtered);
			
		})
	};
