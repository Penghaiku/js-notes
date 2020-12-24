var http = require('http')
var fs = require('fs')
var server = http.createServer()
var wwwDir = 'D:/BaiduNetdiskDownload/www'	//等价于D:\\BaiduNetdiskDownload\\www
server.on ('request',function(req,res){
	var url = req.url
	var filePath='/index.html'
	if(url !== '/') {
		filePath = url
	}
	var realUrl = wwwDir + filePath
	fs.readFile(realUrl,function(err,data) {
		if (err) {
			return res.end('404 Not Found')
		}
		res.end(data)

	})

})

	

//绑定端口号
server.listen(3000,function(){
	console.log('running......')
})