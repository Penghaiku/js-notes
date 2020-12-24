var http = require('http')
var fs = require('fs')
var server = http.createServer()
//引入引擎操作
var template = require('art-template')
var wwwDir = 'D:/BaiduNetdiskDownload/www'	//等价于D:\\BaiduNetdiskDownload\\www
server.on ('request',function(req,res){
	var url = req.url
	fs.readFile('./template.html',function (err,data) {
		if (err) {
			return res.end('404 Not Found')
		}
		// 1.如何得到wwwDir目录列表中的文件名和目录名
		//	fs.readdir
		// 2.如何将得到的文件名和目录名替换到template.html中
		//	2.1 在template.html中需要替换的位置预留一个特殊的标记
		//	2.2 根据files生成需要的HTML内容
		// 只要你做了这两件事，那这个问题就得到解决了
		fs.readdir(wwwDir,function (err,files) {
			if (err) {
				return res.end(' Can not find www dir')
			}

			data = template.render(data.toString(),{
					title: 'haha',
					files: files

			})

		res.end(data)

		})

	})	
})

	

//绑定端口号
server.listen(3000,function(){
	console.log('running......')
})