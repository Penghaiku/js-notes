var template = require('art-template')


// var tplStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="utf-8">
// 	<title>{{ title }}</title>
// </head>
// <body>
// 	<p>大家好，我叫：{{ name }}</p>
// 	<p>我今年{{ age }}</p>
// 	<h1>我来自{{ province }}</h1>
// 	<p>我喜欢：{{ each hobbies}} {{ $value }} {{ /each }}</p>
// </body>
// </html>

// `
var fs = require('fs')

fs.readFile('./tql.html',function (err,data) {
	if (err) {
		return console.log('文件读取失败')
	}
	//	默认读取到的data是二进制数据
	//	而模板引擎的render方法需要接收的是字符串
	//	所以我们在这里需要把data二进制转为字符串，才可以给模板引擎使用




	var test = template.render(data.toString(),{
	title: '个人信息',
	name: 'jack',
	age: 18,
	province: '南昌市',
	hoppies: [
			'写代码',
			'唱歌',
			'打游戏'
		]

	})
	console.log(test)
})


