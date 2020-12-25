var fs = require("fs")
var os = require("os");
var path = require("path");
function readFile(filePath){
	fs.readFile(filePath,'utf-8',(err,data)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
	})
}
var contents = ['hello nodejs.'];
function writeFile(filePath){
	for(var i=0;i<contents.length;i++){
		//fs.writeFileSync(filePath,contents[i]+os.EOL);
		fs.appendFileSync(filePath,contents[i]+os.EOL);
	}
}
writeFile("test2.json");
readFile("test2.json");