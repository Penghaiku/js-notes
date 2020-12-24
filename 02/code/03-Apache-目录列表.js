var http = require('http')
var fs = require('fs')
var server = http.createServer()
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

			var content=''
			files.forEach(function (item) {
				content += `

				<tr>
      				<td data-value="${item}/"><a class="icon dir" href="/D:/BaiduNetdiskDownload/www/${item}/">${item}/</a></td>
      				<td class="detailsColumn" data-value="0"></td>
      				<td class="detailsColumn" data-value="1602577785">2020/10/13 下午4:29:45</td>
 				 </tr>

				`
			})

		data = data.toString()
		// 普通的字符串解析替换，浏览器看到的结果就不一样了
		data = data.replace('^_^',content)
	//	console.log(data)
		res.end(data)

		})

	})	
})

	

//绑定端口号
server.listen(3000,function(){
	console.log('running......')
})